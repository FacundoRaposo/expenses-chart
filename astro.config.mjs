import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()]
  export default defineConfig({
    site: 'https://FacundoRaposo.github.io',
    base: '/expenses-chart',
  })
});