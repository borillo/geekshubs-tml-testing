import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "sbixp8",
  video: false,
  eyesIsDisabled: false,
  eyesBrowser: '[{"width":1280,"height":1024,"name":"chrome"}]',
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  appliConfFile: {
    concurrency: 3,
    apiKey: "5KtcsRaE1A1nL110111ishKikXNhFImXmC38ZOyFZxkT107ck110",
    browser: [
      {
        width: 1280,
        height: 1024,
        name: "chrome",
      },
    ],
    batchName: "Bookshelf acceptance testing",
    batch: {
      id: "e053eec0-7b58-4539-a1b2-bc01d2ec583d",
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 42247,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:5173",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
