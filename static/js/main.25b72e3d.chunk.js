(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,t,a){e.exports={articlesDiv:"Articles_articlesDiv__24Dwq",article1:"Articles_article1__3hcvj",text1:"Articles_text1__2Q2-Q",items:"Articles_items__3lGmT",cross:"Articles_cross__2ytGN",article2:"Articles_article2__TK0fr",part1:"Articles_part1__Rbo0c",slider:"Articles_slider__mS-B5",buttonRight:"Articles_buttonRight__3bHHk",text2:"Articles_text2__1orc2",title:"Articles_title__1AY4d",text:"Articles_text__rrMrz",apples:"Articles_apples__3lY2X"}},function(e,t,a){e.exports={divFormWrapper:"Form_divFormWrapper__2UsIg",formWrapper:"Form_formWrapper__1xbOG",formDiv1:"Form_formDiv1__3_kZJ",errorMessage:"Form_errorMessage__2rwjE",formDiv2:"Form_formDiv2__1wycV",checkboxes:"Form_checkboxes__1ppio",buttonForm:"Form_buttonForm__1-hPF",formResponse:"Form_formResponse__xLdrC"}},function(e,t,a){e.exports={header:"Header_header__3TQlB",logoDiv:"Header_logoDiv__1mHt_",title:"Header_title__p9xTk",name:"Header_name__JejpL",restaurant:"Header_restaurant__2-ta0",slider:"Header_slider__16mYz",menu:"Header_menu__UyHtN",line:"Header_line__BhuhG"}},,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/cafe-3537801_1920.688edae9.jpg"},function(e,t,a){e.exports=a.p+"static/media/wine-1761613_1920.263fa55f.jpg"},function(e,t,a){e.exports=a.p+"static/media/platter-2009590_1920.8b20604b.jpg"},function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(15),i=a.n(s),l=(a(24),a(7)),o=a(8),c=a(10),m=a(9),u=a(11),p=(a(25),a(16)),h=a.n(p),d=a(17),f=a.n(d),_=a(18),b=a.n(_),g=a(4),E=a.n(g),v=a(5),N=a(6),y=function(e){var t=e.changeMenu;return n.a.createElement("div",{className:E.a.header},n.a.createElement("div",{className:E.a.logoDiv},n.a.createElement("div",{className:E.a.title},n.a.createElement("span",{className:E.a.name},"BIG FAT FISH ")," restaurant"),n.a.createElement(N.a,{icon:v.c,onClick:t})),n.a.createElement("div",{className:E.a.restaurant},n.a.createElement("img",{src:h.a,alt:"mainPicture"}),n.a.createElement("img",{src:f.a,alt:"mainPicture2"}),n.a.createElement("img",{src:b.a,alt:"mainPicture3"})),n.a.createElement("div",{className:E.a.menu,id:"menu"},n.a.createElement("ul",null,n.a.createElement("li",null,"Home"),n.a.createElement("li",{className:E.a.line},"|"),n.a.createElement("li",null,"Form"),n.a.createElement("li",{className:E.a.line},"|"),n.a.createElement("li",null,"Contact"))))},w=a(2),x=a.n(w),k=function(e){var t=e.articles.map((function(e){return n.a.createElement("div",{key:e.id},n.a.createElement("div",{className:x.a.text2},n.a.createElement("p",{className:x.a.title},"".concat(e.title)),n.a.createElement("p",{className:x.a.text},"".concat(e.text))))}));return n.a.createElement("div",{className:x.a.articlesDiv},n.a.createElement("article",{className:x.a.article1},n.a.createElement("div",{className:x.a.text1},n.a.createElement("h1",null,"LOREM IPSUM"),n.a.createElement("p",{className:x.a.title1p},"Lorem ipsum dolor sit amet, em ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis auctor tellus. Ut id sapien augue. Pellentesque tincidunt urna in enim euismod dictum. Nunc metus nunc, pharetra quis risus tempor, imperdiet ultricies sapien. Nam vitae sagittis eros, in laoreet urna. Nulla vel egestas tellus. Morbi in dolor nec est porta viverra nec accumsan orci. Aliquam porttitor, quam in sodales pretium, ligula nulla faucibus sapien, quis tempor libero risus pellentesque massa. Nam rhoncus, nunc quis efficitur vulputate, orci diam tincidunt lorem, et placerat nibh metus in erat. Duis egestas erat a libero fermentum egestas."),n.a.createElement("p",{className:x.a.items},n.a.createElement("span",{className:x.a.cross},"x"),"Lorem ipsum dolor sit amet"),n.a.createElement("p",{className:x.a.items},n.a.createElement("span",{className:x.a.cross},"x"),"Class aptent taciti socioent per conubi, per inceptos himenaeos. "),n.a.createElement("p",{className:x.a.items},n.a.createElement("span",{className:x.a.cross},"x")," Aliquam massa lorem, porttitor congue tincidunt in"))),n.a.createElement("article",{className:x.a.article2},n.a.createElement("div",{className:x.a.part1},n.a.createElement("div",{className:x.a.slider},n.a.createElement(N.a,{icon:v.a,onClick:e.clickLeft}),n.a.createElement(N.a,{icon:v.b,onClick:e.clickRight})),t[e.counter])))},C=a(3),j=a.n(C),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={fields:{},errors:{},response:""},a.handleSubmit=function(e){e.preventDefault();var t=a.state.fields,r={},n=!0;if(t.name||(n=!1,r.name="Pole nie mo\u017ce by\u0107 puste"),"undefined"!==typeof t.name&&!1===!t.name&&(t.name.match(/^[\D]{3,}\s+[\D]{3,}$/)||(n=!1,r.name="Prosz\u0119 u\u017cy\u0107 jedynie liter we w\u0142a\u015bciwym formacie")),t.email||(n=!1,r.email="Pole nie mo\u017ce by\u0107 puste"),"undefined"!==typeof t.email&&!1===!t.email){var s=t.email.lastIndexOf("@"),i=t.email.lastIndexOf(".");s<i&&s>0&&-1===t.email.indexOf("@@")&&i>2&&t.email.length-i>2||(n=!1,r.email="Prosz\u0119 wpisa\u0107 email we w\u0142a\u015bciwym formacie")}return t.telephone||(n=!1,r.telephone="Pole nie mo\u017ce by\u0107 puste"),"undefined"!==typeof t.telephone&&!1===!t.telephone&&(t.telephone.match(/^[0-9]{9}$/)||(n=!1,r.telephone="Prosz\u0119 wpisa\u0107 numer telefonu w formacie 9 cyfr")),t.post||(n=!1,r.post="Pole nie mo\u017ce by\u0107 puste"),"undefined"!==typeof t.post&&!1===!t.post&&(t.post.match(/^[0-9]{2}-[0-9]{3}$/)||(n=!1,r.post="Prosz\u0119 wpisa\u0107 kod pocztowy we w\u0142a\u015bciwym formacie")),t.place||(n=!1,r.place="Pole nie mo\u017ce by\u0107 puste"),"undefined"!==typeof t.place&&!1===!t.place&&(t.place.match(/^[\D]{3,}$/)||(n=!1,r.place="Prosz\u0119 wpisa\u0107 miejscowo\u015b\u0107 u\u017cywaj\u0105c samych liter")),t.street||(n=!1,r.street="Pole nie mo\u017ce by\u0107 puste"),"undefined"!==typeof t.street&&!1===!t.street&&(t.street.match(/^[\D]{3,}$/)||(n=!1,r.street="Prosz\u0119 wpisa\u0107 nazw\u0119 ulicy u\u017cywaj\u0105c samych liter")),t.houseNumber||(n=!1,r.houseNumber="Pole nie mo\u017ce by\u0107 puste"),"undefined"!==typeof t.houseNumber&&!1===!t.houseNumber&&(t.houseNumber.match(/^[0-9]{1,}$/)||(n=!1,r.houseNumber="Prosz\u0119 wpisa\u0107 w\u0142a\u015bciwy numer domu")),t.houseNumber2||(n=!1,r.houseNumber2="Pole nie mo\u017ce by\u0107 puste"),"undefined"!==typeof t.houseNumber2&&!1===!t.houseNumber2&&(t.houseNumber2.match(/^[0-9]{1,}$/)||(n=!1,r.houseNumber2="Prosz\u0119 wpisa\u0107 w\u0142a\u015bciwy numer lokalu")),a.setState({errors:r}),n&&a.setState({response:"FORMULARZ ZOSTA\u0141 WYS\u0141ANY!"}),n},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e,t){var a=this.state.fields;a[e]=t.target.value,console.log(t.target.value),this.setState({fields:a}),console.log(a)}},{key:"render",value:function(){return n.a.createElement("div",{className:j.a.divFormWrapper},n.a.createElement("p",null,"wype\u0142nij formularz"),n.a.createElement("form",{className:j.a.formWrapper,onSubmit:this.handleSubmit},n.a.createElement("div",{className:j.a.formDiv1},n.a.createElement("input",{type:"text",ref:"name",size:"40",placeholder:"* Imi\u0119 i nazwisko",value:this.state.fields.name,onChange:this.handleChange.bind(this,"name")}),n.a.createElement("span",{className:j.a.errorMessage},this.state.errors.name),n.a.createElement("input",{type:"email",name:"email",placeholder:"* E-mail",value:this.state.fields.email,onChange:this.handleChange.bind(this,"email")}),n.a.createElement("span",{className:j.a.errorMessage},this.state.errors.email),n.a.createElement("input",{type:"telephone",name:"telephone",placeholder:"* Nr telefonu",value:this.state.fields.telephone,onChange:this.handleChange.bind(this,"telephone")}),n.a.createElement("span",{className:j.a.errorMessage},this.state.errors.telephone),n.a.createElement("input",{type:"text",name:"post",placeholder:"* Kod pocztowy",value:this.state.fields.post,onChange:this.handleChange.bind(this,"post")}),n.a.createElement("span",{className:j.a.errorMessage},this.state.errors.post)),n.a.createElement("div",{className:j.a.formDiv2},n.a.createElement("input",{type:"text",name:"place",placeholder:"* Miejscowo\u015b\u0107",value:this.state.fields.place,onChange:this.handleChange.bind(this,"place")}),n.a.createElement("span",{className:j.a.errorMessage},this.state.errors.place),n.a.createElement("input",{type:"text",name:"street",placeholder:"* Ulica",value:this.state.fields.street,onChange:this.handleChange.bind(this,"street")}),n.a.createElement("span",{className:j.a.errorMessage},this.state.errors.street),n.a.createElement("input",{type:"text",name:"houseNumber",placeholder:"* Nr domu",value:this.state.fields.houseNumber,onChange:this.handleChange.bind(this,"houseNumber")}),n.a.createElement("span",{className:j.a.errorMessage},this.state.errors.houseNumber),n.a.createElement("input",{type:"text",name:"houseNumber2",placeholder:" Nr lokalu",value:this.state.fields.houseNumber2,onChange:this.handleChange.bind(this,"houseNumber2")}),n.a.createElement("span",{className:j.a.errorMessage},this.state.errors.houseNumber2)),n.a.createElement("div",{className:j.a.checkboxes},n.a.createElement("p",null,"* pola wymagane"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna ante, pretium eget aliquam quis, ultricies in risus. Phasellus et lorem sem. Nullam at lorem sit amet purus consectetur vestibulum non pellentesque ligula. Curabitur dictum libero vitae nulla lobortis efficitur id vitae enim. ")),n.a.createElement("div",{className:j.a.buttonForm}," ",n.a.createElement("button",{type:"submit"},"Wy\u015blij formularz"))),n.a.createElement("p",{className:j.a.formResponse},this.state.response))}}]),t}(r.Component),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={articles:[],counter:0,response:"",checked:[!1,!1,!1]},a.handleChandleMenu=function(){document.querySelector("#menu").classList.toggle("hide")},a.handleToTheRight=function(){9===a.state.counter?a.setState({counter:0}):a.setState({counter:a.state.counter+1})},a.handleToTheLeft=function(){0===a.state.counter?a.setState({counter:9}):a.setState({counter:a.state.counter-1})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){fetch("https://my-json-server.typicode.com/monikafac/articles/db").then((function(e){if(e.ok)return e;throw Error("B\u0142\u0105d!")})).then((function(e){return e.json()})).then((function(t){var a=t.articles;e.setState((function(e){return{articles:e.articles.concat(a)}}))})).catch((function(e){return console.log(e)}))}),0)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{changeMenu:this.handleChandleMenu}),n.a.createElement(k,{clickLeft:this.handleToTheLeft,clickRight:this.handleToTheRight,articles:this.state.articles,counter:this.state.counter}),n.a.createElement(P,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[19,1,2]]]);
//# sourceMappingURL=main.25b72e3d.chunk.js.map