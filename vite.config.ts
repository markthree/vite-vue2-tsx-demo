import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import vueJsx from '@vitejs/plugin-vue2-jsx'

export default defineConfig({
	plugins: [vue(), vueJsx()]
})
