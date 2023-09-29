import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(JSON.stringify({ "m.server": "matrix.gurkz.me:443" }));
};
