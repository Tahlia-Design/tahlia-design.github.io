import { webcore } from 'webcoreui/integration';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io/',
  output: 'static',
  integrations: [webcore()],
  vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        }
    }
});