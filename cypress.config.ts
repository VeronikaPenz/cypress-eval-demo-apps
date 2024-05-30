import { defineConfig } from "cypress";
import getCompareSnapshotsPlugin from "cypress-image-diff-js/plugin";

export default defineConfig({
  projectId: "zrffrc",
  env: {
    DEBUG: 'cypress-vite'
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: 'http://localhost:5175',
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, config);
    }
  }
});
