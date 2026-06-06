import clientPromise from "./mongodb";

export async function buildKnowledgeContext(): Promise<string> {
  try {
    const client = await clientPromise;
    const db = client.db();

    const [
      serviceStats,
      subscriptionStats,
      oneOffStats,
      recentServices,
      communities,
      binPrices,
      wastePrices,
    ] = await Promise.all([
      // Overall service status breakdown
      db
        .collection("services")
        .aggregate([
          { $match: { delete: false } },
          {
            $group: {
              _id: "$status",
              count: { $sum: 1 },
            },
          },
        ])
        .toArray(),

      // Subscription-specific stats
      db
        .collection("services")
        .aggregate([
          {
            $match: {
              delete: false,
              serviceType: "SUBSCRIPTION",
              status: "ACTIVATED",
            },
          },
          {
            $group: {
              _id: "$paymentStatus",
              count: { $sum: 1 },
              totalRevenue: { $sum: "$totalAmount" },
            },
          },
        ])
        .toArray(),

      // One-off pickup stats
      db
        .collection("services")
        .aggregate([
          {
            $match: {
              delete: false,
              serviceType: "ONE_OFF_PICKUP",
            },
          },
          {
            $group: {
              _id: "$status",
              count: { $sum: 1 },
            },
          },
        ])
        .toArray(),

      // Payment method breakdown for active services
      db
        .collection("services")
        .aggregate([
          {
            $match: {
              delete: false,
              status: "ACTIVATED",
              paymentStatus: "SUCCESS",
            },
          },
          {
            $group: {
              _id: "$paymentMethod",
              count: { $sum: 1 },
            },
          },
        ])
        .toArray(),

      // Active communities
      db
        .collection("communities")
        .find({}, { projection: { name: 1, _id: 0 } })
        .toArray(),

      // Bin pricing plans
      db
        .collection("binprices")
        .find(
          { status: "ACTIVATED" },
          {
            projection: {
              price: 1,
              currency: 1,
              planDuration: 1,
              type: 1,
              _id: 0,
            },
          },
        )
        .limit(20)
        .toArray(),

      // Waste volume pricing
      db
        .collection("wastevolumeprices")
        .find(
          { active: true, delete: false },
          {
            projection: {
              minVolume: 1,
              maxVolume: 1,
              price: 1,
              locationType: 1,
              unit: 1,
              _id: 0,
            },
          },
        )
        .toArray(),
    ]);

    // Process service stats
    const statusMap: Record<string, number> = {};
    serviceStats.forEach((s) => {
      statusMap[s._id] = s.count;
    });

    const totalActive = statusMap["ACTIVATED"] || 0;
    const totalPending = statusMap["PENDING"] || 0;
    const totalCompleted = statusMap["COMPLETED"] || 0;
    const totalCancelled = statusMap["CANCELLED"] || 0;
    const totalAll = Object.values(statusMap).reduce((a, b) => a + b, 0);

    // Process subscription stats
    const subPaidCount =
      subscriptionStats.find((s) => s._id === "SUCCESS")?.count || 0;
    const subPaidRevenue =
      subscriptionStats.find((s) => s._id === "SUCCESS")?.totalRevenue || 0;

    // Process one-off stats
    const oneOffMap: Record<string, number> = {};
    oneOffStats.forEach((s) => {
      oneOffMap[s._id] = s.count;
    });

    // Process payment methods
    const paymentMap: Record<string, number> = {};
    recentServices.forEach((s) => {
      paymentMap[s._id] = s.count;
    });

    // Format communities
    const communityNames =
      communities.length > 0
        ? communities
            .map((c) => c.name)
            .filter(Boolean)
            .join(", ")
        : "Sorie Town, Albert Academy, Kroo Town, Sanders Brook, Central, Murray Town, Brookfields";

    // Format bin prices
    const binPriceList =
      binPrices.length > 0
        ? binPrices
            .filter((b) => b.planDuration)
            .map((b) => `${b.planDuration}: ${b.price} ${b.currency || "SLE"}`)
            .join("\n  ")
        : "1 Month: 200 SLE\n  3 Months: 585 SLE (save 2.5%)\n  12 Months: 2,280 SLE (save 5%)";

    // Format waste volume prices
    const householdPrices = wastePrices.filter(
      (w) => w.locationType === "HOUSEHOLD",
    );
    const businessPrices = wastePrices.filter(
      (w) => w.locationType === "BUSINESS",
    );

    const formatVolumePrices = (prices: typeof wastePrices) =>
      prices
        .map((p) => `${p.minVolume}-${p.maxVolume} ${p.unit}: ${p.price} SLE`)
        .join("\n  ");

    // Build context document
    const context = `
## LIVE DORTIBOX PLATFORM DATA
Last updated: ${new Date().toISOString()}

### Platform Statistics
- Total services (all time): ${totalAll}
- Active subscriptions: ${totalActive}
- Pending services: ${totalPending}
- Completed services: ${totalCompleted}
- Cancelled services: ${totalCancelled}

### Active Paid Subscriptions
- Paid and active: ${subPaidCount}
- Total revenue from active subscriptions: ${subPaidRevenue.toLocaleString()} SLE

### One-Off Pickup Requests
- Active: ${oneOffMap["ACTIVATED"] || 0}
- Completed: ${oneOffMap["COMPLETED"] || 0}
- Pending: ${oneOffMap["PENDING"] || 0}

### Payment Methods Used (Active Services)
${
  Object.entries(paymentMap)
    .map(([method, count]) => `- ${method}: ${count} services`)
    .join("\n") || "- Orange Money and Afrimoney accepted"
}

### Service Coverage — Active Communities
${communityNames}
Coverage area: Block 6, Central Business District, Freetown, Sierra Leone

### Subscription Plans & Pricing
  ${binPriceList}

### Waste Volume Pricing
Household:
  ${householdPrices.length > 0 ? formatVolumePrices(householdPrices) : "Contact us for household pricing"}

Business / Commercial:
  ${businessPrices.length > 0 ? formatVolumePrices(businessPrices) : "Contact us for commercial pricing"}

### Service Types Available
- SUBSCRIPTION: Regular scheduled waste collection (weekly, bi-weekly, daily)
- ONE_OFF_PICKUP: Single one-time pickup request
- RECURRING: Recurring scheduled service

### Pickup Types
- DOMESTIC: Household residential collection
- COMMERCIAL: Business and commercial collection
- INSTITUTIONS: Schools, NGOs, and institutional collection

### Payment Methods Accepted
- Orange Money (via USSD: *715*380#)
- Afrimoney (via USSD: *715*380#)
- Payment status tracked as: PENDING → SUCCESS

### How to Register
1. Download the DortiBox app (Google Play or App Store)
2. Register with your Sierra Leone phone number
3. Select your address and bin size
4. Choose your subscription plan
5. Pay via Orange Money or Afrimoney
- No smartphone? Dial *715*380# from any Sierra Leonean mobile number

### Contact Information
- Phone: +232 76 242 328
- Email: info@fwtsl.net
- Address: BSI Offices, 55A Wilkinson Road, Third Floor, Freetown
- USSD: *715*380#
- Website: dortibox.com
`.trim();

    return context;
  } catch (err) {
    console.error("Knowledge base error:", err);

    // Static fallback if DB is unreachable
    return `
## DORTIBOX PLATFORM DATA (Fallback)

### Service Coverage
Communities: Sorie Town, Albert Academy, Kroo Town, Sanders Brook, Central, Murray Town, Brookfields
Coverage area: Block 6, Central Business District, Freetown

### Subscription Plans
- 1 Month: 200 SLE (4 pickups)
- 3 Months: 585 SLE (save 2.5%)
- 12 Months: 2,280 SLE (save 5%)

### Service Types
- Regular Subscription: Scheduled weekly pickups
- One-Off Pickup: Single pickup request

### Pickup Types
- Domestic (Household)
- Commercial (Business)
- Institutional (Schools, NGOs)

### Payment Methods
- Orange Money (USSD: *715*380#)
- Afrimoney (USSD: *715*380#)

### How to Register
1. Download DortiBox app (Google Play or App Store)
2. Register with your phone number
3. Choose your plan and pay via mobile money
- No smartphone? Dial *715*380#

### Contact
- Phone: +232 76 242 328
- Email: info@fwtsl.net
- USSD: *715*380#
`.trim();
  }
}
