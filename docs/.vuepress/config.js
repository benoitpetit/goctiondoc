import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { viteBundler } from "@vuepress/bundler-vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineUserConfig({
  lang: "en-US",
  title: "Goction Documentation",
  description:
    "Official documentation for Goction - Lightweight and Extensible Custom Action Platform",
  base: "/",
  theme: defaultTheme({
    logo: "/images/goction.png",
    repo: "https://github.com/goction/goction/",
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "API",
        link: "/api/",
      },
      { text: "FAQ", link: "/faq.md" },
      { text: "Community", link: "/community.md" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          children: [
            "/guide/README.md",
            "/guide/concepts.md",
            "/guide/quickstart.md",
            "/guide/installation.md",
            "/guide/configuration.md",
            "/guide/usage.md",
            "/guide/commands.md",
            "/guide/advanced.md",
            "/guide/troubleshooting.md",
          ],
        },
      ],
      "/api/": [
        {
          text: "API Reference",
          children: [
            "/api/README.md",
            "/api/authentication.md",
            "/api/endpoints.md",
            "/api/error-handling.md",
          ],
        },
      ],
    },
  }),

  bundler: viteBundler({
    viteOptions: {
      server: {
        port: 3000,
      },
    },
  }),

  plugins: [
    searchPlugin(),
    registerComponentsPlugin({
      componentsDir: resolve(__dirname, "./components"),
    }),
  ],
});
