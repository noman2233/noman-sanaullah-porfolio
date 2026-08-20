"use strict";
(() => {
  var e = {};
  (e.id = 165),
    (e.ids = [165]),
    (e.modules = {
      7849: (e) => {
        e.exports = require("next/dist/client/components/action-async-storage.external");
      },
      2934: (e) => {
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      5403: (e) => {
        e.exports = require("next/dist/client/components/request-async-storage.external");
      },
      4580: (e) => {
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      4749: (e) => {
        e.exports = require("next/dist/client/components/static-generation-async-storage.external");
      },
      5869: (e) => {
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      1017: (e) => {
        e.exports = require("path");
      },
      7310: (e) => {
        e.exports = require("url");
      },
      7738: (e, o, t) => {
        t.r(o),
          t.d(o, {
            GlobalError: () => s.a,
            __next_app__: () => c,
            originalPathname: () => d,
            pages: () => u,
            routeModule: () => m,
            tree: () => l,
          });
        var n = t(482),
          r = t(9108),
          a = t(2563),
          s = t.n(a),
          i = t(8300),
          p = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (p[e] = () => i[e]);
        t.d(o, p);
        let l = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(t.bind(t, 6178)),
                    "/Users/macbookpro/Documents/Personal/noman portfolio/app/not-found.js",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 2262)),
                "/Users/macbookpro/Documents/Personal/noman portfolio/app/layout.js",
              ],
              "not-found": [
                () => Promise.resolve().then(t.bind(t, 6178)),
                "/Users/macbookpro/Documents/Personal/noman portfolio/app/not-found.js",
              ],
              metadata: {
                icon: [
                  async (e) =>
                    (await Promise.resolve().then(t.bind(t, 7481))).default(e),
                ],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          u = [],
          d = "/_not-found",
          c = { require: t, loadChunk: () => Promise.resolve() },
          m = new n.AppPageRouteModule({
            definition: {
              kind: r.x.APP_PAGE,
              page: "/_not-found",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
    });
  var o = require("../webpack-runtime.js");
  o.C(e);
  var t = (e) => o((o.s = e)),
    n = o.X(0, [638, 973, 328], () => t(7738));
  module.exports = n;
})();
