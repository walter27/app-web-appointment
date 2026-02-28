
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
      "chunk-G6VF4D7W.js"
    ],
    "route": "/calendar"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5833, hash: '967971f3055b7a412bd5326259111afaad4b81c08cd7dad89b693813c1672540', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1102, hash: '622580a5ca56ce20b7fb82b005581fac3a51667162a876edfa7b870ec61ad6b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 103165, hash: 'f137e89f75b32e4b9d622c9f7cd99d82d99d7b6e17e2d50a510792a08c1aa0a5', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-GWPWU33U.css': {size: 27843, hash: 'Tg9ztFdAhVI', text: () => import('./assets-chunks/styles-GWPWU33U_css.mjs').then(m => m.default)}
  },
};
