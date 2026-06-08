import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
  studioHost: "dortibox",
  deployment: {
    appId: process.env.NEXT_PUBLIC_SANITY_APP_ID || "q78dc05lpyphgj893589ng4y",
  },
});
