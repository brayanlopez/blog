import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import vue from '@astrojs/vue'
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'
import { PROJECT_BASE } from './src/common/constants.mjs'

// https://astro.build/config
export default defineConfig({
	site: 'https://brayanlopez.github.io',
	base: PROJECT_BASE,
	integrations: [tailwind(), mdx(), react(), vue(), svelte(), sitemap()],
})
