import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import path from "path";

export default defineConfig({
  plugins: [svelte({ })],
  resolve: {
    '@': path.resolve('./src')
  }
})