import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify({ "m.homeserver": { base_url: "https://matrix.gurkz.me" } })
  );
};
