// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _index = require("./routes/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _viewsede = require("./utils/viewsede");
var _viewsedeDefault = parcelHelpers.interopDefault(_viewsede);
window.addEventListener("load", (0, _indexDefault.default));
let button1 = document.getElementById("menu-selected1");
let button2 = document.getElementById("menu-selected2");
let button3 = document.getElementById("menu-selected3");
let button4 = document.getElementById("menu-selected4");
let button5 = document.getElementById("menu-selected5");
let button6 = document.getElementById("menu-selected6");
button1.addEventListener("click", async ()=>{
    await elegir("1");
    await (0, _indexDefault.default)();
    await scroll();
});
button2.addEventListener("click", async ()=>{
    await elegir("2");
    await (0, _indexDefault.default)();
    await scroll();
});
button3.addEventListener("click", async ()=>{
    await elegir("3");
    await (0, _indexDefault.default)();
    await scroll();
});
button4.addEventListener("click", async ()=>{
    await elegir("4");
    await (0, _indexDefault.default)();
    await scroll();
});
button5.addEventListener("click", async ()=>{
    await elegir("5");
    await (0, _viewsedeDefault.default)();
    await scroll();
});
button6.addEventListener("click", async ()=>{
    await elegir("6");
    await (0, _indexDefault.default)();
    await scroll();
});
function elegir(a) {
    let targetURL = "#menu-selected" + a;
    let newURL = document.createElement("a");
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}
function scroll() {
    let targetURL = "#main-conatiner";
    let newURL = document.createElement("a");
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}

},{"./routes/index":"3L9mC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utils/viewsede":"jC5Ub"}],"3L9mC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getHashJs = require("../utils/getHash.js");
var _getHashJsDefault = parcelHelpers.interopDefault(_getHashJs);
var _resolveRoutes = require("../utils/resolveRoutes");
var _resolveRoutesDefault = parcelHelpers.interopDefault(_resolveRoutes);
var _getProduct = require("../utils/getProduct");
var _getProductDefault = parcelHelpers.interopDefault(_getProduct);
var _nada = require("../components/nada");
var _nadaDefault = parcelHelpers.interopDefault(_nada);
const routes = {
    "#specialty": (0, _nadaDefault.default),
    "/:id": (0, _getProductDefault.default)
};
const router = async ()=>{
    let hash = (0, _getHashJsDefault.default)();
    let route = await (0, _resolveRoutesDefault.default)(hash);
    let render = routes[route] ? routes[route] : (0, _nadaDefault.default);
    const content = document.getElementById("main-container");
    content.parentNode;
    content.removeChild(content.firstChild || null);
    content.innerHTML = await render();
    const removesede = document.getElementById("menu-selected");
    removesede.innerHTML = (0, _nadaDefault.default);
};
exports.default = router;

},{"../utils/getHash.js":"cBXxo","../utils/resolveRoutes":"45qF6","../utils/getProduct":"leJS3","../components/nada":"5Pv0i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBXxo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const getHash = ()=>location.hash.slice(1).toLocaleLowerCase().split("*")[0] || "/";
exports.default = getHash;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"45qF6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const resolveRoutes = (route)=>{
    if (route.length <= 25) {
        let validRoute = route === "#specialty" ? route : "/:id";
        return validRoute;
    }
    return `/${route}`;
};
exports.default = resolveRoutes;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"leJS3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _productos = require("../products/productos");
var _productosDefault = parcelHelpers.interopDefault(_productos);
var _sede = require("../products/sede");
var _sedeDefault = parcelHelpers.interopDefault(_sede);
var _servicios = require("../products/servicios");
var _serviciosDefault = parcelHelpers.interopDefault(_servicios);
var _homeopatia = require("../products/homeopatia");
var _homeopatiaDefault = parcelHelpers.interopDefault(_homeopatia);
var _item = require("../components/item");
var _itemDefault = parcelHelpers.interopDefault(_item);
var _getHash = require("../utils/getHash");
var _getHashDefault = parcelHelpers.interopDefault(_getHash);
var _herbalfruit = require("../products/herbalfruit");
var _herbalfruitDefault = parcelHelpers.interopDefault(_herbalfruit);
var _contacto = require("../products/contacto");
var _contactoDefault = parcelHelpers.interopDefault(_contacto);
let title = "";
const data = ()=>{
    let hash = (0, _getHashDefault.default)();
    if (hash == "menu-selected1") {
        title = "Homeopat\xeda";
        return 0, _homeopatiaDefault.default;
    } else if (hash == "menu-selected2") {
        title = "Servicios";
        return 0, _serviciosDefault.default;
    } else if (hash == "menu-selected3") {
        title = "Productos";
        return 0, _productosDefault.default;
    } else if (hash == "menu-selected4") {
        title = "Contactenos";
        return 0, _contactoDefault.default;
    } else if (hash == "menu-selected5") {
        title = "Fotos sede";
        return 0, _sedeDefault.default;
    } else if (hash == "menu-selected6") {
        title = "HerbalFruit";
        return 0, _herbalfruitDefault.default;
    }
};
const menu = async ()=>{
    const info = await data();
    return `<div class="menu-selected" id="${(0, _getHashDefault.default)() + "*"}"> 
        <div class="close-icon"><a href="/"><img rel="icon" src="https://icon-library.com/images/svg-close-icon/svg-close-icon-4.jpg" width="20px"></a></div>
        <div class="item-container">
        <div>
        <h2>${title}</h2>
        </div>
        <div class="items">
        ${info.map((item)=>(0, _itemDefault.default)(item))}
        </div>
        </div>
        </div>`;
};
exports.default = menu;

},{"../products/productos":"ceCzh","../products/servicios":"lye8P","../components/item":"klNFr","../utils/getHash":"cBXxo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../products/sede":"jfqGO","../products/homeopatia":"ijUHX","../products/herbalfruit":"fpzWO","../products/contacto":"d6ZcD"}],"ceCzh":[function(require,module,exports) {
const products = [
    {
        name: "TRATAMIENTO FITOTERAPEUTICO PANCREAS:",
        photo: "https://i.postimg.cc/VkkG0xN8/pancreas.png",
        description: `
    Diseñado para ayudar al
    organismo a convertir los
    alimentos en energía
    (deficiencias enzimáticas
    y endocrinas), en donde
    el páncreas es incapaz de
    producir insulina; regular
    la glucosa en la sangre
    (niveles de azúcar); el
    poder de las plantas y su
    uso medicinal no solo son
    capaces de prevenir sino
    también de curar, es un
    muy buen coadyuvante
    natural en el tratamiento

    de la
    Obesidad, Diabetes,
    prediabetes, Diabetes
    mellitus tipo1, Diabetes

    tipo 2. `
    },
    {
        name: "TRATAMIENTO FITOTERAPEUTICO COLON:",
        photo: "https://i.postimg.cc/qvJYXtjW/colon.png",
        description: `Está elaborado con la
    mejor calidad de plantas
    medicinales capaces de
    corregir y curar
    trastornos causados por
    daños en la flora
    intestinal, restaurándola
    y fortaleciendo su
    sistema inmunológico, ya
    que este medicamento
    ayuda a evacuar los
    desechos del intestino
    mejorando no solo la
    eliminación de las heces,
    sino el aprovechamiento
    de nutrientes,
    garantizando una mejor
    digestión, coadyuvante
    natural en tratamiento en
    trastornos intestinales,
    Principalmente en casos
    de colon perezoso,
    estreñimiento crónico,
    
    diarreas, hemorroides y flatulencia.
    Recomendación: Evitar el consumo de laxantes.`
    },
    {
        name: "TRATAMIENTO FITOTERAP\xc9UTICO DETOX:",
        photo: "https://i.postimg.cc/Gp95VW0Q/detox.png",
        description: `Nuestro organismo suele
    acumular muchos
    desechos tóxicos como
    son: metales pesados
    (plomo, mercurio,
    antimonio, arsénico etc.)
    toxinas como residuos de
    pesticidas tóxicos,
    polución, bebidas
    carbonadas ,
    electromagnética entre
    muchas otras , el cuidar y
    mantener una buena salud
    depende de eliminar de
    nuestro cuerpo las fuentes
    de enfermedad, un cuerpo
    libre de toxinas es capaz
    de regenerarse y curarse
    así mismo, por eso el
    medicamento HERBAL
    DETOX está diseñado
    para desintoxicar su
    cuerpo por completo de
    
    manera segura y natural.
    
    A que personas se les recomienda esta desintoxicación: personas que padecen de
    infecciones urinarias, trastornos gastrointestinales, hormonales, circulatorios,
    manchas en la piel y acné, afecciones respiratorias, obesidad; de cierta manera
    todas las personas necesitamos eliminar de nuestro cuerpo las causas de
    
    enfermedad.
    
    Que personas no pueden consumir HERBAL DETOX, personas con una baja
    
    inmunidad y/o muy descompensadas nutricionalmente.`
    },
    {
        name: "TRATAMIENTO FITOTERAPEUTICO RI\xd1ON:",
        photo: "https://i.postimg.cc/VkZ7qKSb/ri-on.png",
        description: `Su fórmula Fito
    terapéutica fue
    diseñada para
    mantener sano
    nuestro sistema
    urinario eliminando
    arenilla al riñón, capaz
    de romper y evacuar
    los cálculos renales
    que puedan afectar el
    buen funcionamiento
    de las nefronas,
    evitando la retención
    de líquidos y
    previniendo
    infecciones urinarias,
    en mujeres evita las
    infecciones y daños
    en la vejiga al igual
    que en el hombre es
    muy eficaz en el tratamiento y cuidado de la próstata. Coadyuvante
    
    natural en el tratamiento del sistema urinario.
    No apto para personas en tratamiento con diálisis.`
    },
    {
        name: "TRATAMIENTO FITOTERAPEUTICO MUCOSA:",
        photo: "https://i.postimg.cc/PxwFr15v/mucosa.png",
        description: `Fue creado para el
    tratamiento preventivo y
    curativo en enfermedades
    que atacan nuestro sistema
    digestivo.
    EL cual está dotado con
    mucosa digestiva
    asegurando la homeostasis
    interna, digestión, absorción
    de nutrientes, transporte,
    secreción de agua y
    electrolitos.
    La mucosa gastrointestinal:
    esta revestida de células
    epiteliales que establecen
    una barrera efectiva,
    mediante uniones
    intercelulares entre el medio
    interno y medio externo,
    impidiendo el paso de
    sustancias potencialmente
    nocivas.
    Coadyuvante natural en el
    tratamiento de gastritis,
    hernia hiatal, reflujo, acidez,
    colon irritable y demás
    enfermedades que puedan afectar el buen funcionamiento del sistema
    
    gastrointestinal.`
    },
    {
        name: "TRATAMIENTO FITOTERAPEUTICO CARTILAGO:",
        photo: "https://i.postimg.cc/L5FQqhJC/cartilago.png",
        description: `nuestro sistema articular, se
    deteriora no solo con la
    edad, las malas posturas, el
    esfuerzo físico entre muchas
    otras causas; a menudo
    ocurre una pérdida del
    líquido sinovial, un líquido
    espeso que se encuentra en
    el interior de la articulación y
    que tiene la función de
    amortiguar los extremos de
    los huesos y reducir la
    fricción entre las
    articulaciones, el
    medicamento herbal
    cartílago fue diseñado para
    mantener su sistema
    articular sano, gracias al
    poder curativo de las plantas
    medicinales capaces de
    eliminar de sus sistemas las
    fuentes directas que
    originan los trastornos
    articulares.
    Coadyuvante natural en el
    tratamiento de artrosis,
    artritis, reumatismo, gota, dolor e inflamación articular, entre muchas otras.`
    },
    {
        name: "TRATAMIENTO FITOTERAPEUTICO HIGADO:",
        photo: "https://i.postimg.cc/0yV4t84j/higado.png",
        description: `Elaborado con las
    mejores plantas
    medicinales capaces
    de curar y sanar de
    manera rápida, segura
    y eficaz, está diseñado
    para mejorar el
    metabolismo en el
    almacenamiento de
    vitaminas y minerales,
    liberación de glucosa,
    digestión de las grasas,
    producción de
    colesterol, proteínas y
    la eliminación de
    toxinas.
    Es recomendable para
    todo tipo de personas,
    coadyuvante natural en
    casos de obesidad,
    diabetes, hipertensión, triglicéridos o colesterol, esteatosis hepática,
    
    hepatitis, cirrosis Y hepatomegalia.
    
    El secreto de gozar de una buena salud, es un hígado sano.`
    },
    {
        name: "TRATAMIENTO FITOTERAPEUTICO OVARIO:",
        photo: "https://i.postimg.cc/CMb63C2W/ovario.png",
        description: `Este medicamento fue
    diseñado especialmente
    para la mujer en el
    cuidado preventivo y
    curativo en enfermedades
    ginecológicas que
    puedan causar daños y/o
    trastornos en el buen
    funcionamiento de
    ovarios, útero, cuello
    uterino, actúa como
    regulador hormonal de
    manera natural, segura y
    
    eficaz.
    Medicamento herbal
    útero: coadyuvante
    natural en el tratamiento
    ginecológico: ovarios
    poliquísticos, miomatosis,
    inflamación de cuello
    uterino, trastornos de la hormona beta (Ciclo menstrual), vaginitis,
    
    herpes, papiloma humano, etc.`
    },
    {
        name: "MEDICAMENTO HERBAL EQUINACEA :",
        photo: "https://i.postimg.cc/Vv9GX1MY/equinacea.png",
        description: `Actúa de manera
    natural, elevando
    las defensas y
    fortaleciendo el
    sistema
    inmunológico;
    Nuestro sistema
    inmunológico está
    diseñado para
    defendernos de los
    agentes patógenos
    que nos enferman,
    como lo son:
    hongos, bacterias,
    parásitos y toxinas
    que pueden afectar
    el buen desempeño
    de nuestros
    órganos,
    especialmente
    diseñado para
    aquellas personas
    que padecen
    trastornos de baja inmunidad. Muy efectivo coadyuvante natural en el
    
    tratamiento de enfermedades degenerativas.`
    },
    {
        name: "TRATAMIENTO FITOTERAPEUTICO ARTERIA C:",
        photo: "https://i.postimg.cc/kMSknP2Y/arteriac.png",
        description: `Nuestro sistema
    circulatorio lleva
    oxígeno, nutrientes y
    hormonas a las células,
    elimina el producto de
    los desechos, como el
    dióxido de carbono; por
    ello es tan importante
    cuidarlo de forma
    regular, el uso de las
    plantas medicinales y
    sus efectos curativos
    garantizan su buen
    funcionamiento, ya que
    son muchas las
    enfermedades que lo
    atacan de forma
    permanente, los malos
    hábitos de vida.
    La prevención es
    imprescindible, de esta manera protegerá, cuidara su vida y la de su
    corazón, coadyuvante natural en tratamiento arterial y del sistema
    
    cardiovascular.`
    },
    {
        name: "TRATAMIENTO FITOTERAPEUTICO ARTERIA G:",
        photo: "https://i.postimg.cc/Fsg8Lbgj/arteriag.png",
        description: `Las grasas no fluyen de manera ágil en el sistema circulatorio, por lo
    que no se lleva acabo
    adecuadamente la
    oxigenación del cuerpo y
    puede llevar a obstruir
    venas y arterias provocando
    el aumento del colesterol y
    los triglicéridos, riesgo del
    incremento de la tensión
    arterial, trombos y padecer
    una enfermedad
    cardiovascular. Las plantas
    medicinales y su consumo
    diariamente han demostrado
    ser muy eficaces en el
    tratamiento preventivo y
    curativo de nuestro sistema
    circulatorio, coadyuvante
    natural en el tratamiento de
    trombos, colesterol o
    triglicéridos elevados en la
    
    sangre.`
    },
    {
        name: "TRATAMIENTO FITOTERAPEUTICO PULMON:",
        photo: "https://i.postimg.cc/FsZCRrNp/pulmon.png",
        description: `Los pulmones nos permiten
    respirar la entrada de
    oxígeno a nuestros cuerpos y
    expulsar el dióxido de
    carbono, el cual es un
    desecho producido por el
    cuerpo. La naturaleza fue
    dotada con una gran
    variedad de plantas
    medicinales que aportan al
    cuerpo humano el poder de
    sanar; no maltrate su
    organismo, trátelo con
    respeto y de forma natural,
    para eso fue creada la
    medicina herbal.
    Las enfermedades del
    aparato respiratorio son
    causales del deterioro de nuestra salud y ponen en riesgo nuestra
    vida, el medicamento herbal pulmón es muy buen coadyuvante natural
    en el tratamiento preventivo y curativo de las vías respiratorias como:
    
    asma, bronquitis etc.`
    },
    {
        name: "TRATAMIENTO FITOTERAPEUTICO NEURO:",
        photo: "https://i.postimg.cc/N0VzcdBw/neuro.png",
        description: `Todas las personas
    hemos pasado por algún
    trastorno del sistema
    nervioso, bien sea por la
    pérdida de un familiar, la
    ruptura de una relación
    sentimental, la situación
    económica, la familia, el
    trabajo; todo desarreglo de
    la alud suele estar
    precedido por un periodo
    de fuerte stress, la
    ansiedad, la depresión, la
    baja autoestima, la ira, la
    falta de sueño, etc. El
    medicamento herbal
    Neuro es Muy buen
    Coadyuvante natural en
    mejorar y cuidar la salud
    
    mental.
    Contraindicado en
    personas bajo tratamiento
    
    con medicamentos psiquiátricos.`
    }
];
module.exports = products;

},{}],"lye8P":[function(require,module,exports) {
const services = [
    {
        name: "BIOMAGNETISMO MEDICO",
        photo: "https://i.postimg.cc/9M8PjSzh/Captura-de-pantalla-2023-01-04-012335.png",
        description: `Qué es y para qué sirve el biomagnetismo?
        El biomagnetismo médico es una práctica médica alternativa integral en la que se usa el
        conocimiento del cuerpo humano y sus campos magnéticos para el tratamiento de todo
        tipo de condiciones y lograr el equilibrio funcional del cuerpo. Está indicado para todas
        las enfermedades o malestares.`
    },
    {
        name: "Valoraci\xf3n emocional y f\xedsica con bioplasma",
        photo: "https://i.postimg.cc/MKj7h9SC/Captura-de-pantalla-2023-01-04-012403.png",
        description: `Sistema de diagnóstico terapéutico medicinal, que estudia, detecta, clasifica y corrige las
        alteraciones del pH mediante el uso del Par Biomagnético”. El par Biomagnético
        corresponde a zonas del cuerpo que están hermanados y con polaridades distintas (carga
        positiva y negativa que permite un equilibrio) La terapia logra identificar el padecimiento
        de ciertos males provocados por virus, bacterias, parásitos y hongos, como también de
        disfunciones glandulares, al medir cualitativamente la alteración del Potencial de
        Hidrógeno, donde proliferan los organismos patógenos que atacan nuestro cuerpo.
        Los imanes colocados en el cuerpo generan una interrupción de la retroalimentación de
        energía que hay entre bacterias y virus. Con esto entonces, se corrige la alteración del pH
        y de las zonas que estaban desequilibradas energéticamente en el organismo. Luego de
        este proceso, los microrganismos pierden su energía y terminan siendo eliminados. En
        
        relación a los virus, el cambio del pH obstaculiza su reproducción y quedan debilitados o
        destruidos por el sistema inmunológico.
        Función de análisis por espectrometría es una técnica de análisis espectral basada en la
        dispersión de energía. El aparato realiza un análisis y obtiene imágenes de todo el cuerpo
        o del órgano en estudio.
        El dispositivo Bioplasm es una de las herramientas de diagnóstico de salud energética
        Evalúa la salud de los órganos internos al monitorear sus frecuencias de energía. Los
        patrones de energía se proyectan a través de auriculares a un dispositivo basado en
        computadora, que procesa las lecturas y las muestra como números en las imágenes de
        los órganos relevantes. Los números están relacionados con una forma y color en
        particular. Da Metaterapia a través de la bioresonancia corrige los puntos de entropía, fortaleciendo la energía biológica.`
    },
    {
        name: "Valoraci\xf3n con scanner Biocu\xe1ntico",
        photo: "https://i.postimg.cc/yx2FDZFp/Captura-de-pantalla-2023-01-04-012600.png",
        description: `El sistema cuántico Bioeléctrico tiene una exactitud cercana al 90%. Los valores
        obtenidos se extrapolan basados en los parámetros leídos en el paciente y en conjunción
        con los datos como peso, talla, edad, y sexo. . Sin embargo al poder medir los campos
        generados por cada órgano del cuerpo se ha podido establecer las diferentes condiciones
        que nos permiten establecer estados de enfermedad, pseudo enfermedad y estado de
        salud.
        Este examen nos permite identificar por medio del campo magnético corporal cualquier
        patología o enfermedad que el paciente este presentando, arrojando más de 180
        resultados inmediatos.`
    },
    {
        name: "DESINTOXICACION IONICA.",
        photo: "https://i.postimg.cc/bwxQvddL/Captura-de-pantalla-2023-01-04-012630.png",
        description: ``
    },
    {
        name: "Metabolismo medico",
        photo: "https://i.postimg.cc/sgdYy5fv/Captura-de-pantalla-2023-01-04-012658.png",
        description: `MEDINATURAL.VID les ofrece la mejor opción en nutrición, empleando la herbolaria y la
        jugoterapia como una herramienta muy importante en la prevención y tratamiento de
        enfermedades como; La obesidad: (enfermedades cardiovasculares, cerebrovasculares,
        hipertensión arterial, venas varices, hemorroides) etc. causas: daño hepato-biliar, hepato-
        pancreatico y hepatorrenal, entre muchas otras; como el mal metabolismo de grasas,
        enzimas y/o de la glándula tiroides etc.`
    },
    {
        name: "Medicina herbal",
        photo: "https://i.postimg.cc/8kYdKqqd/Captura-de-pantalla-2023-01-04-012722.png",
        description: `La nutrición es principalmente el aprovechamiento de los nutrientes, manteniendo el
        equilibrio homeostático del organismo a nivel molecular y macro-sistémico.
        Los procesos macro sistémicos están relacionados a la absorción, digestión, metabolismo
        y eliminación. Los procesos moleculares o micro sistémicos están relacionados al
        equilibrio de elementos como enzimas, vitaminas, minerales, aminoácidos, glucosa,
        transportadores químicos, mediadores bioquímicos, hormonas, etc.
        Baja productividad, absentismo, cansancio, sobrepeso, son sólo algunos de los
        problemas derivados por la mala alimentación por causa de no contar con el tiempo
        suficiente o simplemente por hacer una mala elección en su dieta diaria.
        
        La herbolaria se asocia a la fitoterapia; el uso de plantas para prevenir, aliviar o curar
        enfermedades y otros trastornos de la salud, Se trata de una terapia natural que recurre a
        las plantas, el uso de productos de origen vegetal para la prevención, la curación o el
        alivio de una amplia variedad de síntomas y enfermedades.
        La fitoterapia ha resultado ser más útil que la medicina moderna para el tratamiento de
        ciertas enfermedades crónicas, con menos efecto secundario y más económico.
        Las plantas medicinales y aromáticas juegan un papel importante en el cuidado de la
        salud de las personas
        Cuando realizamos jugoterapia, los órganos encargados de la desintoxicación, como la
        piel, los pulmones, los riñones y el hígado trabajan mucho más rápido, permitiendo que
        los deshechos y las toxinas acumuladas sean eliminadas sin ningún problema. Esta es
        una buena manera de permitir que el sistema digestivo tenga un buen descanso.
        `
    }
];
module.exports = services;

},{}],"klNFr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const returnItem = (data)=>{
    return `<div class="item-info">
    <h3>${data.name}</h3>
    <img src=${data.photo} alt="">
    <p>${data.description}</p>
</div>`;
};
exports.default = returnItem;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jfqGO":[function(require,module,exports) {
const sede = [
    {
        name: "",
        photo: "https://i.postimg.cc/VktBxDjS/Captura-de-pantalla-2023-01-04-014726.png",
        description: ``
    },
    {
        name: "",
        photo: "https://i.postimg.cc/RFS7nm2f/Captura-de-pantalla-2023-01-04-014800.png",
        description: ``
    },
    {
        name: "",
        photo: "https://i.postimg.cc/cJNM0wmF/Captura-de-pantalla-2023-01-04-014818.png",
        description: ``
    },
    {
        name: "",
        photo: "https://i.postimg.cc/1tvpGTZd/Captura-de-pantalla-2023-01-04-014832.png",
        description: ``
    },
    {
        name: "",
        photo: "https://i.postimg.cc/PqzbxJVT/Captura-de-pantalla-2023-01-04-014846.png",
        description: ``
    }
];
module.exports = sede;

},{}],"ijUHX":[function(require,module,exports) {
const homeopatia = [
    {
        name: "Globulos frasco x10gr",
        photo: "https://i.postimg.cc/8P01rbfz/Captura-de-pantalla-2023-01-04-011531.png",
        description: ``
    },
    {
        name: "Triturados frasco x60gr",
        photo: "https://i.postimg.cc/25pr08wp/Captura-de-pantalla-2023-01-04-011550.png",
        description: ``
    },
    {
        name: "Ampollas bebibles caja por 12 unidades",
        photo: "https://i.postimg.cc/sXsyR6qw/Captura-de-pantalla-2023-01-04-011611.png",
        description: ``
    },
    {
        name: "Jarabes frasco x 240 ml",
        photo: "https://i.postimg.cc/QdKjgWck/Captura-de-pantalla-2023-01-04-011626.png",
        description: ``
    },
    {
        name: "Gotas Frasco x 30 ml",
        photo: "https://i.postimg.cc/bvQ8WcCZ/Captura-de-pantalla-2023-01-04-011647.png",
        description: ``
    }
];
module.exports = homeopatia;

},{}],"fpzWO":[function(require,module,exports) {
const herbalfruit = [
    {
        name: "",
        description: "",
        photo: "https://i.postimg.cc/vHN6d8x2/Captura-de-pantalla-2023-01-05-024043.png"
    },
    {
        name: "",
        description: "",
        photo: "https://i.postimg.cc/5t9gkNh7/Captura-de-pantalla-2023-01-05-023302.png"
    }
];
module.exports = herbalfruit;

},{}],"d6ZcD":[function(require,module,exports) {
const contacto = [
    {
        name: "Whatsapp",
        description: "Escribenos por Whatsapp",
        photo: "https://cdn-icons-png.flaticon.com/128/733/733641.png"
    },
    {
        name: "Estamos ubicados en San Gil-Santander",
        description: "Cra 9 #9-35 Frente a la fiscalia municipal",
        photo: "https://cdn-icons-png.flaticon.com/512/2354/2354133.png"
    },
    {
        name: "Facebook",
        description: "Escribenos por Facebook",
        photo: "https://cdn-icons-png.flaticon.com/128/1384/1384005.png"
    },
    {
        name: "Telefono",
        description: "LLamanos 3132381049",
        photo: "https://cdn-icons-png.flaticon.com/512/2354/2354127.png"
    }
];
module.exports = contacto;

},{}],"5Pv0i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const nada = ``;
exports.default = nada;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jC5Ub":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getHashJs = require("../utils/getHash.js");
var _getHashJsDefault = parcelHelpers.interopDefault(_getHashJs);
var _resolveRoutes = require("../utils/resolveRoutes");
var _resolveRoutesDefault = parcelHelpers.interopDefault(_resolveRoutes);
var _getProduct = require("../utils/getProduct");
var _getProductDefault = parcelHelpers.interopDefault(_getProduct);
var _nada = require("../components/nada");
var _nadaDefault = parcelHelpers.interopDefault(_nada);
const routes = {
    "#specialty": (0, _nadaDefault.default),
    "/:id": (0, _getProductDefault.default)
};
const viewsede = async ()=>{
    let hash = (0, _getHashJsDefault.default)();
    let route = await (0, _resolveRoutesDefault.default)(hash);
    let render = routes[route] ? routes[route] : (0, _nadaDefault.default);
    const content = document.getElementById("menu-selected");
    content.parentNode;
    content.removeChild(content.firstChild || null);
    content.innerHTML = await render();
};
exports.default = viewsede;

},{"../utils/getHash.js":"cBXxo","../utils/resolveRoutes":"45qF6","../utils/getProduct":"leJS3","../components/nada":"5Pv0i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire20ce")

//# sourceMappingURL=index.975ef6c8.js.map
