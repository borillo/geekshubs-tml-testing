import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'sbixp8',
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
