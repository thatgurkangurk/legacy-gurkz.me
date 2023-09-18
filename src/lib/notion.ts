import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import type { BlogPost } from "./types/schema";

type Notion = {
  client: Client;
  n2m: NotionToMarkdown;
};

export function createNotion({ auth }: { auth: string | undefined }): Notion {
  const client = new Client({
    auth,
  });
  const n2m = new NotionToMarkdown({ notionClient: client });

  return {
    client,
    n2m,
  };
}

function transformPageToPost(page: any): BlogPost {
  return {
    id: page.id,
    title: page.properties.Title.title[0].plain_text,
    description: page.properties.Description.rich_text[0].plain_text,
    date: page.properties.Updated.last_edited_time,
    slug: page.properites.Slug.formula.string,
  };
}

export async function getPublishedBlogPosts(
  notion: Notion
): Promise<BlogPost[]> {
  const database = import.meta.env.NOTION_BLOG_DB_ID ?? "";

  const response = await notion.client.databases.query({
    database_id: database,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Created",
        direction: "descending",
      },
    ],
  });

  return response.results.map((res) => {
    // transform response into blog post
    return transformPageToPost(res);
  });
}
