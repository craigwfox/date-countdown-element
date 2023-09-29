import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => ({
	build: {
		emptyOutDir: true,
		rollupOptions: {
			output: {
				assetFileNames: "[ext]/[name][extname]",
				chunkFileNames: "[chunks]/[name].[hash].js",
				entryFileNames: "countdown-timer.js",
			},
		},
	},
}));
