// <define:__ROUTES__>
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.8.6.", include: ["/*"], exclude: ["/_next/static/*"] };

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/siddarthchalla/Desktop/Projects/coffee-list-cf/.wrangler/tmp/pages-EisxDa/bundledWorker-0.8466444031826124.mjs";
import { isRoutingRuleMatch } from "/Users/siddarthchalla/Desktop/Projects/coffee-list-cf/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/siddarthchalla/Desktop/Projects/coffee-list-cf/.wrangler/tmp/pages-EisxDa/bundledWorker-0.8466444031826124.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=cz2w9nzqg9.js.map
