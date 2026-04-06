import { defineConfig } from 'vite'

// Production: GitHub Pages project URL is https://<user>.github.io/<repo>/
// If you publish from a user-site repo (e.g. username.github.io) with site at domain root, set both branches to use base: '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/CrosbyHomeImprovements/' : '/',
}))
