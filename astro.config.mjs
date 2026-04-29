import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ivosantos.com',
  base: '/',
  output: 'static',
  build: {
    format: 'directory'
  }
});
