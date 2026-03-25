
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
      "chunk-MVLPHOR6.js"
    ],
    "route": "/calendar"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 18156, hash: '7b39af783311fc65e1d0f810215e7a5040bea678f29d8de828e957489972c908', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12130, hash: '2afbcbdbdfe9f43a38251def40f9b1317f282515e38444d4872e9621bf828607', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 147312, hash: 'f75f148e729dfb068a092f63dc4cc1df3c7bdea0a31b6ff5c5cc9829014bfd37', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-BX2UMJWH.css': {size: 49464, hash: 'CM9vBWLuM+E', text: () => import('./assets-chunks/styles-BX2UMJWH_css.mjs').then(m => m.default)}
  },
};
