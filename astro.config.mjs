// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    env: {
        schema:{
            STRAPI_URL: envField.string({context: 'server', access:'public'}),
            STRAPI_TOKEN: envField.string({context: 'server', access:'secret'})
        }
    }
});