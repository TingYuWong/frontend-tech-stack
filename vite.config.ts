import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
const filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(filename);

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react()],
    define: {
      global: {},
    },
    resolve: {
      alias: {
        "@": path.resolve(_dirname, "src"),
      },
    },
  };
});
