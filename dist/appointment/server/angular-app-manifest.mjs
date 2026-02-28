
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
      "chunk-F6XRDUV2.js"
    ],
    "route": "/calendar"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5833, hash: '7bdaad3cfd308d1ad2a647f6166935674d16dc63e8e0520e008936533b7cfe5e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1102, hash: '1cc91e038a6e6f0fe2896981e2ca98961a4c8ebdd45b1b15d67efcdf4905e37d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 118805, hash: '22bc75f795b91e7d09d6223dee10122ed5fb11b55fb8841fd5ce12ea00d97740', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-GWPWU33U.css': {size: 27843, hash: 'Tg9ztFdAhVI', text: () => import('./assets-chunks/styles-GWPWU33U_css.mjs').then(m => m.default)}
  },
};
