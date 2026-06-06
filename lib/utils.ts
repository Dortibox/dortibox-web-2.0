import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a date string to human-readable */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Capitalize first letter */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Category label map for blog posts */
export const categoryLabels: Record<string, string> = {
  news: "News",
  impact: "Impact",
  community: "Community",
  product: "Product Update",
  press: "Press Release",
};

/** Customer type label map */
export const customerTypeLabels: Record<string, string> = {
  household: "Household",
  community: "Community",
  business: "Business",
  school: "School",
  institution: "Institution / NGO",
};
