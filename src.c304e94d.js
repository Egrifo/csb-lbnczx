parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
window.onload=function(){var e=["","","","","","","","",""],n=document.getElementsByClassName("col-grid"),t=["X","O"];function o(){var n=!1;return e[0]===e[1]&&e[0]===e[2]&&""!==e[0]&&""!==e[1]&&""!==e[2]||e[3]===e[4]&&e[3]===e[5]&&""!==e[3]&&""!==e[4]&&""!==e[5]||e[6]===e[7]&&e[6]===e[8]&&""!==e[6]&&""!==e[7]&&""!==e[8]?(console.log("game done by row "+e),setTimeout(function(){alert("Game Over!")},500),n=!0):e[0]===e[3]&&e[0]===e[6]&&""!==e[0]&&""!==e[3]&&""!==e[6]||e[1]===e[4]&&e[1]===e[7]&&""!==e[1]&&""!==e[4]&&""!==e[7]||e[2]===e[5]&&e[2]===e[8]&&""!==e[2]&&""!==e[5]&&""!==e[8]?(console.log("game done by column"),setTimeout(function(){alert("Game Over!")},500),n=!0):e[0]===e[4]&&e[0]===e[8]&&""!==e[0]&&""!==e[4]&&""!==e[8]||e[2]===e[4]&&e[2]===e[6]&&""!==e[2]&&""!==e[4]&&""!==e[6]?(console.log("game done by diagonal"),n=!0,setTimeout(function(){alert("Game Over!")},500),n):n}var r=function(){var n;(n=this.getAttribute("data-grid"),e[n]=a,this.innerHTML=a,o())||(n=function(){for(var n="",t=!1,o=0;o<e.length;o++)if(""===e[o]){n=o,t=!0;break}return!1===t&&alert("No Winner!"),n}(),e[n]=i,document.querySelector('[data-grid="'.concat(n,'"]')).innerHTML=i,o())},a=t[Math.floor(Math.random()*t.length)],i=t.filter(function(e){return e!==a})[0];document.getElementById("player_symbol").innerHTML=a,document.getElementById("computer_symbol").innerHTML=i,document.getElementById("reset").addEventListener("click",function(){!function(){for(var t=0;t<e.length;t++)e[t]="",n[t].innerHTML=""}()});for(var l=0;l<n.length;l++)n[l].addEventListener("click",r,!1)};
},{}]},{},["H99C"], null)
//# sourceMappingURL=/csb-lbnczx/src.c304e94d.js.map