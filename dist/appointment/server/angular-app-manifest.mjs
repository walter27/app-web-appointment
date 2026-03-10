
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
      "chunk-DOCVTAK2.js"
    ],
    "route": "/calendar"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5895, hash: '85695ff514992923eb1222835ade4049b8b7abb1ac7d0a81bb32e782cafe328f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1102, hash: '8c166a647584ded6e68abb4da2d5563c0a5949014afbf1d886b42c4ca45b0d73', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 108857, hash: '7787e82fbfaf365de04a038c6b9e03e8eacdafd55680da8d922fe110ca171966', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-EGF63KYX.css': {size: 31187, hash: 'O/PTlu/IdTo', text: () => import('./assets-chunks/styles-EGF63KYX_css.mjs').then(m => m.default)}
  },
};
