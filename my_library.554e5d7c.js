!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequired7c6;function l(){try{return JSON.parse(localStorage.getItem("watched"))}catch(e){Notiflix.Notify.failure(e.message)}}function o(){try{return JSON.parse(localStorage.getItem("queue"))}catch(e){Notiflix.Notify.failure(e.message)}}null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=t),t}})),i("iE7OH").register(JSON.parse('{"2Y0K8":"my_library.554e5d7c.js","h4fm3":"movie.457cc533.png","kRSJQ":"my_library.8450bbaa.js","lk5QZ":"my_library.b070715d.css"}')),i("j1Fxp");const c=e=>{const t=e.map((({genres:e,poster_path:t,release_date:n,original_title:r,vote_average:a,id:i})=>{let l=e.join(", ");return e.length>2&&(l=e[0]+", "+e[1]+", Other"),`\n      <li class="film my-library-film">\n        <a href="#" class="film__link">\n          <div class="film__body-img">\n            <img\n              src="${t}"\n              alt="${r}"\n              class="film__img"\n              data-action="${i}"\n            />\n          </div>\n\n          <div class="film__informations">\n            <p class="film__name">${r}</p>\n            <p class="film__detalies">${l} | ${n}</p>\n          </div>\n        </a>\n      </li>\n      `})).join("");u.gallery.insertAdjacentHTML("beforeend",t)};var s;s=i("aNJCr").getBundleURL("2Y0K8")+i("iE7OH").resolve("h4fm3");const u={btnWatched:document.querySelector('[name="watched"]'),btnQueue:document.querySelector('[name="queue"]'),defaultText:document.querySelector('[name="default-text"]'),gallery:document.querySelector(".my-library-film-card"),buttonW:document.querySelector(".modal-watched-btn")};document.querySelector("body").addEventListener("click",(function(e){e.target.classList.contains("modal-watched-btn")&&f();e.target.classList.contains("modal-queue-btn")&&m();return}));const d=e=>{null===e||0===e.length?u.gallery.innerHTML=`<img style="width: 500px" src="${t(s)}" alt="There is nothing" />`:(u.gallery.innerHTML="",e.map((e=>c([e]))),u.defaultText.classList.add("is-hidden"))},f=()=>{let e=l();u.btnQueue.classList.remove("btn-header__active"),u.btnWatched.classList.add("btn-header__active"),d(e)},m=()=>{let e=o();u.btnQueue.classList.add("btn-header__active"),u.btnWatched.classList.remove("btn-header__active"),d(e)};f(),u.btnWatched.addEventListener("click",f),u.btnQueue.addEventListener("click",m),i("dsadE"),i("6VMVE")}();
//# sourceMappingURL=my_library.554e5d7c.js.map
