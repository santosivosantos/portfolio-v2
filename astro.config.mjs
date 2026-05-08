import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://santosivosantos.github.io',
  base: '/portfolio-v2',
  output: 'static',
  build: {
    format: 'directory'
  }
});
