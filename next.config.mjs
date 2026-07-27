/**
 * Next.js configuration.
 *
 * The site is exported as a fully static bundle (`output: 'export'`) so it can be
 * hosted anywhere — GitHub Pages, S3, Netlify, Vercel, or any static CDN.
 *
 * `basePath` / `assetPrefix` are only applied for the GitHub Pages preview
 * deployment (served from https://<user>.github.io/<repo>/). For a production
 * deploy on a custom domain, set NEXT_PUBLIC_BASE_PATH="" (the default).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  // Static export can't use the Next.js image optimization server, so serve
  // images as-is. Swap to a loader / remote optimizer when moving to a server host.
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
