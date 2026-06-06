// import { defineConfig } from "sanity";
// import { structureTool } from "sanity/structure";
// import { visionTool } from "@sanity/vision";
// import { schemaTypes } from "./sanity/schemas";

// console.log("Sanity Studio configuration loaded");
// const singletonTypes = new Set([
//   "siteSettings",
//   "homePage",
//   "aboutPage",
//   "impactPage",
//   "partnersPage",
// ]);

// export default defineConfig({
//   name: "dortibox-studio",
//   title: "DortiBox CMS",
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || "xkmfgijf",
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   plugins: [
//     structureTool({
//       structure: (S) =>
//         S.list()
//           .title("Content")
//           .items([
//             // ── Pages (singletons) ──────────────────────────────
//             S.listItem()
//               .title("Pages")
//               .child(
//                 S.list()
//                   .title("Pages")
//                   .items([
//                     S.listItem()
//                       .title("Home Page")
//                       .child(
//                         S.document()
//                           .schemaType("homePage")
//                           .documentId("homePage"),
//                       ),
//                     S.listItem()
//                       .title("About Page")
//                       .child(
//                         S.document()
//                           .schemaType("aboutPage")
//                           .documentId("aboutPage"),
//                       ),
//                     S.listItem()
//                       .title("Impact Page")
//                       .child(
//                         S.document()
//                           .schemaType("impactPage")
//                           .documentId("impactPage"),
//                       ),
//                     S.listItem()
//                       .title("Partners Page")
//                       .child(
//                         S.document()
//                           .schemaType("partnersPage")
//                           .documentId("partnersPage"),
//                       ),
//                   ]),
//               ),

//             // ── Global Settings ────────────────────────────────
//             S.listItem()
//               .title("Site Settings")
//               .child(
//                 S.document()
//                   .schemaType("siteSettings")
//                   .documentId("siteSettings"),
//               ),

//             S.divider(),

//             // ── Content Records ────────────────────────────────
//             S.documentTypeListItem("blogPost").title("Blog Posts"),
//             S.documentTypeListItem("teamMember").title("Team Members"),
//             S.documentTypeListItem("customer").title("Customers"),
//             S.documentTypeListItem("partner").title("Partners"),
//             S.documentTypeListItem("testimonial").title("Testimonials"),
//             S.documentTypeListItem("legalPage").title("Legal Pages"),
//           ]),
//     }),
//     visionTool(), // GROQ query explorer — useful during development
//   ],
//   schema: {
//     types: schemaTypes,
//     // Prevent singleton types from being created more than once
//     templates: (templates) =>
//       templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
//   },
//   document: {
//     // Remove "New document" action for singletons
//     actions: (input, context) =>
//       singletonTypes.has(context.schemaType)
//         ? input.filter(
//             ({ action }) =>
//               action &&
//               ["publish", "discardChanges", "restore"].includes(action),
//           )
//         : input,
//   },
// });

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const singletonTypes = new Set([
  "siteSettings",
  "homePage",
  "aboutPage",
  "impactPage",
  "partnersPage",
]);

export default defineConfig({
  name: "dortibox-studio",
  title: "DortiBox CMS",
  projectId: "xkmfgijf",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Pages (singletons)
            S.listItem()
              .title("Pages")
              .child(
                S.list()
                  .title("Pages")
                  .items([
                    S.listItem()
                      .title("Home Page")
                      .child(
                        S.document()
                          .schemaType("homePage")
                          .documentId("homePage"),
                      ),
                    S.listItem()
                      .title("About Page")
                      .child(
                        S.document()
                          .schemaType("aboutPage")
                          .documentId("aboutPage"),
                      ),
                    S.listItem()
                      .title("Impact Page")
                      .child(
                        S.document()
                          .schemaType("impactPage")
                          .documentId("impactPage"),
                      ),
                    S.listItem()
                      .title("Partners Page")
                      .child(
                        S.document()
                          .schemaType("partnersPage")
                          .documentId("partnersPage"),
                      ),
                  ]),
              ),

            // Global Settings
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings"),
              ),

            S.divider(),

            // Content Records
            S.documentTypeListItem("blogPost").title("Blog Posts"),
            S.documentTypeListItem("teamMember").title("Team Members"),
            S.documentTypeListItem("customer").title("Customers"),
            S.documentTypeListItem("partner").title("Partners"),
            S.documentTypeListItem("testimonial").title("Testimonials"),
            S.documentTypeListItem("legalPage").title("Legal Pages"),
            S.documentTypeListItem("faqItem").title("FAQ Items"),
            S.documentTypeListItem("galleryItem").title("Gallery"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(
            ({ action }) =>
              action &&
              ["publish", "discardChanges", "restore"].includes(action),
          )
        : input,
  },
});
