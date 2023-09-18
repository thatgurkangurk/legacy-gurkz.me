import { z } from "zod";

export const postSchema = z.object({
  id: z.string(),
  slug: z.string().toLowerCase(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
});

export type BlogPost = z.infer<typeof postSchema>;
