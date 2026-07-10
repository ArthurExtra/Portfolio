var di=Object.defineProperty;var Es=e=>{throw TypeError(e)};var ci=(e,t,r)=>t in e?di(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var je=(e,t,r)=>ci(e,typeof t!="symbol"?t+"":t,r),Fn=(e,t,r)=>t.has(e)||Es("Cannot "+r);var f=(e,t,r)=>(Fn(e,t,"read from private field"),r?r.call(e):t.get(e)),R=(e,t,r)=>t.has(e)?Es("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),D=(e,t,r,n)=>(Fn(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),W=(e,t,r)=>(Fn(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const Zs=!1;var us=Array.isArray,fi=Array.prototype.indexOf,gn=Array.prototype.includes,Cn=Array.from,ui=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Qs=Object.getOwnPropertyDescriptors,vi=Object.prototype,pi=Array.prototype,vs=Object.getPrototypeOf,Ts=Object.isExtensible;function zr(e){return typeof e=="function"}const hi=()=>{};function bi(e){return e()}function qn(e){for(var t=0;t<e.length;t++)e[t]()}function Xs(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function xi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ye=2,Cr=4,nn=8,ps=1<<24,ft=16,pt=32,Zt=64,Yn=128,Je=512,be=1024,ge=2048,St=4096,Te=8192,et=16384,Dr=32768,As=1<<25,vr=65536,mn=1<<17,gi=1<<18,Lr=1<<19,Js=1<<20,wt=1<<25,pr=65536,_n=1<<21,yr=1<<22,Yt=1<<23,It=Symbol("$state"),ea=Symbol("legacy props"),mi=Symbol(""),un=Symbol("attributes"),Zn=Symbol("class"),Qn=Symbol("style"),Vr=Symbol("text"),vn=Symbol("form reset"),Mn=new class extends Error{constructor(){super(...arguments);je(this,"name","StaleReactionError");je(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Ks;const hs=!!((Ks=globalThis.document)!=null&&Ks.contentType)&&globalThis.document.contentType.includes("xml");function _i(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function yi(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function wi(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ki(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function $i(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Si(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ei(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ti(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ai(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ci(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Mi(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ni(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Ii=1,Pi=2,ta=4,Oi=8,Di=16,Li=1,ji=2,ra=4,Ri=8,zi=16,Fi=2,he=Symbol("uninitialized"),na="http://www.w3.org/1999/xhtml",Bi="http://www.w3.org/2000/svg",Hi="@attach";function Vi(){console.warn("https://svelte.dev/e/derived_inert")}function Gi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Wi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function sa(e){return e===this.v}function Ui(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function aa(e){return!Ui(e,this.v)}let jr=!1,Ki=!1;function qi(){jr=!0}let de=null;function Mr(e){de=e}function Lt(e,t=!1,r){de={p:de,i:!1,c:null,e:null,s:e,x:null,r:z,l:jr&&!t?{s:null,u:null,$:[]}:null}}function jt(e){var t=de,r=t.e;if(r!==null){t.e=null;for(var n of r)Aa(n)}return t.i=!0,de=t.p,{}}function sn(){return!jr||de!==null&&de.l===null}let rr=[];function ia(){var e=rr;rr=[],qn(e)}function Pt(e){if(rr.length===0&&!qr){var t=rr;queueMicrotask(()=>{t===rr&&ia()})}rr.push(e)}function Yi(){for(;rr.length>0;)ia()}function oa(e){var t=z;if(t===null)return F.f|=Yt,e;if((t.f&Dr)===0&&(t.f&Cr)===0)throw e;Kt(e,t)}function Kt(e,t){for(;t!==null;){if((t.f&Yn)!==0){if((t.f&Dr)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const Zi=-7169;function pe(e,t){e.f=e.f&Zi|t}function bs(e){(e.f&Je)!==0||e.deps===null?pe(e,be):pe(e,St)}function la(e){if(e!==null)for(const t of e)(t.f&ye)===0||(t.f&pr)===0||(t.f^=pr,la(t.deps))}function da(e,t,r){(e.f&ge)!==0?t.add(e):(e.f&St)!==0&&r.add(e),la(e.deps),pe(e,be)}let dn=!1;function Qi(e){var t=dn;try{return dn=!1,[e(),dn]}finally{dn=t}}let Bn=null,gr=null,I=null,Kr=null,me=null,Xn=null,qr=!1,Hn=!1,_r=null,pn=null;var Cs=0;let Xi=1;var wr,Wt,ar,kr,$r,Sr,At,Er,Ae,Xr,Ct,dt,_t,Tr,ir,Z,Jn,Gr,es,ca,fa,mr,Ji,Wr;const En=class En{constructor(){R(this,Z);je(this,"id",Xi++);R(this,wr,!1);je(this,"linked",!0);R(this,Wt,null);R(this,ar,null);je(this,"async_deriveds",new Map);je(this,"current",new Map);je(this,"previous",new Map);R(this,kr,new Set);R(this,$r,new Set);R(this,Sr,0);R(this,At,new Map);R(this,Er,null);R(this,Ae,[]);R(this,Xr,[]);R(this,Ct,new Set);R(this,dt,new Set);R(this,_t,new Map);R(this,Tr,new Set);je(this,"is_fork",!1);R(this,ir,!1);gr===null?Bn=gr=this:(D(gr,ar,this),D(this,Wt,gr)),gr=this}skip_effect(t){f(this,_t).has(t)||f(this,_t).set(t,{d:[],m:[]}),f(this,Tr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=f(this,_t).get(t);if(n){f(this,_t).delete(t);for(var s of n.d)pe(s,ge),r(s);for(s of n.m)pe(s,St),r(s)}f(this,Tr).add(t)}capture(t,r,n=!1){t.v!==he&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Yt)===0&&(this.current.set(t,[r,n]),me==null||me.set(t,r)),this.is_fork||(t.v=r)}activate(){I=this}deactivate(){I=null,me=null}flush(){try{Hn=!0,I=this,W(this,Z,Gr).call(this)}finally{Cs=0,Xn=null,_r=null,pn=null,Hn=!1,I=null,me=null,cr.clear()}}discard(){var t;for(const r of f(this,$r))r(this);f(this,$r).clear(),W(this,Z,Wr).call(this),(t=f(this,Er))==null||t.resolve()}register_created_effect(t){f(this,Xr).push(t)}increment(t,r){if(D(this,Sr,f(this,Sr)+1),t){let n=f(this,At).get(r)??0;f(this,At).set(r,n+1)}}decrement(t,r){if(D(this,Sr,f(this,Sr)-1),t){let n=f(this,At).get(r)??0;n===1?f(this,At).delete(r):f(this,At).set(r,n-1)}f(this,ir)||(D(this,ir,!0),Pt(()=>{D(this,ir,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)f(this,Ct).add(n);for(const n of r)f(this,dt).add(n);t.clear(),r.clear()}oncommit(t){f(this,kr).add(t)}ondiscard(t){f(this,$r).add(t)}settled(){return(f(this,Er)??D(this,Er,Xs())).promise}static ensure(){if(I===null){const t=I=new En;!Hn&&!qr&&Pt(()=>{f(t,wr)||t.flush()})}return I}apply(){{me=null;return}}schedule(t){var s;if(Xn=t,(s=t.b)!=null&&s.is_pending&&(t.f&(Cr|nn|ps))!==0&&(t.f&Dr)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(_r!==null&&r===z&&(F===null||(F.f&ye)===0))return;if((n&(Zt|pt))!==0){if((n&be)===0)return;r.f^=be}}f(this,Ae).push(r)}};wr=new WeakMap,Wt=new WeakMap,ar=new WeakMap,kr=new WeakMap,$r=new WeakMap,Sr=new WeakMap,At=new WeakMap,Er=new WeakMap,Ae=new WeakMap,Xr=new WeakMap,Ct=new WeakMap,dt=new WeakMap,_t=new WeakMap,Tr=new WeakMap,ir=new WeakMap,Z=new WeakSet,Jn=function(){if(this.is_fork)return!0;for(const n of f(this,At).keys()){for(var t=n,r=!1;t.parent!==null;){if(f(this,_t).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Gr=function(){var d,c,b,h;D(this,wr,!0),Cs++>1e3&&(W(this,Z,Wr).call(this),to());for(const u of f(this,Ct))f(this,dt).delete(u),pe(u,ge),this.schedule(u);for(const u of f(this,dt))pe(u,St),this.schedule(u);const t=f(this,Ae);D(this,Ae,[]),this.apply();var r=_r=[],n=[],s=pn=[];for(const u of t)try{W(this,Z,es).call(this,u,r,n)}catch(x){throw pa(u),W(this,Z,Jn).call(this)||this.discard(),x}if(I=null,s.length>0){var a=En.ensure();for(const u of s)a.schedule(u)}if(_r=null,pn=null,W(this,Z,Jn).call(this)){W(this,Z,mr).call(this,n),W(this,Z,mr).call(this,r);for(const[u,x]of f(this,_t))va(u,x);s.length>0&&W(d=I,Z,Gr).call(d);return}const i=W(this,Z,ca).call(this);if(i){W(this,Z,mr).call(this,n),W(this,Z,mr).call(this,r),W(c=i,Z,fa).call(c,this);return}f(this,Ct).clear(),f(this,dt).clear();for(const u of f(this,kr))u(this);f(this,kr).clear(),Kr=this,Ms(n),Ms(r),Kr=null,(b=f(this,Er))==null||b.resolve();var o=I;if(f(this,Sr)===0&&(f(this,Ae).length===0||o!==null)&&W(this,Z,Wr).call(this),f(this,Ae).length>0)if(o!==null){const u=o;f(u,Ae).push(...f(this,Ae).filter(x=>!f(u,Ae).includes(x)))}else o=this;o!==null&&W(h=o,Z,Gr).call(h)},es=function(t,r,n){t.f^=be;for(var s=t.first;s!==null;){var a=s.f,i=(a&(pt|Zt))!==0,o=i&&(a&be)!==0,d=o||(a&Te)!==0||f(this,_t).has(s);if(!d&&s.fn!==null){i?s.f^=be:(a&Cr)!==0?r.push(s):on(s)&&((a&ft)!==0&&f(this,dt).add(s),Or(s));var c=s.first;if(c!==null){s=c;continue}}for(;s!==null;){var b=s.next;if(b!==null){s=b;break}s=s.parent}}},ca=function(){for(var t=f(this,Wt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=f(t,Wt)}return null},fa=function(t){var n;for(const[s,a]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,a);for(const[s,a]of t.async_deriveds){const i=this.async_deriveds.get(s);i&&a.promise.then(i.resolve).catch(i.reject)}this.transfer_effects(f(t,Ct),f(t,dt));const r=s=>{var a=s.reactions;if(a!==null)for(const d of a){var i=d.f;if((i&ye)!==0)r(d);else{var o=d;i&(yr|ft)&&!this.async_deriveds.has(o)&&(f(this,dt).delete(o),pe(o,ge),this.schedule(o))}}};for(const s of this.current.keys())r(s);this.oncommit(()=>t.discard()),W(n=t,Z,Wr).call(n),I=this,W(this,Z,Gr).call(this)},mr=function(t){for(var r=0;r<t.length;r+=1)da(t[r],f(this,Ct),f(this,dt))},Ji=function(){var b;for(let h=Bn;h!==null;h=f(h,ar)){var t=h.id<this.id,r=[];for(const[u,[x,m]]of this.current){if(h.current.has(u)){var n=h.current.get(u)[0];if(t&&x!==n)h.current.set(u,[x,m]);else continue}r.push(u)}if(t)for(const[u,x]of this.async_deriveds){const m=h.async_deriveds.get(u);m&&x.promise.then(m.resolve).catch(m.reject)}if(f(h,wr)){var s=[...h.current.keys()].filter(u=>!h.current.get(u)[1]&&!this.current.has(u));if(s.length===0)t&&h.discard();else if(r.length>0){if(t)for(const u of f(this,Tr))h.unskip_effect(u,x=>{var m;(x.f&(ft|yr))!==0?h.schedule(x):W(m=h,Z,mr).call(m,[x])});h.activate();var a=new Set,i=new Map;for(var o of r)ua(o,s,a,i);i=new Map;var d=[...h.current].filter(([u,x])=>{const m=this.current.get(u);return m?m[0]!==x[0]||m[1]!==x[1]:!0}).map(([u])=>u);if(d.length>0)for(const u of f(this,Xr))(u.f&(et|Te|mn))===0&&xs(u,d,i)&&((u.f&(yr|ft))!==0?(pe(u,ge),h.schedule(u)):f(h,Ct).add(u));if(f(h,Ae).length>0&&!f(h,ir)){h.apply();for(var c of f(h,Ae))W(b=h,Z,es).call(b,c,[],[]);D(h,Ae,[])}h.deactivate()}}}},Wr=function(){if(this.linked){var t=f(this,Wt),r=f(this,ar);t===null?Bn=r:D(t,ar,r),r===null?gr=t:D(r,Wt,t),this.linked=!1}};let hr=En;function eo(e){var t=qr;qr=!0;try{for(var r;;){if(Yi(),I===null)return r;I.flush()}}finally{qr=t}}function to(){try{Ei()}catch(e){Kt(e,Xn)}}let lt=null;function Ms(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(et|Te))===0&&on(n)&&(lt=new Set,Or(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Pa(n),(lt==null?void 0:lt.size)>0)){cr.clear();for(const s of lt){if((s.f&(et|Te))!==0)continue;const a=[s];let i=s.parent;for(;i!==null;)lt.has(i)&&(lt.delete(i),a.push(i)),i=i.parent;for(let o=a.length-1;o>=0;o--){const d=a[o];(d.f&(et|Te))===0&&Or(d)}}lt.clear()}}lt=null}}function ua(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const s of e.reactions){const a=s.f;(a&ye)!==0?ua(s,t,r,n):(a&(yr|ft))!==0&&(a&ge)===0&&xs(s,t,n)&&(pe(s,ge),gs(s))}}function xs(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const s of e.deps){if(gn.call(t,s))return!0;if((s.f&ye)!==0&&xs(s,t,r))return r.set(s,!0),!0}return r.set(e,!1),!1}function gs(e){I.schedule(e)}function va(e,t){if(!((e.f&pt)!==0&&(e.f&be)!==0)){(e.f&ge)!==0?t.d.push(e):(e.f&St)!==0&&t.m.push(e),pe(e,be);for(var r=e.first;r!==null;)va(r,t),r=r.next}}function pa(e){pe(e,be);for(var t=e.first;t!==null;)pa(t),t=t.next}function ro(e){let t=0,r=Qt(0),n;return()=>{_s()&&(p(r),Ma(()=>(t===0&&(n=br(()=>e(()=>Yr(r)))),t+=1,()=>{Pt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Yr(r))})})))}}var no=vr|Lr;function so(e,t,r,n){new ao(e,t,r,n)}var Ze,fs,Qe,or,Ce,Xe,Ee,ze,Mt,lr,Ut,Ar,Jr,en,Nt,Tn,ue,io,oo,lo,ts,hn,bn,rs,ns;class ao{constructor(t,r,n,s){R(this,ue);je(this,"parent");je(this,"is_pending",!1);je(this,"transform_error");R(this,Ze);R(this,fs,null);R(this,Qe);R(this,or);R(this,Ce);R(this,Xe,null);R(this,Ee,null);R(this,ze,null);R(this,Mt,null);R(this,lr,0);R(this,Ut,0);R(this,Ar,!1);R(this,Jr,new Set);R(this,en,new Set);R(this,Nt,null);R(this,Tn,ro(()=>(D(this,Nt,Qt(f(this,lr))),()=>{D(this,Nt,null)})));var a;D(this,Ze,t),D(this,Qe,r),D(this,or,i=>{var o=z;o.b=this,o.f|=Yn,n(i)}),this.parent=z.b,this.transform_error=s??((a=this.parent)==null?void 0:a.transform_error)??(i=>i),D(this,Ce,Pn(()=>{W(this,ue,ts).call(this)},no))}defer_effect(t){da(t,f(this,Jr),f(this,en))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!f(this,Qe).pending}update_pending_count(t,r){W(this,ue,rs).call(this,t,r),D(this,lr,f(this,lr)+t),!(!f(this,Nt)||f(this,Ar))&&(D(this,Ar,!0),Pt(()=>{D(this,Ar,!1),f(this,Nt)&&Pr(f(this,Nt),f(this,lr))}))}get_effect_pending(){return f(this,Tn).call(this),p(f(this,Nt))}error(t){if(!f(this,Qe).onerror&&!f(this,Qe).failed)throw t;I!=null&&I.is_fork?(f(this,Xe)&&I.skip_effect(f(this,Xe)),f(this,Ee)&&I.skip_effect(f(this,Ee)),f(this,ze)&&I.skip_effect(f(this,ze)),I.oncommit(()=>{W(this,ue,ns).call(this,t)})):W(this,ue,ns).call(this,t)}}Ze=new WeakMap,fs=new WeakMap,Qe=new WeakMap,or=new WeakMap,Ce=new WeakMap,Xe=new WeakMap,Ee=new WeakMap,ze=new WeakMap,Mt=new WeakMap,lr=new WeakMap,Ut=new WeakMap,Ar=new WeakMap,Jr=new WeakMap,en=new WeakMap,Nt=new WeakMap,Tn=new WeakMap,ue=new WeakSet,io=function(){try{D(this,Xe,Ie(()=>f(this,or).call(this,f(this,Ze))))}catch(t){this.error(t)}},oo=function(t){const r=f(this,Qe).failed;r&&D(this,ze,Ie(()=>{r(f(this,Ze),()=>t,()=>()=>{})}))},lo=function(){const t=f(this,Qe).pending;t&&(this.is_pending=!0,D(this,Ee,Ie(()=>t(f(this,Ze)))),Pt(()=>{var r=D(this,Mt,document.createDocumentFragment()),n=Ot();r.append(n),D(this,Xe,W(this,ue,bn).call(this,()=>Ie(()=>f(this,or).call(this,n)))),f(this,Ut)===0&&(f(this,Ze).before(r),D(this,Mt,null),fr(f(this,Ee),()=>{D(this,Ee,null)}),W(this,ue,hn).call(this,I))}))},ts=function(){try{if(this.is_pending=this.has_pending_snippet(),D(this,Ut,0),D(this,lr,0),D(this,Xe,Ie(()=>{f(this,or).call(this,f(this,Ze))})),f(this,Ut)>0){var t=D(this,Mt,document.createDocumentFragment());ws(f(this,Xe),t);const r=f(this,Qe).pending;D(this,Ee,Ie(()=>r(f(this,Ze))))}else W(this,ue,hn).call(this,I)}catch(r){this.error(r)}},hn=function(t){this.is_pending=!1,t.transfer_effects(f(this,Jr),f(this,en))},bn=function(t){var r=z,n=F,s=de;rt(f(this,Ce)),tt(f(this,Ce)),Mr(f(this,Ce).ctx);try{return hr.ensure(),t()}catch(a){return oa(a),null}finally{rt(r),tt(n),Mr(s)}},rs=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&W(n=this.parent,ue,rs).call(n,t,r);return}D(this,Ut,f(this,Ut)+t),f(this,Ut)===0&&(W(this,ue,hn).call(this,r),f(this,Ee)&&fr(f(this,Ee),()=>{D(this,Ee,null)}),f(this,Mt)&&(f(this,Ze).before(f(this,Mt)),D(this,Mt,null)))},ns=function(t){f(this,Xe)&&(_e(f(this,Xe)),D(this,Xe,null)),f(this,Ee)&&(_e(f(this,Ee)),D(this,Ee,null)),f(this,ze)&&(_e(f(this,ze)),D(this,ze,null));var r=f(this,Qe).onerror;let n=f(this,Qe).failed;var s=!1,a=!1;const i=()=>{if(s){Wi();return}s=!0,a&&Ni(),f(this,ze)!==null&&fr(f(this,ze),()=>{D(this,ze,null)}),W(this,ue,bn).call(this,()=>{W(this,ue,ts).call(this)})},o=d=>{try{a=!0,r==null||r(d,i),a=!1}catch(c){Kt(c,f(this,Ce)&&f(this,Ce).parent)}n&&D(this,ze,W(this,ue,bn).call(this,()=>{try{return Ie(()=>{var c=z;c.b=this,c.f|=Yn,n(f(this,Ze),()=>d,()=>i)})}catch(c){return Kt(c,f(this,Ce).parent),null}}))};Pt(()=>{var d;try{d=this.transform_error(t)}catch(c){Kt(c,f(this,Ce)&&f(this,Ce).parent);return}d!==null&&typeof d=="object"&&typeof d.then=="function"?d.then(o,c=>Kt(c,f(this,Ce)&&f(this,Ce).parent)):o(d)})};function ha(e,t,r,n){const s=sn()?Nr:Ir;var a=e.filter(x=>!x.settled),i=t.map(s);if(r.length===0&&a.length===0){n(i);return}var o=z,d=co(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(x=>x.promise)):null;function b(x){if((o.f&et)===0){d();try{n([...i,...x])}catch(m){Kt(m,o)}yn()}}var h=ba();if(r.length===0){c.then(()=>b([])).finally(h);return}function u(){Promise.all(r.map(x=>fo(x))).then(b).catch(x=>Kt(x,o)).finally(h)}c?c.then(()=>{d(),u(),yn()}):u()}function co(){var e=z,t=F,r=de,n=I;return function(a=!0){rt(e),tt(t),Mr(r),a&&(e.f&et)===0&&(n==null||n.activate(),n==null||n.apply())}}function yn(e=!0){rt(null),tt(null),Mr(null),e&&(I==null||I.deactivate())}function ba(){var e=z,t=e.b,r=I,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Nr(e){var t=ye|ge;return z!==null&&(z.f|=Lr),{ctx:de,deps:null,effects:null,equals:sa,f:t,fn:e,reactions:null,rv:0,v:he,wv:0,parent:z,ac:null}}const cn=Symbol("obsolete");function fo(e,t,r){let n=z;n===null&&yi();var s=void 0,a=Qt(he),i=!F,o=new Set;return So(()=>{var x,m;var d=z,c=Xs();s=c.promise;try{Promise.resolve(e()).then(c.resolve,_=>{_!==Mn&&c.reject(_)}).finally(yn)}catch(_){c.reject(_),yn()}var b=I;if(i){if((d.f&Dr)!==0)var h=ba();if((x=n.b)!=null&&x.is_rendered())(m=b.async_deriveds.get(d))==null||m.reject(cn);else for(const _ of o.values())_.reject(cn);o.add(c),b.async_deriveds.set(d,c)}const u=(_,g=void 0)=>{h==null||h(),o.delete(c),g!==cn&&(b.activate(),g?(a.f|=Yt,Pr(a,g)):((a.f&Yt)!==0&&(a.f^=Yt),Pr(a,_)),b.deactivate())};c.promise.then(u,_=>u(null,_||"unknown"))}),In(()=>{for(const d of o)d.reject(cn)}),new Promise(d=>{function c(b){function h(){b===s?d(a):c(s)}b.then(h,h)}c(s)})}function xa(e){const t=Nr(e);return La(t),t}function Ir(e){const t=Nr(e);return t.equals=aa,t}function uo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)_e(t[r])}}function ms(e){var t,r=z,n=e.parent;if(!Dt&&n!==null&&e.v!==he&&(n.f&(et|Te))!==0)return Vi(),e.v;rt(n);try{e.f&=~pr,uo(e),t=Fa(e)}finally{rt(r)}return t}function ga(e){var t=ms(e);if(!e.equals(t)&&(e.wv=Ra(),(!(I!=null&&I.is_fork)||e.deps===null)&&(I!==null?(I.capture(e,t,!0),Kr==null||Kr.capture(e,t,!0)):e.v=t,e.deps===null))){pe(e,be);return}Dt||(me!==null?(_s()||I!=null&&I.is_fork)&&me.set(e,t):bs(e))}function vo(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(Mn),n.fn!==null&&(n.teardown=hi),n.ac=null,Qr(n,0),ys(n))}function ma(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Or(t)}let wn=new Set;const cr=new Map;let _a=!1;function Qt(e,t){var r={f:0,v:e,reactions:null,equals:sa,rv:0,wv:0};return r}function K(e,t){const r=Qt(e);return La(r),r}function po(e,t=!1,r=!0){var s;const n=Qt(e);return t||(n.equals=aa),jr&&r&&de!==null&&de.l!==null&&((s=de.l).s??(s.s=[])).push(n),n}function M(e,t,r=!1){F!==null&&(!vt||(F.f&mn)!==0)&&sn()&&(F.f&(ye|ft|yr|mn))!==0&&(kt===null||!kt.has(e))&&Mi();let n=r?ut(t):t;return Pr(e,n,pn)}function Pr(e,t,r=null){if(!e.equals(t)){cr.set(e,Dt?t:e.v);var n=hr.ensure();if(n.capture(e,t),(e.f&ye)!==0){const s=e;(e.f&ge)!==0&&ms(s),me===null&&bs(s)}e.wv=Ra(),ya(e,ge,r),sn()&&z!==null&&(z.f&be)!==0&&(z.f&(pt|Zt))===0&&(Ye===null?Ao([e]):Ye.push(e)),!n.is_fork&&wn.size>0&&!_a&&ho()}return t}function ho(){_a=!1;for(const e of wn){(e.f&be)!==0&&pe(e,St);let t;try{t=on(e)}catch{t=!0}t&&Or(e)}wn.clear()}function Ns(e,t=1){var r=p(e),n=t===1?r++:r--;return M(e,r),n}function Yr(e){M(e,e.v+1)}function ya(e,t,r){var n=e.reactions;if(n!==null)for(var s=sn(),a=n.length,i=0;i<a;i++){var o=n[i],d=o.f;if(!(!s&&o===z)){var c=(d&ge)===0;if(c&&pe(o,t),(d&mn)!==0)wn.add(o);else if((d&ye)!==0){var b=o;me==null||me.delete(b),(d&pr)===0&&(d&Je&&(z===null||(z.f&_n)===0)&&(o.f|=pr),ya(b,St,r))}else if(c){var h=o;(d&ft)!==0&&lt!==null&&lt.add(h),r!==null?r.push(h):gs(h)}}}}function ut(e){if(typeof e!="object"||e===null||It in e)return e;const t=vs(e);if(t!==vi&&t!==pi)return e;var r=new Map,n=us(e),s=K(0),a=ur,i=o=>{if(ur===a)return o();var d=F,c=ur;tt(null),Ls(a);var b=o();return tt(d),Ls(c),b};return n&&r.set("length",K(e.length)),new Proxy(e,{defineProperty(o,d,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Ai();var b=r.get(d);return b===void 0?i(()=>{var h=K(c.value);return r.set(d,h),h}):M(b,c.value,!0),!0},deleteProperty(o,d){var c=r.get(d);if(c===void 0){if(d in o){const b=i(()=>K(he));r.set(d,b),Yr(s)}}else M(c,he),Yr(s);return!0},get(o,d,c){var x;if(d===It)return e;var b=r.get(d),h=d in o;if(b===void 0&&(!h||(x=qt(o,d))!=null&&x.writable)&&(b=i(()=>{var m=ut(h?o[d]:he),_=K(m);return _}),r.set(d,b)),b!==void 0){var u=p(b);return u===he?void 0:u}return Reflect.get(o,d,c)},getOwnPropertyDescriptor(o,d){var c=Reflect.getOwnPropertyDescriptor(o,d);if(c&&"value"in c){var b=r.get(d);b&&(c.value=p(b))}else if(c===void 0){var h=r.get(d),u=h==null?void 0:h.v;if(h!==void 0&&u!==he)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(o,d){var u;if(d===It)return!0;var c=r.get(d),b=c!==void 0&&c.v!==he||Reflect.has(o,d);if(c!==void 0||z!==null&&(!b||(u=qt(o,d))!=null&&u.writable)){c===void 0&&(c=i(()=>{var x=b?ut(o[d]):he,m=K(x);return m}),r.set(d,c));var h=p(c);if(h===he)return!1}return b},set(o,d,c,b){var C;var h=r.get(d),u=d in o;if(n&&d==="length")for(var x=c;x<h.v;x+=1){var m=r.get(x+"");m!==void 0?M(m,he):x in o&&(m=i(()=>K(he)),r.set(x+"",m))}if(h===void 0)(!u||(C=qt(o,d))!=null&&C.writable)&&(h=i(()=>K(void 0)),M(h,ut(c)),r.set(d,h));else{u=h.v!==he;var _=i(()=>ut(c));M(h,_)}var g=Reflect.getOwnPropertyDescriptor(o,d);if(g!=null&&g.set&&g.set.call(b,c),!u){if(n&&typeof d=="string"){var y=r.get("length"),S=Number(d);Number.isInteger(S)&&S>=y.v&&M(y,S+1)}Yr(s)}return!0},ownKeys(o){p(s);var d=Reflect.ownKeys(o).filter(h=>{var u=r.get(h);return u===void 0||u.v!==he});for(var[c,b]of r)b.v!==he&&!(c in o)&&d.push(c);return d},setPrototypeOf(){Ci()}})}function Is(e){try{if(e!==null&&typeof e=="object"&&It in e)return e[It]}catch{}return e}function bo(e,t){return Object.is(Is(e),Is(t))}var Ps,wa,ka,$a;function xo(){if(Ps===void 0){Ps=window,wa=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;ka=qt(t,"firstChild").get,$a=qt(t,"nextSibling").get,Ts(e)&&(e[Zn]=void 0,e[un]=null,e[Qn]=void 0,e.__e=void 0),Ts(r)&&(r[Vr]=void 0)}}function Ot(e=""){return document.createTextNode(e)}function Zr(e){return ka.call(e)}function an(e){return $a.call(e)}function l(e,t){return Zr(e)}function Q(e,t=!1){{var r=Zr(e);return r instanceof Comment&&r.data===""?an(r):r}}function v(e,t=1,r=!1){let n=e;for(;t--;)n=an(n);return n}function go(e){e.textContent=""}function Sa(){return!1}function Ea(e,t,r){return t==null||t===na?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function mo(e,t){if(t){const r=document.body;e.autofocus=!0,Pt(()=>{document.activeElement===r&&e.focus()})}}let Os=!1;function _o(){Os||(Os=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r[vn])==null||t.call(r)})},{capture:!0}))}function Nn(e){var t=F,r=z;tt(null),rt(null);try{return e()}finally{tt(t),rt(r)}}function yo(e,t,r,n=r){e.addEventListener(t,()=>Nn(r));const s=e[vn];s?e[vn]=()=>{s(),n(!0)}:e[vn]=()=>n(!0),_o()}function Ta(e){z===null&&(F===null&&Si(),$i()),Dt&&ki()}function wo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function ht(e,t){var r=z;r!==null&&(r.f&Te)!==0&&(e|=Te);var n={ctx:de,deps:null,nodes:null,f:e|ge|Je,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};I==null||I.register_created_effect(n);var s=n;if((e&Cr)!==0)_r!==null?_r.push(n):hr.ensure().schedule(n);else if(t!==null){try{Or(n)}catch(i){throw _e(n),i}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Lr)===0&&(s=s.first,(e&ft)!==0&&(e&vr)!==0&&s!==null&&(s.f|=vr))}if(s!==null&&(s.parent=r,r!==null&&wo(s,r),F!==null&&(F.f&ye)!==0&&(e&Zt)===0)){var a=F;(a.effects??(a.effects=[])).push(s)}return n}function _s(){return F!==null&&!vt}function In(e){const t=ht(nn,null);return pe(t,be),t.teardown=e,t}function kn(e){Ta();var t=z.f,r=!F&&(t&pt)!==0&&de!==null&&!de.i;if(r){var n=de;(n.e??(n.e=[])).push(e)}else return Aa(e)}function Aa(e){return ht(Cr|Js,e)}function ko(e){return Ta(),ht(nn|Js,e)}function $o(e){hr.ensure();const t=ht(Zt|Lr,e);return(r={})=>new Promise(n=>{r.outro?fr(t,()=>{_e(t),n(void 0)}):(_e(t),n(void 0))})}function Ca(e){return ht(Cr,e)}function So(e){return ht(yr|Lr,e)}function Ma(e,t=0){return ht(nn|t,e)}function ne(e,t=[],r=[],n=[]){ha(n,t,r,s=>{ht(nn,()=>{e(...s.map(p))})})}function Pn(e,t=0){var r=ht(ft|t,e);return r}function Na(e,t=0){var r=ht(ps|t,e);return r}function Ie(e){return ht(pt|Lr,e)}function Ia(e){var t=e.teardown;if(t!==null){const r=Dt,n=F;Ds(!0),tt(null);try{t.call(null)}finally{Ds(r),tt(n)}}}function ys(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&Nn(()=>{s.abort(Mn)});var n=r.next;(r.f&Zt)!==0?r.parent=null:_e(r,t),r=n}}function Eo(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&pt)===0&&_e(t),t=r}}function _e(e,t=!0){var r=!1;(t||(e.f&gi)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(To(e.nodes.start,e.nodes.end),r=!0),e.f|=As,ys(e,t&&!r),Qr(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();Ia(e),e.f^=As,e.f|=et;var s=e.parent;s!==null&&s.first!==null&&Pa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function To(e,t){for(;e!==null;){var r=e===t?null:an(e);e.remove(),e=r}}function Pa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function fr(e,t,r=!0){var n=[];Oa(e,n,!0);var s=()=>{r&&_e(e),t&&t()},a=n.length;if(a>0){var i=()=>--a||s();for(var o of n)o.out(i)}else s()}function Oa(e,t,r){if((e.f&Te)===0){e.f^=Te;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var s=e.first;s!==null;){var a=s.next;if((s.f&Zt)===0){var i=(s.f&vr)!==0||(s.f&pt)!==0&&(e.f&ft)!==0;Oa(s,t,i?r:!1)}s=a}}}function $n(e){Da(e,!0)}function Da(e,t){if((e.f&Te)!==0){e.f^=Te,(e.f&be)===0&&(pe(e,ge),hr.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&vr)!==0||(r.f&pt)!==0;Da(r,s?t:!1),r=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const i of a)(i.is_global||t)&&i.in()}}function ws(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var s=r===n?null:an(r);t.append(r),r=s}}let xn=!1,Dt=!1;function Ds(e){Dt=e}let F=null,vt=!1;function tt(e){F=e}let z=null;function rt(e){z=e}let kt=null;function La(e){F!==null&&(kt??(kt=new Set)).add(e)}let Ne=null,Re=0,Ye=null;function Ao(e){Ye=e}let ja=1,nr=0,ur=nr;function Ls(e){ur=e}function Ra(){return++ja}function on(e){var t=e.f;if((t&ge)!==0)return!0;if(t&ye&&(e.f&=~pr),(t&St)!==0){for(var r=e.deps,n=r.length,s=0;s<n;s++){var a=r[s];if(on(a)&&ga(a),a.wv>e.wv)return!0}(t&Je)!==0&&me===null&&pe(e,be)}return!1}function za(e,t,r=!0){var n=e.reactions;if(n!==null&&!(kt!==null&&kt.has(e)))for(var s=0;s<n.length;s++){var a=n[s];(a.f&ye)!==0?za(a,t,!1):t===a&&(r?pe(a,ge):(a.f&be)!==0&&pe(a,St),gs(a))}}function Fa(e){var _;var t=Ne,r=Re,n=Ye,s=F,a=kt,i=de,o=vt,d=ur,c=e.f;Ne=null,Re=0,Ye=null,F=(c&(pt|Zt))===0?e:null,kt=null,Mr(e.ctx),vt=!1,ur=++nr,e.ac!==null&&(Nn(()=>{e.ac.abort(Mn)}),e.ac=null);try{e.f|=_n;var b=e.fn,h=b();e.f|=Dr;var u=e.deps,x=I==null?void 0:I.is_fork;if(Ne!==null){var m;if(x||Qr(e,Re),u!==null&&Re>0)for(u.length=Re+Ne.length,m=0;m<Ne.length;m++)u[Re+m]=Ne[m];else e.deps=u=Ne;if(_s()&&(e.f&Je)!==0)for(m=Re;m<u.length;m++)((_=u[m]).reactions??(_.reactions=[])).push(e)}else!x&&u!==null&&Re<u.length&&(Qr(e,Re),u.length=Re);if(sn()&&Ye!==null&&!vt&&u!==null&&(e.f&(ye|St|ge))===0)for(m=0;m<Ye.length;m++)za(Ye[m],e);if(s!==null&&s!==e){if(nr++,s.deps!==null)for(let g=0;g<r;g+=1)s.deps[g].rv=nr;if(t!==null)for(const g of t)g.rv=nr;Ye!==null&&(n===null?n=Ye:n.push(...Ye))}return(e.f&Yt)!==0&&(e.f^=Yt),h}catch(g){return oa(g)}finally{e.f^=_n,Ne=t,Re=r,Ye=n,F=s,kt=a,Mr(i),vt=o,ur=d}}function Co(e,t){let r=t.reactions;if(r!==null){var n=fi.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}if(r===null&&(t.f&ye)!==0&&(Ne===null||!gn.call(Ne,t))){var a=t;(a.f&Je)!==0&&(a.f^=Je,a.f&=~pr),a.v!==he&&bs(a),vo(a),Qr(a,0)}}function Qr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Co(e,r[n])}function Or(e){var t=e.f;if((t&et)===0){pe(e,be);var r=z,n=xn;z=e,xn=!0;try{(t&(ft|ps))!==0?Eo(e):ys(e),Ia(e);var s=Fa(e);e.teardown=typeof s=="function"?s:null,e.wv=ja;var a;Zs&&Ki&&(e.f&ge)!==0&&e.deps}finally{xn=n,z=r}}}async function Mo(){await Promise.resolve(),eo()}function p(e){var t=e.f,r=(t&ye)!==0;if(F!==null&&!vt){var n=z!==null&&(z.f&et)!==0;if(!n&&(kt===null||!kt.has(e))){var s=F.deps;if((F.f&_n)!==0)e.rv<nr&&(e.rv=nr,Ne===null&&s!==null&&s[Re]===e?Re++:Ne===null?Ne=[e]:Ne.push(e));else{F.deps??(F.deps=[]),gn.call(F.deps,e)||F.deps.push(e);var a=e.reactions;a===null?e.reactions=[F]:gn.call(a,F)||a.push(F)}}}if(Dt&&cr.has(e))return cr.get(e);if(r){var i=e;if(Dt){var o=i.v;return((i.f&be)===0&&i.reactions!==null||Ha(i))&&(o=ms(i)),cr.set(i,o),o}var d=(i.f&Je)===0&&!vt&&F!==null&&(xn||(F.f&Je)!==0),c=(i.f&Dr)===0;on(i)&&(d&&(i.f|=Je),ga(i)),d&&!c&&(ma(i),Ba(i))}if(me!=null&&me.has(e))return me.get(e);if((e.f&Yt)!==0)throw e.v;return e.v}function Ba(e){if(e.f|=Je,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&ye)!==0&&(t.f&Je)===0&&(ma(t),Ba(t))}function Ha(e){if(e.v===he)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(cr.has(t)||(t.f&ye)!==0&&Ha(t))return!0;return!1}function br(e){var t=vt;try{return vt=!0,e()}finally{vt=t}}function tr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(It in e)ss(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&It in r&&ss(r)}}}function ss(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{ss(e[n],t)}catch{}const r=vs(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Qs(r);for(let s in n){const a=n[s].get;if(a)try{a.call(e)}catch{}}}}}function No(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Io=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Po(e){return Io.includes(e)}const Oo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Do(e){return e=e.toLowerCase(),Oo[e]??e}const Lo=["touchstart","touchmove"];function jo(e){return Lo.includes(e)}const sr=Symbol("events"),Va=new Set,as=new Set;function Ga(e,t,r,n={}){function s(a){if(n.capture||is.call(t,a),!a.cancelBubble)return Nn(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Pt(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Wa(e,t,r,n,s){var a={capture:n,passive:s},i=Ga(e,t,r,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&In(()=>{t.removeEventListener(e,i,a)})}function fe(e,t,r){(t[sr]??(t[sr]={}))[e]=r}function On(e){for(var t=0;t<e.length;t++)Va.add(e[t]);for(var r of as)r(e)}let js=null;function is(e){var _,g;var t=this,r=t.ownerDocument,n=e.type,s=((_=e.composedPath)==null?void 0:_.call(e))||[],a=s[0]||e.target;js=e;var i=0,o=js===e&&e[sr];if(o){var d=s.indexOf(o);if(d!==-1&&(t===document||t===window)){e[sr]=t;return}var c=s.indexOf(t);if(c===-1)return;d<=c&&(i=d)}if(a=s[i]||e.target,a!==t){ui(e,"currentTarget",{configurable:!0,get(){return a||r}});var b=F,h=z;tt(null),rt(null);try{for(var u,x=[];a!==null&&a!==t;){try{var m=(g=a[sr])==null?void 0:g[n];m!=null&&(!a.disabled||e.target===a)&&m.call(a,e)}catch(y){u?x.push(y):u=y}if(e.cancelBubble)break;i++,a=i<s.length?s[i]:null}if(u){for(let y of x)queueMicrotask(()=>{throw y});throw u}}finally{e[sr]=t,delete e.currentTarget,tt(b),rt(h)}}}var qs;const Vn=((qs=globalThis==null?void 0:globalThis.window)==null?void 0:qs.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Ro(e){return(Vn==null?void 0:Vn.createHTML(e))??e}function Ua(e){var t=Ea("template");return t.innerHTML=Ro(e.replaceAll("<!>","<!---->")),t.content}function Dn(e,t){var r=z;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function P(e,t){var r=(t&Fi)!==0,n,s=!e.startsWith("<!>");return()=>{n===void 0&&(n=Ua(s?e:"<!>"+e),n=Zr(n));var a=r||wa?document.importNode(n,!0):n.cloneNode(!0);return Dn(a,a),a}}function zo(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var i=Ua(s),o=Zr(i);a=Zr(o)}var d=a.cloneNode(!0);return Dn(d,d),d}}function Fo(e,t){return zo(e,t,"svg")}function X(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Ot();return e.append(t,r),Dn(t,r),e}function w(e,t){e!==null&&e.before(t)}function A(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Vr]??(e[Vr]=e.nodeValue))&&(e[Vr]=r,e.nodeValue=`${r}`)}function Bo(e,t){return Ho(e,t)}const fn=new Map;function Ho(e,{target:t,anchor:r,props:n={},events:s,context:a,intro:i=!0,transformError:o}){xo();var d=void 0,c=$o(()=>{var b=r??t.appendChild(Ot());so(b,{pending:()=>{}},x=>{Lt({});var m=de;a&&(m.c=a),s&&(n.$$events=s),d=e(x,n)||{},jt()},o);var h=new Set,u=x=>{for(var m=0;m<x.length;m++){var _=x[m];if(!h.has(_)){h.add(_);var g=jo(_);for(const C of[t,document]){var y=fn.get(C);y===void 0&&(y=new Map,fn.set(C,y));var S=y.get(_);S===void 0?(C.addEventListener(_,is,{passive:g}),y.set(_,1)):y.set(_,S+1)}}}};return u(Cn(Va)),as.add(u),()=>{var g;for(var x of h)for(const y of[t,document]){var m=fn.get(y),_=m.get(x);--_==0?(y.removeEventListener(x,is),m.delete(x),m.size===0&&fn.delete(y)):m.set(x,_)}as.delete(u),b!==r&&((g=b.parentNode)==null||g.removeChild(b))}});return Vo.set(d,c),d}let Vo=new WeakMap;var ct,yt,Fe,dr,tn,rn,An;class Ka{constructor(t,r=!0){je(this,"anchor");R(this,ct,new Map);R(this,yt,new Map);R(this,Fe,new Map);R(this,dr,new Set);R(this,tn,!0);R(this,rn,t=>{if(f(this,ct).has(t)){var r=f(this,ct).get(t),n=f(this,yt).get(r);if(n)$n(n),f(this,dr).delete(r);else{var s=f(this,Fe).get(r);s&&($n(s.effect),f(this,yt).set(r,s.effect),f(this,Fe).delete(r),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),n=s.effect)}for(const[a,i]of f(this,ct)){if(f(this,ct).delete(a),a===t)break;const o=f(this,Fe).get(i);o&&(_e(o.effect),f(this,Fe).delete(i))}for(const[a,i]of f(this,yt)){if(a===r||f(this,dr).has(a))continue;const o=()=>{if(Array.from(f(this,ct).values()).includes(a)){var c=document.createDocumentFragment();ws(i,c),c.append(Ot()),f(this,Fe).set(a,{effect:i,fragment:c})}else _e(i);f(this,dr).delete(a),f(this,yt).delete(a)};f(this,tn)||!n?(f(this,dr).add(a),fr(i,o,!1)):o()}}});R(this,An,t=>{f(this,ct).delete(t);const r=Array.from(f(this,ct).values());for(const[n,s]of f(this,Fe))r.includes(n)||(_e(s.effect),f(this,Fe).delete(n))});this.anchor=t,D(this,tn,r)}ensure(t,r){var n=I,s=Sa();if(r&&!f(this,yt).has(t)&&!f(this,Fe).has(t))if(s){var a=document.createDocumentFragment(),i=Ot();a.append(i),f(this,Fe).set(t,{effect:Ie(()=>r(i)),fragment:a})}else f(this,yt).set(t,Ie(()=>r(this.anchor)));if(f(this,ct).set(n,t),s){for(const[o,d]of f(this,yt))o===t?n.unskip_effect(d):n.skip_effect(d);for(const[o,d]of f(this,Fe))o===t?n.unskip_effect(d.effect):n.skip_effect(d.effect);n.oncommit(f(this,rn)),n.ondiscard(f(this,An))}else f(this,rn).call(this,n)}}ct=new WeakMap,yt=new WeakMap,Fe=new WeakMap,dr=new WeakMap,tn=new WeakMap,rn=new WeakMap,An=new WeakMap;function ve(e,t,r=!1){var n=new Ka(e),s=r?vr:0;function a(i,o){n.ensure(i,o)}Pn(()=>{var i=!1;t((o,d=0)=>{i=!0,a(d,o)}),i||a(-1,null)},s)}function He(e,t){return t}function Go(e,t,r){for(var n=[],s=t.length,a,i=t.length,o=0;o<s;o++){let h=t[o];fr(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var u=e.outrogroups;os(e,Cn(a.done)),u.delete(a),u.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var d=n.length===0&&r!==null;if(d){var c=r,b=c.parentNode;go(b),b.append(c),e.items.clear()}os(e,t,!d)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function os(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const i of e.pending.values())for(const o of i)n.add(e.items.get(o).e)}for(var s=0;s<t.length;s++){var a=t[s];if(n!=null&&n.has(a)){a.f|=wt;const i=document.createDocumentFragment();ws(a,i)}else _e(t[s],r)}}var Rs;function Ve(e,t,r,n,s,a=null){var i=e,o=new Map,d=(t&ta)!==0;if(d){var c=e;i=c.appendChild(Ot())}var b=null,h=Ir(()=>{var C=r();return us(C)?C:C==null?[]:Cn(C)}),u,x=new Map,m=!0;function _(C){(S.effect.f&et)===0&&(S.pending.delete(C),S.fallback=b,Wo(S,u,i,t,n),b!==null&&(u.length===0?(b.f&wt)===0?$n(b):(b.f^=wt,Ur(b,null,i)):fr(b,()=>{b=null})))}function g(C){S.pending.delete(C)}var y=Pn(()=>{u=p(h);for(var C=u.length,L=new Set,k=I,E=Sa(),T=0;T<C;T+=1){var B=u[T],N=n(B,T),V=m?null:o.get(N);V?(V.v&&Pr(V.v,B),V.i&&Pr(V.i,T),E&&k.unskip_effect(V.e)):(V=Uo(o,m?i:Rs??(Rs=Ot()),B,N,T,s,t,r),m||(V.e.f|=wt),o.set(N,V)),L.add(N)}if(C===0&&a&&!b&&(m?b=Ie(()=>a(i)):(b=Ie(()=>a(Rs??(Rs=Ot()))),b.f|=wt)),C>L.size&&wi(),!m)if(x.set(k,L),E){for(const[re,ie]of o)L.has(re)||k.skip_effect(ie.e);k.oncommit(_),k.ondiscard(g)}else _(k);p(h)}),S={effect:y,items:o,pending:x,outrogroups:null,fallback:b};m=!1}function Fr(e){for(;e!==null&&(e.f&pt)===0;)e=e.next;return e}function Wo(e,t,r,n,s){var V,re,ie,$e,Pe,nt,st,U,$;var a=(n&Oi)!==0,i=t.length,o=e.items,d=Fr(e.effect.first),c,b=null,h,u=[],x=[],m,_,g,y;if(a)for(y=0;y<i;y+=1)m=t[y],_=s(m,y),g=o.get(_).e,(g.f&wt)===0&&((re=(V=g.nodes)==null?void 0:V.a)==null||re.measure(),(h??(h=new Set)).add(g));for(y=0;y<i;y+=1){if(m=t[y],_=s(m,y),g=o.get(_).e,e.outrogroups!==null)for(const j of e.outrogroups)j.pending.delete(g),j.done.delete(g);if((g.f&Te)!==0&&($n(g),a&&(($e=(ie=g.nodes)==null?void 0:ie.a)==null||$e.unfix(),(h??(h=new Set)).delete(g))),(g.f&wt)!==0)if(g.f^=wt,g===d)Ur(g,null,r);else{var S=b?b.next:d;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),Gt(e,b,g),Gt(e,g,S),Ur(g,S,r),b=g,u=[],x=[],d=Fr(b.next);continue}if(g!==d){if(c!==void 0&&c.has(g)){if(u.length<x.length){var C=x[0],L;b=C.prev;var k=u[0],E=u[u.length-1];for(L=0;L<u.length;L+=1)Ur(u[L],C,r);for(L=0;L<x.length;L+=1)c.delete(x[L]);Gt(e,k.prev,E.next),Gt(e,b,k),Gt(e,E,C),d=C,b=E,y-=1,u=[],x=[]}else c.delete(g),Ur(g,d,r),Gt(e,g.prev,g.next),Gt(e,g,b===null?e.effect.first:b.next),Gt(e,b,g),b=g;continue}for(u=[],x=[];d!==null&&d!==g;)(c??(c=new Set)).add(d),x.push(d),d=Fr(d.next);if(d===null)continue}(g.f&wt)===0&&u.push(g),b=g,d=Fr(g.next)}if(e.outrogroups!==null){for(const j of e.outrogroups)j.pending.size===0&&(os(e,Cn(j.done)),(Pe=e.outrogroups)==null||Pe.delete(j));e.outrogroups.size===0&&(e.outrogroups=null)}if(d!==null||c!==void 0){var T=[];if(c!==void 0)for(g of c)(g.f&Te)===0&&T.push(g);for(;d!==null;)(d.f&Te)===0&&d!==e.fallback&&T.push(d),d=Fr(d.next);var B=T.length;if(B>0){var N=(n&ta)!==0&&i===0?r:null;if(a){for(y=0;y<B;y+=1)(st=(nt=T[y].nodes)==null?void 0:nt.a)==null||st.measure();for(y=0;y<B;y+=1)($=(U=T[y].nodes)==null?void 0:U.a)==null||$.fix()}Go(e,T,N)}}a&&Pt(()=>{var j,ae;if(h!==void 0)for(g of h)(ae=(j=g.nodes)==null?void 0:j.a)==null||ae.apply()})}function Uo(e,t,r,n,s,a,i,o){var d=(i&Ii)!==0?(i&Di)===0?po(r,!1,!1):Qt(r):null,c=(i&Pi)!==0?Qt(s):null;return{v:d,i:c,e:Ie(()=>(a(t,d??r,c??s,o),()=>{e.delete(n)}))}}function Ur(e,t,r){if(e.nodes)for(var n=e.nodes.start,s=e.nodes.end,a=t&&(t.f&wt)===0?t.nodes.start:r;n!==null;){var i=an(n);if(a.before(n),n===s)return;n=i}}function Gt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function J(e,t,r,n,s){var o;var a=(o=t.$$slots)==null?void 0:o[r],i=!1;a===!0&&(a=t.children,i=!0),a===void 0||a(e,i?()=>n:n)}function Ko(e,t,r,n,s,a){var i=null,o=e,d=new Ka(o,!1);Pn(()=>{const c=t()||null;var b=Bi;if(c===null){d.ensure(null,null);return}return d.ensure(c,h=>{if(c){if(i=Ea(c,b),Dn(i,i),n){var u=null,x=i.appendChild(Ot());n(i,x),u==null||u.remove()}z.nodes.end=i,h.before(i)}}),()=>{}},vr),In(()=>{})}function qo(e,t){var r=void 0,n;Na(()=>{r!==(r=t())&&(n&&(_e(n),n=null),r&&(n=Ie(()=>{Ca(()=>r(e))})))})}function qa(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=qa(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Yo(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=qa(e))&&(n&&(n+=" "),n+=t);return n}function ls(e){return typeof e=="object"?Yo(e):e??""}const zs=[...` 	
\r\f \v\uFEFF`];function Zo(e,t,r){var n=e==null?"":""+e;if(r){for(var s of Object.keys(r))if(r[s])n=n?n+" "+s:s;else if(n.length)for(var a=s.length,i=0;(i=n.indexOf(s,i))>=0;){var o=i+a;(i===0||zs.includes(n[i-1]))&&(o===n.length||zs.includes(n[o]))?n=(i===0?"":n.substring(0,i))+n.substring(o+1):i=o}}return n===""?null:n}function Fs(e,t=!1){var r=t?" !important;":";",n="";for(var s of Object.keys(e)){var a=e[s];a!=null&&a!==""&&(n+=" "+s+": "+a+r)}return n}function Gn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Qo(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,i=0,o=!1,d=[];n&&d.push(...Object.keys(n).map(Gn)),s&&d.push(...Object.keys(s).map(Gn));var c=0,b=-1;const _=e.length;for(var h=0;h<_;h++){var u=e[h];if(o?u==="/"&&e[h-1]==="*"&&(o=!1):a?a===u&&(a=!1):u==="/"&&e[h+1]==="*"?o=!0:u==='"'||u==="'"?a=u:u==="("?i++:u===")"&&i--,!o&&a===!1&&i===0){if(u===":"&&b===-1)b=h;else if(u===";"||h===_-1){if(b!==-1){var x=Gn(e.substring(c,b).trim());if(!d.includes(x)){u!==";"&&h++;var m=e.substring(c,h).trim();r+=" "+m+";"}}c=h+1,b=-1}}}}return n&&(r+=Fs(n)),s&&(r+=Fs(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Me(e,t,r,n,s,a){var i=e[Zn];if(i!==r||i===void 0){var o=Zo(r,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Zn]=r}else if(a&&s!==a)for(var d in a){var c=!!a[d];(s==null||c!==!!s[d])&&e.classList.toggle(d,c)}return a}function Wn(e,t={},r,n){for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,n))}}function ds(e,t,r,n){var s=e[Qn];if(s!==t){var a=Qo(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Qn]=t}else n&&(Array.isArray(n)?(Wn(e,r==null?void 0:r[0],n[0]),Wn(e,r==null?void 0:r[1],n[1],"important")):Wn(e,r,n));return n}function cs(e,t,r=!1){if(e.multiple){if(t==null)return;if(!us(t))return Gi();for(var n of e.options)n.selected=t.includes(Bs(n));return}for(n of e.options){var s=Bs(n);if(bo(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Xo(e){var t=new MutationObserver(()=>{cs(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),In(()=>{t.disconnect()})}function Bs(e){return"__value"in e?e.__value:e.value}const Br=Symbol("class"),Hr=Symbol("style"),Ya=Symbol("is custom element"),Za=Symbol("is html"),Jo=hs?"input":"INPUT",el=hs?"option":"OPTION",tl=hs?"select":"SELECT";function rl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function $t(e,t,r,n){var s=Qa(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[mi]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Xa(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function nl(e,t,r,n,s=!1,a=!1){var i=Qa(e),o=i[Ya],d=!i[Za],c=t||{},b=e.nodeName===el;for(var h in t)h in r||(r[h]=null);r.class?r.class=ls(r.class):r[Br]&&(r.class=null),r[Hr]&&(r.style??(r.style=null));var u=Xa(e);if(e.nodeName===Jo&&"type"in r&&("value"in r||"__value"in r)){var x=r.type;(x!==c.type||x===void 0&&e.hasAttribute("type"))&&(c.type=x,$t(e,"type",x))}for(const k in r){let E=r[k];if(b&&k==="value"&&E==null){e.value=e.__value="",c[k]=E;continue}if(k==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Me(e,m,E,n,t==null?void 0:t[Br],r[Br]),c[k]=E,c[Br]=r[Br];continue}if(k==="style"){ds(e,E,t==null?void 0:t[Hr],r[Hr]),c[k]=E,c[Hr]=r[Hr];continue}var _=c[k];if(!(E===_&&!(E===void 0&&e.hasAttribute(k)))){c[k]=E;var g=k[0]+k[1];if(g!=="$$")if(g==="on"){const T={},B="$$"+k;let N=k.slice(2);var y=Po(N);if(No(N)&&(N=N.slice(0,-7),T.capture=!0),!y&&_){if(E!=null)continue;e.removeEventListener(N,c[B],T),c[B]=null}if(y)fe(N,e,E),On([N]);else if(E!=null){let V=function(re){c[k].call(this,re)};var L=V;c[B]=Ga(N,e,V,T)}}else if(k==="style")$t(e,k,E);else if(k==="autofocus")mo(e,!!E);else if(!o&&(k==="__value"||k==="value"&&E!=null))e.value=e.__value=E;else if(k==="selected"&&b)rl(e,E);else{var S=k;d||(S=Do(S));var C=S==="defaultValue"||S==="defaultChecked";if(E==null&&!o&&!C)if(i[k]=null,S==="value"||S==="checked"){let T=e;const B=t===void 0;if(S==="value"){let N=T.defaultValue;T.removeAttribute(S),T.defaultValue=N,T.value=T.__value=B?N:null}else{let N=T.defaultChecked;T.removeAttribute(S),T.defaultChecked=N,T.checked=B?N:!1}}else e.removeAttribute(k);else C||u.includes(S)&&(o||typeof E!="string")?(e[S]=E,S in i&&(i[S]=he)):typeof E!="function"&&$t(e,S,E)}}}return c}function Hs(e,t,r=[],n=[],s=[],a,i=!1,o=!1){ha(s,r,n,d=>{var c=void 0,b={},h=e.nodeName===tl,u=!1;if(Na(()=>{var m=t(...d.map(p)),_=nl(e,c,m,a,i,o);u&&h&&"value"in m&&cs(e,m.value);for(let y of Object.getOwnPropertySymbols(b))m[y]||_e(b[y]);for(let y of Object.getOwnPropertySymbols(m)){var g=m[y];y.description===Hi&&(!c||g!==c[y])&&(b[y]&&_e(b[y]),b[y]=Ie(()=>qo(e,()=>g))),_[y]=g}c=_}),h){var x=e;Ca(()=>{cs(x,c.value,!0),Xo(x)})}u=!0})}function Qa(e){return e[un]??(e[un]={[Ya]:e.nodeName.includes("-"),[Za]:e.namespaceURI===na})}var Vs=new Map;function Xa(e){var t=e.getAttribute("is")||e.nodeName,r=Vs.get(t);if(r)return r;Vs.set(t,r=[]);for(var n,s=e,a=Element.prototype;a!==s;){n=Qs(s);for(var i in n)n[i].set&&i!=="innerHTML"&&i!=="textContent"&&i!=="innerText"&&r.push(i);s=vs(s)}return r}function Sn(e,t,r=t){var n=new WeakSet;yo(e,"input",async s=>{var a=s?e.defaultValue:e.value;if(a=Un(e)?Kn(a):a,r(a),I!==null&&n.add(I),await Mo(),a!==(a=t())){var i=e.selectionStart,o=e.selectionEnd,d=e.value.length;if(e.value=a??"",o!==null){var c=e.value.length;i===o&&o===d&&c>d?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=i,e.selectionEnd=Math.min(o,c))}}}),br(t)==null&&e.value&&(r(Un(e)?Kn(e.value):e.value),I!==null&&n.add(I)),Ma(()=>{var s=t();if(e===document.activeElement){var a=I;if(n.has(a))return}Un(e)&&s===Kn(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Un(e){var t=e.type;return t==="number"||t==="range"}function Kn(e){return e===""?null:+e}function ks(e=!1){const t=de,r=t.l.u;if(!r)return;let n=()=>tr(t.s);if(e){let s=0,a={};const i=Nr(()=>{let o=!1;const d=t.s;for(const c in d)d[c]!==a[c]&&(a[c]=d[c],o=!0);return o&&s++,s});n=()=>p(i)}r.b.length&&ko(()=>{Gs(t,n),qn(r.b)}),kn(()=>{const s=br(()=>r.m.map(bi));return()=>{for(const a of s)typeof a=="function"&&a()}}),r.a.length&&kn(()=>{Gs(t,n),qn(r.a)})}function Gs(e,t){if(e.l.s)for(const r of e.l.s)p(r);t()}const sl={get(e,t){if(!e.exclude.includes(t))return p(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=z;try{rt(e.parent_effect),e.special[t]=Be({get[t](){return e.props[t]}},t,ra)}finally{rt(n)}}return e.special[t](r),Ns(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Ns(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function q(e,t){return new Proxy({props:e,exclude:t,special:{},version:Qt(0),parent_effect:z},sl)}const al={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(zr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];zr(s)&&(s=s());const a=qt(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(zr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=qt(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===It||t===ea)return!1;for(let r of e.props)if(zr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(zr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ee(...e){return new Proxy({props:e},al)}function Be(e,t,r,n){var L;var s=!jr||(r&ji)!==0,a=(r&Ri)!==0,i=(r&zi)!==0,o=n,d=!0,c=void 0,b=()=>i&&s?(c??(c=Nr(n)),p(c)):(d&&(d=!1,o=i?br(n):n),o);let h;if(a){var u=It in e||ea in e;h=((L=qt(e,t))==null?void 0:L.set)??(u&&t in e?k=>e[t]=k:void 0)}var x,m=!1;a?[x,m]=Qi(()=>e[t]):x=e[t],x===void 0&&n!==void 0&&(x=b(),h&&(s&&Ti(),h(x)));var _;if(s?_=()=>{var k=e[t];return k===void 0?b():(d=!0,k)}:_=()=>{var k=e[t];return k!==void 0&&(o=void 0),k===void 0?o:k},s&&(r&ra)===0)return _;if(h){var g=e.$$legacy;return(function(k,E){return arguments.length>0?((!s||!E||g||m)&&h(E?_():k),k):_()})}var y=!1,S=((r&Li)!==0?Nr:Ir)(()=>(y=!1,_()));a&&p(S);var C=z;return(function(k,E){if(arguments.length>0){const T=E?p(S):s&&a?ut(k):k;return M(S,T),y=!0,o!==void 0&&(o=T),k}return Dt&&y||(C.f&et)!==0?S.v:p(S)})}function $s(e){de===null&&_i(),jr&&de.l!==null?il(de).m.push(e):kn(()=>{const t=br(e);if(typeof t=="function")return t})}function il(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const ol="5";var Ys;typeof window<"u"&&((Ys=window.__svelte??(window.__svelte={})).v??(Ys.v=new Set)).add(ol);qi();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ll={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const dl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ws=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var cl=Fo("<svg><!><!></svg>");function te(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]),n=q(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Lt(t,!1);let s=Be(t,"name",8,void 0),a=Be(t,"color",8,"currentColor"),i=Be(t,"size",8,24),o=Be(t,"strokeWidth",8,2),d=Be(t,"absoluteStrokeWidth",8,!1),c=Be(t,"iconNode",24,()=>[]);ks();var b=cl();Hs(b,(x,m,_)=>({...ll,...x,...n,width:i(),height:i(),stroke:a(),"stroke-width":m,class:_}),[()=>dl(n)?void 0:{"aria-hidden":"true"},()=>(tr(d()),tr(o()),tr(i()),br(()=>d()?Number(o())*24/Number(i()):o())),()=>(tr(Ws),tr(s()),tr(r),br(()=>Ws("lucide-icon","lucide",s()?`lucide-${s()}`:"",r.class)))]);var h=l(b);Ve(h,1,c,He,(x,m)=>{var _=xa(()=>xi(p(m),2));let g=()=>p(_)[0],y=()=>p(_)[1];var S=X(),C=Q(S);Ko(C,g,!0,(L,k)=>{Hs(L,()=>({...y()}))}),w(x,S)});var u=v(h);J(u,t,"default",{}),w(e,b),jt()}function fl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];te(e,ee({name:"arrow-right"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function ul(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];te(e,ee({name:"arrow-up-right"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function vl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 18V5"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77"}]];te(e,ee({name:"brain"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function pl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M8 6h.01"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]];te(e,ee({name:"building"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function hl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];te(e,ee({name:"calendar"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function bl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m15 18-6-6 6-6"}]];te(e,ee({name:"chevron-left"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function xl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];te(e,ee({name:"chevron-right"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function gl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];te(e,ee({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Ja(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];te(e,ee({name:"clock"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function ml(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];te(e,ee({name:"cloud"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function _l(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];te(e,ee({name:"code"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function yl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}]];te(e,ee({name:"compass"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Ln(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];te(e,ee({name:"cpu"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function wl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];te(e,ee({name:"external-link"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function kl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}]];te(e,ee({name:"file-code"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function $l(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];te(e,ee({name:"folder"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Sl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];te(e,ee({name:"git-branch"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function ei(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];te(e,ee({name:"layers"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function El(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];te(e,ee({name:"mail"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Tl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];te(e,ee({name:"map-pin"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Al(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];te(e,ee({name:"pointer"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Cl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];te(e,ee({name:"search"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Ss(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];te(e,ee({name:"send"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Ml(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];te(e,ee({name:"server"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Nl(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];te(e,ee({name:"shield"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function ti(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];te(e,ee({name:"sparkles"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function jn(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];te(e,ee({name:"terminal"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Il(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];te(e,ee({name:"zap"},()=>r,{get iconNode(){return n},children:(s,a)=>{var i=X(),o=Q(i);J(o,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}const xe={name:"Arthur",role:"Full-Stack & Mobile Developer",location:"Babil, Hilla, Iraq",bio:"Ahmed Ali (Arthur) — A versatile developer focused on modern web applications, native/cross-platform mobile apps, and refined bot automation.",email:"ssdcv608@gmail.com",github:"https://github.com/ArthurExtra",telegram:"https://t.me/ArthurExtra",linkedin:"https://www.linkedin.com/in/arthurextra"},Pl=`
I'm a versatile developer focused on building high-performance, polished web and mobile solutions.
My capabilities span responsive frontend architectures in React, Next.js, and Vue, feature-rich cross-platform applications in Flutter, and robust server automations.

I prioritize visual feedback, clean component architectures, and shipping apps with smooth native feelings.
`.trim(),ri=[{category:"Front-End Developer (UI/UX Clients)",description:"What is it? The Front-End is the user-facing side of software — everything users see, touch, and interact with in their browser or mobile screen. I specialize in building fully responsive, interactive, and visually polished interfaces. For core JavaScript/TypeScript frameworks, I utilize React, Next.js, Svelte, and Vue.js to construct high-speed web architectures. I also build premium cross-platform and native mobile apps with Flutter (Dart) and native Android (Kotlin, Java).",items:["React","Next.js","Svelte","Vue.js","Flutter","TypeScript","JavaScript","Dart","Kotlin","Java","HTML5","CSS3","SASS"],type:"frontend"},{category:"Back-End Developer (Core APIs & Automations)",description:"What is it? The Back-End is the powerhouse and brain operating behind the scenes — it processes application logic, manages user authentication, queries databases, handles structured performance caching, and hosts custom background automations like automated Telegram bots. I design rapid, highly scalable server modules and secure REST/GraphQL API nodes.",items:["Node.js","Bun","Python","MySQL","PostgreSQL","MongoDB","SQLite","Redis","Shell","zsh"],type:"backend"},{category:"DevOps & Cloud Infrastructure",description:"What is it? DevOps secures, deploys, and maintains live servers and databases so your apps stay online and run smoothly under load. I provision isolated virtualization processes, manage standard container actions, and coordinate robust web deployments.",items:["Docker","Kubernetes","Firebase","Heroku","Linux"],type:"devops"},{category:"Developer Toolkits",description:"What is it? Tools and environments that optimize developer velocity and enable transparent code tracking. I coordinate source code version controls, test integration payloads, and maintain polished development systems.",items:["Git","GitHub","GitLab","Bitbucket","VSCode","Android Studio","Postman"],type:"tools"}],Ol=[{role:"Full-Stack & App Developer",company:"Independent",period:"2023 - Present",description:"Developing modern web applications, custom automated bot systems, cross-platform Android & iOS apps (Flutter), and clean developer utilities."}],ni=[{title:"Portfolio",description:"A highly interactive, beautiful personal developer portfolio website showcasing responsive layouts, terminal-like sandboxes, and modern frontend designs.",link:"https://github.com/ArthurExtra/Portfolio/",tags:["Svelte","Vite","Tailwind CSS","TypeScript"],featured:!0}],Dl="Available for remote full-stack web, mobile app development (Flutter/Native), and automation solutions.",Us=[{name:"package.json",path:"package.json",type:"file",size:"1.4 KB",language:"json",lastCommitMessage:"chore: update dependencies for React, Next.js, and Vue frameworks",lastCommitDate:"5 mins ago",content:`{
  "name": "arthur-workspace",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev:next": "next dev",
    "dev:vue": "vite",
    "build": "next build"
  },
  "dependencies": {
    "react": "^18.3.1",
    "next": "^14.2.4",
    "vue": "^3.4.29"
  }
}`},{name:"App.vue",path:"App.vue",type:"file",size:"1.2 KB",language:"html",lastCommitMessage:"feat: design highly reactive front-end dashboard core viewport",lastCommitDate:"Yesterday",content:`<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref('dashboard');
const message = ref('Arthur Web Workspace');
<\/script>

<template>
  <main class="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
    <div class="space-y-4 max-w-md text-center">
      <h1 class="text-3xl font-black tracking-tight text-sky-400">{{ message }}</h1>
      <p class="text-xs text-slate-400 font-semibold leading-relaxed">
        Engineered cleanly under refined client layouts. Highly optimized.
      </p>
    </div>
  </main>
</template>`},{name:"about_me.md",path:"about_me.md",type:"file",size:"1.9 KB",language:"markdown",lastCommitMessage:"docs: refine infrastructure development bio",lastCommitDate:"Just now",content:`# Hello! I'm Arthur

A Software Developer based in Hillah, Babil, Iraq. I specialize in building robust full-stack web applications, custom automated bot architectures, cross-platform Android & iOS apps (Flutter), and clean development utilities.

## Core Philosophy
I focus on user interfaces, developer ergonomics, and clean modular solutions that scale elegantly.

## Developer Toolkit
- **Frontend & App Engineering (React/Vue/Flutter)**
- **Backend Rest Core APIs (Node.js/Express/Next.js)**
- **Database Engineering & Caching (Postgres/MySQL/Redis)**
- **DevOps & Automations (Docker/Linux/zsh)**`}];var Ll=P('<header id="navbar-main" class="sticky top-0 z-50 bg-[#1b1c22]/85 backdrop-blur-md border-b border-white/[0.04] transition-all duration-300"><div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4"><div id="brand-logo" class="flex items-center gap-3"><img src="/favicon.ico" alt="Arthur logo" class="w-9 h-9 rounded-lg border border-sky-500/20"/> <div class="text-left"><div class="flex items-center gap-1.5"><span id="brand-name" class="font-bold text-sm text-slate-100 tracking-tight"> </span> <span class="bg-sky-500/10 text-sky-300 border border-sky-400/15 text-[8px] font-mono px-1.5 py-0.5 rounded font-black tracking-wider uppercase">SYSTEMS</span></div> <span class="text-[10px] text-slate-400 font-mono block leading-none mt-1"> </span></div></div> <nav id="nav-element-list" class="hidden md:flex items-center gap-6 text-[11px] font-mono text-slate-400 tracking-wider uppercase font-bold"><a href="#about-philosophy" class="hover:text-sky-400 transition-colors flex items-center gap-1"><!> About</a> <a href="#projects" class="hover:text-sky-400 transition-colors flex items-center gap-1"><!> Work</a> <a href="#interactive-workbench" class="hover:text-sky-400 transition-colors flex items-center gap-1"><!> Sandbox</a> <a href="#skills-toolkit" class="hover:text-sky-400 transition-colors flex items-center gap-1"><!> Tech Matrix</a> <a href="#contact-gate" class="hover:text-sky-400 transition-colors flex items-center gap-1"><!> Gateway</a></nav> <div class="flex items-center gap-3 text-[10px] font-mono"><div class="flex items-center gap-2 text-slate-400 bg-slate-950/70 px-3 py-1.5 rounded-md border border-white/[0.04]"><!> <span class="text-slate-500 uppercase tracking-widest text-[9px]">Sys_Time:</span> <span id="nav-pipeline-clock" class="text-sky-400 font-black tracking-wider"> </span></div></div></div></header>');function jl(e,t){Lt(t,!0);let r=Be(t,"currentTime",3,"--:--:--");var n=Ll(),s=l(n),a=l(s),i=v(l(a),2),o=l(i),d=l(o),c=l(d),b=v(o,2),h=l(b),u=v(a,2),x=l(u),m=l(x);yl(m,{class:"w-3.5 h-3.5 text-sky-500/80"});var _=v(x,2),g=l(_);ei(g,{class:"w-3.5 h-3.5 text-sky-500/80"});var y=v(_,2),S=l(y);jn(S,{class:"w-3.5 h-3.5 text-sky-500/80"});var C=v(y,2),L=l(C);_l(L,{class:"w-3.5 h-3.5 text-sky-500/80"});var k=v(C,2),E=l(k);El(E,{class:"w-3.5 h-3.5 text-sky-500/80"});var T=v(u,2),B=l(T),N=l(B);Ja(N,{class:"w-3.5 h-3.5 text-sky-400"});var V=v(N,4),re=l(V);ne(()=>{A(c,xe.name),A(h,xe.location),A(re,r()||"--:--:--")}),w(e,n),jt()}var Rl=P('<section id="about-philosophy" class="relative py-24 sm:py-32 border-b border-white/[0.03] overflow-hidden bg-dot"><div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#1b1c22]/40 to-[#1b1c22] pointer-events-none"></div> <div class="relative max-w-6xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"><div class="lg:col-span-12 xl:col-span-8 space-y-6 text-left"><div class="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 border border-sky-500/20 text-sky-400 rounded-md text-[10px] font-bold font-mono uppercase tracking-wider"><!> <span> </span></div> <h1 class="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05] max-w-4xl">Architecting clean <span class="font-serif italic text-sky-400 font-normal">Web Architectures</span>, custom bots & native mobile systems</h1> <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-medium"> </p> <div class="flex flex-wrap gap-4 pt-4"><a href="#projects" class="bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 text-xs px-6 py-3 rounded-md transition-all shadow-md shadow-sky-500/10 duration-150 cursor-pointer flex items-center gap-1.5 font-mono uppercase tracking-wider"><span>Explore Workspace</span> <!></a> <a href="#contact-gate" class="bg-slate-900 border border-white/10 hover:border-sky-500/40 text-slate-200 font-mono text-xs px-6 py-3 rounded-md transition duration-150 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider font-bold"><span>Transmit Envelope</span> <!></a></div></div> <div class="lg:col-span-12 xl:col-span-4 space-y-4"><div class="bg-slate-900/85 border border-slate-800 rounded-xl p-6 text-left space-y-5 shadow-2xl relative group hover:border-[#17213d] transition-all duration-300"><div class="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-2xl rounded-full pointer-events-none"></div> <div class="flex justify-between items-center text-[10px] font-mono text-slate-500 border-b border-white/[0.04] pb-2.5"><span class="flex items-center gap-1.5 font-bold tracking-widest uppercase"><!> Operator Credentials</span> <span class="text-sky-400 font-bold flex items-center gap-1 font-mono"><span class="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping"></span> ACTIVE_NODE</span></div> <div class="space-y-3.5 font-mono text-xs"><div class="flex justify-between items-baseline"><span class="text-slate-500 font-bold uppercase text-[10px]">Developer:</span> <span class="text-slate-200 font-black text-sm tracking-tight"> </span></div> <div class="flex justify-between items-baseline"><span class="text-slate-500 font-bold uppercase text-[10px]">Sectors:</span> <span class="text-sky-400 font-black"> </span></div> <div class="flex justify-between items-center pt-2 border-t border-white/[0.02]"><span class="text-slate-500 font-bold uppercase text-[10px]">Source Hub:</span> <a target="_blank" rel="noopener noreferrer" class="text-slate-200 hover:text-sky-400 font-bold flex items-center gap-1.5 transition-colors"><svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> <span> </span></a></div> <div class="flex justify-between items-center"><span class="text-slate-500 font-bold uppercase text-[10px]">T-Client:</span> <a target="_blank" rel="noopener noreferrer" class="text-slate-200 hover:text-sky-400 font-bold flex items-center gap-1.5 transition-colors"><!> <span> </span></a></div> <div class="flex justify-between items-center"><span class="text-slate-500 font-bold uppercase text-[10px]">Linkedin:</span> <a target="_blank" rel="noopener noreferrer" class="text-slate-200 hover:text-sky-400 font-bold flex items-center gap-1.5 transition-colors"><svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> <span> </span></a></div></div></div></div></div></section>');function zl(e,t){Lt(t,!1),ks();var r=Rl(),n=v(l(r),2),s=l(n),a=l(s),i=l(a);ti(i,{class:"w-3.5 h-3.5 text-sky-400"});var o=v(i,2),d=l(o),c=v(a,4),b=l(c),h=v(c,2),u=l(h),x=v(l(u),2);fl(x,{class:"w-4 h-4"});var m=v(u,2),_=v(l(m),2);ul(_,{class:"w-4 h-4 text-sky-400"});var g=v(s,2),y=l(g),S=v(l(y),2),C=l(S),L=l(C);Ln(L,{class:"w-3.5 h-3.5 text-sky-500/80"});var k=v(S,2),E=l(k),T=v(l(E),2),B=l(T),N=v(E,2),V=v(l(N),2),re=l(V),ie=v(N,2),$e=v(l(ie),2),Pe=v(l($e),2),nt=l(Pe),st=v(ie,2),U=v(l(st),2),$=l(U);Ss($,{class:"w-4 h-4 text-slate-400"});var j=v($,2),ae=l(j),oe=v(st,2),H=v(l(oe),2),O=v(l(H),2),G=l(O);ne((le,ce)=>{A(d,Dl),A(b,`${xe.bio} I specialize in shipping visually polished front-ends
                using React, Next.js, and Vue, crafting feature-rich cross-platform
                apps in Flutter, and spinning up highly automated custom servers and
                Telegram bot systems.`),A(B,xe.name),A(re,xe.role),$t($e,"href",xe.github),A(nt,`@${le??""}`),$t(U,"href",xe.telegram),A(ae,`@${ce??""}`),$t(H,"href",xe.linkedin),A(G,xe.name)},[()=>xe.github.split("/").pop(),()=>xe.telegram.split("/").pop()]),w(e,r),jt()}var Fl=P('<p class="font-semibold"> </p>'),Bl=P(`<section id="about-creed" class="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.03] text-left relative"><div class="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-sky-500/5 blur-3xl rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div> <div class="flex items-center gap-4 mb-16"><span class="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">Development Creed // Core Philosophy</span> <div class="flex-1 h-[1px] bg-white/[0.05]"></div></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10"><div class="lg:col-span-6 space-y-6"><h2 class="text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight leading-tight">How I architect <span class="font-serif italic text-sky-400 font-normal">resilient applications</span></h2> <div class="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4"></div> <p class="text-slate-400 text-xs sm:text-sm leading-relaxed font-semibold">By opting for optimized code, clean state stores, and
                lightweight bundle architectures, my web systems, bot engines,
                and native mobile layouts boot instantaneously and operate
                seamlessly.</p></div> <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"><div class="p-6 border border-[#111626] rounded-xl bg-slate-900/50 space-y-3 hover:border-sky-500/20 transition-all duration-300"><div class="w-10 h-10 rounded-lg bg-sky-950/40 border border-sky-500/10 flex items-center justify-center"><!></div> <h4 class="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">Optimized Code</h4> <p class="text-[11px] text-slate-400 leading-relaxed font-bold">Strict control over component re-renders. Clean React/Vue
                    tree hierarchies and modular Flutter styles.</p></div> <div class="p-6 border border-[#111626] rounded-xl bg-slate-900/50 space-y-3 hover:border-sky-500/20 transition-all duration-300"><div class="w-10 h-10 rounded-lg bg-sky-950/40 border border-sky-500/10 flex items-center justify-center"><!></div> <h4 class="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">Stable Automation</h4> <p class="text-[11px] text-slate-400 leading-relaxed font-bold">Resilient custom servers, automated process tasks, and
                    reliable, secure runtime configurations.</p></div> <div class="p-6 border border-[#111626] rounded-xl bg-slate-900/50 space-y-3 hover:border-sky-500/20 transition-all duration-300"><div class="w-10 h-10 rounded-lg bg-amber-950/40 border border-amber-500/10 flex items-center justify-center"><!></div> <h4 class="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">Responsive UX</h4> <p class="text-[11px] text-slate-400 leading-relaxed font-bold">Sleek transitions, reactive client models, and
                    high-performance server integrations.</p></div> <div class="p-6 border border-[#111626] rounded-xl bg-slate-900/50 space-y-3 hover:border-sky-500/20 transition-all duration-300"><div class="w-10 h-10 rounded-lg bg-indigo-950/40 border border-indigo-500/10 flex items-center justify-center"><!></div> <h4 class="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">Keyboard-Driven Tooling</h4> <p class="text-[11px] text-slate-400 leading-relaxed font-bold">Custom terminal simulators and zsh integrations built to
                    streamline modern development workflows.</p></div></div></div></section>`);function Hl(e,t){Lt(t,!1);const r=Pl.split(`

`);ks();var n=Bl(),s=v(l(n),4),a=l(s),i=v(l(a),2);Ve(i,5,()=>r,He,(L,k)=>{var E=Fl(),T=l(E);ne(()=>A(T,p(k))),w(L,E)});var o=v(a,2),d=l(o),c=l(d),b=l(c);Ln(b,{class:"w-5 h-5 text-sky-400"});var h=v(d,2),u=l(h),x=l(u);Nl(x,{class:"w-5 h-5 text-sky-400"});var m=v(h,2),_=l(m),g=l(_);Il(g,{class:"w-5 h-5 text-amber-400"});var y=v(m,2),S=l(y),C=l(S);jn(C,{class:"w-5 h-5 text-indigo-400"}),w(e,n),jt()}var Vl=P(`<div class="relative pl-8 border-l border-white/[0.05] space-y-4 group"><div class="absolute -left-[5.5px] top-[6px] w-2.5 h-2.5 rounded-full bg-slate-950 border border-sky-500/35 group-hover:bg-sky-400 group-hover:border-sky-500/80 transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.1)]"></div> <div class="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2"><div class="space-y-1"><h3 class="text-lg font-black text-white group-hover:text-sky-400 transition-colors duration-300"> </h3> <div class="flex items-center gap-2 text-xs text-sky-400/85 font-mono"><!> <span class="font-bold tracking-wider uppercase"> </span></div></div> <div class="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 font-bold shrink-0 bg-slate-950/60 px-2.5 py-1 rounded border border-white/[0.03]"><!> <span> </span></div></div> <div class="bg-slate-900/40 rounded-xl p-5 border border-white/[0.03] space-y-4"><p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold"> </p> <div class="space-y-2 pt-2 border-t border-white/[0.02]"><div class="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black"><!> <span>Key Systems Operations Deliverables</span></div> <ul class="space-y-2 pl-4 list-disc text-xs text-slate-400 font-medium leading-relaxed"><li>Formulating the core synchronous MTProto client
                                layers utilizing SQLite sessions persistence.</li> <li>Designing decoupled polyglot child process
                                controller hooks executing securely in CLI/TUI
                                modes.</li> <li>Configuring persistent reproducible nix flasks
                                minimizing server dependencies down to locked
                                hashes.</li></ul></div></div></div>`),Gl=P('<section id="experience-timeline" class="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.03] text-left"><div class="flex items-center gap-4 mb-16"><span class="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">Chronology of Work</span> <div class="flex-1 h-[1px] bg-white/[0.05]"></div></div> <div class="max-w-4xl space-y-12"></div></section>');function Wl(e){var t=Gl(),r=v(l(t),2);Ve(r,5,()=>Ol,He,(n,s)=>{var a=Vl(),i=v(l(a),2),o=l(i),d=l(o),c=l(d),b=v(d,2),h=l(b);pl(h,{class:"w-3.5 h-3.5 shrink-0"});var u=v(h,2),x=l(u),m=v(o,2),_=l(m);hl(_,{class:"w-3.5 h-3.5 text-slate-500"});var g=v(_,2),y=l(g),S=v(i,2),C=l(S),L=l(C),k=v(C,2),E=l(k),T=l(E);Ln(T,{class:"w-3.5 h-3.5 text-sky-500"}),ne(()=>{A(c,p(s).role),A(x,p(s).company),A(y,p(s).period),A(L,p(s).description)}),w(n,a)}),w(e,t)}var Ul=P('<div class="absolute top-4 right-4 flex items-center gap-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[8px] font-mono px-2 py-0.5 rounded font-black uppercase tracking-wider"><!> <span>Featured</span></div>'),Kl=P('<span class="px-2 py-0.5 bg-slate-950 border border-sky-500/10 text-sky-300 rounded text-[9px] font-mono font-bold uppercase tracking-wider"> </span>'),ql=P('<div class="flex flex-wrap gap-1.5"></div>'),Yl=P('<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-sky-500/20 transition-all duration-300 group hover:bg-slate-850/50 relative text-left"><!> <div class="space-y-4"><div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded bg-slate-850 border border-sky-500/15 flex items-center justify-center font-mono font-bold text-xs text-sky-400 uppercase"> </div> <h3 class="font-mono font-black text-lg text-slate-100 group-hover:text-sky-400 transition-colors duration-200"> </h3></div> <p class="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-semibold"> </p></div> <div class="pt-6 border-t border-white/[0.03] mt-6 space-y-4"><!> <div class="flex items-center justify-between text-[11px] font-mono pt-1"><span class="text-slate-500 font-bold">Scope: Open Source</span> <a target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold transition-all"><span>Inspect Hub</span> <!></a></div></div></div>'),Zl=P(`<section id="projects" class="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.03]"><div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left"><div class="space-y-2"><span class="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">Featured Projects &amp; Creations</span> <h2 class="text-2xl sm:text-3.5xl font-black text-white tracking-tight">Interactive Web &amp; Mobile Portfolios</h2> <p class="text-xs sm:text-sm text-slate-400 max-w-xl font-semibold leading-relaxed">I design and build responsive web applications, interactive
                layouts, beautiful front-ends, and robust automations.</p></div></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div></section>`);function Ql(e){var t=Zl(),r=v(l(t),2);Ve(r,5,()=>ni,He,(n,s)=>{const a=Ir(()=>p(s).featured);var i=Yl(),o=l(i);{var d=T=>{var B=Ul(),N=l(B);ti(N,{class:"w-2.5 h-2.5"}),w(T,B)};ve(o,T=>{p(a)&&T(d)})}var c=v(o,2),b=l(c),h=l(b),u=l(h),x=v(h,2),m=l(x),_=v(b,2),g=l(_),y=v(c,2),S=l(y);{var C=T=>{var B=ql();Ve(B,5,()=>p(s).tags,He,(N,V)=>{var re=Kl(),ie=l(re);ne(()=>A(ie,p(V))),w(N,re)}),w(T,B)};ve(S,T=>{p(s).tags&&T(C)})}var L=v(S,2),k=v(l(L),2),E=v(l(k),2);wl(E,{class:"w-3.5 h-3.5"}),ne(T=>{A(u,T),A(m,p(s).title),A(g,p(s).description),$t(k,"href",p(s).link)},[()=>p(s).title.slice(0,2)]),w(n,i)}),w(e,t)}var Xl=P("<span> </span>"),Jl=P('<div><div class="space-y-4"><div class="flex items-center gap-3.5 border-b border-white/[0.03] pb-4"><div class="p-2.5 bg-slate-950/50 rounded-xl border border-white/[0.02]"><!></div> <div><h4 class="text-sm font-mono font-black text-slate-100 uppercase tracking-widest leading-none mb-1"> </h4> <span class="text-[9px] font-mono text-slate-500 uppercase font-black"> </span></div></div> <p class="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold"> </p></div> <div class="pt-4 border-t border-white/[0.02]"><span class="text-[9px] font-mono text-slate-500 uppercase font-black block mb-3">Core Stack:</span> <div class="flex flex-wrap gap-2"></div></div></div>'),ed=P(`<section id="skills-toolkit" class="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.03]"><div class="space-y-2 mb-16 text-left"><span class="text-sky-400 font-bold text-[10px] font-mono uppercase tracking-widest block">Toolchain Matrix</span> <h2 class="text-2xl sm:text-3.5xl font-black text-white tracking-tight">Development Technologies &amp; Capabilities</h2> <p class="text-xs sm:text-sm text-slate-400 max-w-xl font-semibold leading-relaxed">A clear breakdown of my core sectors, showcasing exactly what
            technologies I work with and how I apply them to real-world
            applications.</p></div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"></div></section>`);function td(e){var t=ed(),r=v(l(t),2);Ve(r,5,()=>ri,He,(n,s)=>{const a=Ir(()=>p(s).type==="frontend"?"hover:border-sky-500/25":p(s).type==="backend"?"hover:border-emerald-500/25":p(s).type==="devops"?"hover:border-purple-500/25":"hover:border-amber-500/25"),i=Ir(()=>p(s).type==="frontend"?"bg-[#14233c]/60 border-sky-500/10 text-sky-300 hover:border-sky-400/35":p(s).type==="backend"?"bg-[#0e2d20]/60 border-emerald-500/10 text-emerald-300 hover:border-emerald-400/35":p(s).type==="devops"?"bg-[#24143a]/60 border-purple-500/10 text-purple-300 hover:border-purple-400/35":"bg-[#2b2114]/60 border-amber-500/10 text-amber-300 hover:border-amber-400/35");var o=Jl(),d=l(o),c=l(d),b=l(c),h=l(b);{var u=N=>{Ln(N,{class:"w-5.5 h-5.5 text-sky-400"})},x=N=>{Ml(N,{class:"w-5.5 h-5.5 text-emerald-400"})},m=N=>{ml(N,{class:"w-5.5 h-5.5 text-purple-400"})},_=N=>{jn(N,{class:"w-5.5 h-5.5 text-amber-400"})};ve(h,N=>{p(s).type==="frontend"?N(u):p(s).type==="backend"?N(x,1):p(s).type==="devops"?N(m,2):N(_,-1)})}var g=v(b,2),y=l(g),S=l(y),C=v(y,2),L=l(C),k=v(c,2),E=l(k),T=v(d,2),B=v(l(T),2);Ve(B,5,()=>p(s).items,He,(N,V)=>{var re=Xl(),ie=l(re);ne(()=>{Me(re,1,`text-[10px] font-mono font-bold border px-2.5 py-1.5 rounded-lg transition-colors duration-200 ${p(i)??""}`),A(ie,p(V))}),w(N,re)}),ne(()=>{Me(o,1,`bg-slate-900/55 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 transition-all duration-300 hover:bg-slate-850/50 ${p(a)??""} text-left flex flex-col justify-between`),A(S,p(s).category),A(L,`${p(s).type??""} layer`),A(E,p(s).description)}),w(n,o)}),w(e,t)}var rd=P(`<section id="contact-gate" class="py-24 max-w-4xl mx-auto px-6"><div class="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-8 sm:p-10 relative z-10 text-left"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"><div class="space-y-5"><div class="flex justify-between items-center bg-slate-950 p-2.5 rounded border border-[#101625]"><span class="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest block">Gateway Telemetry</span> <span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span></div> <div class="space-y-2"><h3 class="text-xl font-bold text-white tracking-tight leading-snug">Begin an Integration</h3> <p class="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-semibold">Submit an inquiry to transmit a raw message envelope
                        directly to my inbound mail interface routing terminal.</p></div> <div class="space-y-3 pt-3 border-t border-white/[0.03] text-[11px] font-mono"><div class="flex items-center gap-2.5 text-slate-300 bg-slate-950/40 p-3 rounded-xl border border-white/[0.02]"><!> <div><span class="text-slate-500 block text-[8px] uppercase font-bold leading-tight">Location Server</span> <span class="text-white text-[11px] font-sans font-black"> </span></div></div> <div class="flex items-center gap-2.5 text-slate-300 bg-slate-950/40 p-3 rounded-xl border border-white/[0.02]"><!> <div><span class="text-slate-500 block text-[8px] uppercase font-bold leading-tight">Babil Orbit Time</span> <span class="text-white text-[11px] font-mono font-black"> </span></div></div></div></div> <div class="space-y-4 bg-slate-950/50 p-6 rounded-xl border border-slate-800/60 flex flex-col justify-center"><div class="text-[10px] tracking-wide text-slate-500 font-mono text-center">Direct Endpoint: <span class="block font-mono text-sky-400 bg-slate-950 px-3 py-3 rounded border border-slate-800 mt-2 select-all text-center font-bold text-xs"> </span></div> <div class="space-y-2 pt-2"><button class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs px-5 py-3 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer w-full uppercase tracking-wider"><!> <span>Transmit Payload</span></button> <button class="bg-slate-950 border border-white/10 text-sky-400 px-3 py-2.5 rounded-lg text-[10px] cursor-pointer hover:bg-slate-900 hover:text-sky-300 transition-all w-full font-bold uppercase tracking-widest font-mono"> </button></div></div></div></div></section>`);function nd(e,t){Lt(t,!0);let r=Be(t,"currentTime",3,""),n=K(!1);const s=()=>{navigator.clipboard.writeText(xe.email),M(n,!0),setTimeout(()=>M(n,!1),2e3)},a=()=>{window.location.href="mailto:ssdcv608@gmail.com"};var i=rd(),o=l(i),d=l(o),c=l(d),b=v(l(c),4),h=l(b),u=l(h);Tl(u,{class:"w-4 h-4 text-sky-400 shrink-0"});var x=v(u,2),m=v(l(x),2),_=l(m),g=v(h,2),y=l(g);Ja(y,{class:"w-4 h-4 text-sky-400 shrink-0"});var S=v(y,2),C=v(l(S),2),L=l(C),k=v(c,2),E=l(k),T=v(l(E)),B=l(T),N=v(E,2),V=l(N),re=l(V);Ss(re,{class:"w-4 h-4 text-slate-900"});var ie=v(V,2),$e=l(ie);ne(Pe=>{A(_,xe.location),A(L,Pe),A(B,xe.email),A($e,p(n)?"Endpoint Copied!":"Copy Endpoint Address")},[()=>r()?r().split(" ")[0]+" "+r().split(" ")[1]:"Babil Local"]),fe("click",V,a),fe("click",ie,s),w(e,i),jt()}On(["click"]);var sd=P('<span class="text-[9px] text-slate-600"> </span>'),ad=P('<button><span class="flex items-center gap-1.5"><!> <span> </span></span> <!></button>'),id=P('<div class="space-y-1"><div class="flex items-center gap-1 text-slate-400"><span class="text-sky-400 font-bold">&gt;</span> <span> </span></div> <div class="text-slate-300 bg-slate-950/60 p-1.5 rounded border border-slate-900/50 whitespace-pre-wrap text-[9px] leading-relaxed font-mono"> </div></div>'),od=P(`<div class="bg-[#03060f] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs text-left"><div class="bg-[#080d1a] px-4 py-3 border-b border-slate-800/80 flex justify-between items-center text-xs"><div class="flex items-center gap-2"><div class="w-3 h-3 bg-rose-500 rounded-full"></div> <div class="w-3 h-3 bg-amber-500 rounded-full"></div> <div class="w-3 h-3 bg-sky-500 rounded-full"></div> <span class="text-slate-400 ml-2">ssh guest@arthur.dev -p 3000</span></div> <div class="flex items-center gap-3 text-slate-500 font-mono"><div class="flex items-center gap-1"><!> <span>nixos-flake</span></div></div></div> <div class="grid grid-cols-1 sm:grid-cols-12 min-h-[340px]"><div class="sm:col-span-4 bg-[#050811] p-3 border-r border-slate-800/60 flex flex-col gap-3"><div class="flex justify-between items-center font-bold text-slate-400 uppercase tracking-wider text-[10px] pb-1 border-b border-slate-900"><span>Systems Inventory</span> <!></div> <div class="relative"><!> <input type="text" placeholder="Search cache logs..." class="w-full bg-[#03060d] border border-slate-800 rounded-md p-1.5 pl-6 text-[10px] text-white focus:outline-none focus:border-sky-400/50"/></div> <div class="space-y-1 overflow-y-auto max-h-48 pt-1"></div></div> <div class="sm:col-span-8 bg-slate-950 p-4 flex flex-col justify-between min-h-[340px]"><div class="space-y-2 flex-grow"><div class="flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest pb-1 border-b border-slate-900"><span> </span> <span class="text-sky-500"> </span></div> <pre class="text-[11px] text-slate-300 overflow-x-auto whitespace-pre-wrap max-h-48 scrollbar-thin select-text leading-relaxed font-mono"> </pre></div> <div class="space-y-2 border-t border-slate-900 pt-3"><span class="text-[10px] font-bold text-slate-500 tracking-wider">SHELL WORKBENCH METRICS</span> <div class="bg-[#050811] p-3 rounded-lg border border-slate-900 text-[10px] text-slate-400 space-y-2.5 max-h-32 overflow-y-auto font-mono scrollbar-thin"></div> <form class="flex gap-2"><div class="text-sky-400 font-bold self-center">&gt;</div> <input type="text" placeholder="Type 'help' for available calls..." class="flex-1 bg-[#050811] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-sky-400 font-mono"/></form></div></div></div></div>`);function ld(e,t){Lt(t,!0);let r=Be(t,"repoFiles",19,()=>[]),n=Be(t,"skillsData",19,()=>[]),s=Be(t,"projectsData",19,()=>[]),a=Be(t,"selectedFile",15),i=K(""),o=K("");const d=`OS: NixOS 26.05 (Yarara) x86_64
Host: GF63 Thin 11SC (REV:1.0)
Kernel: Linux 6.18.22
Packages: 2369 (nix-system), 3526 (nix-user)
Shell: zsh 5.9
Display (CMN1521): 1920x1080 in 15", 144 Hz
WM: niri (Wayland)
Theme: Base16Kvantum [Qt], adw-gtk3 [GTK2/3]
Icons: Gruvbox-Plus-Dark [Qt]
Font: Source Sans 3 (13pt) [Qt]
Cursor: Bibata-Modern-Ice (24px)
Terminal: alacritty 0.17.0
Terminal Font: JetBrainsMono Nerd Font (13pt)
CPU: 11th Gen Intel(R) Core(TM) i7-11800H
GPU 1: NVIDIA GeForce GTX 1650 Mobile
GPU 2: Intel UHD Graphics @ 1.45 GHz
Memory: 2.95 GiB / 15.33 GiB (19%)`;let c=K(ut([]));$s(()=>{M(c,[{cmd:"neofetch",output:d}],!0)});let b=xa(()=>r().filter(H=>H.name.toLowerCase().includes(p(i).toLowerCase())));const h=H=>{if(H.preventDefault(),!p(o).trim())return;const O=p(o).trim().toLowerCase();let G="";if(O==="help")G="Available commands: neofetch, whoami, skills, projects, sysinfo, git log, cat <filename>, clear";else if(O==="neofetch")G=d;else if(O==="whoami")G="Arthur (@ArthurExtra) - Software Developer from Hillah, Babil, Iraq. I build custom bot systems, full-stack applications, mobile apps, and robust server automation.";else if(O==="skills")G=n().map(le=>`[${le.category}] ${le.items.join(", ")}`).join(`
`);else if(O==="projects")G=s().map(le=>`• ${le.title} - ${le.description}`).join(`
`);else if(O==="sysinfo")G=d;else if(O==="git log"||O==="git"||O==="git status")G=`Commit arthur231 [branch: main] - 3 days ago
Author: Arthur <@ArthurExtra>
    fix: rebuilt secure static front-end assets from updated local codebases

Commit a9f123c8 [branch: main] - 3 days ago
Author: Arthur <@ArthurExtra>
    feat: transition portfolio build process to optimal serverless target for exitinger.github.io

Commit b8c302fa [branch: main] - 1 week ago
Author: Arthur <@ArthurExtra>
    fix: update responsive margins and mobile layouts in sandbox terminal workbench view

Commit c10dcf89 [branch: main] - 1 week ago
Author: Arthur <@ArthurExtra>
    refactor: restructure project inventory and optimize dynamic api configurations

Commit f5e1281e [branch: main] - 2 weeks ago
Author: Arthur <@ArthurExtra>
    style: redesign profile layout into a beautiful high-rigidity dark theme with purpose animations`;else if(O.startsWith("cat ")){const le=O.substring(4).trim(),ce=r().find(Oe=>Oe.name.toLowerCase()===le);ce&&ce.content?(G=ce.content,a(ce)):G=`Error: Live file "${le}" not cached in sandbox environment. Try: "cat about_me.md"`}else if(O==="clear"){M(c,[],!0),M(o,"");return}else G=`zsh: command not found: ${O}. Type "help" to list available system calls.`;M(c,[...p(c),{cmd:p(o),output:G}],!0),M(o,"")};var u=od(),x=l(u),m=v(l(x),2),_=l(m),g=l(_);Sl(g,{class:"w-3.5 h-3.5 text-sky-500"});var y=v(x,2),S=l(y),C=l(S),L=v(l(C),2);jn(L,{class:"w-3.5 h-3.5"});var k=v(C,2),E=l(k);Cl(E,{class:"absolute left-2 top-2.5 w-3 h-3 text-slate-500"});var T=v(E,2),B=v(k,2);Ve(B,21,()=>p(b),He,(H,O)=>{var G=ad(),le=l(G),ce=l(le);{var Oe=we=>{$l(we,{class:"w-3.5 h-3.5 text-amber-500"})},bt=we=>{kl(we,{class:"w-3.5 h-3.5 text-indigo-400"})};ve(ce,we=>{p(O).type==="folder"?we(Oe):we(bt,-1)})}var xt=v(ce,2),Et=l(xt),Xt=v(le,2);{var Rt=we=>{var zt=sd(),Ge=l(zt);ne(()=>A(Ge,p(O).size)),w(we,zt)};ve(Xt,we=>{p(O).size&&we(Rt)})}ne(()=>{Me(G,1,`w-full flex items-center justify-between text-left p-1.5 rounded-lg text-[11px] transition-colors cursor-pointer ${a().name===p(O).name?"bg-sky-500/10 text-sky-400 border border-sky-500/20":"hover:bg-slate-900 text-slate-400 hover:text-white"}`),A(Et,p(O).name)}),fe("click",G,()=>{p(O).content&&a(p(O))}),w(H,G)});var N=v(S,2),V=l(N),re=l(V),ie=l(re),$e=l(ie),Pe=v(ie,2),nt=l(Pe),st=v(re,2),U=l(st),$=v(V,2),j=v(l($),2);Ve(j,21,()=>p(c),He,(H,O)=>{var G=id(),le=l(G),ce=v(l(le),2),Oe=l(ce),bt=v(le,2),xt=l(bt);ne(()=>{A(Oe,p(O).cmd),A(xt,p(O).output)}),w(H,G)});var ae=v(j,2),oe=v(l(ae),2);ne(()=>{A($e,`ACTIVE BUFFER: ${a().name??""}`),A(nt,a().language||"text"),A(U,`
          ${(a().content?a().content:`Inspecting filesystem node: ${a().lastCommitMessage}`)??""}
        `)}),Sn(T,()=>p(i),H=>M(i,H)),Wa("submit",ae,h),Sn(oe,()=>p(o),H=>M(o,H)),w(e,u),jt()}On(["click"]);var dd=P('<button><div class="font-bold text-xs sm:text-sm"> </div> <div class="text-[10px] text-slate-500 font-sans font-medium mt-0.5"> </div></button>'),cd=P('<button class="absolute w-3.5 h-3.5 bg-rose-500 rounded-full hover:bg-rose-450 animate-pulse border border-rose-300 cursor-pointer" aria-label="Target point"></button>'),fd=P(`<div class="absolute inset-x-0 bottom-4 px-6"><button class="w-full bg-sky-450 hover:bg-sky-400 text-slate-950 font-sans font-black text-xs py-3 rounded-xl shadow-lg transition-transform hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"><!> <span>Confirm Savings Deposit (After
                                            Layout)</span></button></div>`),ud=P('<div class="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center text-center p-4"><span class="text-3xl text-sky-450 font-mono font-black animate-bounce"> </span> <span class="text-xs text-slate-300 font-medium mt-2 max-w-md leading-relaxed font-semibold"> </span></div>'),vd=P(`<div class="space-y-6"><div class="space-y-2"><h3 class="text-xl font-bold font-mono text-white flex items-center gap-2"><!> <span>Fitts's Law Simulator: Touch Target Proximity Arena</span></h3> <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl font-semibold">Equation: <span class="font-mono text-sky-300">Movement Time = a + b * log2(Distance / Size + 1)</span>. Larger triggers located in natural, comfortable
                        thumbs-reach zones minimize target acquisition failure.
                        Try clicking both configurations to witness speed logs.</p></div> <div class="flex flex-wrap gap-2 font-mono"><button>Cluttered Tiny Corner (Before)</button> <button>Natural Sweep Area (After)</button></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><div class="lg:col-span-8 bg-slate-950 border border-slate-850 rounded-xl p-4 min-h-[300px] relative overflow-hidden flex flex-col justify-between"><span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest block border-b border-slate-900 pb-1.5 mb-2"> </span> <div class="h-48 relative w-full border border-slate-900 bg-slate-900/10 rounded-lg flex items-center justify-center"><!> <!></div> <div class="flex justify-between items-center text-xs font-mono text-slate-400 pt-2 border-t border-slate-900 mt-2"><span>Registered attempts: <strong class="text-sky-450"> </strong></span> <button class="text-slate-300 hover:text-white underline cursor-pointer text-[11px]">Reset Simulator</button></div></div> <div class="lg:col-span-4 bg-slate-900/50 border border-slate-800 rounded-xl p-5 space-y-4"><div class="space-y-1"><span class="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest">DIAGNOSTIC TELEMETRY</span> <h4 class="font-extrabold text-white text-base">Anatomical Sweeping Log</h4></div> <div class="space-y-3 font-mono text-xs"><div class="flex justify-between items-center pb-2 border-b border-slate-800"><span class="text-slate-500">Avg completion speed:</span> <span> </span></div> <div class="flex justify-between items-center pb-2 border-b border-slate-800"><span class="text-slate-500">Cognitive fatigue:</span> <span> </span></div></div> <p class="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850 font-semibold"> </p></div></div></div>`),pd=P('<div class="h-44 flex flex-col items-center justify-center text-center"><button class="bg-slate-900 hover:bg-slate-850 border border-slate-800 px-5 py-2.5 rounded-xl text-sky-400 font-mono text-xs font-bold cursor-pointer transition-transform hover:scale-105">Launch Latency Choice Evaluation</button></div>'),hd=P('<button class="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-850 text-[10px] font-mono rounded-md text-slate-350 cursor-pointer"> </button>'),bd=P('<div class="grid grid-cols-2 sm:grid-cols-4 gap-2"></div>'),xd=P('<button class="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/50 text-left rounded-xl cursor-pointer"><span class="block text-xs font-bold text-white"> </span> <span class="block text-[10px] text-slate-400 mt-1 leading-snug font-semibold"> </span></button>'),gd=P('<div class="grid grid-cols-1 sm:grid-cols-3 gap-3"></div>'),md=P(`<div class="p-4 bg-slate-900/10 rounded-lg min-h-[176px] flex flex-col justify-center"><p class="text-[11px] font-mono text-amber-400 font-bold mb-4 text-center animate-pulse">CHOOSE ONE TARGET TO LOG RETRIEVAL
                                        TIMES:</p> <!></div>`),_d=P('<div class="h-44 flex flex-col items-center justify-center text-center p-4"><span class="text-3xl text-sky-400 font-mono font-black"> </span> <span class="text-xs text-slate-300 mt-2 font-semibold">Selection registered: <span class="text-sky-400"> </span></span> <button class="mt-3 text-xs text-sky-400 underline hover:text-sky-355 cursor-pointer font-bold font-mono">Perform another trial</button></div>'),yd=P(`<div class="space-y-6"><div class="space-y-2"><h3 class="text-xl font-bold font-mono text-white flex items-center gap-2"><!> <span>Hick's Law Simulator: Choice Simplification Arena</span></h3> <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl font-semibold">Every competing menu link added increases selection
                        latency exponentially. Grouping features into discrete
                        paths reduces mental friction. Try choosing options in
                        both layouts.</p></div> <div class="flex flex-wrap gap-2 font-mono"><button>Cluttered 12-Choice Grid (Before)</button> <button>3-Category Pillars (After)</button></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full lg:col-span-8"><div class="col-span-1 lg:col-span-12 bg-slate-950 border border-slate-850 rounded-xl p-4 min-h-[300px] flex flex-col justify-between w-full"><span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest block border-b border-slate-900 pb-1.5 mb-2"> </span> <!> <!> <!> <span class="text-[10px] text-slate-500 font-mono text-center block pt-2 border-t border-slate-905 mt-2">Formula: Choice Latency (T) = b * log2(n + 1)
                                where n is total options.</span></div></div> <div class="lg:col-span-4 bg-slate-900/50 border border-slate-850 border-slate-800 rounded-xl p-5 space-y-4"><div class="space-y-1"><span class="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest">COGNITIVE REDUCTION LOG</span> <h4 class="font-extrabold text-white text-base">Select Complexity Index</h4></div> <div class="space-y-3 font-mono text-xs"><div class="flex justify-between items-center pb-2 border-b border-slate-800"><span class="text-slate-500">Unfiltered Choices:</span> <span class="text-rose-445 font-bold text-rose-400">3.80s</span></div> <div class="flex justify-between items-center pb-2 border-b border-slate-800"><span class="text-slate-500">Pillar Structures:</span> <span class="text-sky-400 font-bold">0.80s</span></div></div> <p class="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850 font-semibold font-sans"> </p></div></div></div>`),wd=P('<form class="space-y-3 text-left"><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"><div><label class="block text-slate-400 mb-1 font-mono">Full Name * <input type="text" placeholder="Arthur Pendragon" class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left mt-1 block" required=""/></label></div> <div><label class="block text-slate-400 mb-1 font-mono">Target Email * <input type="email" placeholder="arthur@example.com" class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left mt-1 block" required=""/></label></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"><div><label class="block text-slate-400 mb-1 font-mono">Enterprise Node * <input type="text" placeholder="Aviation Hub Setup" class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left mt-1 block" required=""/></label></div> <div><label class="block text-slate-400 mb-1 font-mono">Deployment Budget (USD) * <input type="number" placeholder="100000" class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left mt-1 block" required=""/></label></div></div> <div><label class="block text-slate-400 text-xs mb-1 font-mono">Security Requirements * <textarea rows="2" placeholder="Explain systems configurations..." class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left mt-1 block" required=""></textarea></label></div> <div class="flex justify-end pt-2"><button type="submit" class="bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs px-5 py-2 rounded-lg cursor-pointer">Submit Monolithic Sheet</button></div></form>'),kd=P('<div class="space-y-3"><span class="text-[10px] uppercase font-mono text-slate-450 tracking-wider block font-bold">Phase 1: Human Persona Setup</span> <div><label class="block text-slate-400 text-xs font-mono mb-1">Your Full Name: <input type="text" placeholder="Arthur Pendragon" class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-400 mt-1 block"/></label></div></div>'),$d=P('<div class="space-y-3"><span class="text-[10px] uppercase font-mono text-slate-450 tracking-wider block font-bold">Phase 2: Contact Gateway</span> <div><label class="block text-slate-400 text-xs font-mono mb-1">Secure Contact Email: <input type="email" placeholder="arthur@example.com" class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-400 mt-1 block"/></label></div></div>'),Sd=P('<button type="button"> </button>'),Ed=P(`<div class="space-y-3"><span class="text-[10px] uppercase font-mono text-slate-450 tracking-wider block font-bold">Phase 3: Service Track
                                                Selection</span> <div class="grid grid-cols-2 gap-2 text-xs"></div></div>`),Td=P(`<div class="space-y-3 text-center"><span class="text-[10px] uppercase font-mono text-sky-400 tracking-wider block">Phase 4: Setup Verified</span> <p class="text-xs text-slate-200">Onboarding credentials completed
                                                cleanly without cognitive
                                                fatigue!</p> <div class="inline-block p-2 bg-slate-950 rounded border border-slate-800 text-[10px] font-mono text-slate-400 text-center font-bold"> </div></div>`),Ad=P('<button class="text-slate-500 hover:text-white font-mono text-xs cursor-pointer flex items-center gap-1 font-bold"><!> <span>Back</span></button>'),Cd=P("<div></div>"),Md=P('<button class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg cursor-pointer transition-all flex items-center gap-1 font-mono uppercase"><span>Next</span> <!></button>'),Nd=P('<button class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-xl cursor-pointer transition-all shadow-lg uppercase tracking-wider disabled:opacity-50"> </button>'),Id=P('<div class="space-y-6 w-full"><div class="space-y-2"><div class="flex justify-between text-xs font-mono"><span class="text-sky-450 font-bold text-sky-400"> </span> <span class="text-slate-500"> </span></div> <div class="h-2 w-full bg-slate-900 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-300"></div></div></div> <div class="p-5 bg-slate-900/40 rounded-xl border border-slate-850 min-h-[140px] flex flex-col justify-between"><!> <!> <!> <!> <div class="flex justify-between items-center pt-4 border-t border-slate-900 mt-4"><!> <!></div></div></div>'),Pd=P(`<div class="space-y-6"><div class="space-y-2"><h3 class="text-xl font-bold font-mono text-white flex items-center gap-2"><!> <span>Zeigarnik Effect Simulator: Progress-Aware Wizard
                            Onboarding</span></h3> <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl font-semibold">Long, tedious monolithic layout forms trigger instant
                        fatigue. Chunking long processes into progress-tracked
                        wizard steps leverages human completion bias to increase
                        onboarding.</p></div> <div class="flex flex-wrap gap-2 font-mono"><button>Monolithic Form (Before)</button> <button>4-Step Visual Wizard (After)</button></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><div class="lg:col-span-8 bg-slate-950 border border-slate-850 rounded-xl p-6 min-h-[300px] flex flex-col justify-between"><span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest block border-b border-slate-900 pb-1.5 mb-4"> </span> <!></div> <div class="lg:col-span-4 bg-slate-900/50 border border-slate-800 rounded-xl p-5 space-y-4 w-full"><div class="space-y-1"><span class="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest">ONBOARDING RETRO</span> <h4 class="font-extrabold text-white text-base">Progress Drivers</h4></div> <div class="space-y-3 font-mono text-xs font-semibold"><div class="flex justify-between items-center pb-2 border-b border-slate-800"><span class="text-slate-500">Visitor Identity:</span> <span class="text-sky-400 font-bold font-mono">Local Client</span></div> <div class="flex justify-between items-center pb-2 border-b border-slate-800"><span class="text-slate-500">Resolved Node:</span> <span class="text-sky-400 font-bold font-mono text-right max-w-[150px] truncate">Hillah, IQ</span></div></div> <p class="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850 font-semibold font-sans"> </p></div></div></div>`),Od=P('<div id="workbench-container" class="space-y-10 text-left"><div class="flex border-b border-slate-800 overflow-x-auto gap-2"></div> <div class="bg-[#050811] border border-slate-800/80 rounded-2xl overflow-hidden p-6 sm:p-10"><!> <!> <!></div></div>');function Dd(e,t){Lt(t,!0);let r=K("fitts"),n=K("before"),s=K(0),a=K(!1),i=K(null),o=K(null),d=K(ut({x:50,y:50})),c=K("before"),b=K("idle"),h=K(null),u=K(null),x=K(null),m=K("after"),_=K(1),g=K(ut({name:"",email:"",choice:""})),y=K(!1);$s(async()=>{p(r)==="fitts"&&M(i,Date.now(),!0)}),kn(()=>{p(r)==="fitts"&&M(i,Date.now(),!0)});const S=()=>{p(a)||(p(n)==="before"?p(s)<4?(M(s,p(s)+1),M(d,{x:Math.floor(Math.random()*80)+10,y:Math.floor(Math.random()*80)+10},!0)):(M(s,5),M(a,!0),p(i)&&M(o,Date.now()-p(i))):(M(s,1),M(a,!0),p(i)&&M(o,Date.now()-p(i))))},C=U=>{M(n,U,!0),M(s,0),M(a,!1),M(i,Date.now(),!0),M(o,null),M(d,{x:50,y:50},!0)},L=U=>{M(c,U,!0),M(b,"counting"),M(h,null),M(u,Date.now(),!0),M(x,null)},k=U=>{p(b)==="counting"&&(M(h,U,!0),M(b,"success"),p(u)&&M(x,Date.now()-p(u)))},E=()=>{p(_)<4&&M(_,p(_)+1)},T=()=>{if(p(y))return;M(y,!0);const U=encodeURIComponent("Portfolio Inquiry Gate - Onboarding"),$=encodeURIComponent(`Name: ${p(g).name||"N/A"}
Client Email: ${p(g).email||"N/A"}
Track Selected: ${p(g).choice||"N/A"}`);window.location.href=`mailto:ssdcv608@gmail.com?subject=${U}&body=${$}`,M(_,1),M(g,{name:"",email:"",choice:""},!0),M(y,!1)};var B=Od(),N=l(B);Ve(N,20,()=>[{id:"fitts",label:"Fitts's Proximity",desc:"Target Sizes & Distances"},{id:"hick",label:"Hick's Choice Reduction",desc:"Clutter-Elimination Trials"},{id:"zeigarnik",label:"Zeigarnik Milestone",desc:"Progress-Aware Wizard"}],He,(U,$)=>{var j=dd(),ae=l(j),oe=l(ae),H=v(ae,2),O=l(H);ne(()=>{Me(j,1,`py-3 px-4 font-mono text-left transition border-b-2 shrink-0 cursor-pointer ${p(r)===$.id?"border-sky-400 text-sky-400 bg-slate-900/60":"border-transparent text-slate-400 hover:text-white"}`),A(oe,$.label),A(O,$.desc)}),fe("click",j,()=>M(r,$.id,!0)),w(U,j)});var V=v(N,2),re=l(V);{var ie=U=>{var $=vd(),j=l($),ae=l(j),oe=l(ae);Al(oe,{class:"w-5 h-5 text-sky-400"});var H=v(j,2),O=l(H),G=v(O,2),le=v(H,2),ce=l(le),Oe=l(ce),bt=l(Oe),xt=v(Oe,2),Et=l(xt);{var Xt=Se=>{var De=cd();ne(()=>ds(De,`left: ${p(d).x??""}%; top: ${p(d).y??""}%; transform: translate(-50%, -50%);`)),fe("click",De,S),w(Se,De)},Rt=Se=>{var De=fd(),mt=l(De),Rr=l(mt);gl(Rr,{class:"w-5 h-5 text-slate-950"}),fe("click",mt,S),w(Se,De)};ve(Et,Se=>{p(n)==="before"?Se(Xt):Se(Rt,-1)})}var we=v(Et,2);{var zt=Se=>{var De=ud(),mt=l(De),Rr=l(mt),Rn=v(mt,2),ln=l(Rn);ne(zn=>{A(Rr,zn),A(ln,p(n)==="before"?"Friction detected! Requires highly artificial movement to strike isolated targets.":"Instant completion achieved! Native sweep region maximizes kinetic optimization.")},[()=>p(o)?`${(p(o)/1e3).toFixed(2)}s`:"0.42s"]),w(Se,De)};ve(we,Se=>{p(a)&&Se(zt)})}var Ge=v(xt,2),gt=l(Ge),Ft=v(l(gt)),xr=l(Ft),ke=v(gt,2),We=v(ce,2),at=v(l(We),2),Bt=l(at),Tt=v(l(Bt),2),Ue=l(Tt),it=v(Bt,2),ot=v(l(it),2),Ke=l(ot),qe=v(at,2),Ht=l(qe);ne(()=>{Me(O,1,`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 ${p(n)==="before"?"bg-rose-600 text-white":"bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"}`),Me(G,1,`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 ${p(n)==="after"?"bg-sky-500 text-slate-950 font-extrabold":"bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"}`),A(bt,p(n)==="before"?"STAGE VIEW: MINISCULE TARGET IN THE OFF-SET LIMITS":"STAGE VIEW: FLUID THUMB REACH COGNITIVE ZONE"),A(xr,p(s)),Me(Tt,1,ls(p(n)==="before"?"text-rose-400 font-bold":"text-sky-400 font-bold")),A(Ue,p(n)==="before"?"8.50s":"1.20s"),Me(ot,1,ls(p(n)==="before"?"text-rose-400 font-bold":"text-sky-400 font-bold")),A(Ke,p(n)==="before"?"Strenuous Drag":"Zero Kinetic Drag"),A(Ht,p(n)==="before"?"Sub-44px isolated targets require stressful coordination, forcing user drop-offs especially on mobile panels.":"Wide reach triggers structured closely inside physiological sweeps trigger immediate conversions up to 42%.")}),fe("click",O,()=>C("before")),fe("click",G,()=>C("after")),fe("click",ke,()=>C(p(n))),w(U,$)};ve(re,U=>{p(r)==="fitts"&&U(ie)})}var $e=v(re,2);{var Pe=U=>{var $=yd(),j=l($),ae=l(j),oe=l(ae);ei(oe,{class:"w-5 h-5 text-sky-400"});var H=v(j,2),O=l(H),G=v(O,2),le=v(H,2),ce=l(le),Oe=l(ce),bt=l(Oe),xt=l(bt),Et=v(bt,2);{var Xt=ke=>{var We=pd(),at=l(We);fe("click",at,()=>L(p(c))),w(ke,We)};ve(Et,ke=>{p(b)==="idle"&&ke(Xt)})}var Rt=v(Et,2);{var we=ke=>{var We=md(),at=v(l(We),2);{var Bt=Ue=>{var it=bd();Ve(it,20,()=>["Ceramic Cup v1","Copper Jug B90","Nomad Wool Carpet","Glayed Pottery Cl","Arabic Dallah S1","Vase Terracotta","Woven basket craft","Silver craft plate","Traditional incense","Palm leaves box","Clay vessel historical","Handicraft pack"],He,(ot,Ke)=>{var qe=hd(),Ht=l(qe);ne(()=>A(Ht,Ke)),fe("click",qe,()=>k(Ke)),w(ot,qe)}),w(Ue,it)},Tt=Ue=>{var it=gd();Ve(it,20,()=>[{label:"Ceramics & Clays",desc:"Clays, stones & historical pots"},{label:"Hand-Hammered Coppers",desc:"Dallahs & silver craft works"},{label:"Traditional Nomad Sadu",desc:"Vibrant woven carpets & mats"}],He,(ot,Ke)=>{var qe=xd(),Ht=l(qe),Se=l(Ht),De=v(Ht,2),mt=l(De);ne(()=>{A(Se,Ke.label),A(mt,Ke.desc)}),fe("click",qe,()=>k(Ke.label)),w(ot,qe)}),w(Ue,it)};ve(at,Ue=>{p(c)==="before"?Ue(Bt):Ue(Tt,-1)})}w(ke,We)};ve(Rt,ke=>{p(b)==="counting"&&ke(we)})}var zt=v(Rt,2);{var Ge=ke=>{var We=_d(),at=l(We),Bt=l(at),Tt=v(at,2),Ue=v(l(Tt)),it=l(Ue),ot=v(Tt,2);ne(Ke=>{A(Bt,Ke),A(it,`"${p(h)??""}"`)},[()=>p(x)?`${(p(x)/1e3).toFixed(2)}s`:"0.62s"]),fe("click",ot,()=>L(p(c))),w(ke,We)};ve(zt,ke=>{p(b)==="success"&&ke(Ge)})}var gt=v(ce,2),Ft=v(l(gt),4),xr=l(Ft);ne(()=>{Me(O,1,`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 ${p(c)==="before"?"bg-rose-600 text-white":"bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300"}`),Me(G,1,`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 ${p(c)==="after"?"bg-sky-500 text-slate-950 font-extrabold":"bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300"}`),A(xt,p(c)==="before"?"STAGE VIEW: OVERWHELMING OPTIONS MATRIX":"STAGE VIEW: ARCHITECTURAL FILTERED PILLARS"),A(xr,p(c)==="before"?"Overwhelming users with infinite parallel options stalls active conversions. They spend visual energy finding coordinates.":"Chunking structures into simple parent segments speeds user paths, converting complex matrices into effortless decisions.")}),fe("click",O,()=>L("before")),fe("click",G,()=>L("after")),w(U,$)};ve($e,U=>{p(r)==="hick"&&U(Pe)})}var nt=v($e,2);{var st=U=>{var $=Pd(),j=l($),ae=l(j),oe=l(ae);vl(oe,{class:"w-5 h-5 text-sky-400"});var H=v(j,2),O=l(H),G=v(O,2),le=v(H,2),ce=l(le),Oe=l(ce),bt=l(Oe),xt=v(Oe,2);{var Et=Ge=>{var gt=wd();Wa("submit",gt,Ft=>{Ft.preventDefault(),alert("High-friction dispatch complete.")}),w(Ge,gt)},Xt=Ge=>{var gt=Id(),Ft=l(gt),xr=l(Ft),ke=l(xr),We=l(ke),at=v(ke,2),Bt=l(at),Tt=v(xr,2),Ue=l(Tt),it=v(Ft,2),ot=l(it);{var Ke=Y=>{var se=kd(),Le=v(l(se),2),Jt=l(Le),er=v(l(Jt));Sn(er,()=>p(g).name,Vt=>p(g).name=Vt),w(Y,se)};ve(ot,Y=>{p(_)===1&&Y(Ke)})}var qe=v(ot,2);{var Ht=Y=>{var se=$d(),Le=v(l(se),2),Jt=l(Le),er=v(l(Jt));Sn(er,()=>p(g).email,Vt=>p(g).email=Vt),w(Y,se)};ve(qe,Y=>{p(_)===2&&Y(Ht)})}var Se=v(qe,2);{var De=Y=>{var se=Ed(),Le=v(l(se),2);Ve(Le,20,()=>["Full-Stack Architect Hire","Behavioral UX Research","Custom Software Engineering","Secure Server Integration"],He,(Jt,er)=>{var Vt=Sd(),li=l(Vt);ne(()=>{Me(Vt,1,`p-2.5 border rounded-lg text-left text-[11px] font-sans cursor-pointer ${p(g).choice===er?"bg-sky-500/15 border-sky-400/80 text-sky-300":"bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800"}`),A(li,er)}),fe("click",Vt,()=>p(g).choice=er),w(Jt,Vt)}),w(Y,se)};ve(Se,Y=>{p(_)===3&&Y(De)})}var mt=v(Se,2);{var Rr=Y=>{var se=Td(),Le=v(l(se),4),Jt=l(Le);ne(()=>A(Jt,`${(p(g).name||"----")??""} • ${(p(g).email||"----")??""} • ${(p(g).choice||"----")??""}`)),w(Y,se)};ve(mt,Y=>{p(_)===4&&Y(Rr)})}var Rn=v(mt,2),ln=l(Rn);{var zn=Y=>{var se=Ad(),Le=l(se);bl(Le,{class:"w-4 h-4"}),fe("click",se,()=>M(_,p(_)-1)),w(Y,se)},si=Y=>{var se=Cd();w(Y,se)};ve(ln,Y=>{p(_)>1?Y(zn):Y(si,-1)})}var ai=v(ln,2);{var ii=Y=>{var se=Md(),Le=v(l(se),2);xl(Le,{class:"w-4 h-4"}),fe("click",se,E),w(Y,se)},oi=Y=>{var se=Nd(),Le=l(se);ne(()=>{se.disabled=p(y),A(Le,p(y)?"Transmitting...":"Submit Onboarding")}),fe("click",se,T),w(Y,se)};ve(ai,Y=>{p(_)<4?Y(ii):Y(oi,-1)})}ne(()=>{A(We,p(_)===4?"100% Resolved":`${(p(_)-1)*33}% Completed`),A(Bt,`Step: ${p(_)??""} of 4`),ds(Ue,`width: ${(p(_)-1)*33+1}%;`)}),w(Ge,gt)};ve(xt,Ge=>{p(m)==="before"?Ge(Et):Ge(Xt,-1)})}var Rt=v(ce,2),we=v(l(Rt),4),zt=l(we);ne(()=>{Me(O,1,`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 ${p(m)==="before"?"bg-rose-600 text-white":"bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300"}`),Me(G,1,`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 ${p(m)==="after"?"bg-sky-500 text-slate-950 font-extrabold":"bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300"}`),A(bt,p(m)==="before"?"STAGE VIEW: DAUNTING MONOLITHIC INVENTORY FORM":"STAGE VIEW: STEP REVEAL COGNITIVE PROGRESS WIZARD"),A(zt,p(m)==="before"?"Presenting massive inputs simultaneously leads to visual panic. Users immediately abandon forms rather than execute them.":"Revealing progress lines triggers the natural human compulsion to satisfy incomplete milestones, multiplying form completion.")}),fe("click",O,()=>{M(m,"before"),M(_,1)}),fe("click",G,()=>{M(m,"after"),M(_,1)}),w(U,$)};ve(nt,U=>{p(r)==="zeigarnik"&&U(st)})}w(e,B),jt()}On(["click"]);var Ld=P(`<div id="full-portfolio-body" class="min-h-screen bg-[#1b1c22] text-slate-100 font-sans antialiased selection:bg-slate-700 selection:text-white overflow-x-hidden max-w-full relative"><div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div> <div class="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-sky-550/5 rounded-full blur-3xl pointer-events-none"></div> <!> <main class="relative z-10 w-full max-w-full overflow-x-hidden"><!> <!> <!> <!> <section id="interactive-workbench" class="py-24 border-b border-white/[0.03] max-w-6xl mx-auto px-6 overflow-x-hidden"><div class="space-y-2 mb-10 text-left"><span class="text-sky-400 font-bold text-[10px] font-mono uppercase tracking-widest block">Operational Telemetry</span> <h2 class="text-2xl sm:text-3.5xl font-black text-white tracking-tight">Interactive Systems Shell Sandbox</h2> <p class="text-xs sm:text-sm text-slate-400 max-w-xl font-semibold leading-relaxed">Review cache logs, inspect direct Go config snippets, and
                    execute custom shell parameters inside an active Unix
                    terminal mockup environment.</p></div> <!></section> <section id="ux-playground" class="border-b border-white/[0.03] py-24 bg-dot overflow-x-hidden"><div class="max-w-6xl mx-auto px-6"><div class="space-y-1.5 mb-14 text-left"><span class="text-sky-400 font-bold text-[10px] font-mono uppercase tracking-widest block">Usability Models &amp; Schedulers</span> <h2 class="text-2xl sm:text-3.5xl font-black text-white tracking-tight">System Cognitive &amp; Interactive Simulator</h2> <p class="text-xs sm:text-sm text-slate-400 max-w-xl font-semibold leading-relaxed">Interact with cognitive design laws that prove why clean
                        structures, responsive feedback loops, and reduced
                        choice grids convert users flawlessly.</p></div> <!></div></section> <!> <!></main> <footer class="bg-[#12131a] text-slate-500 text-[10px] sm:text-xs py-12 border-t border-white/[0.02] text-center space-y-3.5 font-mono overflow-x-hidden"><div class="flex justify-center gap-5 text-slate-400 border-b border-white/[0.02] pb-5 max-w-xs mx-auto text-base"><a target="_blank" rel="noopener noreferrer" class="hover:text-sky-400 transition-colors"><svg class="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a> <a target="_blank" rel="noopener noreferrer" class="hover:text-sky-400 transition-colors"><svg class="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a> <a target="_blank" rel="noopener noreferrer" class="hover:text-sky-450 transition-colors"><!></a></div> <p> </p> <p class="text-[10px] text-slate-650 max-w-2xl mx-auto px-4 font-semibold leading-relaxed">Fast, high-contrast, secure developer presentation hub running
            programmatically under the Babil/Hilla layer. Built cleanly with
            Svelte 5, TypeScript, and Tailwind CSS.</p></footer></div>`);function jd(e,t){Lt(t,!0);let r=K(ut(ni)),n=K(ut(Us[2])),s=K(""),a="idle";$s(()=>{const ie=$=>{const j=$.target;j&&(j.tagName==="INPUT"||j.tagName==="TEXTAREA")||$.preventDefault()},$e=$=>{if($.key==="F12"){$.preventDefault();return}const j=$.ctrlKey&&$.shiftKey&&$.key==="I"||$.metaKey&&$.altKey&&$.key==="I",ae=$.ctrlKey&&$.shiftKey&&$.key==="J"||$.metaKey&&$.altKey&&$.key==="J",oe=$.ctrlKey&&$.shiftKey&&$.key==="C"||$.metaKey&&$.altKey&&$.key==="C",H=$.ctrlKey&&$.key==="u"||$.metaKey&&$.key==="u",O=$.ctrlKey&&$.key==="s"||$.metaKey&&$.key==="s";(j||ae||oe||H||O)&&$.preventDefault()},Pe=$=>{const j=$.target;j&&(j.tagName==="INPUT"||j.tagName==="TEXTAREA"||j.isContentEditable)||$.preventDefault()};window.addEventListener("contextmenu",ie),window.addEventListener("keydown",$e),window.addEventListener("selectstart",Pe);const nt=()=>{const $=new Date,j=$.getTime()+$.getTimezoneOffset()*6e4,ae=new Date(j+36e5*3);let oe=ae.getHours();const H=oe>=12?"PM":"AM";oe=oe%12;const G=String(oe===0?12:oe).padStart(2,"0"),le=String(ae.getMinutes()).padStart(2,"0"),ce=String(ae.getSeconds()).padStart(2,"0");M(s,`${G}:${le}:${ce} ${H} (Babil Core)`)};nt();const st=setInterval(nt,1e3);return(async()=>{try{let $=await fetch("/api/github/repos");if(!$.ok)return;const ae=(await $.json()).filter(oe=>!oe.fork&&oe.name!=="Exitinger");if(ae.length>0){const oe=ae.map(H=>{const O=H.language||"TypeScript",G=H.description||(H.name==="Dotfiles"?"Declarative UNIX configuration setups and customized command-line environment styles.":"Active utility codebase optimized for high throughput execution and seamless protocol translations.");return{title:H.name,description:G,link:H.html_url,tags:[O,"Open-source","Production-ready"].filter(Boolean)}});M(r,oe,!0)}}catch{console.error("Github request bypassed. Relying closely on local cache.")}})(),()=>{window.removeEventListener("contextmenu",ie),window.removeEventListener("keydown",$e),window.removeEventListener("selectstart",Pe),clearInterval(st)}});var i=Ld(),o=v(l(i),4);jl(o,{get currentTime(){return p(s)}});var d=v(o,2),c=l(d);zl(c,{});var b=v(c,2);Hl(b,{});var h=v(b,2);Wl(h);var u=v(h,2);Ql(u);var x=v(u,2),m=v(l(x),2);ld(m,{get repoFiles(){return Us},get skillsData(){return ri},get projectsData(){return p(r)},get selectedFile(){return p(n)},set selectedFile(ie){M(n,ie,!0)}});var _=v(x,2),g=l(_),y=v(l(g),2);Dd(y,{});var S=v(_,2);td(S);var C=v(S,2);nd(C,{botStatus:a,get currentTime(){return p(s)}});var L=v(d,2),k=l(L),E=l(k),T=v(E,2),B=v(T,2),N=l(B);Ss(N,{class:"w-4.5 h-4.5"});var V=v(k,2),re=l(V);ne(()=>{$t(E,"href",xe.github),$t(T,"href",xe.linkedin),$t(B,"href",xe.telegram),A(re,`© 2026 ${xe.name}. Designed natively with zero unauthorized
            telemetry parameters.`)}),w(e,i),jt()}Bo(jd,{target:document.getElementById("app")});
