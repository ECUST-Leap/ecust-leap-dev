"use strict";(self.webpackChunkecust_leap_handbook=self.webpackChunkecust_leap_handbook||[]).push([[7918],{1676:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ee});var n=a(7294),l=a(1944),r=a(902);const s=n.createContext(null);function o(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(s.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(6010),m=a(7524),u=a(7462),p=a(5999),b=a(2244);function v(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(b.Z,(0,u.Z)({},t,{subLabel:n.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(b.Z,(0,u.Z)({},a,{subLabel:n.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function E(){const{metadata:e}=c();return n.createElement(v,{previous:e.previous,next:e.next})}var h=a(2949),g=a(9861);function f(e){const{colorMode:t}=(0,h.I)();return n.createElement(n.Fragment,null,n.createElement(E,e),n.createElement("br",null),n.createElement(g.Z,{repo:"ECUST-Leap/ecust-leap.github.io",repoId:"R_kgDOIzvQtQ",category:"\u8bc4\u8bba\u533a",categoryId:"DIC_kwDOIzvQtc4CT-SP",mapping:"url",strict:"1",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"}))}var _=a(2263),Z=a(9960),N=a(143),k=a(5281),L=a(373),T=a(4477);const U={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function w(e){const t=U[e.versionMetadata.banner];return n.createElement(t,e)}function C(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(Z.Z,{to:a,onClick:l},n.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,_.Z)(),{pluginId:r}=(0,N.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,L.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,N.Jo)(r),i=o??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:(0,d.Z)(t,k.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(w,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(C,{versionLabel:c.label,to:i.path,onClick:()=>s(c.name)})))}function x(e){let{className:t}=e;const a=(0,T.E)();return a.banner?n.createElement(y,{className:t,versionMetadata:a}):null}function A(e){let{className:t}=e;const a=(0,T.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,k.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function M(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function I(e){let{lastUpdatedBy:t}=e;return n.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function B(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:k.k.common.lastUpdated},n.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(M,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(I,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var P=a(4881),V=a(1526);const D="lastUpdated_vwxv";function H(e){return n.createElement("div",{className:(0,d.Z)(k.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(V.Z,e)))}function S(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.Z)(k.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(P.Z,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",D)},(a||l)&&n.createElement(B,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function z(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:s}=e,o=s.length>0,i=!!(t||a||r);return o||i?n.createElement("footer",{className:(0,d.Z)(k.k.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(H,{tags:s}),i&&n.createElement(S,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var F=a(6043),O=a(3743);const R="tocCollapsibleButton_TO0P",j="tocCollapsibleButtonExpanded_MG3E";function Q(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",R,!t&&j,a.className)}),n.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const q="tocCollapsible_ETCw",G="tocCollapsibleContent_vkbj",J="tocCollapsibleExpanded_sAul";function W(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:o}=(0,F.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(q,!s&&J,a)},n.createElement(Q,{collapsed:s,onClick:o}),n.createElement(F.z,{lazy:!0,className:G,collapsed:s},n.createElement(O.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const X="tocMobile_ITEo";function Y(){const{toc:e,frontMatter:t}=c();return n.createElement(W,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(k.k.docs.docTocMobile,X)})}var $=a(9407);function K(){const{toc:e,frontMatter:t}=c();return n.createElement($.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:k.k.docs.docTocDesktop})}var ee=a(2503),te=a(7432);function ae(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(k.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(ee.Z,{as:"h1"},a)),n.createElement(te.Z,null,t))}var ne=a(2802),le=a(8596),re=a(4996);function se(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const oe="breadcrumbHomeIcon_YNFT";function ce(){const e=(0,re.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(Z.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(se,{className:oe})))}const ie="breadcrumbsContainer_Z_bl";function de(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(Z.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function me(e){let{children:t,active:a,index:l,addMicrodata:r}=e;return n.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ue(){const e=(0,ne.s1)(),t=(0,le.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(k.k.docs.docBreadcrumbs,ie),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ce,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(me,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(de,{href:t.href,isLast:l},t.label))})))):null}const pe="docItemContainer_Djhp",be="docItemCol_VOVn";function ve(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(Y,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(K,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&be)},n.createElement(x,null),n.createElement("div",{className:pe},n.createElement("article",null,n.createElement(ue,null),n.createElement(A,null),a.mobile,n.createElement(ae,null,t),n.createElement(z,null)),n.createElement(f,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function Ee(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(o,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(ve,null,n.createElement(a,null))))}},4881:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(5999),r=a(5281),s=a(7462),o=a(6010);const c="iconEdit_Z9Sw";function i(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(i,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010),r=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},3008:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010),r=a(9960);const s="tag_zVej",o="tagRegular_sFm0",c="tagWithCount_h2kH";function i(e){let{permalink:t,label:a,count:i}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,i?c:o)},a,i&&n.createElement("span",null,i))}},1526:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010),r=a(5999),s=a(3008);const o="tags_jXut",c="tag_QGVx";function i(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:c},n.createElement(s.Z,{label:t,permalink:a}))}))))}},4477:(e,t,a)=>{a.d(t,{E:()=>o,q:()=>s});var n=a(7294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function o(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);