
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/calendar",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JN4ZJL4F.js"
    ],
    "route": "/calendar"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6018, hash: '41373ab557aa4d826897ed9e78c37af67b19bf868304c8864693af0c17e7ca7b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1051, hash: '80dc1fe2df8d8c82cec52a2666c0aea8d8a4cc1c82cc972038c68f25f7042671', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 133496, hash: 'bfec05e4e8c15a72fa3146d73e3ef18041bf71577f1a7394345eb8fd20d64751', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-6BC26RXQ.css': {size: 36663, hash: 'jdun2m2S2Kw', text: () => import('./assets-chunks/styles-6BC26RXQ_css.mjs').then(m => m.default)}
  },
};
