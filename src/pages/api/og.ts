import type { APIRoute } from "astro";
import { html } from "satori-html";
import { readFile } from "fs/promises";
import satori from "satori";

export const prerender = false;

export const GET: APIRoute = async ({ request }: { request: Request }) => {
  const { searchParams } = new URL(request.url);

  const title = searchParams.has("title")
    ? searchParams.get("title")?.slice(0, 100)
    : "Portfolio";

  const icon64 = await readFile(`${process.cwd()}/public/icon.webp`).then(
    (data) => `data:image/png;base64,${data.toString("base64")}`
  );

  const markup = html(`
  <div
    style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: rgb(29 35 42); font-size: 72px; font-weight: 600; color: white"
  >
    <img src="${icon64}" width="300px" height="300px" style="border-radius:360px">
    <div style="width: 100%; padding: 12px 24px 0 24px; display: flex; justify-content: center">
      <span>
        ${title}
      </span>
    </div>
  </div>`);

  const fontFilePath = `${process.cwd()}/public/Inter-Regular.ttf`;

  const fontFile = await readFile(fontFilePath);

  const svg: string = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: fontFile,
        style: "normal",
      },
    ],
  });

  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
};
