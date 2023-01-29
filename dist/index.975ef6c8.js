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
let button7 = document.getElementById("menu-selected7");
let button11 = document.getElementById("menuselected11");
let button22 = document.getElementById("menuselected22");
let button33 = document.getElementById("menuselected33");
let button44 = document.getElementById("menuselected44");
let button66 = document.getElementById("menuselected66");
let button77 = document.getElementById("menuselected77");
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
button7.addEventListener("click", async ()=>{
    await elegir("7");
    await (0, _indexDefault.default)();
    await scroll();
});
button11.addEventListener("click", async ()=>{
    await elegir("1");
    await (0, _indexDefault.default)();
    await scroll();
    document.getElementById("btn-menu").checked = false;
});
button22.addEventListener("click", async ()=>{
    await elegir("2");
    await (0, _indexDefault.default)();
    await scroll();
    document.getElementById("btn-menu").checked = false;
});
button33.addEventListener("click", async ()=>{
    await elegir("3");
    await (0, _indexDefault.default)();
    await scroll();
    document.getElementById("btn-menu").checked = false;
});
button44.addEventListener("click", async ()=>{
    await elegir("4");
    await (0, _indexDefault.default)();
    await scroll();
    document.getElementById("btn-menu").checked = false;
});
button66.addEventListener("click", async ()=>{
    await elegir("6");
    await (0, _indexDefault.default)();
    await scroll();
    document.getElementById("btn-menu").checked = false;
});
button77.addEventListener("click", async ()=>{
    await elegir("7");
    await (0, _indexDefault.default)();
    await scroll();
    document.getElementById("btn-menu").checked = false;
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

},{"./routes/index":"3L9mC","./utils/viewsede":"jC5Ub","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3L9mC":[function(require,module,exports) {
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
var _plantasm = require("../products/plantasm");
var _plantasmDefault = parcelHelpers.interopDefault(_plantasm);
let title = "";
const data = ()=>{
    let hash = (0, _getHashDefault.default)();
    if (hash == "menu-selected1") {
        title = "";
        return 0, _homeopatiaDefault.default;
    } else if (hash == "menu-selected2") {
        title = "";
        return 0, _serviciosDefault.default;
    } else if (hash == "menu-selected3") {
        title = "";
        return 0, _productosDefault.default;
    } else if (hash == "menu-selected4") {
        title = "";
        return 0, _contactoDefault.default;
    } else if (hash == "menu-selected5") {
        title = "";
        return 0, _sedeDefault.default;
    } else if (hash == "menu-selected6") {
        title = "";
        return 0, _herbalfruitDefault.default;
    } else if (hash == "menu-selected7") {
        title = "";
        return 0, _plantasmDefault.default;
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

},{"../products/productos":"ceCzh","../products/sede":"jfqGO","../products/servicios":"lye8P","../products/homeopatia":"ijUHX","../components/item":"klNFr","../utils/getHash":"cBXxo","../products/herbalfruit":"fpzWO","../products/contacto":"d6ZcD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../products/plantasm":"jZNxp"}],"ceCzh":[function(require,module,exports) {
const products = [
    {
        name: "Herbolog\xeda y Fitoterapia",
        photo: "https://i.postimg.cc/zvqGH8d1/Captura-de-pantalla-2023-01-28-185715.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/2SSLXF7f/2.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/wj4RKywR/3.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/NG8ysPNc/4.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/1tw8NWsD/5.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/d07kJsfH/6.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/RhTqgN3F/7.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/wMz75hjZ/8.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/s2tBxFdV/9.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/5NxX6qGF/10.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/bwrdRYqy/11.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/xdbCWskB/12.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/TwMwGrg1/13.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/G2FppHxQ/14.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/Z5Qnskqr/15.png",
        description: ""
    }
];
module.exports = products;

},{}],"jfqGO":[function(require,module,exports) {
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

},{}],"lye8P":[function(require,module,exports) {
const services = [
    {
        name: "",
        photo: "https://i.postimg.cc/Pq3V8PRD/1.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/qRNbc4P5/2.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/x8KPgCtt/3.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/43SwxjYb/4.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/KvSqLXJ0/5.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/Bv6MsJnn/6.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/7PTtfPMC/7.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/T189rmqK/8.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/pXf0J0SR/9.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/3x3tSXMp/10.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/JzKP9smF/11.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/DZ46J5sV/12.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/SQ8VmTkC/Captura-de-pantalla-2023-01-28-071615.png",
        description: ""
    }
];
module.exports = services;

},{}],"ijUHX":[function(require,module,exports) {
const homeopatia = [
    {
        name: "Homeopat\xeda",
        photo: "https://i.postimg.cc/vTfp9fkB/11.pngs",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/P53MrXzw/2.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/Qt5gbpLQ/3.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/nLNYB3WV/4.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/L86TpYfS/5.png",
        description: ""
    }
];
module.exports = homeopatia;

},{}],"klNFr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const returnItem = (data)=>{
    let recurso;
    let cuadrox;
    let cuadroy;
    let cuadro;
    let clase = "div";
    let clasea = "div";
    if (data.class == "item-contact") {
        clase = "a";
        clasea = `a href="${data.href}"`;
    }
    if (data.source) recurso = data.source;
    else recurso = `<img src=${data.photo} alt="">`;
    if (data.nombres) {
        cuadrox = data.nombres;
        cuadroy = data.indicaciones;
        cuadro = `  <div class="cuadro">
            <div class="cuadrox cuadros"><h2>Nombre:</h2> <br> <br>${cuadrox.join("<br><br>")}</div>
            <div class="cuadroy cuadros"><h2>Indicación:</h2><br> <br>${cuadroy.join("<br><br>")}</div>
            </div>`;
    } else cuadro = `<p>${data.description}</p>`;
    return `<${clasea} class="item-info ${data.class}">
    <h3>${data.name}</h3>
    ${recurso}
    ${cuadro}
    
</${clase}>`;
};
exports.default = returnItem;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fpzWO":[function(require,module,exports) {
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
        description: "\xa1Haz click para escribirnos por Whatsapp!",
        photo: "https://cdn-icons-png.flaticon.com/512/2504/2504957.png",
        class: "item-contact",
        href: "https://api.whatsapp.com/send?phone=+573132381049&text=Hola,%20estoy%20interesado%20en%20mas%20informaci%C3%B3n%20respecto:"
    },
    {
        name: "Facebook",
        description: "\xa1Haz click para escribirnos por Facebook!",
        photo: "https://cdn-icons-png.flaticon.com/512/2504/2504903.png",
        class: "item-contact",
        href: "https://www.facebook.com/profile.php?id=100087411810135&mibextid=ZbWKwL"
    },
    {
        name: "Telefono",
        description: "\xa1Haz click para LLamarnos 3132381049!",
        photo: "https://cdn-icons-png.flaticon.com/512/226/226277.png",
        class: "item-contact",
        href: "tel:+3132381049"
    },
    {
        name: "Estamos ubicados en San Gil-Santander",
        description: "Cra 9 #9-35 Frente a la fiscalia municipal",
        source: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7481161943338!2d-73.13279568255615!3d6.553450899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c7262194e579%3A0x254a44ac47295636!2sCra.%209%20%239-35%2C%20San%20Gil%2C%20Santander!5e0!3m2!1ses!2sco!4v1673370973047!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        class: "item-contact"
    }
];
module.exports = contacto;

},{}],"jZNxp":[function(require,module,exports) {
const plantasm = [
    {
        name: "Plantas Maestras",
        photo: "https://i.postimg.cc/L60k9yTN/Captura-de-pantalla-2023-01-28-193447.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/wMq5vZZb/2.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/j2MHJvrq/3.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/MZ5b4Zjk/4.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/Sx26JW1q/5.png",
        description: ""
    },
    {
        name: "",
        photo: "https://i.postimg.cc/FsKgQtjY/6.png",
        description: ""
    }
];
module.exports = plantasm;

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
