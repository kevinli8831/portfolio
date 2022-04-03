(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},3443:function(t,e,n){"use strict";n("ac91")},"3fbe":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("div",{staticClass:"container mx-auto px-5"},[n("Intro"),n("AboutMe"),n("Experience"),n("Work")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center sm:justify-end px-5 sm:px-10 py-5 w-full fixed bg-[#071425] mx-auto"},[n("div",{staticClass:"sm:space-x-10 space-x-2"},[n("a",{staticClass:"hover:textOrange hover:border-b hover:border-colorOrange cursor-pointer",attrs:{href:"#about"}},[t._v(" About")]),n("a",{staticClass:"hover:textOrange hover:border-b hover:border-colorOrange cursor-pointer",attrs:{href:"#Exp"}},[t._v(" Experience")]),n("a",{staticClass:"hover:textOrange hover:border-b hover:border-colorOrange cursor-pointer",attrs:{href:"#Work"}},[t._v(" Work")]),n("a",{staticClass:"hover:textOrange hover:border-b hover:border-colorOrange cursor-pointer",attrs:{href:"#Contact"}},[t._v(" Contact")])])])}],l={name:"navBar"},c=l,p=n("2877"),u=Object(p["a"])(c,r,o,!1,null,"3ea34008",null),d=u.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wow bounceInDown min-h-[100vh] flex items-start justify-center flex-col max-w-[1000px] mx-auto space-y-10"},[n("div",{staticClass:"textOrange"},[t._v("Hi, my name is")]),n("div",{staticClass:"text-3xl sm:text-7xl"},[t._v("Li Wai Kiu , Kevin Li")]),n("div",{staticClass:"text-3xl sm:text-7xl text-[#868686]"},[t._v("Front End Developer")]),n("div",{staticClass:"text-lg text-[#868686] max-w-[600px]"},[t._v(" I'm a programmer who specializes in front-end development. At the moment, I'm concentrating on Vue.js and React. ")])])}],g=n("bc1b"),x={name:"Intro",mounted:function(){var t=new g["WOW"]({offset:100,live:!1});t.init()}},m=x,b=Object(p["a"])(m,v,f,!1,null,"cb274a32",null),_=b.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wow fadeInLeft max-w-[1000px] mx-auto pt-24 pb-24",attrs:{"data-wow-offset":"100",id:"about"}},[n("div",{staticClass:"textOrange text-4xl mb-24"},[t._v("About Me")]),n("div",{staticClass:"flex flex-wrap flex-row"},t._l(t.list,(function(e,a){return n("div",{key:"list"+a,staticClass:"flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 mb-10 px-2"},[n("span",{staticClass:"material-icons-outlined !text-[120px] border border-colorOrange rounded-xl p-5 mb-5"},[t._v(" "+t._s(e.icon)+" ")]),n("span",{staticClass:"text-2xl mb-2"},[t._v(" "+t._s(e.title)+" ")]),n("span",{staticClass:"px-3 text-center"},[t._v(" "+t._s(e.text)+" ")])])})),0),n("p",[t._v(" I work as a Front-End Developer in Hong Kong. I'm regarding effective animations and creating dynamic user experiences. ")]),n("p",[t._v(" I have a BSc (Hons) in Applied Sciences (Information Systems and Web Technologies) from The Hong Kong Polytechnic University's School of Professional Education and Executive Development. ")]),n("p",[t._v(" During my time at university, I had many opportunities from various IT companies and gained some work experience from them. In addition, I became a well-organized person, a problem solver, an independent employee with a keen eye for detail. ")]),n("p",[t._v(" I am proficient with a wide range of tools. I'll usually be digging into Vue, architecting CSS in and out of JavaScript, or orchestrating slick animations with Animate.css. I am also interested in the entire frontend spectrum and working on ambitious projects with like-minded people. ")]),n("p",[t._v("I eagerly await the opportunity to meet with you!")])])},h=[],y={name:"AboutMe",components:{},mounted:function(){var t=new g["WOW"]({live:!1});t.init()},data:function(){return{list:[{title:"Fast",text:"My top priority is fast load times and lag-free interaction.",icon:"rocket"},{text:"Websites don't have to be static; I adore animating them to bring them to life.",icon:"dynamic_feed",title:"Dynamic"},{text:"Strong affinity for user-friendly, intuitive UX/UI.",icon:"psychology",title:"Intuitive"},{text:"My designs will work on any device, no matter how large or small.",icon:"phonelink",title:"Responsive"}],progressList:[{title:"HTML",percentage:80},{title:"CSS",percentage:70},{title:"JavaScript",percentage:80},{title:"VueJs",percentage:80},{title:"React",percentage:40},{title:"TailWind CSS",percentage:60},{title:"NodeJs",percentage:50},{title:"Express",percentage:40},{title:"MongoDB",percentage:35}]}}},w=y,O=(n("658f"),Object(p["a"])(w,C,h,!1,null,"26c56a0a",null)),S=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wow fadeInLeft max-w-[1000px] mx-auto pt-24 pb-24",attrs:{"data-wow-offset":"100",id:"Exp"}},[n("div",{staticClass:"textOrange text-4xl mb-24"},[t._v("Work Experience")]),n("div",{staticClass:"flex flex-wrap sm:flex-nowrap gap-5"},[n("div",{staticClass:"w-full sm:w-2/3"},[n("div",{staticClass:"flex"},t._l(t.infoList,(function(e,a){return n("div",{key:"infoList"+a,staticClass:"w-1/2 flex flex-row flex-grow text-center border-colorOrange p-[10px] mb-10 cursor-pointer",class:{border:t.isSelected===e.jobTitle,"border-b":t.isSelected!==e.jobTitle},on:{click:function(n){t.isSelected=e.jobTitle}}},[t._v(" "+t._s(e.jobTitle)+" ")])})),0),n("transition",{attrs:{name:"fade",mode:"out-in"}},["Fletrix"===t.isSelected?n("div",{key:"Fletrix"},[n("span",{staticClass:"text-xl"},[t._v(" Front End Developer (Intern) ")]),n("span",{staticClass:"textOrange text-xl"},[t._v(" @ Fletrix ")]),n("div",{staticClass:"text-[#868686]"},[t._v("Jun 2020 - March 2022")]),n("div",[n("ul",{staticClass:"list-disc list-inside space-y-5"},[n("li",[t._v(" Developed and maintained code for client websites primarily using "),n("span",{staticClass:"textOrange"},[t._v("Vue")]),t._v(" , "),n("span",{staticClass:"textOrange"},[t._v("HTML")]),t._v(" , "),n("span",{staticClass:"textOrange"},[t._v("CSS")]),t._v(" , "),n("span",{staticClass:"textOrange"},[t._v("Sass")]),t._v(" , "),n("span",{staticClass:"textOrange"},[t._v("JavaScript")]),t._v(" and "),n("span",{staticClass:"textOrange"},[t._v(" Node.JS")])]),n("li",[t._v(" Clients included "),n("span",{staticClass:"textOrange"},[t._v(" JobJobSend")]),t._v(" , "),n("span",{staticClass:"textOrange"},[t._v(" YMCA")]),t._v(" , "),n("span",{staticClass:"textOrange"},[t._v(" YK")]),t._v(" , "),n("span",{staticClass:"textOrange"},[t._v(" BeNature")])]),n("li",[t._v(" Sites were manually tested in a variety of browsers and mobile devices to ensure cross-browser compatibility and responsiveness. ")])])])]):t._e(),"Fletrix"!==t.isSelected?n("div",{key:"!Fletrix"},[n("span",{staticClass:"text-xl"},[t._v("Student Helper ")]),n("span",{staticClass:"textOrange text-xl"},[t._v(" @ Polyu Speed ")]),n("div",{staticClass:"text-[#868686]"},[t._v("Jan - July 2021")]),n("div",[n("ul",{staticClass:"list-disc list-inside space-y-5"},[n("li",[t._v(" Developed a website For "),n("span",{staticClass:"textOrange"},[t._v(" RCADMM Project")]),t._v(" in Speed. ")]),n("li",[t._v(" Primarily Using "),n("span",{staticClass:"textOrange"},[t._v("HTML")]),t._v(", "),n("span",{staticClass:"textOrange"},[t._v("CSS")]),t._v(", "),n("span",{staticClass:"textOrange"},[t._v("JavaScript")]),t._v(", "),n("span",{staticClass:"textOrange"},[t._v("Bootstrap")]),t._v(". ")])])])]):t._e()])],1),n("div",{staticClass:"w-full sm:w-1/3"},t._l(t.progressList,(function(t,e){return n("ProgressBar",{key:"progress"+e,staticClass:"mb-5",attrs:{title:t.title,percentage:t.percentage}})})),1)])])},k=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex w-full"},[n("div",{staticClass:"relative z-0 bg-gray-600 w-full"},[n("div",{staticClass:"bg-colorOrange z-10 transition-all ease-in-out",style:{width:t.percentage+"%"}},[n("div",{staticClass:"w-[110px] flex justify-center bg-[#B44C02] z-20"},[t._v(" "+t._s(t.title)+" ")]),n("div",{staticClass:"absolute top-0 right-3"},[t._v(t._s(t.percentage)+"%")])])])])},I=[],M=(n("a9e3"),{name:"ProgressBar",props:{title:{type:String,default:"-"},percentage:{type:Number,default:50}}}),W=M,J=Object(p["a"])(W,E,I,!1,null,"66d6da81",null),H=J.exports,T={name:"Experience",components:{ProgressBar:H},mounted:function(){var t=new g["WOW"]({live:!1});t.init()},data:function(){return{progressList:[{title:"HTML",percentage:80},{title:"CSS",percentage:70},{title:"JavaScript",percentage:80},{title:"VueJs",percentage:80},{title:"React",percentage:40},{title:"TailWind CSS",percentage:60},{title:"NodeJs",percentage:50},{title:"Express",percentage:40},{title:"MongoDB",percentage:35}],infoList:[{jobTitle:"Fletrix"},{jobTitle:"Speed Student Helper"}],isSelected:"Fletrix"}}},L=T,P=(n("3443"),Object(p["a"])(L,j,k,!1,null,"cef8c0f6",null)),A=P.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-cols-1 grid gap-5 lg:grid-cols-2 xl:grid-cols-3"},t._l(t.contentList,(function(t,e){return n("WorkCard",{key:e,attrs:{content:t}})})),1)},D=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col shadow-2xl border-colorOrange border"},[n("div",{staticClass:"bg-[#B44C02] p-3 font-bold text-xl",attrs:{id:"title"}},[t._v(" "+t._s(t.content.title)+" ")]),n("div",{staticClass:"p-3"},[n("div",{staticClass:"mb-5",attrs:{id:"photo"}},[n("transition",{attrs:{name:"flip",mode:"out-in"}},[n("img",{key:t.isHover?t.content.logo2:t.content.logo,staticClass:"transition-all",staticStyle:{height:"200px",width:"100%"},attrs:{src:t.isHover?t.content.logo2:t.content.logo},on:{mouseover:function(e){t.isHover=!0},mouseleave:function(e){t.isHover=!1}}})])],1),n("div",{attrs:{id:"tag"}},[n("div",{staticClass:"flex items-center gap-2"},[n("span",{staticClass:"material-icons-outlined"},[t._v(" tag ")]),t._l(t.content.tag,(function(e,a){return n("span",{key:"tag"+a,staticClass:"bg-[#B44C02] p-2 rounded-full"},[t._v(t._s(e))])}))],2)]),n("div",{attrs:{id:"content"}},t._l(10,(function(e){return n("span",{key:e},[t._v("n")])})),0)])])},$=[],N={name:"WorkCard",data:function(){return{isHover:!1}},props:{content:{type:Object}}},R=N,V=(n("f4ac"),Object(p["a"])(R,F,$,!1,null,"786e81f3",null)),z=V.exports,K={name:"Work",components:{WorkCard:z},data:function(){return{contentList:[{title:"Responsive Web App",logo:"jobjobsend.svg",logo2:"jobjobsend2.png",tag:["Vue","Html","Css","JavaScript"],content:""},{title:"Admin Panel",logo:"benature.png",tag:["Vue","Html","Css","JavaScript"],logo2:"",content:""},{title:"Website",logo:"RCADMM.png",logo2:"",tag:["Html","Css","JavaScript"],content:""}]}}},U=K,Y=Object(p["a"])(U,B,D,!1,null,"6d420dbd",null),X=Y.exports,q={name:"App",components:{Work:X,Experience:A,AboutMe:S,Intro:_,NavBar:d}},G=q,Q=(n("034f"),Object(p["a"])(G,s,i,!1,null,null,null)),Z=Q.exports;n("a766"),n("77ed"),n("c789");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Z)}}).$mount("#app")},"658f":function(t,e,n){"use strict";n("73f1")},"73f1":function(t,e,n){},"85ec":function(t,e,n){},a766:function(t,e,n){},ac91:function(t,e,n){},f4ac:function(t,e,n){"use strict";n("3fbe")}});
//# sourceMappingURL=app.f9b6a848.js.map