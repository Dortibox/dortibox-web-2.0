import { client } from "./client";

// ─── Site Settings ────────────────────────────────────────────────────────────
export async function getSiteSettings() {
  try {
    return await client.fetch(
      `*[_type == "siteSettings"][0]{
        siteName,
        logo,
        ussdCode,
        appStoreUrl,
        playStoreUrl,
        socialLinks,
        partnerLogos[]{
          name,
          logo,
          url
        },
        footerTagline,
        contactEmail,
        contactPhone,
        address
      }`,
      {},
      { next: { tags: ["siteSettings"] } },
    );
  } catch {
    return null;
  }
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export async function getHomePage() {
  return client.fetch(
    `*[_type == "homePage"][0]{
      hero{
        headline,
        subheading,
        ctaPrimaryLabel,
        ctaPrimaryUrl,
        ctaSecondaryLabel,
        ctaSecondaryUrl,
        backgroundImage
      },
      audienceSegments[]{
        label,
        description,
        icon,
        linkTo
      },
      howItWorks[]{
        stepNumber,
        title,
        description,
        icon
      },
      impactStats[]{
        number,
        suffix,
        label,
        description
      },
      ussdCallout{
        headline,
        body,
        image
      },
      featuredTestimonials[]->{
        quote,
        name,
        role,
        community,
        customerType,
        photo
      }
    }`,
    {},
    { next: { tags: ["homePage"] } },
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────
export async function getAboutPage() {
  try {
    return await client.fetch(
      `*[_type == "aboutPage"][0]{
        hero{ headline, subheading, image },
        story,
        vision,
        mission,
        values[]{ title, description, icon },
        ceoSection{
          name,
          role,
          photo,
          quote,
          body,
          linkedin
        }
      }`,
      {},
      { next: { tags: ["aboutPage"] } },
    );
  } catch {
    return null;
  }
}

// FAQ
export async function getFaqs() {
  try {
    return await client.fetch(
      `*[_type == "faqItem"] | order(featured desc, order asc){
        _id,
        question,
        answer,
        category,
        featured
      }`,
      {},
      { next: { tags: ["faqItem"] } },
    );
  } catch {
    return [];
  }
}

// ---- GALLERY
export async function getGalleryItems() {
  try {
    return await client.fetch(
      `*[_type == "galleryItem"] | order(featured desc, order asc){
        _id,
        title,
        description,
        image,
        category,
        featured
      }`,
      {},
      { next: { tags: ["galleryItem"] } }
    );
  } catch {
    return [];
  }
}

// ─── Team ─────────────────────────────────────────────────────────────────────
export async function getTeamMembers() {
  return client.fetch(
    `*[_type == "teamMember"] | order(order asc){
      _id,
      name,
      role,
      bio,
      photo,
      linkedIn,
      isLeadership
    }`,
    {},
    { next: { tags: ["teamMember"] } },
  );
}

// ─── Impact Page ──────────────────────────────────────────────────────────────
// export async function getImpactPage() {
//   return client.fetch(
//     `*[_type == "impactPage"][0]{
//       hero{ headline, subheading, image },
//       keyMetrics[]{ number, suffix, label, description },
//       impactStories[]{ title, body, image, community },
//       featuredCustomers[]->{
//         _id,
//         name,
//         logo,
//         description,
//         type,
//         location,
//         testimonialQuote,
//         featured
//       }
//     }`,
//     {},
//     { next: { tags: ["impactPage", "customer"] } },
//   );
// }

// ─── Blog ─────────────────────────────────────────────────────────────────────
export async function getBlogPosts(limit?: number) {
  try {
    const limitClause = limit ? `[0...${limit}]` : "";
    return await client.fetch(
      `*[_type == "blogPost"] | order(publishedAt desc)${limitClause}{
        _id,
        title,
        slug,
        publishedAt,
        category,
        coverImage,
        excerpt
      }`,
      {},
      { next: { tags: ["blogPost"] } },
    );
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishedAt,
      category,
      coverImage,
      excerpt,
      body,
      seo
    }`,
    { slug },
    { next: { tags: ["blogPost"] } },
  );
}

export async function getBlogSlugs() {
  return client.fetch(
    `*[_type == "blogPost"]{ "slug": slug.current }`,
    {},
    { next: { tags: ["blogPost"] } },
  );
}

// ─── Partners ─────────────────────────────────────────────────────────────────
export async function getPartnersPage() {
  return client.fetch(
    `{
      "page": *[_type == "partnersPage"][0]{
        hero{ headline, subheading },
        partnershipTypes[]{ title, description, benefits },
        cta{ headline, body, buttonText, buttonLink }
      },
      "partners": *[_type == "partner"] | order(order asc){
        _id,
        name,
        logo,
        website,
        type,
        description,
        featured
      }
    }`,
    {},
    { next: { tags: ["partnersPage", "partner"] } },
  );
}

// ─── Legal Pages ──────────────────────────────────────────────────────────────
export async function getLegalPageBySlug(slug: string) {
  return client.fetch(
    `*[_type == "legalPage" && slug.current == $slug][0]{
      title,
      slug,
      lastUpdated,
      body
    }`,
    { slug },
    { next: { tags: ["legalPage"] } },
  );
}

export async function getLegalSlugs() {
  return client.fetch(
    `*[_type == "legalPage"]{ "slug": slug.current }`,
    {},
    { next: { tags: ["legalPage"] } },
  );
}
export async function getPartners() {
  try {
    return await client.fetch(
      `*[_type == "partner"] | order(order asc){
        _id,
        name,
        logo,
        website,
        type,
        description,
        featured
      }`,
      {},
      { next: { tags: ["partner"] } },
    );
  } catch {
    return [];
  }
}

export async function getImpactPage() {
  try {
    return await client.fetch(
      `*[_type == "impactPage"][0]{
        hero{ headline, subheading, image },
        keyMetrics[]{ number, suffix, label, description },
        impactStories[]{ title, body, image, community },
        featuredCustomers[]->{
          _id,
          name,
          logo,
          description,
          type,
          location,
          testimonialQuote,
          featured
        }
      }`,
      {},
      { next: { tags: ["impactPage", "customer"] } },
    );
  } catch {
    return null;
  }
}

export async function getCommunities() {
  try {
    return await client.fetch(
      `*[_type == "impactPage"][0]{
        communities
      }`,
      {},
      { next: { tags: ["impactPage"] } },
    );
  } catch {
    return null;
  }
}
