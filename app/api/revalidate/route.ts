import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

// Map Sanity document types to cache tags
const typeToTags: Record<string, string[]> = {
  siteSettings: ["siteSettings"],
  homePage: ["homePage"],
  aboutPage: ["aboutPage"],
  impactPage: ["impactPage", "customer"],
  partnersPage: ["partnersPage", "partner"],
  teamMember: ["teamMember"],
  blogPost: ["blogPost"],
  customer: ["customer"],
  partner: ["partner"],
  testimonial: ["testimonial"],
  legalPage: ["legalPage"],
};

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const documentType = body?._type as string;

    const tags = typeToTags[documentType];
    if (!tags) {
      return NextResponse.json(
        { message: `Unknown document type: ${documentType}` },
        { status: 400 }
      );
    }

    for (const tag of tags) {
      revalidateTag(tag);
    }

    return NextResponse.json({
      revalidated: true,
      tags,
      documentType,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Error processing webhook", error: String(err) },
      { status: 500 }
    );
  }
}
