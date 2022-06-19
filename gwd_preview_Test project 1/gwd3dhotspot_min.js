(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var b="function"==typeof Object.create?Object.create:function(a){function c(){}c.prototype=a;return new c},d;if("function"==typeof Object.setPrototypeOf)d=Object.setPrototypeOf;else{var e;a:{var f={a:!0},g={};try{g.__proto__=f;e=g.a;break a}catch(a){}e=!1}d=e?function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}var h=d;function k(){return HTMLElement.call(this)||this}var l=HTMLElement;k.prototype=b(l.prototype);k.prototype.constructor=k;if(h)h(k,l);else for(var m in l)if("prototype"!=m)if(Object.defineProperties){var n=Object.getOwnPropertyDescriptor(l,m);n&&Object.defineProperty(k,m,n)}else k[m]=l[m];customElements.define("gwd-3d-hotspot",k);}).call(this);
