/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  env: {
    NEXT_PUBLIC_API: "https://example.com/api/",
    NEXT_PUBLIC_NEWS_AI_API: "https://newsapi.ai/api/v1/",
    NEXT_PUBLIC_NEWS_API: "https://newsapi.org/v2/",
    NEXT_PUBLIC_GUARDIAN_API: "https://content.guardianapis.com/",
    // "https://api.nytimes.com/svc/archive/v1/2024/3.json?api-key=jA6eV3EHJZ0ymNMK2QrfpnND4xu0QUId",
  },
};

export default nextConfig;
