import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://liteflow.cc/img/logo.png'],
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'liteflow',
    logo: 'https://liteflow.cc/img/logo.png',
    footer: `Open-source MIT Licensed | Copyright © 2024-present
<br />
Powered by self`,
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:10005/',
      changeOrigin: true,
    },
  },
});
