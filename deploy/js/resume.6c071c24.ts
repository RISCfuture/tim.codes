(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["resume"],{"034a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"resume",attrs:{"data-cy":"navigation-root-resume"}},[n("h1",{attrs:{id:"header-name"}},[e._v("Tim Morgan")]),n("div",{staticClass:"address"},[n("span",{domProps:{innerHTML:e._s(e.addressLine1)}}),n("br"),e._v(" "+e._s(e.addressLine2)+" ")]),n("p",{staticClass:"objective"},[n("strong",[e._v(e._s(e.$t("resume.objective.header")))]),e._v(" "+e._s(e.$t("resume.objective.content"))+" ")]),n("h1",{attrs:{id:"header-summary"}},[e._v(e._s(e.$t("resume.summary.header")))]),n("p",[e._v(e._s(e.$t("resume.summary.content")))]),n("h1",{attrs:{id:"header-accomplishments"}},[e._v(e._s(e.$t("resume.accomplishments.header")))]),n("ul",e._l(e.accomplishments,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0),n("h1",{attrs:{id:"header-jobs"}},[e._v(e._s(e.$t("resume.jobs.header")))]),n("ul",{staticClass:"history"},e._l(e.jobs,(function(e){return n("job",{key:e.identifier,attrs:{job:e}})})),1),n("h1",{attrs:{id:"header-supporting-experience"}},[e._v(e._s(e.$t("resume.supporting_experience.header")))]),n("ul",e._l(e.supportingExperience,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0),n("h1",{attrs:{id:"header-education"}},[e._v(e._s(e.$t("resume.education.header")))]),n("ul",{staticClass:"history"},e._l(e.education,(function(e){return n("education",{key:e.identifier,attrs:{education:e}})})),1),n("p",{staticClass:"references"},[e._v("References available upon request.")])])},i=[],a=n("d4ec"),s=n("bee2"),c=n("257e"),o=n("262e"),u=n("2caf"),d=n("ade3"),b=(n("99af"),n("a15b"),n("d81d"),n("9ab4")),h=n("2b0e"),l=n("2fe1"),m=n("4bb5"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("h2",{domProps:{innerHTML:e._s(e.header)}}),n("p",[e._v(e._s(e.$t("resume.jobs.identifiers."+e.job.identifier+".description")))])])},j=[],p=n("1b40"),v=(n("0d03"),n("55b6"));function _(e){return v["a"].d(new Date(e,1),"yearOnly")}var y=function(e){Object(o["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;Object(a["a"])(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),Object(d["a"])(Object(c["a"])(e),"job",void 0),e}return Object(s["a"])(n,[{key:"header",get:function(){var e=this.timeRange,t=this.$t("resume.jobs.identifiers.".concat(this.job.identifier,".title")),n=this.$t("resume.jobs.identifiers.".concat(this.job.identifier,".company")),r=this.$t("resume.jobs.locations.".concat(this.job.location));return this.$t("resume.jobs.header_format",{timeRange:e,title:t,company:n,location:r})}},{key:"timeRange",get:function(){var e=_(this.job.startYear),t=this.job.endYear?_(this.job.endYear):this.$t("resume.present");return this.$t("resume.time_range",{start:e,end:t})}}]),n}(h["a"]);Object(b["a"])([Object(p["a"])({type:Object,required:!0})],y.prototype,"job",void 0),y=Object(b["a"])([l["b"]],y);var O=y,g=O,$=n("2877"),k=Object($["a"])(g,f,j,!1,null,null,null),w=k.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{domProps:{innerHTML:e._s(e.content)}})},L=[],R=n("9f55"),C=function(e){Object(o["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;Object(a["a"])(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),Object(d["a"])(Object(c["a"])(e),"education",void 0),e}return Object(s["a"])(n,[{key:"content",get:function(){var e=this.$t("resume.education.degree.".concat(this.education.degree)),t=this.concentrations,n=this.$t("resume.education.institution.".concat(this.education.institution,".name")),r=this.$t("resume.education.institution.".concat(this.education.institution,".location")),i=this.timeRange;return this.$t("resume.education.format",{degree:e,concentration:t,institution:n,location:r,timeRange:i})}},{key:"timeRange",get:function(){var e=_(this.education.startYear),t=this.education.endYear?_(this.education.endYear):this.$t("resume.present");return this.$t("resume.time_range",{start:e,end:t})}},{key:"concentrations",get:function(){var e=this,t=this.education.concentrations.map((function(t){return e.$t("resume.education.concentration.".concat(t))}));return Object(R["a"])(t)}}]),n}(h["a"]);Object(b["a"])([Object(p["a"])({type:Object,required:!0})],C.prototype,"education",void 0),C=Object(b["a"])([l["b"]],C);var E=C,P=E,Y=(n("eb87"),Object($["a"])(P,x,L,!1,null,null,null)),A=Y.exports,M=function(e){Object(o["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;Object(a["a"])(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),Object(d["a"])(Object(c["a"])(e),"jobs",void 0),Object(d["a"])(Object(c["a"])(e),"education",void 0),e}return Object(s["a"])(n,[{key:"addressLine1",get:function(){var e=this.addressParts(["street","city","zip","country"]);return e.join(" | ")}},{key:"addressLine2",get:function(){var e=this.addressParts(["phone","email"]);return e.join(" | ")}},{key:"addressParts",value:function(e){var t=this;return e.map((function(e){return t.$te("resume.address.".concat(e))?t.$t("resume.address.".concat(e)):t.$t("resume.address.omitted")}))}},{key:"accomplishments",get:function(){return this.$t("resume.accomplishments").content}},{key:"supportingExperience",get:function(){return this.$t("resume.supporting_experience").content}}]),n}(h["a"]);Object(b["a"])([m["a"]],M.prototype,"jobs",void 0),Object(b["a"])([m["a"]],M.prototype,"education",void 0),M=Object(b["a"])([Object(l["b"])({components:{Job:w,Education:A}})],M);var T=M,q=T,H=(n("affb"),n("bf46"),Object($["a"])(q,r,i,!1,null,"5442214e",null));t["default"]=H.exports},"9f3e":function(e,t,n){},a15b:function(e,t,n){"use strict";var r=n("23e7"),i=n("44ad"),a=n("fc6a"),s=n("a640"),c=[].join,o=i!=Object,u=s("join",",");r({target:"Array",proto:!0,forced:o||!u},{join:function(e){return c.call(a(this),void 0===e?",":e)}})},affb:function(e,t,n){"use strict";n("9f3e")},bf46:function(e,t,n){"use strict";n("cb17")},c00b:function(e,t,n){},cb17:function(e,t,n){},eb87:function(e,t,n){"use strict";n("c00b")}}]);
//# sourceMappingURL=resume.6c071c24.js.map