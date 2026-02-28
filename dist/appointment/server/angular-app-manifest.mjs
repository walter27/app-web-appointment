
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
      "chunk-P4N5ZM63.js"
    ],
    "route": "/calendar"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5833, hash: 'fd512be1be9cc43c84de1c14d8ef70837db9212f973e54604ba7662c2d8186fe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1102, hash: 'ca5ed9fe177425ffe4ea89da7d8dcac2ba12cc855250d64626dceb5b04e61466', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 118635, hash: 'c109dfd5d3b6de8be5abfa4d632c62c1cdd7c48da40a68bd8e7281dd4a88a92e', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-GWPWU33U.css': {size: 27843, hash: 'Tg9ztFdAhVI', text: () => import('./assets-chunks/styles-GWPWU33U_css.mjs').then(m => m.default)}
  },
};
