/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly NOTION_ACCESS_TOKEN: string;
    readonly NOTION_BLOG_DB_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}