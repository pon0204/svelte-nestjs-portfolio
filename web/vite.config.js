import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';


export default defineConfig({
    server: {
        port: 5000,
    },
    
    plugins: [svelte({
        preprocess: autoPreprocess()
    }),
    typescript({ sourceMap: !production })
],
});
