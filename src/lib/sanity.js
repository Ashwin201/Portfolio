import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "qbrjz6ic",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});
