
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
    'index.csr.html': {size: 6466, hash: '62b75a5a0f01422ad8d73c7d4f77b62ed1b3eabb0587b1598b6463138771b526', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1051, hash: '8ce4aacae6347342f6e3e05056630a5c86d667eb8efdfae9cc1733314398eb84', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 133949, hash: '7015ea426ae72b008164f128118ebfe62371df2c85ebd68db118a0e43a8a4954', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-DRL3VIS4.css': {size: 43647, hash: 'LiEbCM4Vq7s', text: () => import('./assets-chunks/styles-DRL3VIS4_css.mjs').then(m => m.default)}
  },
};
