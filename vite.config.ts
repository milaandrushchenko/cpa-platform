import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

const resolvePath = (path: string) =>
  fileURLToPath(new URL(path, import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolvePath("./src"),
      "@assets": resolvePath("./src/assets"),
      "@components": resolvePath("./src/components"),
      "@hooks": resolvePath("./src/hooks"),
      "@pages": resolvePath("./src/pages"),
      "@api": resolvePath("./src/api"),
      "@utils": resolvePath("./src/utils"),
      "@types": resolvePath("./src/types"),
      "@layouts": resolvePath("./src/layouts"),
      "@providers": resolvePath("./src/providers"),
      "@sections": resolvePath("./src/sections"),
      "@styles": resolvePath("./src/styles"),
      "@i18n": resolvePath("./src/i18n"),
      "@animations": resolvePath("./src/animations"),
    },
  },
});
