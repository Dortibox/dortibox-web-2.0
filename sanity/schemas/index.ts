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
];
