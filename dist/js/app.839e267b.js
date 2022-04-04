(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"23fe":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("div",{staticClass:"container mx-auto px-5"},[a("Intro"),a("AboutMe"),a("Experience"),a("Work"),a("contact")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex justify-center sm:justify-end px-5 sm:px-10 py-5 w-full fixed bg-[#071425] mx-auto"},[a("div",{staticClass:"sm:space-x-10 space-x-2"},[a("a",{staticClass:"hover:textOrange hover:border-b hover:border-colorOrange cursor-pointer",attrs:{href:"#about"}},[t._v(" About")]),a("a",{staticClass:"hover:textOrange hover:border-b hover:border-colorOrange cursor-pointer",attrs:{href:"#Exp"}},[t._v(" Experience")]),a("a",{staticClass:"hover:textOrange hover:border-b hover:border-colorOrange cursor-pointer",attrs:{href:"#Work"}},[t._v(" Project")]),a("a",{staticClass:"hover:textOrange hover:border-b hover:border-colorOrange cursor-pointer",attrs:{href:"#Contact"}},[t._v(" Contact")])])])}],l={name:"navBar"},c=l,p=a("2877"),d=Object(p["a"])(c,r,o,!1,null,"33d95fa8",null),u=d.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wow rollIn min-h-[100vh] flex items-start justify-center flex-col max-w-[1000px] mx-auto space-y-10",attrs:{"data-wow-duration":"1s"}},[a("div",{staticClass:"textOrange"},[t._v("Hi, my name is")]),a("div",{staticClass:"text-3xl sm:text-7xl"},[t._v("Li Wai Kiu , Kevin Li")]),a("div",{staticClass:"text-3xl sm:text-7xl text-[#868686]"},[t._v("Front End Developer")]),a("div",{staticClass:"text-lg text-[#868686] max-w-[600px]",staticStyle:{"line-height":"35px"}},[t._v(" I'm a programmer who specializes in front-end development. At the moment, I'm concentrating on Vue.js and React. ")])])}],x=a("bc1b"),g={name:"Intro",mounted:function(){var t=new x["WOW"]({offset:100,live:!1});t.init()}},m=g,b=Object(p["a"])(m,f,v,!1,null,"66d4a99e",null),_=b.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wow fadeInLeft max-w-[1000px] mx-auto pt-24 pb-24",attrs:{"data-wow-offset":"100","data-wow-duration":"1.5s",id:"about"}},[a("div",{staticClass:"textOrange text-4xl mb-24 font-bold"},[t._v("About Me")]),a("div",{staticClass:"flex flex-wrap flex-row"},t._l(t.list,(function(e,n){return a("div",{key:"list"+n,staticClass:"flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 mb-10 px-2"},[a("span",{staticClass:"material-icons-outlined !text-[120px] border-4 border-colorOrange rounded-xl p-5 mb-5"},[t._v(" "+t._s(e.icon)+" ")]),a("span",{staticClass:"text-2xl mb-2 font-bold"},[t._v(" "+t._s(e.title)+" ")]),a("span",{staticClass:"px-3 text-center"},[t._v(" "+t._s(e.text)+" ")])])})),0),a("p",[t._v(" I work as a Front-End Developer in Hong Kong. I'm regarding effective animations and creating dynamic user experiences. ")]),a("br"),a("p",[t._v(" I have a BSc (Hons) in Applied Sciences (Information Systems and Web Technologies) from The Hong Kong Polytechnic University's School of Professional Education and Executive Development. ")]),a("br"),a("p",[t._v(" During my time at university, I had many opportunities from various IT companies and gained some work experience from them. In addition, I became a well-organized person, a problem solver, an independent employee with a keen eye for detail. ")]),a("br"),a("p",[t._v(" I am proficient with a wide range of tools. I'll usually be digging into Vue, architecting CSS in and out of JavaScript, or orchestrating slick animations with Animate.css. I am also interested in the entire frontend spectrum and working on ambitious projects with like-minded people. ")]),a("br"),a("p",[t._v("I eagerly await the opportunity to meet with you!")])])},w=[],C={name:"AboutMe",components:{},mounted:function(){var t=new x["WOW"]({live:!1});t.init()},data:function(){return{list:[{title:"High-Speeed",text:"My top priority is fast load times and lag-free interaction.",icon:"rocket"},{text:"Websites don't have to be static, I adore animating them to bring them to life.",icon:"dynamic_feed",title:"Dynamic"},{text:"Strong affinity for user-friendly, intuitive UX/UI.",icon:"psychology",title:"Intuitive"},{text:"My designs will work on any device, no matter how large or small.",icon:"phonelink",title:"Responsive"}],progressList:[{title:"HTML",percentage:80},{title:"CSS",percentage:70},{title:"JavaScript",percentage:80},{title:"VueJs",percentage:80},{title:"React",percentage:40},{title:"TailWind CSS",percentage:60},{title:"NodeJs",percentage:50},{title:"Express",percentage:40},{title:"MongoDB",percentage:35}]}}},y=C,S=(a("fd8d"),Object(p["a"])(y,h,w,!1,null,"73da2598",null)),O=S.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wow fadeInLeft max-w-[1000px] mx-auto pt-24 pb-24",attrs:{"data-wow-offset":"100","data-wow-duration":"1.5s",id:"Exp"}},[a("div",{staticClass:"textOrange text-4xl mb-24 font-bold"},[t._v("Work Experience")]),a("div",{staticClass:"flex flex-wrap sm:flex-nowrap",staticStyle:{gap:"64px"}},[a("div",{staticClass:"w-full sm:w-2/3"},[a("div",{staticClass:"flex"},t._l(t.infoList,(function(e,n){return a("div",{key:"infoList"+n,staticClass:"w-1/2 flex flex-row flex-grow border-colorOrange p-[10px] mb-10 cursor-pointer font-bold justify-center text-2xl",class:{border:t.isSelected===e.jobTitle,"border-b":t.isSelected!==e.jobTitle},on:{click:function(a){t.isSelected=e.jobTitle}}},[t._v(" "+t._s(e.jobTitle)+" ")])})),0),a("transition",{attrs:{name:"fade",mode:"out-in"}},["Fletrix"===t.isSelected?a("div",{key:"Fletrix",staticClass:"space-y-5"},[a("span",{staticClass:"text-xl"},[t._v(" Front End Developer (Intern) ")]),a("span",{staticClass:"textOrange text-xl"},[t._v(" @ Fletrix ")]),a("div",{staticClass:"text-[#868686]"},[t._v("Jun 2020 - March 2022")]),a("div",[a("ul",{staticClass:"list-disc list-inside space-y-5"},[a("li",[t._v(" Developed and maintained code for client websites primarily using "),a("span",{staticClass:"textOrange"},[t._v("Vue")]),t._v(" , "),a("span",{staticClass:"textOrange"},[t._v("HTML")]),t._v(" , "),a("span",{staticClass:"textOrange"},[t._v("CSS")]),t._v(" , "),a("span",{staticClass:"textOrange"},[t._v("Sass")]),t._v(" , "),a("span",{staticClass:"textOrange"},[t._v("JavaScript")]),t._v(" and "),a("span",{staticClass:"textOrange"},[t._v(" Node.JS")])]),a("li",[t._v(" Clients included "),a("span",{staticClass:"textOrange"},[t._v(" JobJobSend")]),t._v(" , "),a("span",{staticClass:"textOrange"},[t._v(" YMCA")]),t._v(" , "),a("span",{staticClass:"textOrange"},[t._v(" YK")]),t._v(" , "),a("span",{staticClass:"textOrange"},[t._v(" BeNature")])]),a("li",[t._v(" Sites were manually tested in a variety of browsers and mobile devices to ensure cross-browser compatibility and responsiveness. ")])])])]):t._e(),"Fletrix"!==t.isSelected?a("div",{key:"!Fletrix",staticClass:"space-y-5"},[a("span",{staticClass:"text-xl"},[t._v("Student Helper ")]),a("span",{staticClass:"textOrange text-xl"},[t._v(" @ Polyu Speed ")]),a("div",{staticClass:"text-[#868686]"},[t._v("Jan - July 2021")]),a("div",[a("ul",{staticClass:"list-disc list-inside space-y-5"},[a("li",[t._v(" Developed a website For "),a("span",{staticClass:"textOrange"},[t._v(" RCADMM Project")]),t._v(" in Speed. ")]),a("li",[t._v(" Primarily Using "),a("span",{staticClass:"textOrange"},[t._v("HTML")]),t._v(", "),a("span",{staticClass:"textOrange"},[t._v("CSS")]),t._v(", "),a("span",{staticClass:"textOrange"},[t._v("JavaScript")]),t._v(", "),a("span",{staticClass:"textOrange"},[t._v("Bootstrap")]),t._v(". ")])])])]):t._e()])],1),a("div",{staticClass:"w-full sm:w-1/3"},t._l(t.progressList,(function(t,e){return a("ProgressBar",{key:"progress"+e,staticClass:"mb-5",attrs:{title:t.title,percentage:t.percentage}})})),1)])])},k=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex w-full"},[a("div",{staticClass:"bg-[#5A17B1] pl-5",style:{width:t.percentage+"%"}},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"bg-gray-600 flex-grow"},[a("div",{staticClass:"text-right pr-5"},[t._v(t._s(t.percentage)+"%")])])])},M=[],E=(a("a9e3"),{name:"ProgressBar",props:{title:{type:String,default:"-"},percentage:{type:Number,default:50}}}),T=E,W=Object(p["a"])(T,I,M,!1,null,"7f11f7be",null),J=W.exports,A={name:"Experience",components:{ProgressBar:J},mounted:function(){var t=new x["WOW"]({live:!1});t.init()},data:function(){return{progressList:[{title:"HTML",percentage:80},{title:"CSS",percentage:70},{title:"JavaScript",percentage:80},{title:"VueJs",percentage:80},{title:"React",percentage:40},{title:"TailWind CSS",percentage:60},{title:"NodeJs",percentage:50},{title:"Express",percentage:40},{title:"MongoDB",percentage:35}],infoList:[{jobTitle:"Fletrix"},{jobTitle:"Speed Student Helper"}],isSelected:"Fletrix"}}},H=A,P=(a("6a03"),Object(p["a"])(H,j,k,!1,null,"28cfbffb",null)),B=P.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wow fadeInLeft max-w-[1000px] mx-auto pt-24 mb-24",attrs:{id:"Work","data-wow-duration":"1.5s","data-wow-offset":"100"}},[a("div",{staticClass:"textOrange text-4xl mb-24 font-bold"},[t._v("Project")]),t._l(t.contentList,(function(e,n){return a("div",{key:"content"+n,staticClass:"flex flex-row flex-wrap lg:flex-nowrap mb-10",staticStyle:{gap:"40px"}},[a("WorkCard",{staticClass:"flex-grow",attrs:{content:e}}),a("div",{staticClass:"space-y-10 py-3",staticStyle:{"line-height":"35px"}},[a("div",{staticClass:"font-bold text-xl"},[t._v(t._s(e.subTitle))]),a("div",{staticStyle:{"font-size":"18px"}},[t._v(t._s(e.content))])])],1)}))],2)},D=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col shadow-2xl border-colorOrange border lg:min-w-[420px] min-w-[320px]"},[a("div",{staticClass:"bg-[#5A17B1] p-3 font-bold text-xl text-center",attrs:{id:"title"}},[t._v(" "+t._s(t.content.title)+" ")]),a("div",{staticClass:"p-3"},[a("div",{staticClass:"mb-8",attrs:{id:"photo"}},[a("transition",{attrs:{name:"flip",mode:"out-in"}},[a("img",{key:t.isHover?t.content.logo2:t.content.logo,staticClass:"transition-all",staticStyle:{height:"200px",width:"100%"},attrs:{src:t.isHover?t.content.logo2:t.content.logo},on:{mouseover:function(e){t.isHover=!0},mouseleave:function(e){t.isHover=!1}}})])],1),a("div",{attrs:{id:"tag"}},[a("div",{staticClass:"flex items-center flex-wrap",staticStyle:{gap:"8px"}},[a("span",{staticClass:"material-icons-outlined"},[t._v(" tag ")]),t._l(t.content.tag,(function(e,n){return a("span",{key:"tag"+n,staticClass:"bg-[#5A17B1] p-2 rounded-full min-w-[60px] text-center"},[t._v(t._s(e))])}))],2)])])])},F=[],R={name:"WorkCard",data:function(){return{isHover:!1}},props:{content:{type:Object}}},N=R,V=(a("becf"),Object(p["a"])(N,$,F,!1,null,"40df7670",null)),U=V.exports,K={name:"Work",components:{WorkCard:U},mounted:function(){var t=new x["WOW"]({live:!1});t.init()},data:function(){return{contentList:[{title:"Responsive Web App",subTitle:"JobJobSend",logo:"jobjobsend.svg",logo2:"jobjobsend2.png",tag:["Vue","Html","Css","JavaScript","Team"],content:"JobJobSend is a Web app that allows users to remark on any corporate position, such as wage and colleague. I'm in charge of the user interface of the program, and I'm decorating it with the help of the Element UI framework. In addition, I developed a number of components, such as a card and a progress bar, and I am currently working on a dialog box that will allow users to express their opinions on the firm. "},{title:"Admin Panel",subTitle:"BeNature",logo:"benature.png",tag:["Vue","Html","Css","JavaScript","Team"],logo2:"benature2.png",content:"BeNature is a hair salon that offers herbal hair colouring treatments to its customers, as well as other services. I am in charge of the salon's administration panel, which assists the salon's administrator or employer in managing their customer service, such as the booking system and the Eshop for the products they offer."},{title:"Website",subTitle:"Polyu Speed",logo:"RCADMM.png",logo2:"RCADMM2.png",tag:["Html","Css","JavaScript","Individual"],content:"RCADMM is an abbreviation for Research Centre for New Design, Materials, and Manufacturing Technologies. Its mission is to develop engineering design and application of advanced materials that is safe, sustainable, and effective. My responsibilities include UI design for the RCADMM website, as well as the use of Bootstrap for responsive design."}]}}},z=K,Y=Object(p["a"])(z,L,D,!1,null,"1e61a1ba",null),X=Y.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-10 mx-auto max-w-[1000px] pt-24 pb-24",attrs:{id:"Contact"}},[a("div",{staticClass:"textOrange text-4xl mb-24 font-bold"},[t._v("Contact")]),a("div",{staticClass:"flex items-center gap-4"},[a("span",{staticClass:"material-icons-outlined"},[t._v(" phone_iphone ")]),t._v(" +852 60943313 ")]),a("div",{staticClass:"flex items-center gap-4"},[a("span",{staticClass:"material-icons-outlined"},[t._v(" email ")]),t._v(" kevinli8831@gmail.com ")])])}],Q={name:"Contact"},Z=Q,tt=Object(p["a"])(Z,q,G,!1,null,"2031c245",null),et=tt.exports,at={name:"App",components:{Contact:et,Work:X,Experience:B,AboutMe:O,Intro:_,NavBar:u}},nt=at,st=(a("034f"),Object(p["a"])(nt,s,i,!1,null,null,null)),it=st.exports;a("a766"),a("77ed"),a("c789");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(it)}}).$mount("#app")},"6a03":function(t,e,a){"use strict";a("8c14")},"846b":function(t,e,a){},"85ec":function(t,e,a){},"8c14":function(t,e,a){},a766:function(t,e,a){},becf:function(t,e,a){"use strict";a("23fe")},fd8d:function(t,e,a){"use strict";a("846b")}});
//# sourceMappingURL=app.839e267b.js.map