import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const [owner, repo] = (process.env.GITHUB_REPOSITORY || "").split("/");
const isCI = Boolean(process.env.GITHUB_ACTIONS);

const base = isCI && repo ? `/${repo}` : "/";
const site = isCI && owner && repo ? `https://${owner}.github.io/${repo}/` : "http://localhost:4321/";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  site,
  base,
  trailingSlash: "always",
});
