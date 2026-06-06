import clientPromise from "./mongodb";

export async function buildKnowledgeContext(): Promise<string> {
  try {
    const client = await clientPromise;
    const db = client.db();

    // Run all queries in parallel
    const [serviceStats, activeServices, frequencies, zones] =
      await Promise.all([
        // Total subscriber counts
        db
          .collection("services")
          .aggregate([
            {
              $group: {
                _id: "$status",
                count: { $sum: 1 },
              },
            },
          ])
          .toArray(),

        // Active services with bin sizes and frequencies
        db
          .collection("services")
          .aggregate([
            { $match: { status: "active" } },
            {
              $group: {
                _id: {
                  binSize: "$binSize",
                  frequencyId: "$frequencyId",
                },
                count: { $sum: 1 },
              },
            },
            { $limit: 20 },
          ])
          .toArray(),

        // Available frequencies
        db
          .collection("frequencies")
          .find(
            {},
            {
              projection: {
                name: 1,
                description: 1,
                timesPerWeek: 1,
                price: 1,
              },
            },
          )
          .toArray(),

        // Active zones/communities
        db
          .collection("zones")
          .find({ active: true }, { projection: { name: 1, code: 1, ward: 1 } })
          .toArray(),
      ]);

    // Calculate totals
    const totalActive =
      serviceStats.find((s) => s._id === "active")?.count || 0;
    const totalPending =
      serviceStats.find((s) => s._id === "pending")?.count || 0;
    const totalAll = serviceStats.reduce((sum, s) => sum + s.count, 0);

    // Format zones
    const communityNames =
      zones.length > 0
        ? zones.map((z) => z.name).join(", ")
        : "Sorie Town, Albert Academy, Kroo Town, Sanders Brook, Central, Murray Town, Brookfields";

    // Format frequencies
    const frequencyList =
      frequencies.length > 0
        ? frequencies
            .map(
              (f) =>
                `${f.name}: ${f.description || ""} ${f.price ? `(${f.price} SLE)` : ""}`,
            )
            .join("\n  ")
        : "Weekly (1x per week), Bi-weekly (2x per week), Daily (6x per week)";

    // Format bin size distribution
    const binSizeMap: Record<string, number> = {};
    activeServices.forEach((s) => {
      const size = s._id?.binSize || "Unknown";
      binSizeMap[size] = (binSizeMap[size] || 0) + s.count;
    });
    const binSizeList = Object.entries(binSizeMap)
      .map(([size, count]) => `${size}: ${count} active subscriptions`)
      .join(", ");

    // Build the context document
    const context = `
## LIVE DORTIBOX PLATFORM DATA
Last updated: ${new Date().toISOString()}

### Subscriber Statistics
- Total registered services: ${totalAll}
- Active subscriptions: ${totalActive}
- Pending subscriptions: ${totalPending}

### Service Coverage
- Active communities: ${communityNames}
- Coverage area: Block 6, Central Business District, Freetown

### Available Bin Sizes
${binSizeList || "120 Ltr, 240 Ltr, 660 Ltr, 1000 Ltr"}

### Collection Frequencies
  ${frequencyList}

### Subscription Plans
- 1 Month: 200 SLE (4 pickups)
- 3 Months: 585 SLE (save 2.5%)
- 12 Months: 2,280 SLE (save 5%)

### Payment Methods
- Orange Money (via USSD: *715*380#)
- Afrimoney (via USSD: *715*380#)

### Contact Information
- Phone: +232 76 242 328
- Email: info@fwtsl.net
- Address: BSI Offices, 55A Wilkinson Road, Third Floor, Freetown
- USSD (no smartphone needed): *715*380#

### App Download
- Google Play: Available
- App Store: Available
- Website: dortibox.com
`.trim();

    return context;
  } catch (err) {
    console.error("Knowledge base error:", err);

    // Fallback static knowledge if DB is unreachable
    return `
## DORTIBOX PLATFORM DATA (Static Fallback)

### Service Coverage
- Communities: Sorie Town, Albert Academy, Kroo Town, Sanders Brook, Central, Murray Town, Brookfields
- Coverage area: Block 6, Central Business District, Freetown

### Subscription Plans
- 1 Month: 200 SLE (4 pickups per month)
- 3 Months: 585 SLE (save 2.5%)
- 12 Months: 2,280 SLE (save 5%)

### Bin Sizes Available
- 120 Ltr (Standard household)
- 240 Ltr (Large household / small business)
- 660 Ltr (Commercial)
- 1000 Ltr (Large commercial)

### Collection Frequencies
- Weekly (1x per week)
- Bi-weekly (2x per week)
- Daily (6x per week)

### Payment Methods
- Orange Money (via USSD: *715*380#)
- Afrimoney (via USSD: *715*380#)

### Contact Information
- Phone: +232 76 242 328
- Email: info@fwtsl.net
- Address: BSI Offices, 55A Wilkinson Road, Third Floor, Freetown
- USSD (no smartphone needed): *715*380#
`.trim();
  }
}
