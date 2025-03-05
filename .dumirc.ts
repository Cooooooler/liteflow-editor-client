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
    '/lon': {
      target: 'https://cloud-mgr.lonsun.cn/',
      changeOrigin: true,
      pathRewrite: { '^/lon': '' },
    },
  },
  define: { 'process.env.DUMI_APP_A': process.env.DUMI_APP_A },
});
