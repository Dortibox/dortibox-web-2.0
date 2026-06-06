// Singletons
import { siteSettings } from "./singletons/siteSettings";
import { homePage } from "./singletons/homePage";
import { aboutPage } from "./singletons/aboutPage";
import { impactPage } from "./singletons/impactPage";
import { partnersPage } from "./singletons/partnersPage";

// Documents
import { teamMember } from "./documents/teamMember";
import { blogPost } from "./documents/blogPost";
import { customer } from "./documents/customer";
import { partner } from "./documents/partner";
import { testimonial } from "./documents/testimonial";
import { legalPage } from "./documents/legalPage";
import { faqItem } from "./documents/faqItem";
import { galleryItem } from "./documents/galleryItem";

export const schemaTypes = [
  // Singletons first (appear at top of Studio sidebar)
  siteSettings,
  homePage,
  aboutPage,
  impactPage,
  partnersPage,

  // Documents
  teamMember,
  blogPost,
  customer,
  partner,
  testimonial,
  legalPage,
  faqItem,
  galleryItem,
];
