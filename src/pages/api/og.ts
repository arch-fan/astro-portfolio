import type { APIRoute } from "astro";
import { html } from "satori-html";
import { readFile } from "fs/promises";
import satori from "satori";
import sharp from "sharp";

export const prerender = false;

export const GET: APIRoute = async ({ request }: { request: Request }) => {
  const { searchParams } = new URL(request.url);

  const title = searchParams.has("title")
    ? searchParams.get("title")?.slice(0, 100)
    : "Portfolio";

  const icon = await fetch("https://api.github.com/users/arch-fan")
    .then((res) => res.json())
    .then((data) => data.avatar_url);

  const markup = html(`
  <div
    style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: rgb(29 35 42); font-size: 72px; font-weight: 600; color: white"
  >
    <img src="${icon}" width="300px" height="300px" style="border-radius:360px">
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

  const png = sharp(Buffer.from(svg)).png();
  const response = await png.toBuffer();

  return new Response(response, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
};
