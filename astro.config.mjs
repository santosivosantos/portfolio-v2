import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.ivosantos.site',
  output: 'static',
  build: {
    format: 'directory'
  }
});
