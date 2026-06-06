// import { createClient } from "next-sanity";

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
//   useCdn: false, // ISR handles caching — CDN disabled for fresh data
//   token: process.env.SANITY_API_READ_TOKEN,
//   stega: {
//     enabled: process.env.NODE_ENV === "development",
//     studioUrl: "/studio",
//   },
// });
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
  ...(process.env.SANITY_API_READ_TOKEN
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : {}),
});
