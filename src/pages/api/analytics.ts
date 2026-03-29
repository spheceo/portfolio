import type { APIRoute } from "astro";
import { buttonClick, pageView } from "../../lib/client";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const { type, path, name } = await request.json();

  if (type === "page_view") {
    await pageView(path);
  }

  if (type === "button_click") {
    await buttonClick(path, name);
  }

  return Response.json({ ok: true });
};
