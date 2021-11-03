(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[604],{9618:function(e,t,r){var n={"./AuthorLayout":5303,"./AuthorLayout.js":5303,"./ListLayout":2807,"./ListLayout.js":2807,"./PostLayout":3569,"./PostLayout.js":3569,"./PostSimple":4866,"./PostSimple.js":4866};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=9618},612:function(e,t,r){"use strict";var n=r(2809),a=r(159),i=r(5675),c=r(7320);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.Z=function(e){var t=(0,a.Z)({},e);return(0,c.tZ)(i.default,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t))}},5604:function(e,t,r){"use strict";r.d(t,{J:function(){return x}});var n=r(2809),a=r(219),i=r(9748),c=r(3194),o=r(612),l=r(1890),s=r(7320),d=function(e){var t=e.toc,r=e.indentDepth,n=void 0===r?3:r,a=e.fromHeading,i=void 0===a?1:a,c=e.toHeading,o=void 0===c?6:c,l=e.asDisclosure,d=void 0!==l&&l,u=e.exclude,m=void 0===u?"":u,p=Array.isArray(m)?new RegExp("^("+m.join("|")+")$","i"):new RegExp("^("+m+")$","i"),h=t.filter((function(e){return e.depth>=i&&e.depth<=o&&!p.test(e.value)})),g=(0,s.tZ)("ul",{children:h.map((function(e){return(0,s.tZ)("li",{className:"".concat(e.depth>=n&&"ml-6"),children:(0,s.tZ)("a",{href:e.url,children:e.value})},e.value)}))});return(0,s.tZ)(s.HY,{children:d?(0,s.BX)("details",{open:!0,children:[(0,s.tZ)("summary",{className:"pt-2 pb-2 ml-6 text-xl font-bold",children:"Table of Contents"}),(0,s.tZ)("div",{className:"ml-6",children:g})]}):g})},u=function(e){var t=(0,i.useRef)(null),r=(0,i.useState)(!1),n=r[0],a=r[1],c=(0,i.useState)(!1),o=c[0],l=c[1];return(0,s.BX)("div",{ref:t,onMouseEnter:function(){a(!0)},onMouseLeave:function(){a(!1),l(!1)},className:"relative",children:[n&&(0,s.tZ)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-700 dark:bg-gray-800 ".concat(o?"focus:outline-none focus:border-green-400 border-green-400":"border-gray-300"),onClick:function(){l(!0),navigator.clipboard.writeText(t.current.textContent),setTimeout((function(){l(!1)}),2e3)},children:(0,s.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:o?"text-green-400":"text-gray-300",children:o?(0,s.tZ)(s.HY,{children:(0,s.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,s.tZ)(s.HY,{children:(0,s.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,s.tZ)("pre",{children:e.children})]})},m=r(735),p=["components","layout"],h=["layout","mdxSource"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={Image:o.Z,TOCInline:d,a:l.Z,pre:u,BlogNewsletterForm:m.w,wrapper:function(e){e.components;var t=e.layout,n=(0,a.Z)(e,p),i=r(9618)("./".concat(t)).default;return(0,s.tZ)(i,f({},n))}},x=function(e){var t=e.layout,r=e.mdxSource,n=(0,a.Z)(e,h),o=(0,i.useMemo)((function(){return(0,c.getMDXComponent)(r)}),[r]);return(0,s.tZ)(o,f({layout:t,components:y},n))}},735:function(e,t,r){"use strict";r.d(t,{w:function(){return u}});var n=r(266),a=r(809),i=r.n(a),c=r(9748),o=r(4067),l=r.n(o),s=r(7320),d=function(e){var t=e.title,r=void 0===t?"Inscreva-se na newsletter":t,a=(0,c.useRef)(null),o=(0,c.useState)(!1),d=o[0],u=o[1],m=(0,c.useState)(""),p=m[0],h=m[1],g=(0,c.useState)(!1),f=g[0],y=g[1],x=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/".concat(l().newsletter.provider),{body:JSON.stringify({email:a.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:if(n=e.sent,!n.error){e.next=12;break}return u(!0),h("O e-mail inserido \xe9 inv\xe1lido ou j\xe1 est\xe1 cadastrado!"),e.abrupt("return");case 12:a.current.value="",u(!1),y(!0),h("Sucesso! \ud83c\udf89 Agora voc\xea \xe9 um inscrito.");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.BX)("div",{children:[(0,s.tZ)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:r}),(0,s.BX)("form",{className:"flex flex-col sm:flex-row",onSubmit:x,children:[(0,s.BX)("div",{children:[(0,s.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Endere\xe7o de E-mail"}),(0,s.tZ)("input",{autoComplete:"email",className:"px-4 rounded-md w-72 dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600",id:"email-input",name:"email",placeholder:f?"Voc\xea est\xe1 inscrito!  \ud83c\udf89":"Insira seu E-mail",ref:a,required:!0,type:"email",disabled:f})]}),(0,s.tZ)("div",{className:"flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,s.tZ)("button",{className:"py-2 sm:py-0 w-full bg-green-600 px-4 rounded-md font-medium text-white ".concat(f?"cursor-default":"hover:bg-green-700 dark:hover:bg-green-700"," focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black"),type:"submit",disabled:f,children:f?"Obrigado!":"Inscrever-se"})})]}),d&&(0,s.tZ)("div",{className:"pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400",children:p})]})};t.Z=d;var u=function(e){var t=e.title;return(0,s.tZ)("div",{className:"flex items-center justify-center",children:(0,s.tZ)("div",{className:"p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,s.tZ)(d,{title:t})})})}},8703:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7320);function a(e){var t=e.children;return(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},4629:function(e,t,r){"use strict";r.d(t,{TQ:function(){return s},$t:function(){return d},Uy:function(){return u}});var n=r(9008),a=r(1163),i=r(4067),c=r.n(i),o=r(7320),l=function(e){var t=e.title,r=e.description,i=e.ogType,l=e.ogImage,s=e.twImage,d=(0,a.useRouter)();return(0,o.BX)(n.default,{children:[(0,o.tZ)("title",{children:t}),(0,o.tZ)("meta",{name:"robots",content:"follow, index"}),(0,o.tZ)("meta",{name:"description",content:r}),(0,o.tZ)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(d.asPath)}),(0,o.tZ)("meta",{property:"og:type",content:i}),(0,o.tZ)("meta",{property:"og:site_name",content:c().title}),(0,o.tZ)("meta",{property:"og:description",content:r}),(0,o.tZ)("meta",{property:"og:title",content:t}),"Array"===l.constructor.name?l.map((function(e){var t=e.url;return(0,o.tZ)("meta",{property:"og:image",content:t},t)})):(0,o.tZ)("meta",{property:"og:image",content:l},l),(0,o.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.tZ)("meta",{name:"twitter:site",content:c().twitter}),(0,o.tZ)("meta",{name:"twitter:title",content:t}),(0,o.tZ)("meta",{name:"twitter:description",content:r}),(0,o.tZ)("meta",{name:"twitter:image",content:s})]})},s=function(e){var t=e.title,r=e.description,n=c().siteUrl+c().socialBanner,a=c().siteUrl+c().socialBanner;return(0,o.tZ)(l,{title:t,description:r,ogType:"website",ogImage:n,twImage:a})},d=function(e){var t=e.title,r=e.description,i=c().siteUrl+c().socialBanner,s=c().siteUrl+c().socialBanner,d=(0,a.useRouter)();return(0,o.BX)(o.HY,{children:[(0,o.tZ)(l,{title:t,description:r,ogType:"website",ogImage:i,twImage:s}),(0,o.tZ)(n.default,{children:(0,o.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(c().siteUrl).concat(d.asPath,"/feed.xml")})})]})},u=function(e){var t=e.authorDetails,r=e.title,i=e.summary,s=e.date,d=e.lastmod,u=e.url,m=e.images,p=void 0===m?[]:m,h=(0,a.useRouter)(),g=new Date(s).toISOString(),f=new Date(d||s).toISOString(),y=(0===p.length?[c().socialBanner]:"string"===typeof p?[p]:p).map((function(e){return{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(e)}})),x={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:r,image:y,datePublished:g,dateModified:f,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:c().author},publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:i},v=y[0].url;return(0,o.BX)(o.HY,{children:[(0,o.tZ)(l,{title:r,description:i,ogType:"article",ogImage:y,twImage:v}),(0,o.BX)(n.default,{children:[s&&(0,o.tZ)("meta",{property:"article:published_time",content:g}),d&&(0,o.tZ)("meta",{property:"article:modified_time",content:f}),(0,o.tZ)("link",{rel:"canonical",href:"".concat(c().siteUrl).concat(h.asPath)}),(0,o.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(x,null,2)}})]})]})}},5125:function(e,t,r){"use strict";var n=r(9748),a=r(523),i=r.n(a),c=r(7320);t.Z=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1];(0,n.useEffect)((function(){i().polyfill();var e=function(){window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return(0,c.BX)("div",{className:"fixed flex-col hidden gap-3 right-8 bottom-8 md:flex",children:[(0,c.tZ)("button",{"aria-label":"Scroll To Comment",type:"button",onClick:function(){document.getElementById("comment").scrollIntoView()},style:{opacity:t?1:0},className:"p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300",children:(0,c.tZ)("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,c.tZ)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,c.tZ)("button",{"aria-label":"Scroll To Top",type:"button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{opacity:t?1:0},className:"p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300",children:(0,c.tZ)("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,c.tZ)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},8542:function(e,t,r){"use strict";var n=r(1664),a=r(7668),i=r(7320);t.Z=function(e){var t=e.text;return(0,i.tZ)(n.default,{href:"/tags/".concat((0,a.Z)(t)),children:(0,i.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})})}},5101:function(e,t,r){"use strict";var n=r(4067),a=r.n(n),i=r(5152),c=r(7320),o=(0,i.default)((function(){return r.e(622).then(r.bind(r,1622))}),{ssr:!1,loadableGenerated:{webpack:function(){return[1622]},modules:["../components/comments/index.js -> @/components/comments/Utterances"]}}),l=(0,i.default)((function(){return r.e(917).then(r.bind(r,917))}),{ssr:!1,loadableGenerated:{webpack:function(){return[917]},modules:["../components/comments/index.js -> @/components/comments/Giscus"]}}),s=(0,i.default)((function(){return r.e(506).then(r.bind(r,6506))}),{ssr:!1,loadableGenerated:{webpack:function(){return[6506]},modules:["../components/comments/index.js -> @/components/comments/Disqus"]}});t.Z=function(e){var t,r=e.frontMatter;switch(a().comment.giscusConfig.mapping||a().comment.utterancesConfig.issueTerm){case"pathname":t=r.slug;break;case"url":t=window.location.href;break;case"title":t=r.title}return(0,c.BX)("div",{id:"comment",children:[a().comment&&"giscus"===a().comment.provider&&(0,c.tZ)(l,{mapping:t}),a().comment&&"utterances"===a().comment.provider&&(0,c.tZ)(o,{issueTerm:t}),a().comment&&"disqus"===a().comment.provider&&(0,c.tZ)(s,{frontMatter:r})]})}},5303:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(4811),a=r(4067),i=r.n(a),c=r(612),o=r(4629),l=r(7320);function s(e){var t=e.children,r=e.frontMatter,a=r.name,s=r.avatar,d=r.occupation,u=r.company,m=r.email;r.twitter,r.linkedin,r.github;return(0,l.BX)(l.HY,{children:[(0,l.tZ)(o.TQ,{title:"Sobre - ".concat(a),description:"Sobre n\xf3s - ".concat(a)}),(0,l.BX)("div",{className:"divide-y",children:[(0,l.tZ)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,l.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"Sobre"})}),(0,l.BX)("div",{className:"items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",children:[(0,l.BX)("div",{className:"flex flex-col items-center pt-8 space-x-2",children:[(0,l.tZ)(c.Z,{src:s,alt:"avatar",width:"192px",height:"192px",className:"w-48 h-48 rounded-full"}),(0,l.tZ)("h3",{className:"pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",children:a}),(0,l.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:d}),(0,l.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:u}),(0,l.BX)("div",{className:"flex pt-6 space-x-3",children:[(0,l.tZ)(n.Z,{kind:"mail",href:"mailto:".concat(m),size:"6"}),(0,l.tZ)(n.Z,{kind:"whatsapp",href:i().whatsapp,size:"5"}),(0,l.tZ)(n.Z,{kind:"instagram",href:i().instgram,size:"5"}),(0,l.tZ)(n.Z,{kind:"google",href:i().google,size:"5"})]})]}),(0,l.tZ)("div",{className:"pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2",children:t})]})]})]})}},2807:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(1890),a=r(8542),i=(r(4067),r(9748)),c=r(7320);function o(e){var t=e.totalPages,r=e.currentPage,a=parseInt(r)-1>0,i=parseInt(r)+1<=parseInt(t);return(0,c.tZ)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,c.BX)("nav",{className:"flex justify-between",children:[!a&&(0,c.tZ)("button",{rel:"previous",className:"cursor-auto disabled:opacity-50",disabled:!a,children:"Anterior"}),a&&(0,c.tZ)(n.Z,{href:r-1===1?"/blog/":"/blog/page/".concat(r-1),children:(0,c.tZ)("button",{rel:"previous",children:"Anterior"})}),(0,c.BX)("span",{children:[r," de ",t]}),!i&&(0,c.tZ)("button",{rel:"next",className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Pr\xf3xima"}),i&&(0,c.tZ)(n.Z,{href:"/blog/page/".concat(r+1),children:(0,c.tZ)("button",{rel:"next",children:"Pr\xf3xima"})})]})})}var l=r(7);function s(e){var t=e.posts,r=e.title,s=e.initialDisplayPosts,d=void 0===s?[]:s,u=e.pagination,m=(0,i.useState)(""),p=m[0],h=m[1],g=t.filter((function(e){return(e.title+e.summary+e.tags.join(" ")).toLowerCase().includes(p.toLowerCase())})),f=d.length>0&&!p?d:g;return(0,c.BX)(c.HY,{children:[(0,c.BX)("div",{className:"divide-y",children:[(0,c.BX)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:[(0,c.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:r}),(0,c.BX)("div",{className:"relative max-w-lg",children:[(0,c.tZ)("input",{"aria-label":"Buscar postagens",type:"text",onChange:function(e){return h(e.target.value)},placeholder:"Buscar postagens",className:"block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"}),(0,c.tZ)("svg",{className:"absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,c.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})]}),(0,c.BX)("ul",{children:[!g.length&&"Ainda n\xe3o h\xe1 nenhum post.",f.map((function(e){var t=e.slug,r=e.date,i=e.title,o=e.summary,s=e.tags;return(0,c.tZ)("li",{className:"py-4",children:(0,c.BX)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,c.BX)("dl",{children:[(0,c.tZ)("dt",{className:"sr-only",children:"Publicado em:"}),(0,c.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,c.tZ)("time",{dateTime:r,children:(0,l.Z)(r)})})]}),(0,c.BX)("div",{className:"space-y-3 xl:col-span-3",children:[(0,c.BX)("div",{children:[(0,c.tZ)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,c.tZ)(n.Z,{href:"/blog/".concat(t),className:"text-gray-900 dark:text-gray-100",children:i})}),(0,c.tZ)("div",{className:"flex flex-wrap",children:s.map((function(e){return(0,c.tZ)(a.Z,{text:e},e)}))})]}),(0,c.tZ)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:o})]})]})},t)}))]})]}),u&&u.totalPages>1&&!p&&(0,c.tZ)(o,{currentPage:u.currentPage,totalPages:u.totalPages})]})}},3569:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(2809),a=r(1890),i=r(8703),c=r(9648),o=r(4629),l=r(612),s=r(8542),d=r(4067),u=r.n(d),m=r(5101),p=r(5125),h=r(7320);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){return"".concat(u().siteRepo,"/blob/master/data/blog/").concat(e)},x=function(e){return"https://mobile.twitter.com/search?q=".concat(encodeURIComponent("".concat(u().siteUrl,"/blog/").concat(e)))},v={weekday:"long",year:"numeric",month:"long",day:"numeric"};function b(e){var t=e.frontMatter,r=e.authorDetails,n=e.next,d=e.prev,g=e.children,b=t.slug,Z=t.fileName,w=t.date,k=t.title,N=t.tags;return(0,h.BX)(c.Z,{children:[(0,h.tZ)(o.Uy,f({url:"".concat(u().siteUrl,"/blog/").concat(b),authorDetails:r},t)),(0,h.tZ)(p.Z,{}),(0,h.tZ)("article",{children:(0,h.BX)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,h.tZ)("header",{className:"pt-6 xl:pb-6",children:(0,h.BX)("div",{className:"space-y-1 text-center",children:[(0,h.tZ)("dl",{className:"space-y-10",children:(0,h.BX)("div",{children:[(0,h.tZ)("dt",{className:"sr-only",children:"Publicado em:"}),(0,h.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,h.tZ)("time",{dateTime:w,children:new Date(w).toLocaleDateString(u().locale,v)})})]})}),(0,h.tZ)("div",{children:(0,h.tZ)(i.Z,{children:k})})]})}),(0,h.BX)("div",{className:"pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",style:{gridTemplateRows:"auto 1fr"},children:[(0,h.BX)("dl",{className:"pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700",children:[(0,h.tZ)("dt",{className:"sr-only",children:"Autores"}),(0,h.tZ)("dd",{children:(0,h.tZ)("ul",{className:"flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8",children:r.map((function(e){return(0,h.BX)("li",{className:"flex items-center space-x-2",children:[e.avatar&&(0,h.tZ)(l.Z,{src:e.avatar,width:"38px",height:"38px",alt:"avatar",className:"w-10 h-10 rounded-full"}),(0,h.BX)("dl",{className:"text-sm font-medium leading-5 whitespace-nowrap",children:[(0,h.tZ)("dt",{className:"sr-only",children:"Nome"}),(0,h.tZ)("dd",{className:"text-gray-900 dark:text-gray-100",children:e.name}),(0,h.tZ)("dt",{className:"sr-only",children:"Twitter"}),(0,h.tZ)("dd",{children:e.twitter&&(0,h.tZ)(a.Z,{href:e.twitter,className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:e.twitter.replace("https://twitter.com/","@")})})]})]},e.name)}))})})]}),(0,h.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",children:[(0,h.tZ)("div",{className:"pt-10 pb-8 prose dark:prose-dark max-w-none",children:g}),(0,h.BX)("div",{className:"pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300",children:[(0,h.tZ)(a.Z,{href:x(b),rel:"nofollow",children:"Discuss on Twitter"})," \u2022 ",(0,h.tZ)(a.Z,{href:y(Z),children:"View on GitHub"})]}),(0,h.tZ)(m.Z,{frontMatter:t})]}),(0,h.BX)("footer",{children:[(0,h.BX)("div",{className:"text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2",children:[N&&(0,h.BX)("div",{className:"py-4 xl:py-8",children:[(0,h.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Tags"}),(0,h.tZ)("div",{className:"flex flex-wrap",children:N.map((function(e){return(0,h.tZ)(s.Z,{text:e},e)}))})]}),(n||d)&&(0,h.BX)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[d&&(0,h.BX)("div",{children:[(0,h.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Artigo Anterior"}),(0,h.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,h.tZ)(a.Z,{href:"/blog/".concat(d.slug),children:d.title})})]}),n&&(0,h.BX)("div",{children:[(0,h.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Pr\xf3ximo Artigo"}),(0,h.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,h.tZ)(a.Z,{href:"/blog/".concat(n.slug),children:n.title})})]})]})]}),(0,h.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,h.tZ)(a.Z,{href:"/blog",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:"\u2190 Voltar as Postagens"})})]})]})]})})]})}},4866:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(2809),a=r(1890),i=r(8703),c=r(9648),o=r(4629),l=r(4067),s=r.n(l),d=r(7),u=r(5101),m=r(5125),p=r(7320);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=e.frontMatter,r=(e.authorDetails,e.next),n=e.prev,l=e.children,h=t.date,f=t.title;return(0,p.BX)(c.Z,{children:[(0,p.tZ)(o.Uy,g({url:"".concat(s().siteUrl,"/blog/").concat(t.slug)},t)),(0,p.tZ)(m.Z,{}),(0,p.tZ)("article",{children:(0,p.BX)("div",{children:[(0,p.tZ)("header",{children:(0,p.BX)("div",{className:"pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700",children:[(0,p.tZ)("dl",{children:(0,p.BX)("div",{children:[(0,p.tZ)("dt",{className:"sr-only",children:"Publicado em:"}),(0,p.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,p.tZ)("time",{dateTime:h,children:(0,d.Z)(h)})})]})}),(0,p.tZ)("div",{children:(0,p.tZ)(i.Z,{children:f})})]})}),(0,p.BX)("div",{className:"pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 ",style:{gridTemplateRows:"auto 1fr"},children:[(0,p.tZ)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",children:(0,p.tZ)("div",{className:"pt-10 pb-8 prose dark:prose-dark max-w-none",children:l})}),(0,p.tZ)(u.Z,{frontMatter:t}),(0,p.tZ)("footer",{children:(0,p.BX)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[n&&(0,p.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,p.BX)(a.Z,{href:"/blog/".concat(n.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:["\u2190 ",n.title]})}),r&&(0,p.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,p.BX)(a.Z,{href:"/blog/".concat(r.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:[r.title," \u2192"]})})]})})]})]})})]})}},7:function(e,t,r){"use strict";var n=r(4067),a=r.n(n);t.Z=function(e){return new Date(e).toLocaleDateString(a().locale,{year:"numeric",month:"long",day:"numeric"})}},7668:function(e,t,r){"use strict";var n=r(9671);t.Z=function(e){return(0,n.slug)(e)}}}]);