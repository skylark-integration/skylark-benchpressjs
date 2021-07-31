/**
 * skylark-benchpress - A version of benchpress.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-benchpress/
 * @license MIT
 */
!function(r,n){var e=n.define,require=n.require,t="function"==typeof e&&e.amd,o=!t&&"undefined"!=typeof exports;if(!t&&!e){var u={};e=n.define=function(r,n,e){"function"==typeof e?(u[r]={factory:e,deps:n.map(function(n){return function(r,n){if("."!==r[0])return r;var e=n.split("/"),t=r.split("/");e.pop();for(var o=0;o<t.length;o++)"."!=t[o]&&(".."==t[o]?e.pop():e.push(t[o]));return e.join("/")}(n,r)}),resolved:!1,exports:null},require(r)):u[r]={factory:null,resolved:!0,exports:e}},require=n.require=function(r){if(!u.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=u[r];if(!module.resolved){var e=[];module.deps.forEach(function(r){e.push(require(r))}),module.exports=module.factory.apply(n,e)||null,module.resolved=!0}return module.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-benchpress/benchpress",["skylark-langx-ns"],function(r){var n=function(){"use strict";function r(r){return null==r||Array.isArray(r)&&0===r.length?"":r}function n(r,n){if(!r||"object"!=typeof r)return"";for(var e="",t=Object.keys(r),o=t.length,u=0;u<o;u+=1){var i=t[u];e+=n(i,u,o,r[i])}return e}function e(r,n,e,t){if("function"!=typeof n[e])return"";try{var o=n[e].apply(r,t);return o||""}catch(r){return""}}return"function"!=typeof Promise.try&&(Promise.try=function(r){return new Promise(function(n){return n(r())})}),function(t,o,u){return r(u(t,o,r,n,e)).toString()}}(),e={};e.runtime=n,e.helpers={},e.registerHelper=function(r,n){e.helpers[r]=n};var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=function(r){return t[r]},u=/[&<>"'`=]/g;e.registerHelper("__escape",function(r){return null==r?"":r?r.toString().replace(u,o):String(r)}),e.cache={},e.globals={},e.setGlobal=function(r,n){e.globals[r]=n};var i=Object.assign||jQuery.extend;function s(r,t,o){return t=e.addGlobals(t||{}),Promise.try(function(){return e.cache[r]=e.cache[r]||function(r){return new Promise(function(n,t){var o=e.loader(r,function(r){n(r)});o&&o.then&&o.then(n,t)})}(r),e.cache[r]}).then(function(r){return o&&(r=r.blocks&&r.blocks[o]),r?n(e.helpers,t,r):""})}return e.addGlobals=function(r){return i({},e.globals,r)},e.flush=function(){e.cache={}},e.render=s,e.parse=function(r,n,e,t){t||"object"!=typeof n||"function"!=typeof e||(t=e,e=n,n=null);if("function"!=typeof t)throw TypeError("Invalid Arguments: callback must be a function");if(!r)return void t("");s(r,e,n).then(function(r){return setTimeout(t,0,r)},function(r){return console.error(r)})},e.registerLoader=function(r){e.loader=r},r.attach("itg.benchpress",e)}),r("skylark-benchpress/main",["./benchpress"],function(r){return r}),r("skylark-benchpress",["skylark-benchpress/main"],function(r){return r})}(e),!t){var i=require("skylark-langx-ns");o?module.exports=i:n.skylarkjs=i}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-benchpress.js.map
