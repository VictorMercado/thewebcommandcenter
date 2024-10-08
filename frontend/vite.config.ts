import { defineConfig } from "vite";
import { resolve } from "path";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from "@vitejs/plugin-react";

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === "development";

  return {
    plugins: [
      TanStackRouterVite(),
      react()
    ],
    server: {
      port: 3000,
    },
    test: {
      globals: true,
      environment: "happy-dom",
      setupFiles: "./src/infrastructure/tests.setup.ts",
    },
    resolve: {
      alias: {
        "@/": resolve(__dirname, "./src"), 
        "@/app": resolve(__dirname, "src", "app"),
        "@/components": resolve(__dirname, "src", "components"),
        "@/hooks": resolve(__dirname, "src", "hooks"),
        "@/lib": resolve(__dirname, "src", "lib"),
        "@lib/utils": resolve(__dirname, "src", "lib", "utils"),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },
  };
});
