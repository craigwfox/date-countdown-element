(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=window,V=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),q=new WeakMap;let it=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&q.set(e,t))}return t}toString(){return this.cssText}};const ct=r=>new it(typeof r=="string"?r:r+"",void 0,W),dt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new it(e,r,W)},ut=(r,t)=>{V?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=N.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},K=V?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ct(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var T;const H=window,Z=H.trustedTypes,pt=Z?Z.emptyScript:"",J=H.reactiveElementPolyfillSupport,I={toAttribute(r,t){switch(t){case Boolean:r=r?pt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},rt=(r,t)=>t!==r&&(t==t||r==r),R={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:rt},j="finalized";let g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=R){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||R}static finalize(){if(this.hasOwnProperty(j))return!1;this[j]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(K(i))}else t!==void 0&&e.push(K(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ut(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=R){var i;const n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){const o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:I).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){const o=i.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:I;this._$El=n,this[n]=a.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||rt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};g[j]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},J==null||J({ReactiveElement:g}),((T=H.reactiveElementVersions)!==null&&T!==void 0?T:H.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const O=window,y=O.trustedTypes,F=y?y.createPolicy("lit-html",{createHTML:r=>r}):void 0,B="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,nt="?"+v,$t=`<${nt}>`,m=document,w=()=>m.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",ot=Array.isArray,vt=r=>ot(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",L=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,Q=/>/g,_=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,Y=/"/g,lt=/^(?:script|style|textarea|title)$/i,_t=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),ft=_t(1),A=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),tt=new WeakMap,f=m.createTreeWalker(m,129,null,!1);function ht(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return F!==void 0?F.createHTML(t):t}const mt=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":"",o=E;for(let a=0;a<e;a++){const l=r[a];let h,c,d=-1,p=0;for(;p<l.length&&(o.lastIndex=p,c=o.exec(l),c!==null);)p=o.lastIndex,o===E?c[1]==="!--"?o=G:c[1]!==void 0?o=Q:c[2]!==void 0?(lt.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=_):c[3]!==void 0&&(o=_):o===_?c[0]===">"?(o=i??E,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?_:c[3]==='"'?Y:X):o===Y||o===X?o=_:o===G||o===Q?o=E:(o=_,i=void 0);const $=o===_&&r[a+1].startsWith("/>")?" ":"";n+=o===E?l+$t:d>=0?(s.push(h),l.slice(0,d)+B+l.slice(d)+v+$):l+v+(d===-2?(s.push(void 0),a):$)}return[ht(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class P{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const a=t.length-1,l=this.parts,[h,c]=mt(t,e);if(this.el=P.createElement(h,s),f.currentNode=this.el.content,e===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(i=f.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const p of i.getAttributeNames())if(p.endsWith(B)||p.startsWith(v)){const $=c[o++];if(d.push(p),$!==void 0){const at=i.getAttribute($.toLowerCase()+B).split(v),U=/([.?@])?(.*)/.exec($);l.push({type:1,index:n,name:U[2],strings:at,ctor:U[1]==="."?yt:U[1]==="?"?bt:U[1]==="@"?Et:M})}else l.push({type:6,index:n})}for(const p of d)i.removeAttribute(p)}if(lt.test(i.tagName)){const d=i.textContent.split(v),p=d.length-1;if(p>0){i.textContent=y?y.emptyScript:"";for(let $=0;$<p;$++)i.append(d[$],w()),f.nextNode(),l.push({type:2,index:++n});i.append(d[p],w())}}}else if(i.nodeType===8)if(i.data===nt)l.push({type:2,index:n});else{let d=-1;for(;(d=i.data.indexOf(v,d+1))!==-1;)l.push({type:7,index:n}),d+=v.length-1}n++}}static createElement(t,e){const s=m.createElement("template");return s.innerHTML=t,s}}function b(r,t,e=r,s){var i,n,o,a;if(t===A)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const h=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,s)),s!==void 0?((o=(a=e)._$Co)!==null&&o!==void 0?o:a._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=b(r,l._$AS(r,t.values),l,s)),t}class gt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:m).importNode(s,!0);f.currentNode=n;let o=f.nextNode(),a=0,l=0,h=i[0];for(;h!==void 0;){if(a===h.index){let c;h.type===2?c=new x(o,o.nextSibling,this,t):h.type===1?c=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(c=new St(o,this,t)),this._$AV.push(c),h=i[++l]}a!==(h==null?void 0:h.index)&&(o=f.nextNode(),a++)}return f.currentNode=m,n}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class x{constructor(t,e,s,i){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):vt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(m.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=P.createElement(ht(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{const o=new gt(n,this),a=o.u(this.options);o.v(s),this.$(a),this._$AH=o}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new P(t)),e}T(t){ot(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new x(this.k(w()),this.k(w()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class M{constructor(t,e,s,i,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=b(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{const a=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=b(this,a[s+l],e,l),h===A&&(h=this._$AH[l]),o||(o=!C(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class yt extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const At=y?y.emptyScript:"";class bt extends M{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,At):this.element.removeAttribute(this.name)}}class Et extends M{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=b(this,t,e,0))!==null&&s!==void 0?s:u)===A)return;const i=this._$AH,n=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class St{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const et=O.litHtmlPolyfillSupport;et==null||et(P,x),((z=O.litHtmlVersions)!==null&&z!==void 0?z:O.litHtmlVersions=[]).push("2.8.0");const wt=(r,t,e)=>{var s,i;const n=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let o=n._$litPart$;if(o===void 0){const a=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=o=new x(t.insertBefore(w(),a),a,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var k,D;class S extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return A}}S.finalized=!0,S._$litElement$=!0,(k=globalThis.litElementHydrateSupport)===null||k===void 0||k.call(globalThis,{LitElement:S});const st=globalThis.litElementPolyfillSupport;st==null||st({LitElement:S});((D=globalThis.litElementVersions)!==null&&D!==void 0?D:globalThis.litElementVersions=[]).push("3.3.3");class Ct extends S{static get properties(){return{date:{type:String},_days:{type:String},_hours:{type:String},_minutes:{type:String},_seconds:{type:String}}}constructor(){super(),this.date="",this._days="0",this._hours="0",this._minutes="0",this._seconds="0",this._dateDifference=new Date(this.date)-new Date}render(){return console.log(this.date),this._countdown(),setTimeout(()=>{this._countdown()},1e3),ft`
			<div class="grid">
				<div class="item">
					<span>${this._formatNumber(this._days)}</span>
					<span>Days</span>
				</div>
				<div class="item">
					<span>${this._formatNumber(this._hours)}</span>
					<span>Hours</span>
				</div>
				<div class="item">
					<span>${this._formatNumber(this._minutes)}</span>
					<span>Minutes</span>
				</div>
				<div class="item">
					<span>${this._formatNumber(this._seconds)}</span>
					<span>Seconds</span>
				</div>
			</div>
		`}_countdown(){let t=Math.floor((new Date(this.date)-new Date)/1e3);t>0&&(this._days=Math.floor(t/86400),this._hours=Math.floor(t%(3600*24)/3600),this._minutes=Math.floor(t%3600/60),this._seconds=Math.floor(t%60))}_formatNumber(t){return t<10?"0"+t:t}static get styles(){return dt`
			:host {
				--ct-font-size: 3rem;
				--ct-font-family: "Inter", system-ui, sans-serif;
				--ct-grid-gap: 0.5rem;
				--ct-grid-col: repeat(4, calc(var(--ct-font-size) * 2.7));
				--ct-item-pb: 0.5rem;
				--ct-item-pi: 1.5rem;
				--ct-item-bg: #29406d;
				--ct-item-border: 0.4rem solid #101623;
				--ct-item-radius: 2rem;
				--ct-number-color: #ffcc4c;
				--ct-number-size: 100%;
				--ct-number-weight: 700;
				--ct-label-color: aliceblue;
				--ct-label-size: 30%;
				--ct-label-weight: 600;

				font-size: var(--ct-font-size);
				font-family: var(--ct-font-family);
			}

			.grid {
				display: grid;
				gap: var(--ct-grid-gap);
				grid-template-columns: var(--ct-grid-col);
			}

			.item {
				display: grid;
				place-items: center;

				padding-block: var(--ct-item-pb);
				padding-inline: var(--ct-item-pi);

				background: var(--ct-item-bg);
				border: var(--ct-item-border);
				border-radius: var(--ct-item-radius);
			}

			.item span:first-child {
				color: var(--ct-number-color);
				font-size: var(--ct-number-size);
				font-weight: var(--ct-number-weight);
			}

			.item span:last-child {
				color: var(--ct-label-color);
				font-size: var(--ct-label-size);
				font-weight: var(--ct-label-weight);
			}
		`}}window.customElements.define("countdown-timer",Ct);
