(()=>{if(window.customElements){var e=window.customElements.define;window.customElements.define=function(t,a,r){window.customElements.get(t)?console.warn("Trying to register a registered tag: %s",t):e.apply(this,arguments)}}window.ueWebcomponentPolyfillsLoaded=!0,window.webcomponents_ready=!0})(),(()=>{"use strict";const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),r=new WeakMap;class o{constructor(e,t,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const a=this.t;if(t&&void 0===e){const t=void 0!==a&&1===a.length;t&&(e=r.get(a)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(a,e))}return e}toString(){return this.cssText}}const s=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,a,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[r+1]),e[0]);return new o(r,e,a)},i=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,a))(t)})(e):e;var c;const l=window,n=l.trustedTypes,d=n?n.emptyScript:"",u=l.reactiveElementPolyfillSupport,h={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},m=(e,t)=>t!==e&&(t==t||e==e),p={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:m},b="finalized";class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,a)=>{const r=this._$Ep(a,t);void 0!==r&&(this._$Ev.set(r,a),e.push(r))})),e}static createProperty(e,t=p){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const a="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,a,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,a){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||p}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const a of t)this.createProperty(a,e[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(i(e))}else void 0!==e&&t.push(i(e));return t}static _$Ep(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,a;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(a=e.hostConnected)||void 0===a||a.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var a;const r=null!==(a=this.shadowRoot)&&void 0!==a?a:this.attachShadow(this.constructor.shadowRootOptions);return((a,r)=>{t?a.adoptedStyleSheets=r.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):r.forEach((t=>{const r=document.createElement("style"),o=e.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=t.cssText,a.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$EO(e,t,a=p){var r;const o=this.constructor._$Ep(e,a);if(void 0!==o&&!0===a.reflect){const s=(void 0!==(null===(r=a.converter)||void 0===r?void 0:r.toAttribute)?a.converter:h).toAttribute(t,a.type);this._$El=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,t){var a;const r=this.constructor,o=r._$Ev.get(e);if(void 0!==o&&this._$El!==o){const e=r.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(a=e.converter)||void 0===a?void 0:a.fromAttribute)?e.converter:h;this._$El=o,this[o]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,a){let r=!0;void 0!==e&&(((a=a||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===a.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,a))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const a=this._$AL;try{t=this.shouldUpdate(a),t?(this.willUpdate(a),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(a)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(a)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var v;g[b]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(c=l.reactiveElementVersions)&&void 0!==c?c:l.reactiveElementVersions=[]).push("1.6.3");const _=window,f=_.trustedTypes,w=f?f.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,$="?"+y,k=`<${$}>`,E=document,z=()=>E.createComment(""),S=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,A=e=>T(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),C="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,R=/>/g,M=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,P=/"/g,D=/^(?:script|style|textarea|title)$/i,j=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),L=j(1),O=(j(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),H=new WeakMap,B=E.createTreeWalker(E,129,null,!1);function V(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(t):t}const G=(e,t)=>{const a=e.length-1,r=[];let o,s=2===t?"<svg>":"",i=N;for(let t=0;t<a;t++){const a=e[t];let c,l,n=-1,d=0;for(;d<a.length&&(i.lastIndex=d,l=i.exec(a),null!==l);)d=i.lastIndex,i===N?"!--"===l[1]?i=U:void 0!==l[1]?i=R:void 0!==l[2]?(D.test(l[2])&&(o=RegExp("</"+l[2],"g")),i=M):void 0!==l[3]&&(i=M):i===M?">"===l[0]?(i=null!=o?o:N,n=-1):void 0===l[1]?n=-2:(n=i.lastIndex-l[2].length,c=l[1],i=void 0===l[3]?M:'"'===l[3]?P:I):i===P||i===I?i=M:i===U||i===R?i=N:(i=M,o=void 0);const u=i===M&&e[t+1].startsWith("/>")?" ":"";s+=i===N?a+k:n>=0?(r.push(c),a.slice(0,n)+x+a.slice(n)+y+u):a+y+(-2===n?(r.push(void 0),t):u)}return[V(e,s+(e[a]||"<?>")+(2===t?"</svg>":"")),r]};class q{constructor({strings:e,_$litType$:t},a){let r;this.parts=[];let o=0,s=0;const i=e.length-1,c=this.parts,[l,n]=G(e,t);if(this.el=q.createElement(l,a),B.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=B.nextNode())&&c.length<i;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith(x)||t.startsWith(y)){const a=n[s++];if(e.push(t),void 0!==a){const e=r.getAttribute(a.toLowerCase()+x).split(y),t=/([.?@])?(.*)/.exec(a);c.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?X:"?"===t[1]?Q:"@"===t[1]?ee:J})}else c.push({type:6,index:o})}for(const t of e)r.removeAttribute(t)}if(D.test(r.tagName)){const e=r.textContent.split(y),t=e.length-1;if(t>0){r.textContent=f?f.emptyScript:"";for(let a=0;a<t;a++)r.append(e[a],z()),B.nextNode(),c.push({type:2,index:++o});r.append(e[t],z())}}}else if(8===r.nodeType)if(r.data===$)c.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(y,e+1));)c.push({type:7,index:o}),e+=y.length-1}o++}}static createElement(e,t){const a=E.createElement("template");return a.innerHTML=e,a}}function F(e,t,a=e,r){var o,s,i,c;if(t===O)return t;let l=void 0!==r?null===(o=a._$Co)||void 0===o?void 0:o[r]:a._$Cl;const n=S(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==n&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===n?l=void 0:(l=new n(e),l._$AT(e,a,r)),void 0!==r?(null!==(i=(c=a)._$Co)&&void 0!==i?i:c._$Co=[])[r]=l:a._$Cl=l),void 0!==l&&(t=F(e,l._$AS(e,t.values),l,r)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:a},parts:r}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:E).importNode(a,!0);B.currentNode=o;let s=B.nextNode(),i=0,c=0,l=r[0];for(;void 0!==l;){if(i===l.index){let t;2===l.type?t=new K(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new te(s,this,e)),this._$AV.push(t),l=r[++c]}i!==(null==l?void 0:l.index)&&(s=B.nextNode(),i++)}return B.currentNode=E,o}v(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class K{constructor(e,t,a,r){var o;this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=r,this._$Cp=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=F(this,e,t),S(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==O&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):A(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==W&&S(this._$AH)?this._$AA.nextSibling.data=e:this.$(E.createTextNode(e)),this._$AH=e}g(e){var t;const{values:a,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=q.createElement(V(r.h,r.h[0]),this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.v(a);else{const e=new Y(o,this),t=e.u(this.options);e.v(a),this.$(t),this._$AH=e}}_$AC(e){let t=H.get(e.strings);return void 0===t&&H.set(e.strings,t=new q(e)),t}T(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,r=0;for(const o of e)r===t.length?t.push(a=new K(this.k(z()),this.k(z()),this,this.options)):a=t[r],a._$AI(o),r++;r<t.length&&(this._$AR(a&&a._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var a;for(null===(a=this._$AP)||void 0===a||a.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class J{constructor(e,t,a,r,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=W}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,a,r){const o=this.strings;let s=!1;if(void 0===o)e=F(this,e,t,0),s=!S(e)||e!==this._$AH&&e!==O,s&&(this._$AH=e);else{const r=e;let i,c;for(e=o[0],i=0;i<o.length-1;i++)c=F(this,r[a+i],t,i),c===O&&(c=this._$AH[i]),s||(s=!S(c)||c!==this._$AH[i]),c===W?e=W:e!==W&&(e+=(null!=c?c:"")+o[i+1]),this._$AH[i]=c}s&&!r&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class X extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}const Z=f?f.emptyScript:"";class Q extends J{constructor(){super(...arguments),this.type=4}j(e){e&&e!==W?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class ee extends J{constructor(e,t,a,r,o){super(e,t,a,r,o),this.type=5}_$AI(e,t=this){var a;if((e=null!==(a=F(this,e,t,0))&&void 0!==a?a:W)===O)return;const r=this._$AH,o=e===W&&r!==W||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==W&&(r===W||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,a;"function"==typeof this._$AH?this._$AH.call(null!==(a=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==a?a:this.element,e):this._$AH.handleEvent(e)}}class te{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){F(this,e)}}const ae=_.litHtmlPolyfillSupport;var re,oe;null==ae||ae(q,K),(null!==(v=_.litHtmlVersions)&&void 0!==v?v:_.litHtmlVersions=[]).push("2.8.0");class se extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const a=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=a.firstChild),a}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,a)=>{var r,o;const s=null!==(r=null==a?void 0:a.renderBefore)&&void 0!==r?r:t;let i=s._$litPart$;if(void 0===i){const e=null!==(o=null==a?void 0:a.renderBefore)&&void 0!==o?o:null;s._$litPart$=i=new K(t.insertBefore(z(),e),e,void 0,null!=a?a:{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return O}}se.finalized=!0,se._$litElement$=!0,null===(re=globalThis.litElementHydrateSupport)||void 0===re||re.call(globalThis,{LitElement:se});const ie=globalThis.litElementPolyfillSupport;null==ie||ie({LitElement:se}),(null!==(oe=globalThis.litElementVersions)&&void 0!==oe?oe:globalThis.litElementVersions=[]).push("3.3.3"),window.customElements.define("ue-carousel-controls",class extends se{static get styles(){return s`
            .ue-c-carousel__controls {
                position: absolute;
                cursor: pointer;
                box-shadow: unset;
                z-index: 2;
            }

            .ue-c-carousel__controls--back,
            .ue-c-carousel__controls--next {
                top: 50%;
                transform: translateY(-50%);
                width: 2.2em;
                height: var(--ue-c-carousel-controls-height, 3.2em);
                transition: 0.3s;
                background: transparent;
                border-radius: 0;
                border-width: 0;
                border-style: none;
                background-color: #c2c2c2;
                background-color: var(
                    --ue-c-carousel-controls-background-color,
                    rgba(194, 194, 194, 1)
                );
                box-sizing: border-box;
            }

            .ue-c-carousel__controls--back svg,
            .ue-c-carousel__controls--next svg {
                fill: #fff;
                fill: var(--ue-c-carousel-controls-fill, #fff);
            }

            .ue-c-carousel__controls--back:hover,
            .ue-c-carousel__controls--next:hover {
                background-color: #727272;
                background-color: var(
                    --ue-c-carousel-controls-hover-background-color,
                    rgba(114, 114, 114, 1)
                );
            }

            .ue-c-carousel__controls--back {
                left: 85px;
            }

            .ue-c-carousel__controls--back .is-arrow-icon {
                transform: rotate(-180deg);
            }

            .ue-c-carousel__controls--next {
                right: 0;
            }

            .hidden-content,
            .is-hidden-text {
                position: absolute;
                height: 1px;
                width: 1px;
                overflow: hidden;
                clip: rect(1px, 1px, 1px, 1px);
                clip-path: polygon(0 0, 0 0, 0 0, 0 0);
            }

            .ue-c-carousel__show-more {
                top: 7px;
                right: 0;
                cursor: pointer;
                position: absolute;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                padding: 0 0.5rem;
                transition: 0.3s;
                background: transparent;
                border-radius: 0;
                border-width: 0;
                border-style: none;
                background-color: var(
                    --ue-c-carousel-show-more-background-color,
                    #f7f7f7
                );
                color: #0072d8;
                color: var(--ue-c-carousel-show-more-color, #0072d8);
                font-size: var(--ue-c-carousel-show-more-font-size, 0.8rem);
                font-weight: var(--ue-c-carousel-show-more-font-weight, 600);
                text-decoration: none;
            }

            .ue-c-carousel__show-more::before {
                content: "";
                display: block;
                position: absolute;
                top: 0;
                left: -1rem;
                background: transparent;
                height: 100%;
                width: 1rem;
                background-image: -webkit-linear-gradient(
                    top,
                    hsla(0, 5%, 100%, 0),
                    var(--ue-c-carousel-show-more-background-color, #f7f7f7)
                );
                background-image: -moz-linear-gradient(
                    top,
                    hsla(0, 5%, 100%, 0),
                    var(--ue-c-carousel-show-more-background-color, #f7f7f7)
                );
                background-image: -o-linear-gradient(
                    top,
                    hsla(0, 5%, 100%, 0),
                    var(--ue-c-carousel-show-more-background-color, #f7f7f7)
                );
                background-image: linear-gradient(
                    to right,
                    hsla(0, 5%, 100%, 0),
                    var(--ue-c-carousel-show-more-background-color, #f7f7f7)
                );
            }

            .ue-c-carousel__show-more span {
                padding: 0 0.2rem;
            }

            .ue-c-carousel__show-more svg {
                fill: #0072d8;
                fill: var(--ue-c-carousel-show-more-fill, #0072d8);
            }

            .ue-c-carousel__show-more:hover {
                color: #68a5dc;
                color: var(--ue-c-carousel-show-more-hover-color, #68a5dc);
            }

            .ue-c-carousel__show-more:hover .is-arrow-icon {
                fill: #68a5dc;
                fill: var(--ue-c-carousel-show-more-hover-fill, #68a5dc);
            }
            @media all and (-ms-high-contrast: none) {
                .ue-c-carousel__controls--back {
                    left: 0px;
                }
            }
        `}static get properties(){return{showLeftArrow:{type:Boolean},showRightArrow:{type:Boolean},controls:{type:Boolean},containerWidth:{type:Number},viewportWidth:{type:Number},intersectionWidth:{type:Number,attribute:"intersection-width"},slideNumber:{type:Number},currentSlide:{type:Number},scrollPosition:{type:Number,attribute:"scroll-position"},link:{type:String},langViewAll:{type:String,attribute:"lang-view-all"},contentRef:{type:Object}}}constructor(){super(),this.setProperties()}setProperties(){this.showLeftArrow=!1,this.showRightArrow=!1,this.containerWidth=0,this.viewportWidth=1,this.intersectionWidth=0,this.slideNumber=0,this.currentSlide=0,this.scrollPosition=0}firstUpdated(){this.contentRef=this.querySelector('[slot="content"]'),this.contentRef?.addEventListener("scroll",this.calculateCurrentSlide.bind(this)),window.addEventListener("resize",(()=>{this.contentRef=this.querySelector('[slot="content"]'),this.updateSlotContent()}))}calculateCurrentSlide(){let e=0,t=0;this.contentRef&&(e=Math.round(this.contentRef.scrollLeft),t=this.contentRef.scrollWidth),this.currentSlide=Math.ceil(e/this.viewportWidth),this.showLeftArrow=e>0,e+this.viewportWidth<t?this.showRightArrow=!0:this.showRightArrow=!1}calculateSlideNumber(){this.contentRef&&(this.slideNumber=Math.ceil(this.containerWidth/(this.viewportWidth-this.intersectionWidth)),this.calculateCurrentSlide())}moveSlide(e){if(e&&e.currentTarget&&this.contentRef){let t=parseInt(e.currentTarget.getAttribute("data-offset"));isNaN(t)||(this.currentSlide+=t,this.contentRef.scrollLeft+=(this.viewportWidth-this.intersectionWidth)*t)}}updateScroll(){this.contentRef&&(this.contentRef.scrollLeft=this.scrollPosition)}isValid(e,t,a){return e?t||null:a||null}_setDataUrl(e,t){if(e&&"function"==typeof URL){let a=new URL(e);return a.searchParams&&a.searchParams.set("intcmp","MODCARR01"),t&&a.searchParams&&a.searchParams.set("s_kw",t),a.href}return e}updated(e){e&&(e.has("containerWidth")&&this.calculateSlideNumber(),e.has("viewportWidth")&&this.calculateSlideNumber(),e.has("scrollPosition")&&this.updateScroll())}update(e){this.updateSlotContent(),super.update(e)}updateSlotContent(){this.contentRef&&("ontouchstart"in document&&this.contentRef.setAttribute("style","overflow: scroll"),this.containerWidth=this.contentRef?.scrollWidth,this.viewportWidth=this.contentRef?.offsetWidth)}render(){return L`
            ${this.controls?L`
                      <button
                          class="ue-c-carousel__controls ue-c-carousel__controls--back js-carousel-prev ${this.isValid(this.showLeftArrow,"","hidden-content")}"
                          @click="${this.moveSlide}"
                          data-offset="-1"
                          .aria-disabled="${this.isValid(this.showLeftArrow,"false","true")}">
                          <span class="is-hidden-text">Anterior</span>
                          <svg
                              role="img"
                              aria-hidden="true"
                              focusable="false"
                              class="is-arrow-icon"
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10">
                              <path
                                  fill-rule="evenodd"
                                  d="M0 8.946L3.91 5 0 1.054 1.045 0 6 5l-4.955 5z"
                              ></path>
                          </svg>
                      </button>
                  `:""}

            <slot name="content" id="slotcontent"></slot>

            <a class="ue-c-carousel__show-more ${this.isValid(this.showRightArrow,"","hidden-content")}"
                href="${this._setDataUrl(this.link,"superior")}">
                <span>${this.langViewAll}</span>
                <svg
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    class="is-arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10">
                    <path
                        fill-rule="evenodd"
                        d="M0 8.946L3.91 5 0 1.054 1.045 0 6 5l-4.955 5z"
                    ></path>
                </svg>
            </a>

            ${this.controls?L`
                      <button class="ue-c-carousel__controls ue-c-carousel__controls--next js-carousel-next ${this.isValid(this.showRightArrow,"","hidden-content")}"
                          @click="${this.moveSlide}"
                          data-offset="1"
                          .aria-disabled="${this.isValid(this.showRightArrow,"false","true")}">
                          <span class="is-hidden-text">Siguiente</span>
                          <svg
                              role="img"
                              aria-hidden="true"
                              focusable="false"
                              class="is-arrow-icon"
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10">
                              <path
                                  fill-rule="evenodd"
                                  d="M0 8.946L3.91 5 0 1.054 1.045 0 6 5l-4.955 5z"
                              ></path>
                          </svg>
                      </button>
                  `:""}
        `}}),window.customElements.define("ue-scoreboard-dual",class extends se{static get properties(){return{match:{type:Object,attribute:"match"},statusText:{type:String},statusClass:{type:String},pendingMatch:{type:Boolean},iconSize:{type:String},separator:{type:String},isNational:{type:Boolean},language:{type:String}}}constructor(){super(),this.setProperties()}setProperties(){this.match={},this.statusText="",this.statusClass="",this.pendingMatch=!1,this.iconSize="22",this.separator="",this.isNational=!1,this.language="es-es"}connectedCallback(){super.connectedCallback()}_initializeMatchStatus(){this.match&&void 0!==this.match.status&&(this.statusClass=this._getStatusMatchClass(),this.statusText=this._getStatusText(),this.language=this._parseLanguage(),this.pendingMatch=0===this.match.status.id||3===this.match.status.id||5===this.match.status.id,2!==this.match.status.id&&6!==this.match.status.id||(this.match.tv=[]),this.match.homeTeam.imgAlt||(this.match.homeTeam.imgAlt=""),this.match.awayTeam.imgAlt||(this.match.awayTeam.imgAlt=""))}_isVisualLinkName(e,t){return t&&!e}_getTeamtUrl(e){let t=null,a=null,r=null;return e.forEach((e=>{"competitor-card"===e.tag?t=e.url:"competitor-stats"===e.tag?a=e.url:"competitor-squad"===e.tag&&(r=e.url)})),t||a||r?t||a||r||null:e[0].url}_getStatusMatchClass(){if(void 0===this.match.status)return"";switch(this.match.status.id){case 0:return"ue-c-scoreboard-dual--pending";case 1:return"ue-c-scoreboard-dual--live";case 2:return"ue-c-scoreboard-dual--finished";case 3:return"ue-c-scoreboard-dual--suspended";case 5:return"ue-c-scoreboard-dual--deferred";case 6:return"ue-c-scoreboard-dual--cancelled";default:return""}}_getStatusText(){if(void 0===this.match.status)return"";switch(this.match.status.id){case 0:return this.match.status.name||"no comenzado";case 1:return this.status="directo",this.match.status.name||"directo";case 2:return this.match.status.name||"finalizado";case 3:return this.match.status.name||"suspendido";case 5:return this.match.status.name||"aplazado";case 6:return this.match.status.name||"anulado";default:return""}}_parseLanguage(){return this.language=this.language.toLowerCase(),/^[a-z]{2}[a-z]{2}$/.test(this.language)||/^[a-z]{2}-[a-z]{2}$/.test(this.language)?/^[a-z]{2}-[a-z]{2}$/.test(this.language)?this.language:this.language.slice(0,2)+"-"+this.language.slice(2,4):"es-es"}_isWinner(e,t){return e&&e.winner===t?"ue-c-scoreboard-dual--winner":""}_getImageUrl(e,t){let a,r="";return e&&e.length&&e instanceof Array&&(a=(e=e.sort(((e,t)=>parseInt(e.size)>parseInt(t.size)?1:parseInt(e.size)===parseInt(t.size)?0:-1))).filter((e=>parseInt(e.size)>=parseInt(this.iconSize))),a&&a.length?(r=a[0].url,t&&a.length>1&&2*parseInt(this.iconSize)>parseInt(a[0].size)&&(r+=`, ${a[1].url} 1.5x`)):r=e[e.length-1].url||""),r}_isVerticalPending(e){return!this.classList.value.includes("--vertical")&&!(this.classList.value.includes("--vertical")||!e)}_checkEventTeamsNamesLabel(){return`Partido: ${""!==this.match.homeTeam.name?this.match.homeTeam.name:this.match.homeTeam.imgAlt} Contra ${""!==this.match.awayTeam.name?this.match.awayTeam.name:this.match.awayTeam.imgAlt}`}_hasSeparator(){return""!==this.separator}_checkImgAndUrl(e,t){return!(!e||!t)}updated(e){e.has("match")&&this._initializeMatchStatus()}static get styles(){return s`
		 	:host {
                --ue-c-scoreboard-dual-state-finished-from-external: var(--ue-c-scoreboard-dual-state-finished);
                --ue-c-scoreboard-dual-team-name-color-link-from-external: var(--ue-c-scoreboard-dual-team-name-color-link);
                --ue-c-scoreboard-dual-team-name-color-link-hover-from-external: var(--ue-c-scoreboard-dual-team-name-color-link-hover);
            }
			.ue-c-scoreboard-header-bold {
				font-weight: bold
			}
			.ue-c-scoreboard-item-container {
				position: relative;
				width: 100%;
				min-height: 40px;
				box-sizing: border-box;
				padding: 0;
				padding-left: var(
					--ue-c-scoreboard-dual-item-container-padding-left,
					0
				);
				padding-right: var(
					--ue-c-scoreboard-dual-item-container-padding-right,
					0
				);
				padding-bottom: var(
					--ue-c-scoreboard-dual-item-container-padding-bottom,
					0
				);
				padding-top: var(--ue-c-scoreboard-dual-item-container-padding-top, 0);
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				font-family: Arial, Helvetica, sans-serif;
				font-family: var(--ue-c-scoreboard-dual-item-container-font-family);
				border-top-width: var(
					--ue-c-scoreboard-dual-item-container-border-top-width,
					0
				);
				border-top-style: var(
					--ue-c-scoreboard-dual-item-container-border-top-style,
					solid
				);
				border-top-color: var(
					--ue-c-scoreboard-dual-item-container-border-top-color,
					black
				);
				background: transparent;
				background: var(
					--ue-c-scoreboard-dual-item-container-background,
					transparent
				);
				border-radius: 0;
				border-radius: var(
					--ue-c-scoreboard-dual-item-container-border-radius,
					0
				);
				box-shadow: none;
				box-shadow: var(--ue-c-scoreboard-dual-item-container-box-shadow, none);
			}
			.ue-c-scoreboard-dual__header {
				width: 100%;
				display: flex;
				align-items: baseline;
				justify-content: var(
					--ue-c-scoreboard-dual-header-justify-content,
					center
				);
				color: #000;
				color: var(--ue-c-scoreboard-dual-header-color, #000);
				padding: 0;
				padding-top: 0.4375rem;
				padding-top: var(--ue-c-scoreboard-dual-header-padding-top, 0.4375rem);
				padding-bottom: 0.3125rem;
				padding-bottom: var(
					--ue-c-scoreboard-dual-header-padding-bottom,
					0.3125rem
				);
				padding-left: 0;
				padding-left: var(--ue-c-scoreboard-dual-header-padding-left, 0);
				padding-right: 0;
				padding-right: var(--ue-c-scoreboard-dual-header-padding-right, 0);
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				border-bottom: none;
				border-bottom: var(--ue-c-scoreboard-dual-header-border-bottom, none);
				min-height: unset;
				min-height: var(--ue-c-scoreboard-dual-header-min-height, unset);
				box-sizing: unset;
				box-sizing: var(--ue-c-scoreboard-dual-header-box-sizing, unset);
			}
			.ue-c-scoreboard-dual__state,
			.ue-c-scoreboard-dual__tv-item,
			.ue-c-scoreboard-dual__minute {
				font-family: var(--ue-c-scoreboard-dual-header-font-family);
				line-height: 1rem;
				line-height: var(--ue-c-scoreboard-dual-state-line-height, 1rem);
				font-size: 0.6875rem;
				font-size: var(--ue-c-scoreboard-dual-state-font-size, 0.6875rem);
			}
			.ue-c-scoreboard-dual__state {
				text-transform: var(--ue-c-scoreboard-dual-state-text-transform, none );
				color: #a3a3a3;
				color: var(--ue-c-scoreboard-dual-state-color, #a3a3a3);
				padding-right: 4px;
			}
			.ue-c-scoreboard-dual__minute {
				color: #000;
				color: var(--ue-c-scoreboard-dual-minute-color, #000);
			}
			.ue-c-scoreboard-dual__tv-list {
				list-style-type: none;
				line-height: 1;
				padding: 0;
				margin: 0;
				width: auto;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.ue-c-scoreboard-dual__tv-list,
			.ue-c-scoreboard-dual__minute {
				border-left: var(--ue-c-scoreboard-dual-tv-list-border-left);
			}
			.ue-c-scoreboard-dual__state,
			.ue-c-scoreboard-dual__tv-list,
			.ue-c-scoreboard-dual__minute {
				padding: var(--ue-c-scoreboard-dual-tv-list-padding, 0 0 0 4px);
			}
			.ue-c-scoreboard-dual__tv-item {
				display: inline-block;
				color: #4a4a4a;
				color: var(--ue-c-scoreboard-dual-tv-item-color, #4a4a4a);
				font-weight: var(--ue-c-scoreboard-dual-tv-item-font-weight, 400);
				text-transform: var(
					--ue-c-scoreboard-dual-tv-item-text-transform,
					uppercase
				);
			}
			.ue-c-scoreboard-dual__tv-item:not(:first-child)::before {
				content: "/";
				color: #aeb6bf;
				color: var(--ue-c-scoreboard-dual-divider-color, #aeb6bf);
				display: inline-block;
				padding-right: 0.2em;
				padding-left: 0.2em;
			}
			.ue-c-scoreboard-dual__tv-item::after {
				margin-left: 0;
			}
			.ue-c-scoreboard-dual__body {
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				justify-content: unset;
				justify-content: var(
					--ue-c-scoreboard-dual-body-justify-content,
					unset
				);
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				position: relative;
				width: 100%;
				min-height: unset;
				min-height: var(--ue-c-scoreboard-dual-body-min-height, unset);
				background: transparent;
				background: var(--ue-c-scoreboard-dual-body-background, transparent);
				padding: 0;
				padding: var(--ue-c-scoreboard-dual-body-padding, 0);
				border-top: none;
				border-top: var(--ue-c-scoreboard-dual-body-border-top, none);
				border-bottom: none;
				border-bottom: var(--ue-c-scoreboard-dual-body-border-bottom, none);
			}
			.ue-c-scoreboard-dual__team {
				width: 50%;
				width: var(--ue-c-scoreboard-dual-team-width, 50%);
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: stretch;
				-ms-flex-align: stretch;
				align-items: center;
			}
			.ue-c-scoreboard-dual__team-description {
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				overflow: hidden;
				position: relative;
				text-align: left;
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				-webkit-box-pack: var(
					--ue-c-scoreboard-dual-team-description-justify,
					flex-start
				);
				-ms-flex-pack: var(
					--ue-c-scoreboard-dual-team-description-justify,
					flex-start
				);
				justify-content: var(
					--ue-c-scoreboard-dual-team-description-justify,
					flex-start
				);
				width: 95%;
				width: var(--ue-c-scoreboard-dual-team-description-width, 95%);
				height: auto;
				height: var(--ue-c-scoreboard-dual-team-description-height, auto);
				overflow: unset;
				overflow: var(--ue-c-scoreboard-dual-team-description-overflow, unset);
				background: unset;
				background: var(
					--ue-c-scoreboard-dual-team-description-background,
					unset
				);
				border: unset;
				border: var(--ue-c-scoreboard-dual-team-description-border, unset);
				border-radius: unset;
				border-radius: var(
					--ue-c-scoreboard-dual-team-description-border-radius,
					unset
				);
			}
			.ue-c-scoreboard-dual__team-description a {
				display: flex;
				align-items: center;
				text-decoration: none;
			}
			.ue-c-scoreboard-dual__team-name {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				padding: 2px 4px;
				padding: var(--ue-c-scoreboard-dual-team-name-padding, 2px 4px);
				font-family: var(--ue-c-scoreboard-dual-team-name-font-family);
				font-size: 0.875rem;
				font-size: var(--ue-c-scoreboard-dual-team-name-font-size, 0.875rem);
				line-height: 0.875rem;
				line-height: var(
					--ue-c-scoreboard-dual-team-name-line-height,
					0.875rem
				);
				color: #4a4a4a;
				color: var(--ue-c-scoreboard-dual-team-name-color, #4a4a4a);
			}
			.ue-c-scoreboard-dual__team-description
				.ue-c-scoreboard-dual__team-name
				a {
				color: #0465c8;
				color: var(--ue-c-scoreboard-dual-team-name-color-link-from-external, #0465c8);
			}
			.ue-c-scoreboard-dual__team-description
				.ue-c-scoreboard-dual__team-name:hover
				a {
				color: #024b95;
				color: var(--ue-c-scoreboard-dual-team-name-color-link-hover-from-external, #024b95);
			}
			.ue-c-scoreboard-dual__team-badge {
				width: 1.375rem;
				width: var(--ue-c-scoreboard-dual-team-badge-width, 1.375rem);
				box-shadow: var(--ue-c-scoreboard-dual-team-badge-box-shadow, unset);
				filter: drop-shadow(0px 0px 2px rgba(0,0,0,0.2));
			}
			.ue-c-scoreboard-dual__body--nations .ue-c-scoreboard-dual__team-badge {
				box-shadow: var(
					--ue-c-scoreboard-dual-team-badge-box-shadow-nations,
					unset
				);
			}
			.ue-c-scoreboard-dual__score {
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				justify-content: center;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				text-align: center;
				width: 20%;
				width: var(--ue-c-scoreboard-dual-score-width, 20%);
				line-height: 1.25rem;
				line-height: var(--ue-c-scoreboard-dual-score-line-height, 1.25rem);
				font-family: Arial;
				font-family: var(--ue-c-scoreboard-dual-score-font-family, Arial);
				font-size: 1.25rem;
				font-size: var(--ue-c-scoreboard-dual-score-font-size, 1.25rem);
				background: #f8f8f8;
				background: var(--ue-c-scoreboard-dual-score-background, #f8f8f8);
				color: #4a4a4a;
				color: var(--ue-c-scoreboard-dual-score-color, #4a4a4a);
				min-height: var(--ue-c-scoreboard-dual-score-min-height, 30px);
				flex: unset;
				flex: var(--ue-c-scoreboard-dual-score-flex, unset);
			}
			.ue-c-scoreboard-dual__score.hidden-true {
				display: none;
			}
			.ue-c-scoreboard-dual__score-separator {
				line-height: 1.25rem;
				line-height: var(
					--ue-c-scoreboard-dual-score-separator-line-height,
					1.25rem
				);
				font-family: Arial;
				font-family: var(
					--ue-c-scoreboard-dual-score-separator-font-family,
					Arial
				);
				font-size: 0.875;
				font-size: var(--ue-c-scoreboard-dual-score-separator-font-size, 0.875);
				color: #4a4a4a;
				color: var(--ue-c-scoreboard-dual-score-separator-color, #4a4a4a);
				padding: 2px;
				padding: var(--ue-c-scoreboard-dual-score-separator-padding, 2px);
				margin: 0px;
				margin: var(--ue-c-scoreboard-dual-score-separator-margin, 0px);
				text-transform: unset;
				text-transform: var(
					--ue-c-scoreboard-dual-score-separator-text-transform,
					unset
				);
				width: 20px;
				width: var(--ue-c-scoreboard-dual-score-separator-width, 20px);
				text-align: center;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				background: #f8f8f8;
				background: var(--ue-c-scoreboard-dual-score-background, #f8f8f8);
				min-height: var(--ue-c-scoreboard-dual-score-min-height, 30px);
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				justify-content: center;
				border-left: 1px solid #eceef0;
				border-left: var(
					--ue-c-scoreboard-dual-score-away-border-left,
					1px solid #eceef0
				);
			}
			.ue-c-scoreboard-dual__score-penalties {
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				font-size: 0.625rem;
				font-size: var(
					--ue-c-scoreboard-dual-score-penalties-font-size,
					0.625rem
				);
			}
			.ue-c-scoreboard-dual__score-penalties::before {
				content: "(";
				display: inline-block;
			}
			.ue-c-scoreboard-dual__score-penalties::after {
				content: ")";
				display: inline-block;
			}
			.ue-c-scoreboard-dual__match-time {
				padding: 0 4px;
				font-family: var(
					--ue-c-scoreboard-dual-match-time-font-family,
					"Arial"
				);
				font-size: var(--ue-c-scoreboard-dual-match-time-font-size, 0.6875rem);
				font-weight: var(--ue-c-scoreboard-dual-match-time-lfont-weight, 700);
				line-height: var(--ue-c-scoreboard-dual-match-time-line-height, 1.1rem);
				color: var(--ue-c-scoreboard-dual-match-time-color, #000);
			}
			.ue-c-scoreboard-dual__match-link {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				bottom: 0;
				left: 0;
				z-index: 2;
			}
			.ue-c-scoreboard-dual__match-link:hover {
				background: rgba(0, 0, 0, 0.05);
			}
			.ue-c-scoreboard-dual__team--home-team .ue-c-scoreboard-dual__score {
				position: relative;
				border-radius: 5px 0 0 5px;
				border-radius: var(
					--ue-c-scoreboard-dual-score-home-border-radius,
					5px 0 0 5px
				);
				margin-left: var(--ue-c-scoreboard-dual-score-margin-left, 0);
			}

			.ue-c-scoreboard-dual__team--home-team .ue-c-scoreboard-dual__team-badge {
				padding-right: 10px;
				padding-right: var(
					--ue-c-scoreboard-dual-team-badge-padding-right,
					10px
				);
				margin-right: var(
					--ue-c-scoreboard-dual-team-badge-margin-right,
					unset
				);
				padding: var(--ue-c-scoreboard-dual-team-badge-space-home-team, unset);
			}
			.ue-c-scoreboard-dual__team--away-team {
				flex-direction: row-reverse;
			}
			.ue-c-scoreboard-dual__team--away-team
				.ue-c-scoreboard-dual__team-description,
			.ue-c-scoreboard-dual__team--away-team .ue-c-scoreboard-dual__team-name {
				text-align: right;
			}
			.ue-c-scoreboard-dual__team--away-team
				.ue-c-scoreboard-dual__team-description {
				flex-direction: row-reverse;
			}
			.ue-c-scoreboard-dual__team--away-team .ue-c-scoreboard-dual__score {
				border-radius: 0 5px 5px 0;
				border-radius: var(
					--ue-c-scoreboard-dual-score-away-border-radius,
					0 5px 5px 0
				);
				margin-right: var(--ue-c-scoreboard-dual-score-margin-right, 0);
				border-left: 1px solid #eceef0;
				border-left: var(
					--ue-c-scoreboard-dual-score-away-border-left,
					1px solid #eceef0
				);
			}
			.ue-c-scoreboard-dual__team--away-team .ue-c-scoreboard-dual__team-badge {
				padding-left: 10px;
				padding-left: var(--ue-c-scoreboard-dual-team-badge-padding-left, 10px);
				margin-left: var(--ue-c-scoreboard-dual-team-badge-margin-left, unset);
				padding: var(--ue-c-scoreboard-dual-team-badge-space-away-team, unset);
			}
			/* FINISHED */
			.ue-c-scoreboard-dual--finished .ue-c-scoreboard-dual__header {
				background: transparent;
				background: var(
					--ue-c-scoreboard-score-header-background-finished,
					transparent
				);
			}
			.ue-c-scoreboard-dual--finished .ue-c-scoreboard-dual__tv-list {
				display: none;
			}
			.ue-c-scoreboard-dual--finished .ue-c-scoreboard-dual__state {
				color: var(--ue-c-scoreboard-dual-state-finished-from-external, #a3a3a3);
			}
			/* LIVE */
			.ue-c-scoreboard-dual--live .ue-c-scoreboard-dual__header {
				background: transparent;
				background: var(
					--ue-c-scoreboard-score-header-background-live,
					transparent
				);
			}
			.ue-c-scoreboard-dual--live .ue-c-scoreboard-dual__score {
				background: #fff;
				background: var(--ue-c-scoreboard-score-live-background, #fff);
				color: var(--ue-c-scoreboard-score-live-color, black);
			}
			.ue-c-scoreboard-dual--live
				.ue-c-scoreboard-dual__team--home-team
				.ue-c-scoreboard-dual__score {
				border-top: 1px solid #eceef0;
				border-top: var(
					--ue-c-scoreboard-score-live-home-team-border-top,
					1px solid #eceef0
				);
				border-bottom: 1px solid #eceef0;
				border-bottom: var(
					--ue-c-scoreboard-score-live-home-team-border-bottom,
					1px solid #eceef0
				);
				border-left: 1px solid #eceef0;
				border-left: var(
					--ue-c-scoreboard-score-live-home-team-border-left,
					1px solid #eceef0
				);
			}
			.ue-c-scoreboard-dual--live
				.ue-c-scoreboard-dual__team--away-team
				.ue-c-scoreboard-dual__score {
				border: 1px solid #eceef0;
				border: var(
					--ue-c-scoreboard-score-live-away-team-border,
					1px solid #eceef0
				);
			}
			.ue-c-scoreboard-dual--live .ue-c-scoreboard-dual__state {
				color: var(--ue-c-scoreboard-state-text-color-live, #ee0000);
				text-transform: uppercase;
				text-transform: var(
					--ue-c-scoreboard-dual-state-text-transform-live,
					uppercase
				);
			}
			.ue-c-scoreboard-dual--live .ue-c-scoreboard-dual__state::before {
				content: "";
				width: var(--ue-c-scoreboard-state-live-width, 5px);
				height: var(--ue-c-scoreboard-state-live-width, 5px);
				background: var(--ue-c-scoreboard-state-color-live, #ee0000);
				position: relative;
				top: -0.2em;
				top: var(--ue-c-scoreboard-state-top-live, -0.2em);
				margin-right: 3px;
				margin-right: var(--ue-c-scoreboard-state-margin-right-live, 3px);
				display: inline-block;
				border-radius: 50%;
			}
			.ue-c-scoreboard-dual--live .ue-c-scoreboard-dual__score-separator {
				border-top: 1px solid #eceef0;
				border-top: var(
					--ue-c-scoreboard-dual-score-separator-border-top-live,
					1px solid #eceef0
				);
				border-bottom: 1px solid #eceef0;
				border-bottom: var(
					--ue-c-scoreboard-dual-score-separator-border-bottom-live,
					1px solid #eceef0
				);
				background: #ffffff;
				background: var(
					--ue-c-scoreboard-dual-score-separator-background-live,
					#ffffff
				);
			}
			/* PENDING */
			.ue-c-scoreboard-dual--pending .ue-c-scoreboard-dual__state {
				display: none;
			}
			.ue-c-scoreboard-dual--pending .ue-c-scoreboard-dual__score {
				background: #fff;
				color: var(--ue-c-scoreboard-score-live-color, black);
			}
			.ue-c-scoreboard-dual--pending
				.ue-c-scoreboard-dual__team--home-team
				.ue-c-scoreboard-dual__score {
				border-top: 1px solid #eceef0;
				border-bottom: 1px solid #eceef0;
				border-left: 1px solid #eceef0;
			}
			.ue-c-scoreboard-dual--pending
				.ue-c-scoreboard-dual__team--away-team
				.ue-c-scoreboard-dual__score {
				border: 1px solid #eceef0;
			}
			.ue-c-scoreboard-dual--pending .ue-c-scoreboard-dual__score-separator {
				border: 0;
				border: var(--ue-c-scoreboard-dual-score-separator-border-pending, 0);
				background: #ffffff;
				background: var(
					--ue-c-scoreboard-dual-score-separator-background-pending,
					#ffffff
				);
			}
			/* WINNER */
			.ue-c-scoreboard-dual--winner .ue-c-scoreboard-dual__score {
				font-weight: 700;
				font-weight: var(--ue-c-scoreboard-dual--winner-score-font-weight, 700);
				font-family: var(--ue-c-scoreboard-dual--winner-score-font-family);
			}
			/* BASKETBALL */
			:host(.ue-c-scoreboard-dual--basketball.ue-c-scoreboard-dual--small) {
				font-size: var(--ue-c-scoreboard-dual-score-font-size, 0.75rem);
			}
			:host(.ue-c-scoreboard-dual--basketball) .ue-c-scoreboard-dual__score {
				width: 30%;
				width: var(--ue-c-scoreboard-dual-score-width, 30%);
			}
			:host(.ue-c-scoreboard-dual--basketball)
				.ue-c-scoreboard-dual__team-description {
				width: var(--ue-c-scoreboard-dual-team-description-width, 75%);
			}
			:host(.ue-c-scoreboard-dual--centered-teams)
				.ue-c-scoreboard-dual__team-description {
				justify-content: flex-end;
			}
			/* SMALL */
			:host(.ue-c-scoreboard-dual--small) .ue-c-scoreboard-dual__header {
				padding-top: var(--ue-c-scoreboard-dual-header-padding-top, 0.4375rem);
				padding-bottom: var(
					--ue-c-scoreboard-dual-header-padding-bottom,
					0.3125rem
				);
			}
			:host(.ue-c-scoreboard-dual--small) .ue-c-scoreboard-dual__minute,
			:host(.ue-c-scoreboard-dual--small) .ue-c-scoreboard-dual__state,
			:host(.ue-c-scoreboard-dual--small) .ue-c-scoreboard-dual__tv-item {
				font-size: var(--ue-c-scoreboard-dual-state-font-size, 0.6875rem);
			}
			:host(.ue-c-scoreboard-dual--small)
				.ue-c-scoreboard-dual__minute::before {
				margin-left: var(--ue-c-scoreboard-dual-divider-margin-left, 0);
				margin-right: var(--ue-c-scoreboard-dual-divider-margin-right, 0);
			}
			:host(.ue-c-scoreboard-dual--small)
				.ue-c-scoreboard-dual__team-description {
				width: var(--ue-c-scoreboard-dual-team-description-width, 80%);
				flex-grow: 1;
			}
			:host(.ue-c-scoreboard-dual--small) .ue-c-scoreboard-dual__team-name {
				font-size: var(--ue-c-scoreboard-dual-team-name-font-size, 0.875rem);
				line-height: var(
					--ue-c-scoreboard-dual-team-name-line-height,
					0.875rem
				);
			}
			:host(.ue-c-scoreboard-dual--small) .ue-c-scoreboard-dual__team-badge {
				width: var(--ue-c-scoreboard-dual-team-badge-width, 1.375rem);
			}
			:host(.ue-c-scoreboard-dual--small) .ue-c-scoreboard-dual__score {
				font-size: var(--ue-c-scoreboard-dual-score-font-size, 1.25rem);
				line-height: var(--ue-c-scoreboard-dual-score-line-height, 1.25rem);
			}
			:host(.ue-c-scoreboard-dual--small)
				.ue-c-scoreboard-dual__score-penalties {
				font-size: var(
					--ue-c-scoreboard-dual-score-penalties-font-size,
					0.625rem
				);
			}
			:host(.ue-c-scoreboard-dual--small) .ue-c-scoreboard-dual__match-time {
				font-size: var(--ue-c-scoreboard-dual-match-time-font-size, 0.6875rem);
			}
			:host(.ue-c-scoreboard-dual--basketball)
				.ue-c-scoreboard-dual--small
				.ue-c-scoreboard-dual__score {
				font-size: var(--ue-c-scoreboard-dual-score-font-size, 1rem);
			}
			:host(.ue-c-scoreboard-dual--basketball)
				.ue-c-scoreboard-dual--small
				.ue-c-scoreboard-dual__team-description {
				width: var(--ue-c-scoreboard-dual-team-description-width, 75%);
			}
			/* MEDIUM */
			:host(.ue-c-scoreboard-dual--medium) .ue-c-scoreboard-dual__header {
				padding-top: var(--ue-c-scoreboard-dual-header-padding-top, 0.4375rem);
				padding-bottom: var(
					--ue-c-scoreboard-dual-header-padding-bottom,
					0.3125rem
				);
			}
			:host(.ue-c-scoreboard-dual--medium) .ue-c-scoreboard-dual__minute,
			:host(.ue-c-scoreboard-dual--medium) .ue-c-scoreboard-dual__state,
			:host(.ue-c-scoreboard-dual--medium) .ue-c-scoreboard-dual__tv-item {
				font-size: var(--ue-c-scoreboard-dual-state-font-size, 0.75rem);
			}
			:host(.ue-c-scoreboard-dual--medium)
				.ue-c-scoreboard-dual__minute::before {
				margin-left: var(--ue-c-scoreboard-dual-divider-margin-left, 0.125rem);
				margin-right: var(
					--ue-c-scoreboard-dual-divider-margin-right,
					0.125rem
				);
			}
			:host(.ue-c-scoreboard-dual--medium)
				.ue-c-scoreboard-dual__team-description {
				width: var(--ue-c-scoreboard-dual-team-description-width, 90%);
			}
			:host(.ue-c-scoreboard-dual--medium) .ue-c-scoreboard-dual__team-name {
				font-size: var(--ue-c-scoreboard-dual-team-name-font-size, 1rem);
				line-height: var(--ue-c-scoreboard-dual-team-name-line-height, 1rem);
			}
			:host(.ue-c-scoreboard-dual--medium) .ue-c-scoreboard-dual__team-badge {
				width: var(--ue-c-scoreboard-dual-team-badge-width, 1.875rem);
			}
			:host(.ue-c-scoreboard-dual--medium) .ue-c-scoreboard-dual__score {
				font-size: var(--ue-c-scoreboard-dual-score-font-size, 1.375rem);
				line-height: var(--ue-c-scoreboard-dual-score-line-height, 1.375rem);
			}
			:host(.ue-c-scoreboard-dual--medium)
				.ue-c-scoreboard-dual__score-penalties {
				font-size: var(
					--ue-c-scoreboard-dual-score-penalties-font-size,
					0.75rem
				);
			}
			:host(.ue-c-scoreboard-dual--medium) .ue-c-scoreboard-dual__match-time {
				font-size: var(--ue-c-scoreboard-dual-match-time-font-size, 0.75rem);
			}
			:host(.ue-c-scoreboard-dual--basketball)
				.ue-c-scoreboard-dual--medium
				.ue-c-scoreboard-dual__score {
				font-size: var(--ue-c-scoreboard-dual-score-font-size, 1.125rem);
			}
			:host(.ue-c-scoreboard-dual--basketball)
				.ue-c-scoreboard-dual--medium
				.ue-c-scoreboard-dual__team-description {
				width: var(--ue-c-scoreboard-dual-team-description-width, 75%);
			}
			/* LARGE */
			:host(.ue-c-scoreboard-dual--large) .ue-c-scoreboard-dual__header {
				padding-top: var(--ue-c-scoreboard-dual-header-padding-top, 0.4375rem);
				padding-bottom: var(
					--ue-c-scoreboard-dual-header-padding-bottom,
					0.3125rem
				);
			}
			:host(.ue-c-scoreboard-dual--large) .ue-c-scoreboard-dual__minute,
			:host(.ue-c-scoreboard-dual--large) .ue-c-scoreboard-dual__state,
			:host(.ue-c-scoreboard-dual--large) .ue-c-scoreboard-dual__tv-item {
				font-size: var(--ue-c-scoreboard-dual-state-font-size, 0.75rem);
			}
			:host(.ue-c-scoreboard-dual--large)
				.ue-c-scoreboard-dual__minute::before {
				margin-left: var(--ue-c-scoreboard-dual-divider-margin-left, 0.3125rem);
				margin-right: var(
					--ue-c-scoreboard-dual-divider-margin-right,
					0.3125rem
				);
			}
			:host(.ue-c-scoreboard-dual--large)
				.ue-c-scoreboard-dual__team-description {
				width: var(--ue-c-scoreboard-dual-team-description-width, 90%);
			}
			:host(.ue-c-scoreboard-dual--large) .ue-c-scoreboard-dual__team-name {
				font-size: var(--ue-c-scoreboard-dual-team-name-font-size, 2rem);
				line-height: var(--ue-c-scoreboard-dual-team-name-line-height, 2rem);
			}
			:host(.ue-c-scoreboard-dual--large) .ue-c-scoreboard-dual__team-badge {
				width: var(--ue-c-scoreboard-dual-team-badge-width, 3.125rem);
			}
			:host(.ue-c-scoreboard-dual--large) .ue-c-scoreboard-dual__score {
				font-size: var(--ue-c-scoreboard-dual-score-font-size, 2.5rem);
				line-height: var(--ue-c-scoreboard-dual-score-line-height, 2.5rem);
				--ue-c-scoreboard-dual-score-divider-height: 2rem;
			}
			:host(.ue-c-scoreboard-dual--large)
				.ue-c-scoreboard-dual__score-separator {
				font-size: var(--ue-c-scoreboard-dual-score-font-size, 2.5rem);
				line-height: var(--ue-c-scoreboard-dual-score-line-height, 2.5rem);
			}
			:host(.ue-c-scoreboard-dual--large)
				.ue-c-scoreboard-dual__score-penalties {
				font-size: var(--ue-c-scoreboard-dual-score-penalties-font-size, 1rem);
			}
			:host(.ue-c-scoreboard-dual--large) .ue-c-scoreboard-dual__match-time {
				font-size: var(--ue-c-scoreboard-dual-match-time-font-size, 0.875rem);
			}
			:host(.ue-c-scoreboard-dual--basketball)
				.ue-c-scoreboard-dual--large
				.ue-c-scoreboard-dual__score {
				font-size: var(--ue-c-scoreboard-dual-score-font-size, 1.25rem);
			}
			:host(.ue-c-scoreboard-dual--basketball)
				.ue-c-scoreboard-dual--large
				.ue-c-scoreboard-dual__team-description {
				width: var(--ue-c-scoreboard-dual-team-description-width, 75%);
			}
			/* VERTICAL */
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-item-container {
				background: transparent;
				background: var(
					--ue-c-scoreboard-dual-item-container-background-vertical,
					transparent
				);
				border-radius: 0;
				border-radius: var(
					--ue-c-scoreboard-dual-item-container-border-radius-vertical,
					0
				);
				box-shadow: none;
				box-shadow: var(
					--ue-c-scoreboard-dual-item-container-box-shadow-vertical,
					none
				);
				padding-bottom: var(
					--ue-c-scoreboard-dual-item-container-padding-bottom-vertical,
					0
				);
			}
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__header {
				justify-content: var(
					--ue-c-scoreboard-dual-header-justify-content-vertical,
					center
				);
				padding: 0;
				padding-top: 0.4375rem;
				padding-top: var(
					--ue-c-scoreboard-dual-header-padding-up-vertical,
					0.4375rem
				);
				padding-bottom: 0.3125rem;
				padding-bottom: var(
					--ue-c-scoreboard-dual-header-padding-bottom-vertical,
					0.3125rem
				);
				padding-left: 0;
				padding-left: var(
					--ue-c-scoreboard-dual-header-padding-left-vertical,
					0
				);
				padding-right: 0;
				padding-right: var(
					--ue-c-scoreboard-dual-header-padding-right-vertical,
					0
				);
			}
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__state,
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__tv-item,
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__minute {
				font-size: 0.6875rem;
				font-size: var(
					--ue-c-scoreboard-dual-state-font-size-vertical,
					0.6875rem
				);
			}
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__match-time {
				line-height: 0.6875rem;
				line-height: var(
					--ue-c-scoreboard-dual-match-time-line-height-vertical,
					1.1rem
				);
				font-size: 0.6875rem;
				font-size: var(
					--ue-c-scoreboard-dual-match-time-font-size-vertical,
					0.6875rem
				);
			}
			:host(.ue-c-scoreboard-dual--team-vertical)
				.ue-c-scoreboard-dual__score-separator,
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual__score-separator {
				display: none;
			}
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__body {
				flex-wrap: wrap;
				background: transparent;
				background: var(
					--ue-c-scoreboard-dual-body-background-vertical,
					transparent
				);
				padding: 0;
				padding: var(--ue-c-scoreboard-dual-body-padding-vertical, 0);
				border-top: none;
				border-top: var(--ue-c-scoreboard-dual-body-border-top-vertical, none);
				border-bottom: none;
				border-bottom: var(
					--ue-c-scoreboard-dual-body-border-bottom-vertical,
					none
				);
			}
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual__team-description {
				-webkit-box-pack: var(
					--ue-c-scoreboard-dual-team-description-justify,
					flex-start
				);
				-ms-flex-pack: var(
					--ue-c-scoreboard-dual-team-description-justify,
					flex-start
				);
				justify-content: var(
					--ue-c-scoreboard-dual-team-description-justify,
					flex-start
				);
			}
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__team {
				width: 100%;
			}
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__team-name {
				font-size: 0.875rem;
				font-size: var(
					--ue-c-scoreboard-dual-team-name-font-size-vertical,
					0.875rem
				);
				line-height: 0.875rem;
				line-height: var(
					--ue-c-scoreboard-dual-team-name-line-height-vertical,
					0.875rem
				);
			}
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__score {
				width: 15%;
				width: var(--ue-c-scoreboard-dual-score-width-vertical, 15%);
				border-left: 0;
				font-size: 1.25rem;
				font-size: var(
					--ue-c-scoreboard-dual-score-font-size-vertical,
					1.25rem
				);
				line-height: 1.25rem;
				line-height: var(
					--ue-c-scoreboard-dual-score-line-height-vertical,
					1.25rem
				);
				min-height: var(--ue-c-scoreboard-dual-score-min-height-vertical, 30px);
			}
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__team-badge {
				width: 1.375rem;
				width: var(--ue-c-scoreboard-dual-team-badge-width-vertical, 1.375rem);
			}
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual__team--home-team
				.ue-c-scoreboard-dual__score {
				border-radius: 5px 5px 0 0;
				flex-direction: row;
			}
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual__team--away-team {
				flex-direction: row;
			}
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual__team--away-team
				.ue-c-scoreboard-dual__team-name {
				text-align: left;
			}
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual__team--away-team
				.ue-c-scoreboard-dual__team-description {
				float: left;
				flex-direction: row;
			}
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual__team--away-team
				.ue-c-scoreboard-dual__score {
				border-radius: 0 0 5px 5px;
				border-top: 1px solid #ececec;
			}
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual__team--home-team
				.ue-c-scoreboard-dual__team-badge {
				padding: 0;
				padding-right: var(
					--ue-c-scoreboard-dual-team-badge-padding-right-vertical,
					3px
				);
			}
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual__team--away-team
				.ue-c-scoreboard-dual__team-badge {
				padding: 0;
				padding-right: var(
					--ue-c-scoreboard-dual-team-badge-padding-right-vertical,
					3px
				);
			}
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual--pending
				.ue-c-scoreboard-dual__team {
				width: 100%;
			}
			/* :host(.ue-c-scoreboard-dual--vertical)
                .ue-c-scoreboard-dual--live
                .ue-c-scoreboard-dual__score {
            } */
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual--live
				.ue-c-scoreboard-dual__team--home-team
				.ue-c-scoreboard-dual__score,
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual--pending
				.ue-c-scoreboard-dual__team--home-team
				.ue-c-scoreboard-dual__score {
				border: 1px solid #ececec;
				border-bottom: 0;
			}
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual--live
				.ue-c-scoreboard-dual__team--away-team
				.ue-c-scoreboard-dual__score,
			:host(.ue-c-scoreboard-dual--vertical)
				.ue-c-scoreboard-dual--pending
				.ue-c-scoreboard-dual__team--away-team
				.ue-c-scoreboard-dual__score {
				border: 1px solid #ececec;
			}
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__minute {
				overflow: unset;
				overflow: var(--ue-c-scoreboard-dual-minute-overflow-vertical, unset);
				text-overflow: unset;
				text-overflow: var(
					--ue-c-scoreboard-dual-minute-text-overflow-vertical,
					unset
				);
				white-space: unset;
				white-space: var(
					--ue-c-scoreboard-dual-minute-white-space-vertical,
					unset
				);
			}
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__state {
				overflow: unset;
				overflow: var(--ue-c-scoreboard-dual-state-overflow-vertical, unset);
				text-overflow: unset;
				text-overflow: var(
					--ue-c-scoreboard-dual-state-text-overflow-vertical,
					unset
				);
				white-space: unset;
				white-space: var(
					--ue-c-scoreboard-dual-state-white-space-vertical,
					unset
				);
			}
			:host(.ue-c-scoreboard-dual--vertical) .ue-c-scoreboard-dual__tv-item {
				overflow: unset;
				overflow: var(--ue-c-scoreboard-dual-tv-item-overflow-vertical, unset);
				text-overflow: unset;
				text-overflow: var(
					--ue-c-scoreboard-dual-tv-item-text-overflow-vertical,
					unset
				);
				white-space: unset;
				white-space: var(
					--ue-c-scoreboard-dual-tv-item-white-space-vertical,
					unset
				);
				display: inline-block;
				display: var(
					--ue-c-scoreboard-dual-tv-item-display-vertical,
					inline-block
				);
			}
			/* TEAM VERTICAL */
			:host(.ue-c-scoreboard-dual--team-vertical)
				.ue-c-scoreboard-dual__team-description {
				justify-content: center;
				padding: 0;
				flex-direction: column;
			}
			:host(.ue-c-scoreboard-dual--team-vertical)
				.ue-c-scoreboard-dual__team-name {
				text-align: center;
			}
			:host(.ue-c-scoreboard-dual--team-vertical)
				.ue-c-scoreboard-dual__team-badge {
				padding: 0;
				width: 30px;
				width: 20%;
			}
			.hidden-content {
				position: absolute !important;
				height: 1px;
				width: 1px;
				overflow: hidden;
				clip: rect(1px, 1px, 1px, 1px);
				clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			}
			.ue-c-scoreboard-dual__match-date-day {
				text-transform: var(
					--ue-c-scoreboard-dual-match-date-day-transform,
					capitalize
				);
				font-weight: var(
					--ue-c-scoreboard-dual-match-date-day-font-weight,
					700
				);
				line-height: var(
					--ue-c-scoreboard-dual-match-date-day-line-height,
					1.1rem
				);
				font-size: var(--ue-c-scoreboard-dual-match-date-day-font-size, 11px);
				color: var(--ue-c-scoreboard-dual-match-date-day-color, #000);
				font-family: var(
					--ue-c-scoreboard-dual-match-date-day-font-family,
					"Arial"
				);
			}
			.ue-c-scoreboard-dual__match-date-number {
				text-transform: var(
					--ue-c-scoreboard-dual-match-date-number-transform,
					capitalize
				);
				font-weight: var(
					--ue-c-scoreboard-dual-match-date-number-font-weight,
					400
				);
				line-height: var(
					--ue-c-scoreboard-dual-match-date-number-line-height,
					1.1rem
				);
				font-size: var(
					--ue-c-scoreboard-dual-match-date-number-font-size,
					11px
				);
				color: var(--ue-c-scoreboard-dual-match-date-number-color, #000);
				font-family: var(
					--ue-c-scoreboard-dual-match-date-number-font-family,
					"Arial"
				);
			}
			.ue-c-scoreboard-dual__match-date-month-name {
				text-transform: var(
					--ue-c-scoreboard-dual-match-date-month-name-text-transform,
					uppercase
				);
				font-weight: var(
					--ue-c-scoreboard-dual-match-date-month-name-font-weight,
					400
				);
				line-height: var(
					--ue-c-scoreboard-dual-match-date-month-name-line-height,
					1.1rem
				);
				font-size: var(
					--ue-c-scoreboard-dual-match-date-month-name-font-size,
					11px
				);
				color: var(--ue-c-scoreboard-dual-match-date-month-name-color, #000);
				font-family: var(
					--ue-c-scoreboard-dual-match-date-month-name-font-family,
					"Arial"
				);
			}
		`}render(){return L`
			${0===Object.entries(this.match).length?L``:L`
						<div
							class="ue-c-scoreboard-item-container ${this.statusClass}"
							aria-label="${this._checkEventTeamsNamesLabel()}"
						>
							${this.match.url?L`<a
										class="ue-c-scoreboard-dual__match-link"
										itemprop="url"
										href="${this.match.url}"
										data-ue-type="${this.match.url?.name}"
										data-ue-title="${this.match.homeTeam.name+" - "+this.match.awayTeam.name}"
										title="Ir al directo del partido"
								  >
										<span class="hidden-content">
											${this.match.homeTeam.name+" - "+this.match.awayTeam.name}
										</span>
								  </a> `:L``}
							<div class="ue-c-scoreboard-dual__header ${/finished/.test(this.statusClass)?"":"ue-c-scoreboard-header-bold"}">
								${this.pendingMatch&&this.match.startDateGame?L`<div class="ue-c-scoreboard-dual__match-date">
											${this.match.startDateConfirmed?L`
														<span
															class="ue-c-scoreboard-dual__match-date-day"
															aria-hidden="true"
															>${new Date(this.match.startDateGame).toLocaleDateString(this.language,{weekday:"long"}).slice(0,3)}.</span
														>
														<span class="hidden-content"
															>${new Date(this.match.startDateGame).toLocaleDateString(this.language,{weekday:"long"})}</span
														>
														<span
															class="ue-c-scoreboard-dual__match-date-number"
															>${new Date(this.match.startDateGame).getDate()}</span
														>
														<span
															class="ue-c-scoreboard-dual__match-date-month"
														>
															<span
																class="ue-c-scoreboard-dual__match-date-month-name"
																aria-hidden="true"
																>${new Date(this.match.startDateGame).toLocaleString(this.language,{month:"long"}).slice(0,3)}.</span
															>
															<span class="hidden-content"
																>${new Date(this.match.startDateGame).toLocaleString(this.language,{month:"long"})}</span
															>
														</span>
												  `:L``}
									  </div>`:L``}
								${this.pendingMatch&&this.match.startTime?L`<div class="ue-c-scoreboard-dual__match-time">
				${this.match.startDateConfirmed?L`${this.match.startDateGame&&this.match.startTime?L` - ${this.match.startTime}`:L`${this.match.startTime}`}`:L`--:--`}
			</div>`:L``}

								<div class="ue-c-scoreboard-dual__state">
									<span class="hidden-content">Estado: </span>
									${this.statusText}
								</div>

								${this.match.currentMinute?L`
											<div class="ue-c-scoreboard-dual__minute">
												Min. ${this.match.currentMinute}
											</div>
									  `:L``}
								${this.match.tv?L`
											<ul class="ue-c-scoreboard-dual__tv-list">
												${this.match.tv.map((e=>L`
															<li class="ue-c-scoreboard-dual__tv-item">
																<span class="hidden-content"
																	>Se emite en:
																</span>
																${e.name}
															</li>
														`))}
											</ul>
									  `:L``}
							</div>

							<div
								class="ue-c-scoreboard-dual__body ${this.isNational?"ue-c-scoreboard-dual__body--nations":""}"
								role="table"
								aria-label="Marcador"
							>
								<div
									class="ue-c-scoreboard-dual__team ue-c-scoreboard-dual__team--home-team 
								${this._isWinner(this.match,"homeTeam")}"
									role="row"
								>
									<div
										class="ue-c-scoreboard-dual__team-description"
										role="rowheader"
									>
										${this._checkImgAndUrl(this.match.homeTeam.img,this.match.homeTeam.urlImg)?L`
													<a href="${this.match.homeTeam.urlImg}">
														<img
															class="ue-c-scoreboard-dual__team-badge"
															src="${this._getImageUrl(this.match.homeTeam.img)}"
															srcset="
																${this._getImageUrl(this.match.homeTeam.img,"true")}
															"
															@error="${e=>e.target.style.display="none"}"
															alt="${this.match.homeTeam.imgAlt}"
														/>
													</a>
											  `:L`
													<img
														class="ue-c-scoreboard-dual__team-badge"
														src="${this._getImageUrl(this.match.homeTeam.img)}"
														srcset="
															${this._getImageUrl(this.match.homeTeam.img,"true")}
														"
														@error="${e=>e.target.style.display="none"}"
														alt="${this.match.homeTeam.imgAlt}"
													/>
											  `}

										<div class="ue-c-scoreboard-dual__team-name">
											${this._isVisualLinkName(this.match.url,this.match.homeTeam.competitorEditorialInfo?.urlsDataCenter?.otherUrls||void 0)?L`
														<a
															href="${this._getTeamtUrl(this.match.homeTeam.competitorEditorialInfo?.urlsDataCenter?.otherUrls)}"
														>
															${this.match.homeTeam.name}
														</a>
												  `:L` ${this.match.homeTeam.name} `}
										</div>
									</div>
									<div
										class="ue-c-scoreboard-dual__score 
									hidden-${this._isVerticalPending(this.pendingMatch)}"
										role="cell"
									>
										${this.pendingMatch?L` - `:L`
													${this.match.homeTeam.score}
													${this.match.homeTeam.penalties?L`
																<div
																	class="ue-c-scoreboard-dual__score-penalties"
																>
																	${this.match.homeTeam.penalties}
																</div>
														  `:""}
											  `}
									</div>
								</div>

								${this.pendingMatch?L`
											<div class="ue-c-scoreboard-dual__score-separator">
												vs.
											</div>
									  `:""}
								${!this._isVerticalPending(this.pendingMatch)&&this._hasSeparator()?L`
											<div class="ue-c-scoreboard-dual__score-separator">
												${this.separator}
											</div>
									  `:""}

								<div
									class="ue-c-scoreboard-dual__team ue-c-scoreboard-dual__team--away-team ~
								${this._isWinner(this.match,"awayTeam")}"
									role="row"
								>
									<div
										class="ue-c-scoreboard-dual__team-description"
										role="rowheader"
									>
										${this._checkImgAndUrl(this.match.awayTeam.img,this.match.awayTeam.urlImg)?L`
													<a href="${this.match.awayTeam.urlImg}">
														<img
															class="ue-c-scoreboard-dual__team-badge"
															src="${this._getImageUrl(this.match.awayTeam.img)}"
															srcset="
																${this._getImageUrl(this.match.awayTeam.img,"true")}
															"
															@error="${e=>e.target.style.display="none"}"
															alt=""
														/>
														<span class="hidden-content">
															${this.match.awayTeam.imgAlt}
														</span>
													</a>
											  `:L`
													<img
														class="ue-c-scoreboard-dual__team-badge"
														src="${this._getImageUrl(this.match.awayTeam.img)}"
														srcset="
															${this._getImageUrl(this.match.awayTeam.img,"true")}
														"
														@error="${e=>e.target.style.display="none"}"
														alt="${this.match.awayTeam.imgAlt}"
													/>
											  `}

										<div class="ue-c-scoreboard-dual__team-name">
											${this._isVisualLinkName(this.match.url,this.match.awayTeam.competitorEditorialInfo?.urlsDataCenter?.otherUrls)?L`
														<a
															href="${this._getTeamtUrl(this.match.awayTeam.competitorEditorialInfo?.urlsDataCenter?.otherUrls)}"
														>
															${this.match.awayTeam.name}
														</a>
												  `:L` ${this.match.awayTeam.name} `}
										</div>
									</div>
									<div
										class="ue-c-scoreboard-dual__score 
									hidden-${this._isVerticalPending(this.pendingMatch)}"
										role="cell"
									>
										${this.pendingMatch?L` - `:L`
													${this.match.awayTeam.score}
													${this.match.awayTeam.penalties?L`
																<div
																	class="ue-c-scoreboard-dual__score-penalties"
																>
																	${this.match.awayTeam.penalties}
																</div>
														  `:""}
											  `}
									</div>
								</div>
							</div>
						</div>
				  `}
		`}}),window.customElements.define("ue-scoreboard-multiple",class extends se{static get styles(){return s`
            .ue-c-scoreboard-multiple__container {
                position: relative;
            }
            .ue-c-scoreboard-multiple__body {
                position: relative;
                display: flex;
                flex-direction: column;
                margin: var(--ue-c-scoreboard-multiple-body-margin);
            }
            .ue-c-scoreboard-multiple__tv-list {
                padding: 0;
                margin: 0 0 0 5px;
                list-style-type: none;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
            }
            .ue-c-scoreboard-multiple__tv-item {
                text-transform: capitalize;
                margin-right: 2px;
                text-align: center;
                font-size: var(--ue-c-scoreboard-multiple-state-item--font-size, 10px);
                color: var(--ue-c-scoreboard-multiple-state-item--color, #6d6e71);
                text-transform: var(--ue-c-scoreboard-multiple-state-item--text-transform);
                padding-left: 4px;
                border-left: var(--ue-c-scoreboard-multiple-tv-item--border-left);
            }
            .ue-c-scoreboard-multiple__tv-item:last-child {
                margin-right: 0;
            }
            .ue-c-scoreboard-multiple__state {
				text-transform: var(--ue-c-scoreboard-multiple-state-text-transform, none );
                position: relative;
                float: left;
                font-family: var(--ue-c-scoreboard-multiple-state-item--font-family);
                font-size: var(--ue-c-scoreboard-multiple-state-item--font-size, 10px);
                color: var(--ue-c-scoreboard-multiple-state-item--color, #6d6e71);
            }
            .ue-c-scoreboard-multiple__state.ue-c-scoreboard-multiple--live {
                color: var(--ue-c-scoreboard-multiple-state-item--live-color, #c00);
            }
            .ue-c-scoreboard-multiple__state.ue-c-scoreboard-multiple--live:before {
                content: var(--ue-c-scoreboard-multiple-state-item--bullet-live-content, ' ');
                position: relative;
                width: var(--ue-c-scoreboard-multiple-state-item--bullet-live-size, 5px);
                height: var(--ue-c-scoreboard-multiple-state-item--bullet-live-size, 5px);
                background: var(--ue-c-scoreboard-multiple-state-item--bullet-live-color, #cc0000);
                display: inline-block;
                bottom: 1px;
                border-radius: 50%;
                margin: 0 5px;
            }
            .ue-c-scoreboard-multiple__start-time {
                font-family: var(--ue-c-scoreboard-multiple-start-time-font-family);
                font-size: 12px;
                font-weight: bold;
                color: var(--ue-c-scoreboard-multiple-start-time-color, #1a1a1a);
                margin-right: 5px;
            }
            .ue-c-scoreboard-multiple__player {
                float: left;
                width: 100%;
                height:  var(--ue-c-scoreboard-multiple-player-height, 46px);
                box-sizing: border-box;
                line-height: 1;
                display: flex;
                align-items: center;
                justify-content: space-between;
				padding: var(--ue-c-scoreboard-multiple-player-padding, 0);
				margin-bottom: var(--ue-c-scoreboard-multiple-player-margin-bottom, 0);
				border-bottom: var(--ue-c-scoreboard-multiple-player-border); 
            }
			.ue-c-scoreboard-multiple__player:last-child {
				margin-bottom: var(--ue-c-scoreboard-multiple-player-last-margin-bottom, 0);
			}

            .ue-c-scoreboard-multiple__player-info {
                box-sizing: border-box;
                float: left;
                width: 50%;
                font-size: 14px;
                position: relative;
                display: flex;
                align-items: center;
            }
            .ue-c-scoreboard-multiple__player-info--serving {
                content: '';
                display: inline-block;
                margin: var(--ue-c-scoreboard-multiple-player-info--serving-margin, 0 0 0 5px);
                width:  var(--ue-c-scoreboard-multiple-player-info--serving-width, 8px);
                height:  var(--ue-c-scoreboard-multiple-player-info--serving-height, 8px);
                background: var(--ue-c-scoreboard-multiple-player-info--serving-bg, #d7c700);
                background-repeat: no-repeat;
                border-radius: 50%;
                min-width: var(--ue-c-scoreboard-multiple-player-info--serving-width, 8px);
                max-width: var(--ue-c-scoreboard-multiple-player-info--serving-width, 8px);
            }
            .ue-c-scoreboard-multiple--pending .ue-c-scoreboard-multiple__player-info {
                width: 100%;
            }
            .ue-c-scoreboard-multiple__flag {
                width: var(--ue-c-scoreboard-multiple-flag-width, 25px);
                flex-basis: var(--ue-c-scoreboard-multiple-flag-width, 25px);
                filter: drop-shadow(0px 0px 2px rgba(0,0,0,0.3));
            }
            .ue-c-scoreboard-multiple__player-name {
                line-height: 1.3;
                color: var(--ue-c-scoreboard-multiple-player-name-color);
                font-size: var(--ue-c-scoreboard-multiple-player-name-font-size);
                font-family: var(--ue-c-scoreboard-multiple-player-name-font-family);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-left: var(--ue-c-scoreboard-multiple-player-name-padding-left, 5px);
            }
            .ue-c-scoreboard-multiple--finished .ue-c-scoreboard-multiple--winner .ue-c-scoreboard-multiple__player-name {
                font-weight: bold;
                font-family: var(--ue-c-scoreboard-multiple-player-name-winner-font-family);
            }
            .ue-c-scoreboard-multiple__player-results {
                float: left;
                width: 50%;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }
            .ue-c-scoreboard-multiple--suspended .ue-c-scoreboard-multiple__player-results {
                color: #6d6e71;
            }
            .ue-c-scoreboard-multiple__player-result-item {
                text-align: center;
                position: relative;
                text-transform: uppercase;
                width: var(--ue-c-scoreboard-multiple-player-result-item-width, 20%);
                color: var(--ue-c-scoreboard-multiple-player-result-item-color, #666);
                font-size: var(--ue-c-scoreboard-multiple-player-result-item-font-size, 15px);
				font-family: var(--ue-c-scoreboard-multiple-player-result-item--no-win-font-family);
            }
            .ue-c-scoreboard-multiple__player-result-item--current {
                background: var(--ue-c-scoreboard-multiple-player-result-item--current-bg, black);
                color: var(--ue-c-scoreboard-multiple-player-result-item--current-color, white);
                font-size: var(--ue-c-scoreboard-multiple-player-result-item--current-font-size, 15px);
                width: var(--ue-c-scoreboard-multiple-player-result-item--current-width);
                min-width: var(--ue-c-scoreboard-multiple-player-result-item--current-min-width);
                min-height: var(--ue-c-scoreboard-multiple-player-result-item--current-min-height);
                border-radius: var(--ue-c-scoreboard-multiple-player-result-item--current-border-radius);
                padding: var(--ue-c-scoreboard-multiple-player-result-item--current-padding, 4px);
            }
            .ue-c-scoreboard-multiple__player-result-item span {
                position: absolute;
                top: 0;
                font-size: var(--ue-c-scoreboard-multiple-player-result-item-span-font-size, 10px);
                line-height: 1;
            }
            .ue-c-scoreboard-multiple__player-result-item.ue-c-scoreboard-multiple--win {
                font-weight: bold;
                font-family: var(--ue-c-scoreboard-multiple-player-result-item--win-font-family);
            }
            .ue-c-scoreboard-multiple__state-match {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
				margin-top: var(--ue-c-scoreboard-multiple-state-match-margin-top, 8px);
                margin-bottom: var(--ue-c-scoreboard-multiple-state-match-margin-bottom, 10px);
            }
            .ue-c-scoreboard-multiple__match-link {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 2;
            }
            .ue-c-scoreboard-multiple__match-link:hover {
                background: rgba(0, 0, 0, .05);
            }
            .ue-c-scoreboard-multiple--no-results  .ue-c-scoreboard-multiple__player-results,
            .ue-c-scoreboard-multiple__info--no-results {
                display: none;
            }
            .ue-c-scoreboard-multiple--no-results {
                display: block;
                overflow: hidden;
            }
            .ue-c-scoreboard-multiple--no-results .ue-c-scoreboard-multiple__body {
                flex-direction: row;
            }
            .ue-c-scoreboard-multiple--no-results .ue-c-scoreboard-multiple__player-info {
                max-width: inherit;
                width: 100%;
            }
            .ue-c-scoreboard-multiple--no-results .ue-c-scoreboard-multiple__players {
                width: 50%;
            }
            .ue-c-scoreboard-multiple--no-results  .ue-c-scoreboard-multiple__player-info {
                max-width: inherit;
            }
            .ue-c-scoreboard-multiple__info--no-results {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 47%;
                font-size: var(--ue-c-scoreboard-multiple-info--no-results-font-size, 17px);
                color: var(--ue-c-scoreboard-multiple-info--no-results-color, #767474);
                margin: 0 2px;
                text-align: center;
            }

            .ue-c-scoreboard-multiple--finished .ue-c-scoreboard-multiple__player-name {
                font-family: var(--ue-c-scoreboard-multiple-finish-player-name-font-family);
            }
            :host(.horizontal) .ue-c-scoreboard-multiple__player-info {
                width: 100%;
            }
            :host(.horizontal) .ue-c-scoreboard-multiple__player-results {
                width: 100%;
            }
            :host(.horizontal) .ue-c-scoreboard-multiple__player {
                padding: 3px 0;
            }
            :host(.horizontal) .ue-c-scoreboard-multiple__player.visitor {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: reverse;
                -ms-flex-direction: column-reverse;
                flex-direction: column-reverse;
            }
            :host(.horizontal) .ue-c-scoreboard-multiple__state-match {
                display: none;
            }
            :host(.horizontal) .ue-c-scoreboard-multiple__body {
                width: 100%;
            }
            :host(.ue-c-scoreboard-multiple--compact) {
                --ue-c-scoreboard-multiple__state-item--color: #000;
            }
            :host(.ue-c-scoreboard-multiple--compact) .ue-c-scoreboard-multiple__state-match {
                width: 100%;
                box-sizing: border-box;
                padding: 3px 4px;
                margin-bottom: 0;
                justify-content: start;
            }
            :host(.ue-c-scoreboard-multiple--compact) .ue-c-scoreboard-multiple__state {
                --ue-c-scoreboard-multiple__state-item--font-size: 11px;
                --ue-c-scoreboard-multiple__state-item--color: #a3a3a3;
            }
            :host(.ue-c-scoreboard-multiple--compact) .ue-c-scoreboard-multiple__start-time {
                font-size: 11px;
                font-weight: 700;
                margin-left: 5px;
            }
            :host(.ue-c-scoreboard-multiple--compact) .ue-c-scoreboard-multiple__player-info {
                max-width: 56%;
                width: 60%;
            }
            :host(.ue-c-scoreboard-multiple--compact) .ue-c-scoreboard-multiple--no-results .ue-c-scoreboard-multiple__player-info {
                width: 100%;
                max-width: inherit;
            }
            :host(.ue-c-scoreboard-multiple--compact) .ue-c-scoreboard-multiple__player {
                height: 35px;
            }
            :host(.ue-c-scoreboard-multiple--compact) .ue-c-scoreboard-multiple__flag {
                min-width: 25px;
                padding: 0 5px 0 0;
                box-sizing: content-box;
            }
            :host(.ue-c-scoreboard-multiple--compact) .ue-c-scoreboard-multiple__body {
                width: auto;
                padding: 0px 2px 0 10px;
            }
            :host(.ue-c-scoreboard-multiple--compact) .ue-c-scoreboard-multiple__player-results {
                width: 40%;
                padding: 0 4px;
                --ue-c-scoreboard-multiple-player-result-item-font-size: 14px;
            }
            :host(.ue-c-scoreboard-multiple--compact) .ue-c-scoreboard-multiple__player-name {
                padding-left: 0;
                font-size: 12px;
            }
            :host(.ue-c-scoreboard-multiple--compact) .ue-c-scoreboard-multiple--finished .ue-c-scoreboard-multiple__state-match {
                margin-left: 5px;
            }

            .hidden-content {
                position: absolute !important;
                height: 1px;
                width: 1px;
                overflow: hidden;
                clip: rect(1px, 1px, 1px, 1px);
                clip-path: polygon(0 0, 0 0, 0 0, 0 0);
            }
        `}static get properties(){return{match:{type:Object,attribute:"match"},iconSize:{type:String},lang:{type:String},messages:{type:Object},hideLiveDetail:{type:Boolean}}}constructor(){super(),this.setProperties()}setProperties(){this.match={},this.iconSize="22",this.lang="esES",this.messages={esES:{notResultsYet:"Datos disponibles al finalizar el partido",win:"Gana"},enEN:{notResultsYet:"Data available after the match",win:"Win"}},this.hideLiveDetail=!1}connectedCallback(){super.connectedCallback();var e=new CustomEvent("wc-UEScoreboardMultiple",{bubbles:!0});window.dispatchEvent(e),document.addEventListener("UE-MatchGeneralStatsDataEvent",this._initializeMatchStatus.bind())}updated(e){e.has("match")&&this._initializeMatchStatus()}_initializeMatchStatus(){this.match&&this.match.status&&0===this.match.status.id&&(this.match.homeTeam&&this.match.homeTeam.score&&!this.match.homeTeam.score.length&&this.match.homeTeam.score.push({result:"-"},{result:"-"},{result:"-"}),this.match.awayTeam&&this.match.awayTeam.score&&!this.match.awayTeam.score.length&&this.match.awayTeam.score.push({result:"-"},{result:"-"},{result:"-"})),this.match&&this.match.status&&this.match.status.id&&1===this.match.status.id?(!this.match.homeTeam||this.match.homeTeam.score&&this.match.homeTeam.score.length||(this.noResults=!0,this.noResultsClass="ue-c-scoreboard-multiple--no-results"),!this.match.awayTeam||this.match.awayTeam.score&&this.match.awayTeam.score.length||(this.noResults=!0,this.noResultsClass="ue-c-scoreboard-multiple--no-results")):(this.noResults=!1,this.noResultsClass=""),setTimeout((()=>this.requestUpdate()),300)}_getStatusMatchClass(){if(void 0===this.match.status)return"";switch(this.match.status.id){case 0:return"ue-c-scoreboard-multiple--pending";case 1:return"ue-c-scoreboard-multiple--live";case 2:return"ue-c-scoreboard-multiple--finished";case 3:return"ue-c-scoreboard-multiple--suspended";case 5:return"ue-c-scoreboard-multiple--deferred";case 6:return"ue-c-scoreboard-multiple--cancelled";default:return""}}_getStatusText(){if(void 0===this.match.status)return"";switch(this.match.status.id){case 0:return this.match.status.name||"no comenzado";case 1:return this.match.status.name||"directo";case 2:return this.match.status.name||"finalizado";case 3:return this.match.status.name||"suspendido";case 5:return this.match.status.name||"aplazado";case 6:return this.match.status.name||"cancelado";default:return""}}_pendingMatch(e){return 0===e}_showStartTime(){return!(void 0===this.match.status||!this._pendingMatch(this.match.status.id)&&(this.match.homeTeam&&this.match.awayTeam&&this.match.homeTeam.score&&this.match.awayTeam.score&&this.match.homeTeam.score.length&&this.match.awayTeam.score.length||1!==this.match.status.id))}_liveMatch(e){return 1===e}_finishedMatch(e){return 2===e}_getWinnerClass(e){return void 0===this.match.status||2!==this.match.status.id?"":this.match.winner===e?"ue-c-scoreboard-multiple--winner":""}_getSetWinnerClass(e){return e?"ue-c-scoreboard-multiple--win":""}_getSetWinnerAria(e){return e?this.messages[this.lang].win:""}add1Set(e){return e+1}_getServingClass(e){if(e&&!this.hideLiveDetail)return"ue-c-scoreboard-multiple__player-info--serving"}_hasToShowTV(){return!(!(this.match&&this.match.tv&&this.match.tv.length)||this._finishedMatch(this.match.status.id))}_getImageUrl(e,t){var a,r="";return e&&e.length&&((a=(e=e.sort(((e,t)=>parseInt(e.size)>parseInt(t.size)?1:parseInt(e.size)===parseInt(t.size)?0:-1))).filter((e=>parseInt(e.size)>=parseInt(this.iconSize))))&&a.length?(r=a[0].url,t&&a.length>1&&2*parseInt(this.iconSize)>parseInt(a[0].size)&&(r+=`, ${a[1].url} 1.5x`)):r=e[e.length-1].url||""),r}_tryToTranslate(e){return this.messages[this.lang][e]||""}render(){return L`
            ${this.match&&0!==Object.keys(this.match).length?L`
                    <div class="ue-c-scoreboard-multiple__container ${this._getStatusMatchClass()} ${this.noResultsClass}" 
                    arial-label="Partido: ${this.match.homeTeam.name} contra ${this.match.awayTeam.name}">
                        ${this.match.url?L`
                                <a class="ue-c-scoreboard-multiple__match-link" itemprop="url" href="${this.match.url}" data-ue-type="${this.match.sport?.name}" 
                                data-ue-title="${this.match.homeTeam.name} - ${this.match.awayTeam.name}" title="Ir al directo de Partido">
                                    <span class="hidden-content">${this.match.homeTeam.name} - ${this.match.awayTeam.name}</span>
                                </a>
                            `:L``}
                        <div class="ue-c-scoreboard-multiple__header">
                            <div class="ue-c-scoreboard-multiple__state-match">
                                ${this._showStartTime()?L`
                                        ${this._pendingMatch(this.match.status.id)?L`
                                                <span class="hidden-content" aria-label="Estado">Estado: No comenzado</span>
                                            `:L``}
                                        ${this.match.startDateConfirmed?L`
                                                <span class="hidden-content">Comienza a las: </span>
                                                <span class="ue-c-scoreboard-multiple__start-time">${this.match.startTime}</span>
                                            `:L`
                                                <span class="ue-c-scoreboard-multiple__start-time">--:--</span>
                                            `}
                                    `:L``}
                                
                                ${this._pendingMatch(this.match.status.id)?L``:L`
                                        <span class="hidden-content">Estado:</span>
                                        <span class="ue-c-scoreboard-multiple__state ${this._getStatusMatchClass()}">${this._getStatusText()}</span>
                                    `}

                                ${this._hasToShowTV()?L`
                                        <ul class="ue-c-scoreboard-multiple__tv-list">
                                            ${this.match.tv.map((e=>L`
                                                    <span class="hidden-content">Se emite en</span>
                                                    <li class="ue-c-scoreboard-multiple__tv-item">${e.name}</li>
                                                `))}
                                        </ul>
                                    `:L``}
                            </div>
                        </div>
                        <div class="ue-c-scoreboard-multiple__body" role="table" aria-label="Marcador">
                            <div class="ue-c-scoreboard-multiple__players">
                                <div class="ue-c-scoreboard-multiple__player local ${this._getWinnerClass("homeTeam")}" role="row">
                                    <div class="ue-c-scoreboard-multiple__player-info" role="rowheader">
                                        ${this.match.homeTeam.img?L`
                                                <div class="ue-c-scoreboard-multiple__content-flag">
                                                    <img class="ue-c-scoreboard-multiple__flag" src="${this._getImageUrl(this.match.homeTeam.img)}" 
                                                    srcset="${this._getImageUrl(this.match.homeTeam.img,"true")}" alt="" 
                                                    @error="${e=>e.target.style.display="none"}" >
                                                </div>
                                            `:L``}
                                        
                                        <div class="ue-c-scoreboard-multiple__player-name">
                                            ${this.match.homeTeam.name}
                                        </div>

                                        ${this._getServingClass(this.match.homeTeam.serving)?L`
                                                <div class="${this._getServingClass(this.match.homeTeam.serving)}"></div>
                                            `:L``}
                                    </div>
                                    <div class="ue-c-scoreboard-multiple__player-results">
                                        ${this.match.homeTeam.score.map(((e,t)=>L`
                                                <div class="ue-c-scoreboard-multiple__player-result-item ${this._getSetWinnerClass(e.win)}" 
                                                aria-label="${this._getSetWinnerAria(e.win)} Set ${this.add1Set(t)}:" role="cell">
                                                    ${e.result}
                                                    ${e.tiebreak?L`
                                                            <span>${e.tiebreak}</span>
                                                        `:L``}
                                                </div>
                                            `))}
                                        ${!this.hideLiveDetail&&this._liveMatch(this.match.status.id)&&this.match.homeTeam.subscore?L`
                                                <div class="ue-c-scoreboard-multiple__player-result-item ue-c-scoreboard-multiple__player-result-item--current">
                                                    ${this.match.homeTeam.subscore}
                                                </div>
                                            `:L``}
                                    </div>
                                </div>

                                <div class="ue-c-scoreboard-multiple__player visitor ${this._getWinnerClass("awayTeam")}" role="row">
                                    <div class="ue-c-scoreboard-multiple__player-info" role="rowheader">
                                        ${this.match.awayTeam.img?L`
                                                <div class="ue-c-scoreboard-multiple__content-flag">
                                                    <img class="ue-c-scoreboard-multiple__flag" src="${this._getImageUrl(this.match.awayTeam.img)}" 
                                                    srcset="${this._getImageUrl(this.match.awayTeam.img,"true")}" alt="" 
                                                    @error="${e=>e.target.style.display="none"}" >
                                                </div>
                                            `:L``}

                                        <div class="ue-c-scoreboard-multiple__player-name">
                                            ${this.match.awayTeam.name}
                                        </div>
                                        ${this._getServingClass(this.match.awayTeam.serving)?L`
                                                <div class="${this._getServingClass(this.match.awayTeam.serving)}"></div>
                                            `:L``}
                                    </div>
                                    <div class="ue-c-scoreboard-multiple__player-results">
                                        ${this.match.awayTeam.score.map(((e,t)=>L`
                                                <div class="ue-c-scoreboard-multiple__player-result-item ${this._getSetWinnerClass(e.win)}" 
                                                aria-label="${this._getSetWinnerAria(e.win)} Set ${this.add1Set(t)}:" role="cell">
                                                    ${e.result}
                                                    ${e.tiebreak?L`
                                                            <span>${e.tiebreak}</span>
                                                        `:L``}
                                                </div>
                                            `))}

                                        ${!this.hideLiveDetail&&this._liveMatch(this.match.status.id)&&this.match.awayTeam.subscore?L`
                                                <div class="ue-c-scoreboard-multiple__player-result-item ue-c-scoreboard-multiple__player-result-item--current">
                                                    ${this.match.awayTeam.subscore}
                                                </div>
                                            `:L``}
                                    </div>
                                </div>
                            </div>
                            ${this.noResults?L`
                                    <div class="ue-c-scoreboard-multiple__info--no-results">
                                        <span>${this._tryToTranslate("notResultsYet")}</span>
                                    </div>
                                `:L``}
                        </div>
                    </div>
                `:L``}
        `}}),window.customElements.define("ue-scoreboard-table",class extends se{static get styles(){return s`
            .ue-c-scoreboard-table__header {
                font-size: 14px;
                font-weight: bold;
                margin: 0;
                padding: 8px 10px;
                position: relative;
                color: #000;
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: space-between;
                border-bottom: 2px solid black;
                flex-direction: var(--ue-c-scoreboard-table__header-direction, row);
                background: #fff;
            }

            .ue-c-scoreboard-table__competition-phase {
                display: flex;
            }

            .ue-c-scoreboard-table__competition-phase-name + .ue-c-scoreboard-table__competition-phase-location:before {
                content: '-';
                margin: 0 5px;
            }

            .ue-c-scoreboard-table__competition-state {
                display: flex;
                align-items: center;
                padding: 3px 0;
            }
            .ue-c-scoreboard-table--live .ue-c-scoreboard-table__competition-state-text{
                color: #c00;
            }

            .ue-c-scoreboard-table--finished .ue-c-scoreboard-table__competition-state-text {
                color: #a3a3a3;
            }

            .ue-c-scoreboard-table--live .ue-c-scoreboard-table__competition-state-text::before {
                content: '';
                width: var(--ue-c-scoreboard-state-live-width, 5px);
                height: var(--ue-c-scoreboard-state-live-width, 5px);
                background: var(--ue-c-scoreboard-state-color-live, #c00);
                position: relative;
                top: -0.2em;
                margin-right: 3px;
                display: inline-block;
                border-radius: 50%;
            }

            .ue-c-scoreboard-table__competition-status {
                display: flex;
                flex-direction: column;
                align-items: var(--ue-c-scoreboard-table__competition-status-align, center);
            }

            .ue-c-scoreboard-table__competition-tv-list {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }

            .ue-c-scoreboard-table__competition-tv-item {
                float: left;
                font-size: 10px;
                color: #6d6e71;
            }

            .ue-c-scoreboard-table__competition-tv-item + .ue-c-scoreboard-table__competition-tv-item:before {
                content: '-';
                margin: 0 5px;
            }

            .ue-c-scoreboard-table__competition-time {
                font-weight: normal;
                font-size: 17px;
            }

            .ue-c-scoreboard-table__competition-current-distance:before {
                content: '-';
                margin: 0 5px;
            }

            .ue-c-scoreboard-table__competition-current-distance,
            .ue-c-scoreboard-table__competition-state {
                text-transform: uppercase;
                position: relative;
                font-size: 10px;
            }

            .ue-c-scoreboard-table__competition-state-icon {
                width: 7px;
                height: 7px;
                background: #cc0000;
                border-radius: 50%;
                margin-right: 5px;
            }

            .ue-c-scoreboard-table__results {
                width: 100%;
                font-size: 14px;
                border-collapse: collapse;
                color: #000;
                background: #fff;
            }

            .ue-c-scoreboard-table__results-header,
            .ue-c-scoreboard-table__caption {
                position: absolute;
                height: 1px;
                width: 1px;
                visibility: hidden;
            }

            .ue-c-scoreboard-table__results td:last-child {
                padding-right: 3px;
            }

            .ue-c-scoreboard-table--highlighted .ue-c-scoreboard-table__results-time {
                font-family: var(--ue-c-scoreboard-table-highlighted-results-time);
                font-weight: bold;
            }

            .ue-c-scoreboard-table__results-row {
                height: var(--ue-c-scoreboard-table-row-height, 46px);
                border-collapse: collapse;
                vertical-align: middle;
                border-bottom: 1px solid #e2e2e2;
            }

            .ue-c-scoreboard-table__results-position {
                text-align: center;
                font-size: var(--ue-c-scoreboard-table-posotion-font-size, 12px);
                font-weight: bold;
                vertical-align: middle;
            }

            .ue-c-scoreboard-table__results-flag {
                text-align: center;
                vertical-align: middle;
                font-size: 5px;
            }

            .ue-c-scoreboard-table__results-flag img {
                width: 100%;
                max-width: 26px;
                min-width: 26px;
                filter: drop-shadow(0px 0px 2px rgba(0,0,0,0.4));
            }

            .ue-c-scoreboard-table__results-competitor {
                padding-left: 3px;
                text-align: left;
                position: relative;
                vertical-align: middle;
                font-size: var(--ue-c-scoreboard-table-competitor-font-size, 14px);
            }

            .ue-c-scoreboard-table__results-team {
                text-align: left;
                vertical-align: middle;
                font-size: var(--ue-c-scoreboard-table-team-font-size, 12px);
            }

            .ue-c-scoreboard-table__results-time {
                text-align: right;
                padding-left: 15px;
                position: relative;
                text-align: left;
                vertical-align: middle;
                font-size: var(--ue-c-scoreboard-table-time-font-size, 12px);
            }

            .ue-c-scoreboard-table__results-time:before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }

            .ue-c-scoreboard-table--finished .ue-c-scoreboard-table__competition-tv-list,
            .ue-c-scoreboard-table--suspended .ue-c-scoreboard-table__competition-tv-list,
            .ue-c-scoreboard-table--deferred .ue-c-scoreboard-table__competition-tv-list,
            .ue-c-scoreboard-table--cancelled .ue-c-scoreboard-table__competition-tv-list {
                display: none;
            }
            .ue-c-scoreboard-table__info--no-results {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60%;
                font-size: 13px;
                color: #878787;
                padding: 20px;
                margin: 0 auto;
            }
            .ue-c-scoreboard-table__info--no-results span {
                margin-left: 5px;
            }

            [hidden] {
                display: none !important;
            }

            .hidden-content {
                position: absolute !important;
                height: 1px;
                width: 1px;
                overflow: hidden;
                clip: rect(1px, 1px, 1px, 1px);
                clip-path: polygon(0 0, 0 0, 0 0, 0 0);
            }

            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__header {
                display: flex;
                flex-direction: row-reverse;
                padding: 4px 9px 6px;
                font-size: 11px;
                border-bottom: 0;
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__competition-state {
                padding: 0;
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__competition-time {
                font-size: 11px;
                font-weight: 700;
                font-family: var(--ue-c-scoreboard-table-compact-competition-time);
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__competition-status {
                flex-direction: row;
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__competition-phase-name {
                font-weight: normal
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__competition-tv-item {
                margin-left: 5px;
                color: #000;
                font-weight: normal;
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__results td:last-child {
                padding-right: 10px;
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__results-row {
                height: 23px;
                border-bottom: 0;
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__results-time {
                text-align: right;
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__results-flag {
                vertical-align: bottom;
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__results-flag img {
                width: 25px;
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__competition-race-location,
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__competition-current-distance,
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__results-team {
                display: none;
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__results-position {
                 padding-left: 5px;
            }
            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__results-competitor {
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 100px;
            }

            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__competition-state-text {
                line-height: 13px;
                font-weight: normal;
                font-size: 11px;
            }

            :host(.ue-c-scoreboard-table--compact) .ue-c-scoreboard-table__info--no-results {
                display: flex;
            }
        `}static get properties(){return{race:{type:Object},pendingRace:{type:Boolean},finishedRace:{type:Boolean},statusText:{type:String},iconSize:{type:String},limit:{type:Number},lang:{type:String},messages:{type:Object}}}constructor(){super(),this.setProperties()}setProperties(){this.race={},this.pendingRace=!1,this.finishedRace=!1,this.statusText="",this.iconSize="22",this.limit=0,this.lang="esES",this.messages={esES:{notResultsYet:"Todavía no hay datos disponibles"},enEN:{notResultsYet:"There is not available data yet"}}}connectedCallback(){super.connectedCallback()}updated(e){e.has("race")&&this._initializeRaceStatus()}_initializeRaceStatus(){if(this.race&&void 0!==this.race.status){switch(this.pendingRace=0===this.race.status.id,this.finishedRace=2===this.race.status.id,this.race.unit){case"NV":this.race.unit="vueltas";break;case"KM":this.race.unit="KM"}this.statusText=this._getStatusText(),this._generateTable()}}_getStatusRaceClass(e){if(void 0===e.status)return"";switch(e.status.id){case 0:return"ue-c-scoreboard-table--pending";case 1:return"ue-c-scoreboard-table--live";case 2:return"ue-c-scoreboard-table--finished";case 3:return"ue-c-scoreboard-table--suspended";case 5:return"ue-c-scoreboard-table--deferred";case 6:return"ue-c-scoreboard-table--cancelled";default:return""}}_getStatusText(){if(void 0===this.race.status)return"";switch(this.race.status.id){case 0:return this.race.status.name||"no comenzado";case 1:return this.race.status.name||"directo";case 2:return this.race.status.name||"finalizado";case 3:return this.race.status.name||"suspendido";case 5:return this.race.status.name||"aplazado";case 6:return this.race.status.name||"cancelado";default:return""}}_generateTable(){let e=this.shadowRoot.querySelector("table");if(this.race&&this.race.rank&&this.race.rank.length){let t=document.createElement("tbody");(this.limit>0?this.race.rank.slice(0,this.limit):this.race.rank).forEach(((e,a)=>{let r=document.createElement("tr");r.classList.add("ue-c-scoreboard-table__results-row","ue-scoreboard-table"),a<3&&r.classList.add("ue-c-scoreboard-table--highlighted");let o=document.createElement("td");o.classList.add("ue-c-scoreboard-table__results-position","ue-scoreboard-table"),o.innerHTML=a+1,r.appendChild(o);let s=document.createElement("td");if(s.classList.add("ue-c-scoreboard-table__results-flag","ue-scoreboard-table"),e.flag&&e.flag.length&&e.flag[0].url){let t=document.createElement("img");t.src=this._getImageUrl(e.flag),t.srcset=this._getImageUrl(e.flag,!0),t.setAttribute("style","max-width: 40px"),t.setAttribute("alt",""),t.classList.add("ue-scoreboard-table"),s.appendChild(t)}r.appendChild(s);let i=document.createElement("td");i.classList.add("ue-c-scoreboard-table__results-competitor","ue-scoreboard-table"),i.innerHTML=e.name||"",r.appendChild(i);let c=document.createElement("td");c.classList.add("ue-c-scoreboard-table__results-team","ue-scoreboard-table"),c.innerHTML=e.team||"",r.appendChild(c);let l=document.createElement("td");l.classList.add("ue-c-scoreboard-table__results-time","ue-scoreboard-table"),l.innerHTML=e.time||"",r.appendChild(l),t.appendChild(r)})),e.appendChild(t)}}_getImageUrl(e,t){var a,r="";return e&&e.length&&((a=(e=e.sort(((e,t)=>parseInt(e.size)>parseInt(t.size)?1:parseInt(e.size)===parseInt(t.size)?0:-1))).filter((e=>parseInt(e.size)>=parseInt(this.iconSize))))&&a.length?(r=a[0].url,t&&a.length>1&&2*parseInt(this.iconSize)>parseInt(a[0].size)&&(r+=`, ${a[1].url} 1.5x`)):r=e[e.length-1].url||""),r}_tryToTranslate(e){return this.messages[this.lang][e]||""}render(){return L`
            ${this.race&&0!==Object.keys(this.race).length?L`
                    <div class="ue-c-scoreboard-table ${this._getStatusRaceClass(this.race)}" aria-label="${this.race.name} - ${this.race.locationName}">
                        <div class="ue-c-scoreboard-table__header">
                            <div class="ue-c-scoreboard-table__competition-phase">
                                <div class="ue-c-scoreboard-table__competition-phase-name">
                                    <span class="ue-c-scoreboard-table__competition-race-name">${this.race.name}</span>
                                    ${this.race.locationName?L`
                                            <span class="ue-c-scoreboard-table__competition-race-location">
                                                - ${this.race.locationName}
                                            </span>
                                        `:L``}
                                </div>
                            </div>
                            <div class="ue-c-scoreboard-table__competition-status">
                                    ${this.pendingRace?L`
                                            ${this.race.startDateConfirmed?L`
                                                    <span class="hidden-content">Comienza a las: </span>
                                                    <div class="ue-c-scoreboard-table__competition-time">${this.race.startTime}</div>
                                                `:L`
                                                    <span class="hidden-content">No comenzado: </span>
                                                    <div class="ue-c-scoreboard-table__competition-time">--:--</div>
                                                `}
                                        `:L`
                                            <div class="ue-c-scoreboard-table__competition-state">
                                                <div class="ue-c-scoreboard-table__competition-state-text">
                                                    <span class="hidden-content">Estado: </span>
                                                    ${this.statusText}
                                            </div>
                                                ${this.race.distance?L`
                                                        <div class="ue-c-scoreboard-table__competition-current-distance">
                                                            <span class="hidden-content">Estado: </span>
                                                            ${this.race.currentDistance?L`
                                                                    ${this.race.currentDistance} /
                                                                `:L``}
                                                            ${this.race.distance} ${this.race.unit}
                                                        </div>
                                                    `:L``}
                                            </div>
                                        `}
                                <ul class="ue-c-scoreboard-table__competition-tv-list">
                                    ${this.race.tv?L`
                                            ${this.race.tv.map((e=>L`
                                                    <span class="hidden-content">Se emite en</span>
                                                    <li class="ue-c-scoreboard-table__competition-tv-item">${e.name}</li>
                                                `))}
                                        `:L``}
                                    
                                </ul>
                            </div>
                        </div>
                        <table id="ueScoreboardTable" class="ue-c-scoreboard-table__results"></table>
                            ${this.pendingRace?L`
                                    <div class="ue-c-scoreboard-table__info--no-results">
                                        <span class="icon-clock">
                                            <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
                                                <g fill="none" fill-rule="evenodd">
                                                    <path fill="#5C5C5C" d="M22.692 5.708c-2.238-2.147-5.148-3.415-8.275-3.622l1.58-1.517L15.404 0 12.76 2.538l2.645 2.537.593-.569-1.689-1.62c6.33.4 11.353 5.468 11.353 11.641 0 6.434-5.455 11.668-12.161 11.668-6.706 0-12.161-5.234-12.161-11.668 0-.258.009-.52.026-.777l-.837-.053c-.018.275-.028.554-.028.83 0 3.332 1.352 6.464 3.808 8.82C6.763 25.703 10.028 27 13.5 27c3.472 0 6.737-1.297 9.192-3.653 2.456-2.356 3.808-5.488 3.808-8.82 0-3.331-1.352-6.463-3.808-8.819"></path>
                                                    <path fill="#0A090B" d="M3.31 7.84l-.63-.415c-.147.208-.29.423-.423.639l.657.373c.125-.202.258-.403.397-.597M4.365 6.894l-.556-.482c-.172.184-.34.375-.498.568l.588.445c.148-.181.305-.36.466-.531M1.554 12.324l-.898-.174c-.062.296-.115.597-.156.897l.908.115c.039-.28.088-.562.146-.838M5.419 5.609l-.484-.546c-.194.159-.386.326-.57.498l.52.514c.172-.16.352-.317.534-.466M2.608 9.456L1.9 9.113c-.123.233-.239.474-.345.715l.731.297c.1-.225.208-.45.323-.669M1.905 10.727l-.796-.264c-.095.262-.182.53-.258.8l.814.212c.071-.25.152-.502.24-.748"></path>
                                                    <path fill="#5C5C5C" d="M13.5 6.538c4.578 0 8.302 3.577 8.302 7.974 0 4.398-3.724 7.975-8.302 7.975-4.578 0-8.302-3.577-8.302-7.975 0-4.397 3.724-7.974 8.302-7.974zm0 16.75c5.037 0 9.135-3.937 9.135-8.776 0-4.838-4.098-8.775-9.135-8.775s-9.135 3.937-9.135 8.775c0 4.84 4.098 8.776 9.135 8.776z"></path>
                                                    <path fill="#5C5C5C" d="M13.149 8.1h.702v-.675h-.702zM13.149 21.6h.702v-.675h-.702zM6.122 14.85h.702v-.675h-.702zM20.176 14.85h.702v-.675h-.702zM16.31 16.633l-2.334-2.313V9.787h-.827v4.872l2.576 2.553.586-.58"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        <span class="hidden-content">Estado: </span>
                                        <span>${this._tryToTranslate("notResultsYet")}</span>
                                    </div>
                                `:L``}
                    </div>
                `:L``}
        `}}),window.customElements.define("ue-bet",class extends se{static get styles(){return s`
            .ue-bet-container {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                box-sizing: border-box;
                position: relative;
                width: 100%;
                width: var(--ue-bet-width, 100%);
                height: auto;
                height: var(--ue-bet-height, auto);
                z-index: 2;
                background-color: transparent;
                background-color: var(--ue-bet-background, rgba(0, 0, 0, 0));
                -webkit-box-pack: end;
                -ms-flex-pack: end;
                justify-content: flex-end;
                justify-content: var(--ue-bet-justify-content, flex-end);
            }

            .ue-bet-container > * + * {
                margin-left: .2rem;
            }

            .ue-bet-list {
                width: auto;
                width: var(--ue-bet-list-width, auto);
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                justify-content: var(--ue-bet-list-justify-content, center);
                align-items: center;
                list-style-type: none;
                padding: 0;
                line-height: 1.2rem;
                margin-top: 5px;
                margin-top: 0 var(--ue-bet-list-margin-top, 5px);
                margin-bottom: 5px;
                margin-bottom: 0 var(--ue-bet-list-margin-bottom, 5px);
                margin-left: 5px;
                margin-left: 0 var(--ue-bet-list-margin-left, 5px);
                margin-right: 5px;
                margin-right: 0 var(--ue-bet-list-margin-right, 5px);
            }

            .ue-bet-item {
                font-size: 12px;
                font-size: var(--ue-bet-item-font-size, 12px);
                color: black;
                color: var(--ue-bet-item-color, black);
                margin: 0;
            }

            .ue-bet-item:after {
                content: '-';
                margin: 0 2px;
            }

            .ue-bet-item:last-of-type:after {
                content: '';
                display: none;
            }

            .ue-bet-item span {
                color: black;
                color: var(--ue-bet-item-theme-color, black);
                margin-right: 2px;
                font-weight: bold;
            }

            .ue-bet-item span:after {
                content: ':';
            }

            .ue-bet-link {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-item-align: center;
                -ms-grid-row-align: center;
                align-self: center;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                font-size: 12px;
                font-size: var(--ue-bet-link-font-size, 12px);
                text-decoration: none;
                text-align: center;
                text-transform: uppercase;
                width: auto;
                width: var(--ue-bet-link-width, auto);
                padding: 0;
                padding: var(--ue-bet-link-padding, 0);
                background-color: transparent;
                background-color: var(--ue-bet-link-backgroundcolor, rgba(0, 0, 0, 0));
                border: 0;
                border: 1px solid var(--ue-bet-link-border-color, transparent);
                border-top-right-radius: 0;
                border-top-right-radius: var(--ue-bet-link-border-radius, 0);
                border-bottom-right-radius: 0;
                border-bottom-right-radius: var(--ue-bet-link-border-radius, 0);
                border-top-left-radius: 0;
                border-top-left-radius: var(--ue-bet-link-border-radius, 0);
                border-bottom-left-radius: 0;
                border-bottom-left-radius: var(--ue-bet-link-border-radius, 0);
            }

            .ue-bet-link a {
                color: black;
                color: var(--ue-bet-link-color, black);
                text-decoration: none;
                font-weight: normal;
                font-weight: var(--ue-bet-link-font-weight, normal);
                letter-spacing: -.5px;
            }

            .ue-bet-link:hover {
                background-color: transparent;
                background-color: var(--ue-bet-link-backgroundcolor-hover, rgba(0, 0, 0, 0));
                --ue-bet-icon-bet-color: var(--ue-bet-icon-bet-color-hover, transparent);
            }

            .ue-bet-link:hover a {
                color: black;
                color: var(--ue-bet-link-color-hover, black);
            }

            .ue-bet-icon-bet {
                display: inherit;
                display: var(--ue-bet-icon-display, inherit);
                height: 10px;
                height: var(--ue-bet-icon-bet-height, 10px);
                margin-left: 5px;
            }

            .ue-bet-attribution {
                border-left: 1px solid #a6a6a6;
                margin: 0.2rem 0 0.2rem 0.375rem;
                text-transform: none;
                font-weight: bold;
                line-height: 0.7rem;
                padding: var(--ue-bet-ad-link-padding, 0 0 0 0.2rem);
                color: var(--ue-bet-ad-item-color, #3d3d3d);
                font-size: 12px;
                font-size:var(--ue-bet-ad-item-font-size, 12px);
            }

            @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
                /* IE10+ CSS styles go here */
                .ue-bet-container {
                    width: 90%;
                }

                .ue-bet-link a {
                    font-size: 11px;
                }
            }
        `}static get properties(){return{data:{type:Object},tag:{type:String},lang:{type:String},channel:{type:String},id:{type:String}}}constructor(){super(),this.data={},this.tag="",this.lang="esES",this.channel="",this.id=""}connectedCallback(){super.connectedCallback()}updated(e){e.has("channel")&&this._setDataUrl()}_getBetText(){var e={esES:"Apostar",enEN:"Bet"};return e[this.lang]||e.esES}_setDataUrl(){if("function"==typeof URL&&this.data&&Object.entries(this.data).length>0&&this.data.link)try{var e=new URL(this.data.link);this.channel&&e.searchParams.set("channel",this.channel),this.data.link=e.href}catch(e){console.warn(e)}}calculateOdds(e){return e&&"number"==typeof e&&e.toString().length>3?parseFloat(e.toFixed(2)):e||""}render(){return L`
            ${this.data&&0!==Object.entries(this.data).length?L`
                    <div class="ue-bet-container">
                        <ul class="ue-bet-list">
                            ${this.data.options.map((e=>L`<li class="ue-bet-item"><span>${e.text}</span>${this.calculateOdds(e.odds)}</li>`))}
                        </ul>
                        <div class="ue-bet-link">
                            ${this.data.link?L`
                                    <a href="${this.data.link}" target="_blank">${this._getBetText()}</a>
                                    <svg role="img" class="ue-bet-icon-bet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.875 14">
                                        <path fill="var(--ue-bet-icon-bet-color, transparent)" d="M.875 0l7 7-7 7L0 13.125 6.125 7 0 .875z"></path>
                                    </svg>
                                `:L``}
                        </div>
                        <div class="ue-bet-attribution" title="Publicidad">Pub</div>
                    </div>
                `:L``}
        
            
        `}}),window.customElements.define("ue-sport-events-normalizer",class extends se{static get styles(){return s`
            :host {
                display: flex;
                justify-content: center;
                width: 100%;
            }
        `}static get properties(){return{sportEvents:{type:Array,attribute:"sport-events"},sportEventsUrl:{type:String,attribute:"sport-events-url"},lang:{type:String}}}constructor(){super(),this.setProperties(),this.activeRequest=null}setProperties(){this.sportEvents=[],this.sportEventsUrl="",this.lang=""}connectedCallback(){super.connectedCallback(),this._getSportEvents()}updated(e){e.has("sportEventsUrl")&&this._getSportEvents()}async _getSportEvents(){if(this.sportEventsUrl&&""!==this.sportEventsUrl)try{this.activeRequest&&this.activeRequest.abort(),this.activeRequest=new AbortController;const e=await fetch(this.sportEventsUrl,{signal:this.activeRequest.signal});if(!e.ok)throw new Error(e.status);const t=await e.json();this.handleSportEventsResponse(t)}catch(e){return this.handleSportEventsErrorResponse(e),e}}sendData(){const e=new CustomEvent("sportEventsUpdate",{bubbles:!0,composed:!0,detail:{sportEvents:this.sportEvents}});this.dispatchEvent(e)}handleSportEventsResponse(e){if(e&&e.data){let t=this._normalizeSportEvents(e.data);this.sportEvents=t}else this.sportEvents=[];this.sendData()}handleSportEventsErrorResponse(e){"DOMException: The user aborted a request."!==e.toString()&&(e&&e.status?this.sportEvents=[]:this.sportEvents=null,this.sendData())}_normalizeSportEvents(e){let t=[];return e&&e.length&&e.forEach((e=>{if(e.sportEvent&&e.sportEvent.status&&void 0!==e.sportEvent.status.id&&"5"!=e.sportEvent.status.id&&e.sport){let a;switch(e.sport.type){case"match":a=this._normalizeDualSport(e);break;case"tennis":a=this._normalizeMultipleSport(e);break;case"race":a=this._normalizeTableSport(e);break;default:return}a.id=e.id,a.tournament=e.tournament,a.sport=e.sport,a.tv=e.tv,void 0===a.status&&(a.status={id:e.sportEvent.status.id},e.sportEvent.status.alternateNames?a.status.name=e.sportEvent.status.alternateNames[this.lang]||e.sportEvent.status.name:a.status.name=e.sportEvent.status.name,a.status.id=e.sportEvent.status.id),a.startTime=this._getTime(e.startDate),a.startDate=e.startDate,e.editorialInfo&&(a.url=e.editorialInfo.url),a.startDateConfirmed=!0,void 0!==e.startDateConfirmed&&!1===e.startDateConfirmed&&(a.startDateConfirmed=!1),t.push(a)}})),t}_normalizeDualSport(e){let t={};return e&&e.sportEvent&&e.sportEvent.competitors&&e.sportEvent.competitors.homeTeam&&e.sportEvent.competitors.awayTeam&&(1===e.sportEvent.status.id&&e.score&&e.score.period&&(t.status={},t.status.id=e.sportEvent.status.id,e.score.period.alternateNames?t.status.name=e.score.period.alternateNames[this.lang]||e.score.period.name:t.status.name=e.score.period.name),t.homeTeam={name:this._getNameTeam(e.sportEvent.competitors.homeTeam),img:this._getImageUrl(e.sportEvent.competitors.homeTeam,e.tournament&&e.tournament.isNational||!1)},t.awayTeam={name:this._getNameTeam(e.sportEvent.competitors.awayTeam),img:this._getImageUrl(e.sportEvent.competitors.awayTeam,e.tournament&&e.tournament.isNational||!1)},e.score&&(e.score.winner&&(e.score.winner.id===e.sportEvent.competitors.homeTeam.id&&(t.winner="homeTeam"),e.score.winner.id===e.sportEvent.competitors.awayTeam.id&&(t.winner="awayTeam")),e.score.homeTeam&&(t.homeTeam.score=e.score.homeTeam.totalScore,t.homeTeam.penalties=e.score.homeTeam.subScore),e.score.awayTeam&&(t.awayTeam.score=e.score.awayTeam.totalScore,t.awayTeam.penalties=e.score.awayTeam.subScore)),(e.sportEvent.competitors.awayTeam.competitorEditorialInfo||e.sportEvent.competitors.homeTeam.competitorEditorialInfo)&&(t.awayTeam.competitorEditorialInfo=e.sportEvent.competitors.awayTeam.competitorEditorialInfo||"",t.homeTeam.competitorEditorialInfo=e.sportEvent.competitors.homeTeam.competitorEditorialInfo||""),t.bets=[],e.bets&&e.bets instanceof Array&&e.bets.forEach((e=>{let a={link:e.url,options:[]},r=["bet","usBetPrice","fracBetPrice"].concat(Object.keys(e)).filter((t=>"object"==typeof e[t]&&(e[t].homeOdds||e[t].drawOdds||e[t].awayOdds))),o="";r&&r.length>0&&(o=r[0]);let s=e[o]||{};s.homeOdds&&a.options.push({text:"1",odds:s.homeOdds}),s.drawOdds&&a.options.push({text:"X",odds:s.drawOdds}),s.awayOdds&&a.options.push({text:"2",odds:s.awayOdds}),t.bets.push(a)}))),t}_normalizeMultipleSport(e){let t={};return e&&e.sportEvent&&e.sportEvent.competitors&&e.sportEvent.competitors.homeTeam&&e.sportEvent.competitors.awayTeam&&(t.homeTeam={name:this._getNameTeam(e.sportEvent.competitors.homeTeam),img:this._getImageUrl(e.sportEvent.competitors.homeTeam,e.tournament&&e.tournament.isNational||!1)},t.awayTeam={name:this._getNameTeam(e.sportEvent.competitors.awayTeam),img:this._getImageUrl(e.sportEvent.competitors.awayTeam,e.tournament&&e.tournament.isNational||!1)},e.score&&e.score.homeTeam&&e.score.homeTeam.setsScore&&e.score.homeTeam.setsScore instanceof Array&&e.score.awayTeam&&e.score.awayTeam.setsScore&&e.score.awayTeam.setsScore instanceof Array&&(e.sportEvent.status&&e.sportEvent.status.alternateNames?t.status={id:e.sportEvent.status.id,name:e.sportEvent.status.alternateNames[this.lang]||e.sportEvent.status.name}:t.status=e.sportEvent.status,t.homeTeam.score=[],e.score.homeTeam.setsScore.forEach(((a,r,o)=>{let s={result:a,win:!1};a>e.score.awayTeam.setsScore[r]&&(r<o.length-1||t.status&&2===t.status.id)&&(s.win=!0),t.homeTeam.score.push(s)})),t.homeTeam.subscore=e.score.homeTeam.points,t.homeTeam.serving="1"===e.score.homeTeam.atService,t.awayTeam.score=[],e.score.awayTeam.setsScore.forEach(((a,r,o)=>{let s={};s.result=a,s.win=!1,a>e.score.homeTeam.setsScore[r]&&(r<o.length-1||t.status&&2===t.status.id)&&(s.win=!0),t.awayTeam.score.push(s)})),t.awayTeam.subscore=e.score.awayTeam.points,t.awayTeam.serving="1"===e.score.awayTeam.atService,e.score.winner&&(e.score.winner.id===e.sportEvent.competitors.homeTeam.id&&(t.winner="homeTeam"),e.score.winner.id===e.sportEvent.competitors.awayTeam.id&&(t.winner="awayTeam")))),t}_normalizeTableSport(e){let t={};return t.name=e.sportEvent.name||"",e.sportEvent.location&&(t.locationName=e.sportEvent.location.name),t.distance=e.sportEvent.distance,t.unit=e.sportEvent.unit,t.rank=[],e.score&&(t.currentDistance=e.score.currentDistance,e.score.results&&e.score.results.forEach((a=>{let r={name:a.fullName,team:a.team,country:a.nationality,position:a.position,initialPosition:a.startPosition,flag:this._getImageUrl(a,e.tournament&&e.tournament.isNational||!1),time:a.time};t.rank.push(r)}))),t}_getImageUrl(e,t){let a=[];if(e&&e.images){let r=[];if(r=t&&e.images.urlFlag&&e.images.urlFlag.length?e.images.urlFlag:e.images.urlLogo,r.forEach((e=>{let t={},r=/(\d+)x\d+/;t.url=e,e.match(r)&&e.match(r).length&&e.match(r).length>=1?t.size=e.match(r)[1]:t.size="1",a.push(t)})),a.length)return a}if(e&&e.imageUrl){let t={};t.url=e.imageUrl,t.size="1",a.push(t)}return a}_getTime(e){if(!e||""===e||"string"!=typeof e)return null;let t=new Date(e),a=t.getHours(),r=t.getMinutes();return isNaN(a)||isNaN(r)?null:(a<10&&(a="0"+a),r<10&&(r="0"+r),`${a}:${r}`)}_getNameTeam(e){return e.alternateCommonNames?e.alternateCommonNames[this.lang]:e.commonName?e.commonName:e.fullName}});class ce extends se{static get styles(){return s`
            :root {
                box-sizing: border-box;
            }

            .ue-c-carousel,
            .ue-c-carousel *,
            .ue-c-carousel ::before,
            .ue-c-carousel ::after {
                box-sizing: initial;
            }

            .ue-c-carousel {
                max-width: var(--ue-c-carousel-max-width, 990px);
                height: var(--ue-c-carousel-height, 140px);
                position: relative;
                background-color: #f7f7f7;
                background-color: var(
                    --ue-c-carousel-container-background-color,
                    #f7f7f7
                );
                font-size: var(--ue-c-carousel-container-font-size, 1rem);
                line-height: var(--ue-c-carousel-container-line-height, 1rem);
                font-family: "Arial", "Helvetica", sans-serif;
                font-family: var(
                    --ue-c-carousel-container-font-family,
                    "Roboto",
                    "Noto",
                    sans-serif
                );
                color: #000;
                color: var(--ue-c-carousel-container-color, #000);
                border-top: var(--ue-c-carousel-container-border-top);
                border-bottom: var(--ue-c-carousel-container-border-bottom);
                box-shadow: inset 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
                outline: none;
                z-index: 2;
                z-index: var(--ue-c-carousel-container-z-index, 2);
                --ue-c-scoreboard-multiple__info--no-results-font-size: 11px;
            }

            .ue-c-carousel__frame {
                position: relative;
                overflow: hidden;
                padding: 0.5rem 0.6rem;
                -webkit-overflow-scrolling: touch;
                scroll-behavior: smooth;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            .ue-c-carousel__group {
                border: 0;
                padding: 0 0.6rem;
                border-left-width: 1px;
                border-left-width: var(
                    --ue-c-carousel-group-border-left-width,
                    1px
                );
                border-left-style: solid;
                border-left-style: var(
                    --ue-c-carousel-group-border-left-style,
                    solid
                );
                border-left-color: #e7e7e7;
                border-left-color: var(
                    --ue-c-carousel-group-border-left-color,
                    #e7e7e7
                );
            }

            .ue-c-carousel__title {
                margin: 0 0 0.38em;
                width: 88%;
                position: absolute;
                top: 0;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding: 0;
                text-align: left;
                text-transform: uppercase;
                text-transform: var(
                    --ue-c-carousel-title-text-transform,
                    uppercase
                );
                font-weight: 500;
                font-weight: var(--ue-c-carousel-title-font-weight, 600);
                font-size: var(--ue-c-carousel-title-font-size, 0.8rem);
                line-height: var(--ue-c-carousel-title-line-height, 0.8rem);
                letter-spacing: var(--ue-c-carousel-title-letter-spacing, 1);
            }

            .ue-c-carousel__list {
                display: flex;
            }

            .ue-c-carousel__list-sport,
            .ue-c-carousel__group-list {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: visible;
                font-size: inherit;
                width: fit-content;
            }

            @supports (overflow: unset) {
                .ue-c-carousel__list,
                .ue-c-carousel__group-list {
                    overflow: unset;
                }
            }

            .ue-c-carousel__list-sport {
                position: relative;
                -webkit-transition: -webkit-transform 0.3s;
                transition: -webkit-transform 0.3s;
                -o-transition: transform 0.3s;
                transition: transform 0.3s;
                transition: transform 0.3s, -webkit-transform 0.3s;
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }

            .ue-c-carousel__list-item {
                list-style-type: none;
                margin: 0;
                -webkit-box-flex: 1;
                -ms-flex: 1 0 auto;
                flex: 1 0 auto;
                position: relative;
            }

            .ue-c-carousel__list-item:nth-child(2) .ue-c-carousel__title {
                margin-left: 25px;
                width: 80%;
            }

            .ue-c-carousel__list-item:last-child {
                min-width: 7rem;
                border: 0;
                border-left-width: 1px;
                border-left-width: var(
                    --ue-c-carousel-group-border-left-width,
                    1px
                );
                border-left-style: solid;
                border-left-style: var(
                    --ue-c-carousel-group-border-left-style,
                    solid
                );
                border-left-color: #e7e7e7;
                border-left-color: var(
                    --ue-c-carousel-group-border-left-color,
                    #e7e7e7
                );
            }

            .ue-c-carousel__list-sport:first-of-type
                .ue-c-carousel__list-item:nth-child(2)
                .ue-c-carousel__group {
                --ue-c-carousel-group-border-left-width: 0;
                padding-left: 0;
            }

            .ue-c-carousel__group-list
                .ue-c-carousel__group-list-item:first-of-type {
                margin-left: 0;
            }

            .ue-c-carousel__group-list .ue-c-carousel__group-list-item {
                margin-left: 0.5rem;
            }

            .ue-c-carousel__group-list-item {
                -webkit-box-flex: 0;
                -ms-flex: 0 1 auto;
                flex: 0 1 auto;
                min-height: 6.3rem;
                min-height: var(
                    --ue-c-carousel-group-list-item-min-height,
                    6.3em
                );
                width: 10rem;
                width: var(--ue-c-carousel-list-item-width, 10rem);
                padding-top: var(--ue-c-carousel-list-item-padding-top, 0);
                padding-bottom: var(
                    --ue-c-carousel-list-item-padding-bottom,
                    0
                );
                padding-left: var(--ue-c-carousel-list-item-padding-left, 0);
                padding-right: var(--ue-c-carousel-list-item-padding-right, 0);
                background-color: #fff;
                background-color: var(
                    --ue-c-carousel-list-item-background-color,
                    #fff
                );
                box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
                margin-top: 20px;
            }

            .ue-c-carousel__show-more--at-last {
                background: transparent;
                border-radius: 0;
                border-width: 0;
                border-style: none;
                color: #0072d8;
                color: var(--ue-c-carousel-show-more-at-last-color, #0072d8);
                font-size: var(
                    --ue-c-carousel-show-more-at-last-font-size,
                    0.9rem
                );
                font-weight: var(
                    --ue-c-carousel-show-more-at-last-font-weight,
                    600
                );
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                width: 100%;
                height: 100%;
                text-decoration: none;
                max-width: 80px;
                padding-left: 10px;
            }

            .ue-c-carousel__show-more--at-last svg {
                box-sizing: initial;
                background-color: transparent;
                background-color: var(
                    --ue-c-carousel-show-more-at-last-background-color,
                    transparent
                );
                fill: #0072d8;
                fill: var(--ue-c-carousel-show-more-at-last-fill, #0072d8);
                border-color: #0072d8;
                border-color: var(
                    --ue-c-carousel-show-more-at-last-border-color,
                    #0072d8
                );
                border: 1px solid;
                border-radius: 50%;
                padding: 0.6em;
                margin-bottom: 0.5em;
                -webkit-transition: 0.3s;
                -o-transition: 0.3s;
                transition: 0.3s;
            }

            .ue-c-carousel__show-more--at-last:hover {
                color: #68a5dc;
                color: var(
                    --ue-c-carousel-show-more-at-last-hover-color,
                    #68a5dc
                );
            }

            .ue-c-carousel__show-more--at-last:hover svg {
                fill: #fff;
                fill: var(--ue-c-carousel-show-more-at-last-hover-fill, #fff);
                background-color: #0072d8;
                background-color: var(
                    --ue-c-carousel-show-more-at-last-hover-background-color,
                    #0072d8
                );
            }

            .ue-c-carousel__show-more {
                top: 7px;
                right: 0;
                cursor: pointer;
                position: absolute;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                padding: 0 0.5rem;
                transition: 0.3s;
                background: transparent;
                border-radius: 0;
                border-width: 0;
                border-style: none;
                background-color: var(
                    --ue-c-carousel-show-more-background-color,
                    #f7f7f7
                );
                color: #0072d8;
                color: var(--ue-c-carousel-show-more-color, #0072d8);
                font-size: var(--ue-c-carousel-show-more-font-size, 0.8rem);
                font-weight: var(--ue-c-carousel-show-more-font-weight, 600);
                text-decoration: none;
            }

            .ue-c-carousel__show-more::before {
                content: "";
                display: block;
                position: absolute;
                top: 0;
                left: -1rem;
                background: transparent;
                height: 100%;
                width: 1rem;
                background-image: -webkit-linear-gradient(
                    top,
                    hsla(0, 5%, 100%, 0),
                    var(--ue-c-carousel-show-more-background-color, #f7f7f7)
                );
                background-image: -moz-linear-gradient(
                    top,
                    hsla(0, 5%, 100%, 0),
                    var(--ue-c-carousel-show-more-background-color, #f7f7f7)
                );
                background-image: -o-linear-gradient(
                    top,
                    hsla(0, 5%, 100%, 0),
                    var(--ue-c-carousel-show-more-background-color, #f7f7f7)
                );
                background-image: linear-gradient(
                    to right,
                    hsla(0, 5%, 100%, 0),
                    var(--ue-c-carousel-show-more-background-color, #f7f7f7)
                );
            }

            .ue-c-carousel__show-more span {
                padding: 0 0.2rem;
            }

            .ue-c-carousel__show-more svg {
                fill: #0072d8;
                fill: var(--ue-c-carousel-show-more-fill, #0072d8);
            }

            .ue-c-carousel__show-more:hover {
                color: #68a5dc;
                color: var(--ue-c-carousel-show-more-hover-color, #68a5dc);
            }

            .ue-c-carousel__show-more:hover .is-arrow-icon {
                fill: #68a5dc;
                fill: var(--ue-c-carousel-show-more-hover-fill, #68a5dc);
            }

            .ue-c-scoreboard-dual--small {
                --ue-c-scoreboard-dual-score-width: 30%;
                --ue-c-scoreboard-dual-score-min-height: 25px;
                --ue-c-scoreboard-dual-header-justify-content: flex-start;
                --ue-c-scoreboard-dual-header-padding-bottom: 0.4rem;
                --ue-c-scoreboard-dual-header-padding-top: 0.2rem;
                --ue-c-scoreboard-dual-tv-item-text-transform: capitalize;
                --ue-c-scoreboard-dual-team-name-font-size: 0.75rem;
                --ue-c-scoreboard-dual-team-name-line-height: 0.75rem;
                --ue-c-scoreboard-dual-score-font-size: 1rem;
                --ue-c-scoreboard-dual-score-line-height: 1rem;
                --ue-c-scoreboard-dual-item-container-padding-left: 0.25rem;
                --ue-c-scoreboard-dual-item-container-padding-right: 0.25rem;
            }

            .ue-c-scoreboard-dual--small > * {
                --ue-c-scoreboard-dual-home-score-box-shadow: unset;
                --ue-c-scoreboard-dual-away-score-box-shadow: unset;
                --ue-c-scoreboard-dual-vertical-home-score-box-shadow: unset;
                --ue-c-scoreboard-dual-vertical-away-score-box-shadow: unset;
            }

            ue-bet {
                display: block;
                padding: 0 0.2em;
                margin-top: 0.3rem;
                --ue-bet-list-width: 100%;
                --ue-bet-justify-content: flex-start;
                --ue-bet-item-font-size: 10px;
                --ue-bet-icon-display: none;
                --ue-bet-list-justify-content: flex-start;
                --ue-bet-ad-item-font-size: 10px;
            }

            .ue-c-sport-events-carousel-match--pending {
                border-top: 1px solid #fff;
            }

            .ue-c-sport-events-carousel-match--ended {
                border-top: 1px solid #000;
            }

            .ue-c-sport-events-carousel-match--live {
                border-top: 1px solid #c00;
            }

            .ue-c-sport-events-carousel-match-tennis {
                width: 194px;
            }

            .ue-c-sport-events-carousel-match-race {
                width: 292px;
            }

            .ue-c-carousel__separator {
                width: 20px;
                height: 20px;
                position: absolute;
                left: 10px;
                top: -4px;
                background-repeat: no-repeat;
                background-size: 100%;
            }

            .ue-c-carousel__list-sport:first-of-type .ue-c-carousel__separator {
                left: 0;
            }

            .ue-c-carousel__separator.football {
                background-image: var(--ue-c-carousel__separator-bg--football);
            }

            .ue-c-carousel__separator.basketball {
                background-image: var(
                    --ue-c-carousel__separator-bg--basketball
                );
            }

            .ue-c-carousel__separator.handball {
                background-image: var(--ue-c-carousel__separator-bg--handball);
            }

            .ue-c-carousel__separator.tennis {
                background-image: var(--ue-c-carousel__separator-bg--tennis);
            }

            .ue-c-carousel__separator.motor {
                background-image: var(--ue-c-carousel__separator-bg--motor);
            }

            .ue-c-carousel__separator.football-indoor {
                background-image: var(
                    --ue-c-carousel__separator-bg--football-indoor
                );
            }

            .ue-c-carousel__separator.rugby {
                background-image: var(--ue-c-carousel__separator-bg--rugby);
            }

            .ue-c-carousel__separator.cycling {
                width: 24px;
                background-image: var(--ue-c-carousel__separator-bg--cycling);
            }

            .ue-c-carousel__separator.american-football {
                background-image: var(
                    --ue-c-carousel__separator-bg--american-football
                );
            }

            .ue-c-carousel__separator.baseball {
                background-image: var(--ue-c-carousel__separator-bg--baseball);
            }

            .ue-c-carousel__selector {
                box-sizing: border-box;
                width: 85px;
                height: 100%;
                float: left;
                border-right: 4px solid #d8d8d8;
                padding: 6px;

                display: flex;
                justify-content: center;
                flex-direction: column;
            }

            .ue-c-carousel__selector label {
                margin-bottom: 5px;
                font-size: 13px;
                font-weight: bold;
                display: block;
            }

            .ue-c-carousel__select {
                width: 68px;
                height: 25px;
                background: white;
                border-radius: 0;
                box-sizing: border-box;
                -webkit-appearance: inherit;
                box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.4);
                padding: 4px 20px 4px 4px;
                border: 0;
                background: url(https://e00-marca.uecdn.es/assets/v12/img/svg/iconsvg/down-a.svg)
                    no-repeat 49px 4px #fff;
            }

            .ue-c-carousel__select:after {
                content: "aaa";
                background: #000;
                width: 5px;
                height: 5px;
                display: block;
                position: absolute;
            }

            .ue-c-carousel__select option {
                background: #fff;
            }

            .ue-c-carousel__select option:hover {
                background: #3f3f3f;
            }
            @media all and (-ms-high-contrast: none) {
                .ue-c-carousel__selector {
                    display: none;
                }

                .ue-c-carousel__list {
                    width: 4500px;
                }

                .ue-c-carousel__controls--back {
                    left: 0px;
                }
            }
        `}static get properties(){return{sportEvents:{type:Array},sportEventsPrinted:{type:Array},totalSportEventsPrinted:{type:Array},sort:{type:Array},sortUrl:{type:String,attribute:"sort-url"},sportEventsUrlBase:{type:String,attribute:"sport-events-url-base"},sportEventsUrl:{type:String},currentDate:{type:Object},date:{type:String},limit:{type:Number},tournamentsById:{type:String},controls:{type:Boolean},link:{type:String},intersectionWidth:{type:Number,attribute:"intersection-width"},lang:{type:String},langGlobalText:{type:Object},preset:{type:String},betChannel:{type:String,attribute:"bet-channel"},selectedFilter:{type:String},scrollPosition:{type:Number}}}constructor(){super(),this.setProperties()}setProperties(){this.sportEvents=[],this.sportEventsPrinted=[],this.totalSportEventsPrinted=[],this.sort=[],this.sortUrl="",this.sportEventsUrl="",this.limit=10,this.tournamentsById="",this.intersectionWidth=0,this.lang="esES",this.controls=!1,this.langGlobalText={result:{alternateNames:{enEN:"Scores",esES:"Resultados"}},viewAll:{alternateNames:{enEN:"See all",esES:"Ver todo"}},all:{alternateNames:{enEN:"All",esES:"Todos"}}},this.preset="",this.betChannel="",this.selectedFilter="",this.scrollPosition=0}connectedCallback(){super.connectedCallback(),!this.date&&(this.currentDate=new Date),this._removeLightDomPlaceholders(),this.addEventListener("sportEventsUpdate",(e=>{this.sportEvents=e.detail?.sportEvents}))}_removeLightDomPlaceholders(){Array.from(this.querySelectorAll("[class*=placeholder]")).forEach((e=>e&&e.parentNode&&e.parentNode.removeChild(e)))}_getScheduleData(){this.sportEventsUrl="",this.sportEvents=[],this.sort?.length||this._getSortCondition(),this.sportEventsUrlBase&&this.currentDate&&(this.sportEventsUrl=`${this.sportEventsUrlBase}${this.preset}?timezoneOffset=${-1*this.currentDate.getTimezoneOffset()/60}&date=${this._getDateInString(this.currentDate)}`)}_translate(e){switch(e){case"result":return this.langGlobalText.result.alternateNames[this.lang];case"view":return this.langGlobalText.viewAll.alternateNames[this.lang];case"all":return this.langGlobalText.all.alternateNames[this.lang];default:return""}}async _getSortCondition(){const e=`${this.sortUrl}${this.preset}`,t=await this._fetchData(e);this.handleSortResponse(t)}async _fetchData(e){const t=await fetch(e);try{if(!t.ok)throw new Error("Network response was not ok");return t.json()}catch(e){return e}}handleSortResponse(e){e&&e.data&&(this.sort=e.data.sports)}_setSportEventsGrouped(){this.sportEventsPrinted=[],this.totalSportEventsPrinted=[],this.sportEventsPrinted=this._insertEventsIntoTournaments(this.sportEvents,this.sort,this.limit),this.totalSportEventsPrinted=this._insertEventsIntoTournaments(this.sportEvents,this.sort)}_updateSportEvents(){this.sportEvents&&this.sportEvents.length&&this._setSportEventsGrouped()}_insertEventsIntoTournaments(e,t,a){if(!(e instanceof Array&&e.length&&t instanceof Array&&t.length))return[];let r=[],o=0;return t.forEach((t=>{let s=[],i=t.name;if(t.disabled||a&&!(o<a)||t.tournaments.forEach((t=>{if(!t.disabled&&(!a||o<a)){let a=e.filter((e=>e.tournament.id===t.id));if(a.length>0){let e=Object.assign({},t);a.forEach((e=>{e.url=this._setDataUrl(e.url,o+1),o++})),e.events=a,a[0]&&a[0].sport&&a[0].sport.alternateNames&&(i=a[0].sport.alternateNames[this.lang]||a[0].sport.name),a[0]&&a[0].tournament&&a[0].tournament.alternateNames&&(e.name=a[0].tournament.alternateNames[this.lang]||a[0].tournament.name),this.limit&&o>this.limit&&(e.events=e.events.slice(0,e.events.length-(o-this.limit))),s.push(e)}}})),s.length>0){let e=Object.assign({},t);e.tournaments=s,e.name=i,r.push(e)}})),r}_getDateInString(e){return e&&e instanceof Date&&"Invalid Date"!==e?`${e.getFullYear()}-${e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1)}-${e.getDate()<10?"0"+e.getDate():e.getDate()}`:""}setDateInString(){if(this.date){const e=this.date.split("-");3===e.length&&e[1]>=1&&e[1]<=12&&e[0]>=1&&e[0]<=31&&(this.currentDate=new Date(e[2],e[1]-1,e[0]))}}_isMatchSport(e){return"match"===e}_isTennisSport(e){return"tennis"===e}_isRaceSport(e){return"race"===e}_getStatusEventClass(e){if(void 0===e)return"";switch(e.id){case 0:return"ue-c-sport-events-carousel-match--pending";case 1:return"ue-c-sport-events-carousel-match--live";case 2:return"ue-c-sport-events-carousel-match--ended";case 3:return"ue-c-sport-events-carousel-match--suspended";case 5:return"ue-c-sport-events-carousel-match--deferred";case 6:return"ue-c-sport-events-carousel-match--cancelled";default:return""}}filter(){const e=this.renderRoot.getElementById("filtro_competiciones")?.value;let t=JSON.parse(JSON.stringify(this.sort));if(e&&"all"!==e){const a=e.split(" ");a&&a.length&&t instanceof Array&&(t=t.filter((e=>e.id===a[0])),2===a.length&&t.length&&t[0].tournaments instanceof Array&&(t[0].tournaments=t[0].tournaments.filter((e=>e.id===a[1]))))}this.sportEventsPrinted=this._insertEventsIntoTournaments(this.sportEvents,t,this.limit),this.scrollPosition=this.scrollPosition-1}_setDataUrl(e,t){if(e&&"function"==typeof URL){var a=new URL(e);return a.searchParams&&a.searchParams.set("intcmp","MODCARR01"),t&&a.searchParams&&a.searchParams.set("s_kw",t),a.href}return e}updated(e){e.has("sportEvents")&&this._setSportEventsGrouped(),e.has("sort")&&this._updateSportEvents(),e.has("currentDate")&&this._getScheduleData(),e.has("date")&&this.setDateInString()}render(){return L`
            ${this.sportEventsPrinted.length>0&&Object.prototype.hasOwnProperty.call(this.sportEventsPrinted[0],"tournaments")?L`
                      <div class="ue-c-carousel"
                          aria-label="Carrusel de competiciones"
                          role="region">
                          ${this.controls?L`
                                    <div class="ue-c-carousel__selector">
                                        <label for="filtro_competiciones">
                                            ${this._translate("result")}:
                                        </label>
                                        <select
                                            class="ue-c-carousel__select"
                                            value="${this.selectedFilter=this.selectedFilter?this.selectedFilter:""}"
                                            id="filtro_competiciones"
                                            @change=${this.filter}>
                                            <option
                                                value="all"
                                                style="font-weight:bold;">
                                                ${this._translate("all")}
                                            </option>
                                            ${this.totalSportEventsPrinted.map((e=>L`<option
                                                            style="font-weight:bold;"
                                                            value="${e.id}">
                                                            ${e.name}
                                                        </option>
                                                        ${e.tournaments.map((t=>L`
                                                                <option
                                                                    class="tournament"
                                                                    value="${e.id} ${t.id}">
                                                                    ${t.name}
                                                                </option>
                                                            `))} `))}
                                        </select>
                                    </div>
                                `:""}
                          <ue-carousel-controls
                              .controls="${!!this.controls&&this.controls}"
                              intersection-width="${this.intersectionWidth?this.intersectionWidth:0}"
                              scroll-position="${this.scrollPosition}"
                              link="${this.link}"
                              lang-view-all="${this._translate("view")}">
                              <div class="ue-c-carousel__frame"
                                  slot="content"
                                  class="contentslot">
                                  <div class="ue-c-carousel__list" id="content">
                                      ${this.sportEventsPrinted.map((e=>L`
                                              <ul class="ue-c-carousel__list-sport"
                                                  role="tablist"
                                                  aria-label="Competiciones">
                                                  <li class="ue-c-carousel__list-item ue-c-carousel__separator ${e.slugname}" role="presentation"></li>
                                                  ${e.tournaments.map((e=>L`
                                                          <li class="ue-c-carousel__list-item"
                                                              role="tab"
                                                              aria-label="${e.name}"
                                                              tabindex="0">
                                                              <div class="ue-c-carousel__group">
                                                                  <div id="${e.id}" class="ue-c-carousel__title">
                                                                      ${e.name}
                                                                  </div>
                                                                  <ul class="ue-c-carousel__group-list"
                                                                      role="tablist"
                                                                      aria-labelledby="${e.id}"
                                                                      tabindex="0">
                                                                      ${e.events.map((e=>L`
                                                                              ${this._isMatchSport(e.sport?.type)?L`
                                                                                        <li class="ue-c-carousel__group-list-item ${this._getStatusEventClass(e.status)}"
                                                                                            role="tab"
                                                                                            aria-label="${e.name}">
                                                                                            <ue-scoreboard-dual
                                                                                                .match="${e}"
                                                                                                class="ue-c-scoreboard-dual--vertical ue-c-scoreboard-dual--small"
                                                                                                icon-size="30">
                                                                                            </ue-scoreboard-dual>
                                                                                            ${e.bets&&e.bets[0]?L`
                                                                                                      <ue-bet
                                                                                                          id="${e.id}"
                                                                                                          .data="${e.bets[0]}"
                                                                                                          channel="${this.betChannel?this.betChannel:""}"
                                                                                                          aria-label="apuestas">
                                                                                                      </ue-bet>
                                                                                                  `:""}
                                                                                        </li>
                                                                                    `:""}
                                                                              ${this._isTennisSport(e.sport?.type)?L`
                                                                                        <li class="ue-c-carousel__group-list-item ue-c-sport-events-carousel-match-tennis ${this._getStatusEventClass(e.status)}"
                                                                                            role="tab"
                                                                                            aria-label="${e.name}">
                                                                                            <ue-scoreboard-multiple
                                                                                                .match="${e}"
                                                                                                lang="${this.lang?this.lang:""}"
                                                                                                icon-size="30"
                                                                                                ?hide-live-detail="${!0}"
                                                                                                class="ue-c-scoreboard-multiple--compact">
                                                                                            </ue-scoreboard-multiple>
                                                                                        </li>
                                                                                    `:""}
                                                                              ${this._isRaceSport(e.sport?.type)?L`
                                                                                        <li class="ue-c-carousel__group-list-item ue-c-sport-events-carousel-match-race ${this._getStatusEventClass(e.status)}"
                                                                                            role="tab"
                                                                                            aria-label="${e.name}">
                                                                                            <ue-scoreboard-table .race="${e}"
                                                                                                lang="${this.lang?this.lang:""}"
                                                                                                limit="3"
                                                                                                icon-size="30"
                                                                                                class="ue-c-scoreboard-table--compact">
                                                                                            </ue-scoreboard-table>
                                                                                        </li>
                                                                                    `:""}
                                                                          `))}
                                                                  </ul>
                                                              </div>
                                                          </li>
                                                      `))}
                                              </ul>
                                          `))}
                                      <div class="ue-c-carousel__list-item">
                                          <a class="ue-c-carousel__show-more--at-last"
                                              href="${this._setDataUrl(this.link,"final")}">
                                              <svg
                                                  aria-hidden="true"
                                                  focusable="false"
                                                  class="is-arrow-icon"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="10"
                                                  height="10"
                                                  viewBox="0 0 6 10">
                                                  <path
                                                      fill-rule="evenodd"
                                                      d="M0 8.946L3.91 5 0 1.054 1.045 0 6 5l-4.955 5z"
                                                  ></path>
                                              </svg>
                                              <span>${this._translate("view")}</span>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </ue-carousel-controls>
                      </div>
                  `:""}
            <ue-sport-events-normalizer
                .sport-events="${this.sportEvents}"
                sport-events-url="${this.sportEventsUrl?this.sportEventsUrl:""}"
                lang="${this.lang?this.lang:""}"
            ></ue-sport-events-normalizer>
        `}}void 0===window.customElements.get("ue-sport-events-carousel")&&window.customElements.define("ue-sport-events-carousel",ce)})();