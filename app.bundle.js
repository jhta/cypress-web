(()=>{"use strict";var n={663:(n,e,t)=>{t.d(e,{Z:()=>a});var i=t(645),r=t.n(i)()((function(n){return n[1]}));r.push([n.id,"input {\n  border: none;\n  background-image: none;\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n}\ninput:focus {\n  outline: 0;\n}\nbody {\n  background: #ccc;\n  font-family: 'Open Sans', sans-serif;\n}\n.email-input {\n  background: white;\n  border: 1px solid #c3c2cf;\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 440px;\n  min-height: 96px;\n  position: relative;\n}\n.email-input--wrapper {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  padding: 8px;\n  overflow-y: auto;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  cursor: text;\n}\n.email-input--label {\n  font-size: 20px;\n  line-height: 27px;\n  color: #050038;\n}\n.email-input--container {\n  margin: 6rem;\n  background: #fff;\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  display: inline-block;\n}\n.email-input--group {\n  background: #f8f8f7;\n  padding: 24px 50px;\n  border-radius: 8px;\n}\n.email-input--buttons {\n  padding: 24px 50px;\n  border-radius: 8px;\n}\n.email-input--input {\n  font-size: 14px;\n  line-height: 24px;\n}\n.email-input--input::placeholder {\n  color: #c3c2cf;\n  opacity: 1;\n}\n.email-input--input:-ms-input-placeholder {\n  color: #c3c2cf;\n}\n.email-input--input::-ms-input-placeholder {\n  color: #c3c2cf;\n}\n.button {\n  font-family: 'Open Sans', sans-serif;\n  background: #4262ff;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: center;\n  color: white;\n  padding: 8px 16px;\n  cursor: pointer;\n  -webkit-appearance: button;\n  transition: transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  margin-right: 16px;\n}\n.button:active {\n  transform: scale(0.95);\n}\n.button:last-child {\n  margin-right: 0;\n}\n.email-block {\n  position: relative;\n  margin: 0;\n  margin-right: 8px;\n  margin-bottom: 4px;\n  display: inline-block;\n  padding: 0 8px;\n  padding-right: 24px;\n  font-size: 14px;\n  line-height: 24px;\n}\n.email-block.valid {\n  border-radius: 100px;\n  background: rgba(102, 153, 255, 0.2);\n}\n.email-block.invalid {\n  border-bottom: dashed #d92929 1px;\n}\n.i-close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 18px;\n  line-height: 16px;\n  padding: 4px 8px;\n  cursor: pointer;\n}\n.i-close:active {\n  transform: scale(0.95);\n}\n",""]);const a=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);i&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var i,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function o(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},i=[],r=0;r<n.length;r++){var l=n[r],c=e.base?l[0]+e.base:l[0],d=t[c]||0,s="".concat(c," ").concat(d);t[c]=d+1;var u=o(s),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:s,updater:v(p,e),references:1}),i.push(s)}return i}function c(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var a=t.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var o=r(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var d,s=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=s(e,r);else{var a=document.createTextNode(r),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(a,o[e]):n.appendChild(a)}}function p(n,e,t){var i=t.css,r=t.media,a=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var f=null,m=0;function v(n,e){var t,i,r;if(e.singleton){var a=m++;t=f||(f=c(e)),i=u.bind(null,t,a,!1),r=u.bind(null,t,a,!0)}else t=c(e),i=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var r=o(t[i]);a[r].references--}for(var c=l(n,e),d=0;d<t.length;d++){var s=o(t[d]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=c}}}}},e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),i=t(663);e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var r="add more people..";function a(n){return!!n&&/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(n)}function o(n,e){return"block-email-".concat(n,"-").concat(e)}function l(n,e){return function(t){var i=t.target.value,r=t.keyCode;if(function(n){return 13===n||188===n}(r)){var a=188===r?i.slice(0,-1):i;t.preventDefault(),t.stopPropagation(),n(a),e()}}}function c(n,e){return function(t){t.preventDefault(),t.stopPropagation();var i=(t.clipboardData||window.clipboardData).getData("text");n(i),e()}}function d(n,e){return function(t){t.preventDefault(),t.stopPropagation();var i=t.target.value;n(i),e()}}const s=function(n,e){var t=n.email,i=n.containerId,r=e.close,a=document.createElement("span"),l=o(i,t);return a.innerHTML="&times",a.classList.add("i-close"),a.setAttribute("data-test",l),a.addEventListener("click",(function(n){n.stopPropagation(),n.preventDefault(),r(t)})),a};function u(n,e){if(void 0===n)throw new Error("Argument $el is required");if(!((t=n)instanceof Element||t instanceof HTMLDocument))throw new Error("Container $el is not a DOM element");var t;this.emails={};var i=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).placeholder,e=void 0===n?r:n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.keyup,a=t.paste,o=t.blur,s=document.createElement("input");s.placeholder=e,s["data-test"]="input",s.id="input",s.classList.add("email-input--input");var u=function(){s.value=""},p=l(i,u);s.addEventListener("keyup",p);var f=c(a,u);s.addEventListener("paste",f);var m=d(o,u);return s.addEventListener("blur",m),s}(e,this.createInputHandlers()),a=document.createElement("span"),o=function(n){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).click,t=document.createElement("div");return t.classList.add("email-input--wrapper"),t.addEventListener("click",(function(n){n.preventDefault(),e()})),t}({},{click:function(){i.focus()}});o.appendChild(a),o.appendChild(i),n.appendChild(o),this.$blockElements=a,this.$el=n,this.id=n.id}u.prototype.createInputHandlers=function(){var n=this;return{keyup:function(e){n.addEmail(e)},paste:function(e){n.addEmailsFromPaste(e)},blur:function(e){n.addEmail(e)}}},u.prototype.getElement=function(){return this.$el},u.prototype.addEmail=function(n){if(n)if(this.emails[n])alert("Email ".concat(n," is already added"));else{var e={email:n,valid:a(n)};this.emails[n]=e,this.insertBlockEmail(e)}},u.prototype.insertBlockEmail=function(n){var e=this,t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.email,t=n.valid,i=n.containerId,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)throw new Error("`email` is required to create email block");if(!i)throw new Error("`containerId` is required to create email block");var a=r.close,l=t?"valid":"invalid",c=document.createElement("p");c.setAttribute("data-test",e),c.id=o(i,e),c.classList.add("email-block"),c.classList.add(l);var d=document.createTextNode(e),u=s({email:e,containerId:i},{close:a});return c.appendChild(d),c.appendChild(u),c}({email:n.email,valid:n.valid,containerId:this.id},{close:function(n){console.log("to remove",n),e.removeBlockEmail(n)}});this.$blockElements.appendChild(t)},u.prototype.removeBlockEmail=function(n){if(n){var e=o(this.id,n),t=document.getElementById(e);t&&t.parentNode&&(t.parentNode.removeChild(t),delete this.emails[n])}},u.prototype.addEmailsFromPaste=function(n){var e=this;n&&n.split(",").forEach((function(n){return e.addEmail(n)}))};!function(){var n=function(n,e){var t=new u(n,e);return{getElement:function(){return t.getElement()},addEmail:function(n){return t.addEmail(n)},countValidEmails:function(){return Object.values(t.emails).filter((function(n){return n.valid})).length}}}(document.querySelector("#emails-input"));console.log(n);var e=document.getElementById("button-add"),t=1;e.addEventListener("click",(function(e){e.preventDefault(),n.addEmail("email".concat(t,"@miro.com")),t++})),document.getElementById("button-count").addEventListener("click",(function(e){e.preventDefault();var t=n.countValidEmails();alert("Valid emails: ".concat(t," ✅"))}))}()})()})();