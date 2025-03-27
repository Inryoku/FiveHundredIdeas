import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FiveHundredIdeas/", // リポジトリ名を指定
});
