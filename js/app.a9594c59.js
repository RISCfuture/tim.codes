(function(e){function t(t){for(var a,n,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,n=1;n<r.length;n++){var s=r[n];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({"bio~resume":"bio~resume",bio:"bio",resume:"resume",projects:"projects"}[e]||e)+"."+{"bio~resume":"fbb07eb0",bio:"13657926",resume:"67366eb0",projects:"d7b9b5cb"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={bio:1,resume:1,projects:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({"bio~resume":"bio~resume",bio:"bio",resume:"resume",projects:"projects"}[e]||e)+"."+{"bio~resume":"31d6cfe0",bio:"055ce76a",resume:"adb87914",projects:"214e9d19"}[e]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[e],f.parentNode.removeChild(f),r(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,r){a=i[e]=[t,r]}));t.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var r=i[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}i[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0c1e":function(e,t,r){},"0e591":function(e,t,r){e.exports=r.p+"fonts/TitilliumWeb-SemiBoldItalic.f8f4f550.ttf"},"21bb":function(e,t,r){"use strict";r("2dad")},"2d26":function(e,t,r){"use strict";r("61b6")},"2dad":function(e,t,r){},"3bf0":function(e,t,r){e.exports=r.p+"fonts/TitilliumWeb-Regular.ed1d014b.ttf"},"44e6":function(e,t,r){},"55b6":function(e,t,r){"use strict";var a=r("2b0e"),n=r("a925"),i=r("a1a3"),o={resume:{address:{zip:"94107",phone:"[redacted]"}}},s=o,c={bio:{accomplishment:{web_dev:{google:"Google",omg:"One Medical",square:"Square",recurly:"Recurly",scribd:"Scribd"}}},social:{website:{facebook:"Facebook",github:"GitHub",instagram:"Instagram",linkedin:"LinkedIn",quora:"Quora",twitch:"Twitch",twitter:"Twitter",youtube:"YouTube"}},projects:{"1ma":{name:"One Mike Alpha"},avfacts:{name:"AvFacts"},icrashedmyplane:{name:"I Crashed My Plane"},learnmorsecode:{name:"Learn Morse Code"},ranked:{name:"Ranked."},logtensafe:{name:"LogTenSafe"},bad_behavior:{name:"BadBehavior"},metar_decoder:{name:"METAR Decoder"},hearts:{name:"Hearts"}},resume:{time_range:"{start}–{end}",address:{street:"",city:"San Francisco, CA",zip:"",phone:"",email:"resume@timothymorgan.info"},jobs:{header_format:'<span class="time-range">{timeRange}</span> <span class="title">{title}</span>, {company} ({location})',locations:{sf:"San Francisco",seattle:"Seattle"}},education:{format:'<span class="degree">{degree}, {concentration}</span> {institution}; {location}; {timeRange}',degree:{bs:"B.S."},institution:{beloit:{name:"Beloit College",location:"Beloit, WI"}}}}},l=Object(i["a"])({},c,s),u={resume:{address:{street:"[redacted]"}}},d=u,f={bio:{occupation:{web_dev:"Web Developer",pilot:"Commercial Pilot"},accomplishment:{pilot:{asel:"Airplane Single-Engine Land",ases:"Airplane Single-Engine Sea",amel:"Airplane Multi-Engine Land",ames:"Airplane Multi-Engine Sea",ia:"Instrument Airplane",gli:"Glider"}}},header:{links:{home:"Home",projects:"Projects",resume:"Résumé"}},footer:{text:"All content, code, and images (except logomarks) copyright ©2011–{year} Tim Morgan. All rights reserved. {link}",link_text:"View the source for this website on GitHub."},project:{type:{website:"website",gem:"gem",library:"library",app:"app",tool:"tool"},website_type:{live:"live",source:"source"},language:{ruby:"Ruby",es5:"ES5",es2015:"ES2015",typescript:"TypeScript",html:"HTML",css:"CSS",swift:"Swift",objective_c:"Objective-C",c:"C"},library:{rails:"Ruby on Rails",vuejs:"Vue.js",jquery:"jQuery",bootstrap:"Bootstrap"}},projects:{"1ma":{description:"A website that loads telemetry from my airplane, N171MA, and displays it in an engaging graphical way.",achievements:["Custom data loader written in C","Compelling data visualization using HighCharts","Mapbox integration for geolocated data","Sophisticated telemetry processing and merging from multiple sensors"]},avfacts:{description:"The website that powers my aviation podcast",achievements:["Custom Active Storage handlers for processing audio files for podcast distribution","Admin user interface for writing, performing, and releasing new episodes","Generates and syndicates podcast RSS feed"]},icrashedmyplane:{description:"An engaging way to navigate NTSB 830 regulations after you crash your plane",achievements:["Seemingly simple front-end powered by sophisticated tree-walking algorithms","Extensive use of Vue transitions for a fluid app-like experience","Responsive design and dark mode support"]},learnmorsecode:{description:"A fun, affirming, and slightly pushy tool to teach Morse code",achievements:["All Morse code audio and pictographs are generated programmatically; no assets are used","Extensive use of Vue transitions for a fluid app-like experience","Responsive design and dark mode support"]},ranked:{description:"Rank arbitrary lists of things using an Elo algorithm",achievements:["No back-end ranking storage; all state encoded into the URL","Stable and versatile ranking algorithm"]},logtensafe:{description:"Website and Cocoa Mac OS X app for backing up digital pilot logbooks automatically"},bad_behavior:{description:"Scans your digital pilot logbook for potential violations of federal aviation regulations"},metar_decoder:{description:"Decodes the “Remarks” section of a METAR into human-readable text"},hearts:{description:"Converts images into “Emoji-art” using image sampling and color processing"}},resume:{present:"Present",address:{country:"USA",omitted:"[omitted]"},objective:{header:"Objective:",content:"Staff engineer at a software-comes-first firm in need of passionate programmers and fast learners. Especially excited by web and applications programming."},summary:{header:"Summary",content:"Experienced, fast, disciplined and thorough programmer with strong focus on design-oriented coding and complete documentation. Comfortable in many languages (Ruby, JavaScript/Node, Swift, Objective-C, CSS/HTML), libraries (Ruby on Rails, Vue.js, jQuery, Cocoa), and tools (Webpack, Capistrano, Sidekiq, Git)."},accomplishments:{header:"Selected Accomplishments",content:["Built and open-sourced two major tools for Square: Squash and Shuttle.","Premier Ruby on Rails developer at the one of the busiest Rails websites; extensive experience with a full range of web technologies, front-to-back.","Designed and developed numerous personal websites using Ruby on Rails and Vue.js.","Designed and developed an asynchronous Rails 3.0 website for communicating with a variety of payment gateways using EM-HTTP.","Designed and implemented in C++ a model of flight physics for a computer simulation as part of a team of six specialists. Also designed a model of physical G-force effects whose realism is unprecedented in the industry."]},jobs:{header:"Professional History",identifiers:{amazon:{title:"Software Development Engineer II",company:"Amazon.com",description:"Programmer for the Transportation team, responsible for implementing web-based visibility services and Oracle back-ends for inbound and outbound freight."},tickle:{title:"Software Engineer",company:"Tickle.com",description:"Lead developer for the international Tickle.com websites (a J2EE/Spring website) and a Ruby on Rails ad-serving system."},scribd:{title:"Senior Developer",company:"Scribd",description:"Primary Ruby on Rails back-end developer for Scribd.com; website features, database optimizations, proper Rails style, and expert advice."},recurly:{title:"Senior Developer",company:"Recurly",description:"Expert Ruby on Rails developer; wrote second-generation payment gateway in Rails. Back-end refactoring, architecture, design."},square:{title:"Software Engineer — Tools",company:"Square",description:"Inagural internal tools developer for Square, with a focus on Ruby on Rails. Designed, built, and launched major engineering projects that were used internally and open-sourced."},omg:{title:"Staff Software Engineer",company:"One Medical Group",description:"Software engineer on the New Services team. Developing new features and products in Ruby on Rails and Angular 2."},google:{title:"Senior Software Engineer",company:"Google",description:"Software engineer on the Cloud Identity team, which manages access control for internal and external HTTP and streaming connections."}}},supporting_experience:{header:"Supporting Experience",content:["Certified commercial pilot (2013) (private 2007).","Wrote over twenty feature articles and over 100 news articles for Inside Mac Games as their Senior Writer specializing in flight simulators and audio hardware.","Founded and ran the Beloit College Filmmaking Club, and as president, spearheaded the creation of three feature-length documentaries on and off campus."]},education:{header:"Education",concentration:{cs:"Computer Science",physics:"Physics"}}}},p=Object(i["a"])({},l,f,d),m={en:p,"en-us":p},h=m,b={yearOnly:{year:"numeric"}},g=b,y={en:g},v=y;a["a"].use(n["a"]);t["a"]=new n["a"]({locale:navigator.language,fallbackLocale:"en",messages:h,dateTimeFormats:v})},"5fae":function(e,t,r){e.exports=r.p+"fonts/TitilliumWeb-Italic.a30e681e.ttf"},"61b6":function(e,t,r){},"930e":function(e,t,r){},af69:function(e,t,r){e.exports=r.p+"fonts/TitilliumWeb-Bold.08d37409.ttf"},afc7:function(e,t,r){e.exports=r.p+"fonts/Inter-Light-slnt=0.5a8cd28e.ttf"},b603:function(e,t,r){},c92e:function(e,t,r){"use strict";r("44e6")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a,n=r("2b0e"),i=r("353a"),o=r.n(i),s=r("3181"),c=r.n(s);o.a.start({apiKey:"b03f578479a46c5628b9a8c8d4e927ac",plugins:[new c.a],enabledReleaseStages:["production"]}),null===(a=o.a.getPlugin("vue"))||void 0===a||a.installVueErrorHandler(n["a"]);var l=r("55b6"),u=(r("d3b7"),r("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("navigation",{on:{"set-transition":function(t){e.transitionName=t}}}),r("content-view",{attrs:{"transition-name":e.transitionName}}),r("footer-view")],1)},f=[],p=r("d4ec"),m=r("262e"),h=r("2caf"),b=r("9ab4"),g=r("2fe1"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{class:e.$route.name},[r("ul",[r("li",[r("a",{attrs:{alt:e.$t("header.links.home"),"data-cy":"menu-home"},on:{click:function(t){return e.navigate({name:"home"})}}},[r("home-image",{attrs:{id:"home-image"}})],1)]),r("li",[r("a",{attrs:{alt:e.$t("header.links.projects"),"data-cy":"menu-projects"},on:{click:function(t){return e.navigate({name:"projects"})}}},[r("projects-image",{attrs:{id:"projects-image"}})],1)]),r("li",[r("a",{attrs:{alt:e.$t("header.links.resume"),"data-cy":"menu-resume"},on:{click:function(t){return e.navigate({name:"resume"})}}},[r("resume-image",{attrs:{id:"resume-image"}})],1)])]),r("h1",[e._v("Tim Morgan")])])},v=[],w=(r("b0c0"),r("bee2")),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{width:"104",height:"102",viewBox:"0 0 104 102",xmlns:"http://www.w3.org/2000/svg"}},[r("g",{attrs:{transform:"translate(2 2)",stroke:"#fff","stroke-width":"4",fill:"none","fill-rule":"evenodd"}},[r("ellipse",{attrs:{cx:"50",cy:"35",rx:"28",ry:"27"}}),r("path",{attrs:{d:"M100 100c0-14.912-22.222-27-50-27S0 85.088 0 100"}}),r("path",{attrs:{"stroke-linecap":"square",d:"M51.5 4.5V0M61.87 8.352l1.678-6.262M68.524 13.343l3.535-5.444M39.442\n             2.092l1.7 6.257M29.927 6.918l3.562 5.426"}}),r("path",{attrs:{d:"M47.83 33s-7.546 9.552-3.774 12.542c3.773 2.99 8.582 2.587 11.209\n             0 1.751-1.724 1.251-5.905-1.5-12.542"}})])])},j=[],k=function(e){Object(m["a"])(r,e);var t=Object(h["a"])(r);function r(){return Object(p["a"])(this,r),t.apply(this,arguments)}return r}(n["a"]);k=Object(b["a"])([g["b"]],k);var E=k,O=E,R=r("2877"),C=Object(R["a"])(O,S,j,!1,null,null,null),T=C.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{width:"100",height:"54",viewBox:"0 0 100 54",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("defs",[r("path",{attrs:{id:"a",d:"M.578 0h28v36h-28z"}}),r("path",{attrs:{id:"c",d:"M0 0h27v54H0z"}}),r("path",{attrs:{id:"e",d:"M0 0h27v36H0z"}})]),r("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{transform:"translate(71.422 12)"}},[r("mask",{attrs:{id:"b",fill:"#fff"}},[r("use",{attrs:{"xlink:href":"#a"}})]),r("path",{attrs:{stroke:"#fff","stroke-width":"4","stroke-linecap":"square","stroke-linejoin":"bevel",mask:"url(#b)",transform:"matrix(-1 0 0 1 28.578 0)",d:"M28.578 3.599L0 18.175l28.578 14.31"}})]),r("g",{attrs:{transform:"translate(35)"}},[r("mask",{attrs:{id:"d",fill:"#fff"}},[r("use",{attrs:{"xlink:href":"#c"}})]),r("path",{attrs:{stroke:"#fff","stroke-width":"4","stroke-linecap":"square",mask:"url(#d)",d:"M23 1L4.5 53.5"}})]),r("g",{attrs:{transform:"translate(0 12)"}},[r("mask",{attrs:{id:"f",fill:"#fff"}},[r("use",{attrs:{"xlink:href":"#e"}})]),r("path",{attrs:{stroke:"#fff","stroke-width":"4","stroke-linejoin":"bevel",mask:"url(#f)",d:"M29.51 3.599L0 18l29.51 14.485"}})])])])},I=[],_=function(e){Object(m["a"])(r,e);var t=Object(h["a"])(r);function r(){return Object(p["a"])(this,r),t.apply(this,arguments)}return r}(n["a"]);_=Object(b["a"])([g["b"]],_);var M=_,L=M,A=Object(R["a"])(L,x,I,!1,null,null,null),B=A.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{width:"104px",height:"94px",viewBox:"0 0 104 94",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("title",[e._v("Briefcase")]),r("desc",[e._v("Created with Sketch.")]),r("defs",[r("rect",{attrs:{id:"path-1",x:"0",y:"0",width:"52",height:"28"}})]),r("g",{attrs:{id:"Resume",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{id:"Briefcase",transform:"translate(1.500000, -2.000000)"}},[r("rect",{attrs:{id:"Body",stroke:"#ffffff","stroke-width":"4",x:"0.5",y:"26",width:"100",height:"68",rx:"8"}}),r("g",{attrs:{id:"Handle",transform:"translate(23.500000, 0.000000)"}},[r("mask",{attrs:{id:"mask-2",fill:"white"}},[r("use",{attrs:{"xlink:href":"#path-1"}})]),r("g",{attrs:{id:"Mask"}}),r("rect",{attrs:{id:"Outer-Edge",stroke:"#ffffff","stroke-width":"4",mask:"url(#mask-2)",x:"3",y:"4",width:"47",height:"33",rx:"14"}}),r("rect",{attrs:{id:"Inner-Edge",stroke:"#ffffff","stroke-width":"4",mask:"url(#mask-2)",x:"10",y:"12",width:"33",height:"33",rx:"8"}})]),r("path",{attrs:{d:"M0,51.5 C16.6666667,57.1666667 33.3333333,60 50,60 C66.6666667,60\n               83.3333333,57.1666667 100,51.5",id:"Crease",stroke:"#ffffff","stroke-width":"4"}})])])])},Y=[],U=function(e){Object(m["a"])(r,e);var t=Object(h["a"])(r);function r(){return Object(p["a"])(this,r),t.apply(this,arguments)}return r}(n["a"]);U=Object(b["a"])([g["b"]],U);var V=U,H=V,q=Object(R["a"])(H,P,Y,!1,null,null,null),$=q.exports,W=function(e){Object(m["a"])(r,e);var t=Object(h["a"])(r);function r(){return Object(p["a"])(this,r),t.apply(this,arguments)}return Object(w["a"])(r,[{key:"navigate",value:function(e){if(e.name!==this.$route.name){var t=!1;"home"===this.$route.name?t=!0:"projects"===this.$route.name&&(t="resume"===e.name),this.$emit("set-transition",t?"shift-right":"shift-left"),this.$router.push(e)}}}]),r}(n["a"]);W=Object(b["a"])([Object(g["b"])({components:{HomeImage:T,ProjectsImage:B,ResumeImage:$}})],W);var F=W,D=F,N=(r("eba2"),Object(R["a"])(D,y,v,!1,null,"4c8b037a",null)),K=N.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",[r("transition",{attrs:{name:e.transitionName,mode:"out-in"}},[r("router-view")],1)],1)},z=[],G=r("60a3"),Q=function(e){Object(m["a"])(r,e);var t=Object(h["a"])(r);function r(){return Object(p["a"])(this,r),t.apply(this,arguments)}return r}(n["a"]);Object(b["a"])([Object(G["a"])({type:String,required:!0})],Q.prototype,"transitionName",void 0),Q=Object(b["a"])([g["b"]],Q);var X=Q,Z=X,ee=(r("2d26"),Object(R["a"])(Z,J,z,!1,null,"6ee9a298",null)),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[e._v(" "+e._s(e.$t("footer.text",{year:e.copyrightYear}))+" "),r("a",{attrs:{href:"https://github.com/RISCfuture/tim.codes"}},[e._v(e._s(e.$t("footer.link_text")))])])},ae=[],ne=(r("0d03"),function(e){Object(m["a"])(r,e);var t=Object(h["a"])(r);function r(){return Object(p["a"])(this,r),t.apply(this,arguments)}return Object(w["a"])(r,[{key:"copyrightYear",get:function(){return this.$d(new Date,"yearOnly")}}]),r}(n["a"]));ne=Object(b["a"])([g["b"]],ne);var ie=ne,oe=ie,se=(r("c92e"),Object(R["a"])(oe,re,ae,!1,null,"762b9838",null)),ce=se.exports,le=function(e){Object(m["a"])(r,e);var t=Object(h["a"])(r);function r(){var e;return Object(p["a"])(this,r),e=t.apply(this,arguments),e.transitionName="shift-right",e}return r}(n["a"]);le=Object(b["a"])([Object(g["b"])({components:{FooterView:ce,ContentView:te,Navigation:K}})],le);var ue=le,de=ue,fe=(r("21bb"),Object(R["a"])(de,d,f,!1,null,null,null)),pe=fe.exports;n["a"].use(u["a"]);var me=new u["a"]({base:"/",routes:[{path:"/",component:pe,children:[{path:"",name:"home",component:function(){return Promise.all([r.e("bio~resume"),r.e("bio")]).then(r.bind(null,"ce74"))}},{path:"/projects",name:"projects",component:function(){return r.e("projects").then(r.bind(null,"fc48"))}},{path:"/resume",name:"resume",component:function(){return Promise.all([r.e("bio~resume"),r.e("resume")]).then(r.bind(null,"034a"))}}]}]}),he=r("2f62");function be(e){var t=function(){return{careers:e}},r={careers:function(e){return e.careers}};return{state:t,getters:r}}var ge,ye,ve,we,Se=[{i18nKey:"bio.occupation.web_dev",accomplishments:[{i18nKey:"bio.accomplishment.web_dev.google"},{i18nKey:"bio.accomplishment.web_dev.omg"},{i18nKey:"bio.accomplishment.web_dev.square"},{i18nKey:"bio.accomplishment.web_dev.recurly"},{i18nKey:"bio.accomplishment.web_dev.scribd"}],inline:!0},{i18nKey:"bio.occupation.pilot",accomplishments:[{i18nKey:"bio.accomplishment.pilot.asel",year:2013},{i18nKey:"bio.accomplishment.pilot.ases",year:2014},{i18nKey:"bio.accomplishment.pilot.amel",year:2015},{i18nKey:"bio.accomplishment.pilot.ames",year:2019},{i18nKey:"bio.accomplishment.pilot.ia",year:2012},{i18nKey:"bio.accomplishment.pilot.gli",year:2019}],inline:!1}];r("4de4");function je(e){var t=function(){return{projects:e}},r={featuredProjects:function(e){return e.projects.filter((function(e){return e.featured}))},minorProjects:function(e){return e.projects.filter((function(e){return!e.featured}))}};return{state:t,getters:r}}(function(e){e["WEBSITE"]="website",e["GEM"]="gem",e["LIBRARY"]="library",e["APP"]="app",e["TOOL"]="tool"})(ge||(ge={})),function(e){e["LIVE"]="live",e["SOURCE"]="source"}(ye||(ye={})),function(e){e["RUBY"]="ruby",e["ES5"]="es5",e["ES2015"]="es2015",e["TYPESCRIPT"]="typescript",e["HTML"]="html",e["CSS"]="css",e["SWIFT"]="swift",e["OBJECTIVE_C"]="objective_c",e["C"]="c"}(ve||(ve={})),function(e){e["RAILS"]="rails",e["VUEJS"]="vuejs",e["JQUERY"]="jquery",e["BOOTSTRAP"]="bootstrap"}(we||(we={}));var ke,Ee,Oe=[{type:ge.WEBSITE,identifier:"1ma",websites:[{url:"https://github.com/RISCfuture/OneMikeAlpha",type:ye.SOURCE},{url:"https://github.com/RISCfuture/1MA-Avidyne-R9-Data-Loader",type:ye.SOURCE}],languages:[ve.RUBY,ve.TYPESCRIPT,ve.HTML,ve.CSS,ve.C],libraries:[we.RAILS,we.VUEJS],featured:!0},{type:ge.WEBSITE,identifier:"avfacts",websites:[{url:"https://avfacts.org",type:ye.LIVE},{url:"https://github.com/RISCfuture/AvFacts",type:ye.SOURCE}],languages:[ve.RUBY,ve.TYPESCRIPT,ve.HTML,ve.CSS],libraries:[we.RAILS,we.VUEJS],featured:!0},{type:ge.WEBSITE,identifier:"icrashedmyplane",websites:[{url:"https://icrashedmyplane.com",type:ye.LIVE},{url:"https://github.com/RISCfuture/I-Crashed-My-Plane",type:ye.SOURCE}],languages:[ve.TYPESCRIPT,ve.HTML,ve.CSS],libraries:[we.VUEJS],featured:!0},{type:ge.WEBSITE,identifier:"learnmorsecode",websites:[{url:"https://learnmorse.codes",type:ye.LIVE},{url:"https://github.com/RISCfuture/learnmorse.codes",type:ye.SOURCE}],languages:[ve.TYPESCRIPT,ve.HTML,ve.CSS],libraries:[we.VUEJS],featured:!0},{type:ge.WEBSITE,identifier:"ranked",websites:[{url:"https://r4nked.herokuapp.com",type:ye.LIVE},{url:"https://github.com/RISCfuture/ranked",type:ye.SOURCE}],languages:[ve.RUBY,ve.TYPESCRIPT,ve.HTML,ve.CSS],libraries:[we.RAILS,we.VUEJS],featured:!1},{type:ge.WEBSITE,identifier:"logtensafe",websites:[{url:"https://logtensafe.com",type:ye.LIVE},{url:"https://github.com/LogTenSafe/website",type:ye.SOURCE},{url:"https://github.com/LogTenSafe/MacOSX",type:ye.SOURCE}],languages:[ve.RUBY,ve.ES5,ve.HTML,ve.CSS],libraries:[we.RAILS,we.JQUERY,we.BOOTSTRAP],featured:!1},{type:ge.TOOL,identifier:"bad_behavior",websites:[{url:"https://github.com/RISCfuture/BadBehavior",type:ye.SOURCE}],languages:[ve.SWIFT],libraries:[],featured:!1},{type:ge.TOOL,identifier:"metar_decoder",websites:[{url:"https://github.com/RISCfuture/METAR-Decoder",type:ye.SOURCE}],languages:[ve.OBJECTIVE_C],libraries:[],featured:!1},{type:ge.TOOL,identifier:"hearts",websites:[{url:"https://github.com/RISCfuture/hearts",type:ye.SOURCE}],languages:[ve.RUBY],libraries:[],featured:!1}];r("4e82");function Re(e,t){var r=function(){return{jobs:e,education:t}};function a(e,t){return e.startYear===t.startYear?!t.endYear&&e.endYear?-1:t.endYear&&!e.endYear?1:0:t.startYear-e.startYear}var n={jobs:function(e){return e.jobs.sort(a)},education:function(e){return e.education.sort(a)}};return{state:r,getters:n}}(function(e){e["SF"]="sf",e["SEATTLE"]="seattle"})(ke||(ke={})),function(e){e["BS"]="bs"}(Ee||(Ee={}));var Ce=[{identifier:"amazon",startYear:2005,endYear:2006,location:ke.SEATTLE},{identifier:"tickle",startYear:2006,endYear:2007,location:ke.SF},{identifier:"scribd",startYear:2007,endYear:2010,location:ke.SF},{identifier:"recurly",startYear:2010,endYear:2012,location:ke.SF},{identifier:"square",startYear:2012,endYear:2018,location:ke.SF},{identifier:"omg",startYear:2019,endYear:2020,location:ke.SF},{identifier:"google",startYear:2020,endYear:null,location:ke.SF}],Te=[{identifier:"bs",degree:Ee.BS,concentrations:["cs","physics"],institution:"beloit",startYear:2001,endYear:2005}];function xe(e){var t=function(){return{profiles:e}},r={profiles:function(e){return e.profiles}};return{state:t,getters:r}}var Ie=[{identifier:"github",website:"https://github.com/riscfuture"},{identifier:"quora",website:"https://www.quora.com/profile/Tim-Morgan-5"},{identifier:"linkedin",website:"https://www.linkedin.com/in/riscfuture/"},{identifier:"twitter",website:"https://twitter.com/riscfuture"},{identifier:"facebook",website:"https://www.facebook.com/tim.morgan"},{identifier:"youtube",website:"https://www.youtube.com/user/riscfuture"},{identifier:"twitch",website:"https://twitch.tv/riscfuture"},{identifier:"instagram",website:"https://www.instagram.com/riscfuture/"}];n["a"].use(he["a"]);var _e=function(){return{}},Me={state:_e,modules:{bio:be(Se),projects:je(Oe),resume:Re(Ce,Te),social:xe(Ie)}},Le=new he["a"].Store(Me),Ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-view")},Be=[],Pe=function(e){Object(m["a"])(r,e);var t=Object(h["a"])(r);function r(){return Object(p["a"])(this,r),t.apply(this,arguments)}return r}(n["a"]);Pe=Object(b["a"])([g["b"]],Pe);var Ye=Pe,Ue=Ye,Ve=Object(R["a"])(Ue,Ae,Be,!1,null,null,null),He=Ve.exports;r("3bf0"),r("5fae"),r("f0bd"),r("0e591"),r("af69"),r("f379"),r("afc7"),r("f5df1"),r("edad"),r("930e"),r("b603");n["a"].config.productionTip=!1,new n["a"]({i18n:l["a"],router:me,store:Le,render:function(e){return e(He)}}).$mount("#app")},eba2:function(e,t,r){"use strict";r("0c1e")},edad:function(e,t,r){},f0bd:function(e,t,r){e.exports=r.p+"fonts/TitilliumWeb-SemiBold.ce96d75e.ttf"},f379:function(e,t,r){e.exports=r.p+"fonts/Inter-Bold-slnt=0.c73899df.ttf"}});
//# sourceMappingURL=app.a9594c59.js.map