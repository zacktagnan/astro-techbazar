import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // con SERVER, automáticamente, todo se convierte en SSR o dinámico
  // output: 'server',
  // con HYBRID, habrá que desactivar el prerender para que esa parte sea dinámica
  output: 'hybrid',
});