(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{13:function(e,t,a){},18:function(e,t,a){},21:function(e,t,a){e.exports=a(34)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),s=a.n(l),o=a(5),c=a(7),i=a.n(c),m=a(9),u=a(8),h=a(1);a(13);var p=function(){return r.a.createElement("div",{className:"home-div"},r.a.createElement("h2",null,"Know your Vote :  Home"),r.a.createElement("p",null,"Here you can search for the 535 members of the two chambers of Congress.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"constit-quote"},'"All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives." '),r.a.createElement("br",null),r.a.createElement("br",null),"The House and Senate are equal partners in the legislative process\u2014legislation cannot be enacted without the consent of both chambers. However, the Constitution grants each chamber some unique powers. The Senate ratifies treaties and approves presidential appointments while the House initiates revenue-raising bills. The House initiates impeachment cases, while the Senate decides impeachment cases."),r.a.createElement("br",null),r.a.createElement("h4",null,"Why does it matter?"),r.a.createElement("p",null,"Most incumbents seek re-election, and their historical likelihood of winning subsequent elections exceeds 90 percent. We need to know how our reps use the power we give them as voters and gain a better understanding of their interactions with so-called intermediary institutions such as political parties, civic associations, interest groups, and the mass media, to ensure we continue to elect adequate local representation to the federal government of our congressional districts by House reps and state's at-large representation by senators."),r.a.createElement("br",null),r.a.createElement("h4",null,"The Senate"),r.a.createElement("p",null,"Each state, regardless of population or size, has two senators: 100 senators representing the 50 states. Each senator is elected at-large in their state for a six-year term, with terms staggered, so every two years approximately one-third of the Senate is up for election."),r.a.createElement(o.b,{className:"nav-options",to:"/senate"},"Search Senators"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"The House"),r.a.createElement("p",null,"The members of the House of Representatives serve two-year terms representing the people of a single constituency, known as a district. Congressional districts are apportioned to states by population using the United States Census results, provided that each state has at least one congressional representative."),r.a.createElement(o.b,{className:"nav-options",to:"/house"}," Search House Reps"),r.a.createElement("br",null))};var d=function(){return r.a.createElement("div",{className:"about-div"},r.a.createElement("h4",null,"What do we do?"),r.a.createElement("p",null,"We set out to build an app that would help people, and voters, in particular, understand the important of civic action, and better know who represents them both in the Senate and in the House of Representatives."),r.a.createElement("br",null),r.a.createElement("h4",null,"Where do we get this information?"),r.a.createElement("p",null,"The list of Congress members as well as their information and external links are proided by ProPublica API (Application Programming Interface) made available to developers."),r.a.createElement("br",null),r.a.createElement("hr",{className:"separator"}),r.a.createElement("h4",null,"About ProPublica"),r.a.createElement("p",null,"ProPublica is an independent nonprofit newsroom that produces investigative journalism in the public interest. In 2010, it became the first online news source to win a Pulitzer Prize.",r.a.createElement("br",null),"ProPublica's Congress API provides access to legislative data from the House of Representatives, the Senate, and the Library of Congress. The API, which originated at The New York Times in 2009, includes details about members, votes, bills, nominations and other aspects of congressional activity."))};a(18);var b=function(e){return r.a.createElement("div",{className:"search-div"},r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("label",null,"Search by State"),r.a.createElement("input",{className:"search-input",id:"state-search-input",type:"text",value:e.stateSearch,onChange:e.handleChange}),r.a.createElement("input",{id:"submit-search",type:"submit",value:e.value})))};var E=function(e){var t=e.stateResults.map((function(e,t){return r.a.createElement("div",{key:e.id,className:"".concat("D"===e.party?"dem":"rep")},r.a.createElement(o.b,{to:"/member/"+e.id},r.a.createElement("h4",null,e.name),r.a.createElement("p",null,e.role,", ",e.party,r.a.createElement("br",null),"".concat(e.district?"District ".concat(e.district):" "))))}));return r.a.createElement("div",{className:"results-div"},r.a.createElement("h3",null,"Congress Members"),r.a.createElement("div",{className:"search-results"},t))};var v=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),l=a[0],s=a[1],o=Object(n.useState)("display"),c=Object(u.a)(o,2),h=c[0],p=c[1],d=Object(n.useState)("hidden"),b=Object(u.a)(d,2),E=b[0],v=b[1],f=function(){var t=Object(m.a)(i.a.mark((function t(){var a,n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.memberID),t.next=3,fetch("https://api.propublica.org/congress/v1/members/".concat(e.memberID,"/bills/introduced.json"),{dataType:"json",headers:{"X-API-Key":"ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE"}});case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,console.log("bills api data -",n),r=n.results[0].bills,console.log("bills Array -",r),s(r);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();console.log("billsList -",l);var g=l.map((function(e,t){return r.a.createElement("div",{key:e.bill_id},r.a.createElement("h4",null,e.committees,r.a.createElement("br",null),"Introduced on: ",e.introduced_date),r.a.createElement("p",{className:"bill-subject"},e.primary_subject),r.a.createElement("p",{className:"short-title"},e.short_title),r.a.createElement("p",{className:"bill-summary"},e.summary?"".concat(e.summary):"Bill Summary Unavailable"),r.a.createElement("a",{className:"bill-link",target:"_blank",rel:"noopener noreferrer",href:"".concat(e.congressdotgov_url)},"Read more"),r.a.createElement("hr",null))}));return r.a.createElement("div",{className:"member-bills"},r.a.createElement("button",{className:"".concat(h),onClick:function(){console.log("Expanding Bills Section"),f(),p("hidden"),v("shown")}},"Show Sponsored Bills"),r.a.createElement("button",{className:"".concat(E),onClick:function(){console.log("Hiding Bills Section"),p("display"),v("hidden")}},"Hide Sponsored Bills"),r.a.createElement("div",{className:"".concat(E)},g))};a(32);var f=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),l=a[0],s=a[1],o=Object(n.useState)({}),c=Object(u.a)(o,2),h=c[0],p=c[1];Object(n.useEffect)((function(){(function(){var t=Object(m.a)(i.a.mark((function t(){var a,n,r,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,fetch("https://api.propublica.org/congress/v1/members/".concat(e.match.params.id,".json"),{dataType:"json",headers:{"X-API-Key":"ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE"}});case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,r=n.results[0],l=n.results[0].roles[0],s(r),p(l);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var d=function(e){return"D"===e?"Democrat":"R"===e?"Republican":"Other"};d();var b=l.id;return console.log("memberID -",b),console.log("memberDetails -",l),console.log("memberRole -",h),r.a.createElement("div",{className:"member-info"},r.a.createElement("h3",{id:"member-name"},h.short_title," ",l.first_name," ",l.last_name),r.a.createElement("p",null,d(l.current_party),r.a.createElement("br",null),"In role since: ",h.start_date,r.a.createElement("br",null),"Next election: ",h.next_election),r.a.createElement("br",null),r.a.createElement("div",{className:"member-links"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(l.url)},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-globe"},r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),r.a.createElement("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})),"Visit their page "),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(h.contact_form)},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-mail"},r.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.a.createElement("polyline",{points:"22,6 12,13 2,6"})),"Contact Form "),r.a.createElement("br",null),r.a.createElement("a",{href:""},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-phone"},r.a.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})),h.phone," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.twitter.com/".concat(l.twitter_account)},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-twitter"},r.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})),"Twitter"),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/".concat(l.facebook_account)},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-facebook"},r.a.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})),"Facebook"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(l.times_topics_url)},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text"},r.a.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),r.a.createElement("polyline",{points:"14 2 14 8 20 8"}),r.a.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),r.a.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),r.a.createElement("polyline",{points:"10 9 9 9 8 9"})),"Related Times Articles")),r.a.createElement("br",null),r.a.createElement(v,{memberID:b}),r.a.createElement("p",{id:"updated"}," Last updated: ",l.last_updated))};var g=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)([]),c=Object(u.a)(s,2),v=c[0],g=c[1],w=function(e){console.log("Handling state entry",e);var t=e.target.value;l(t)},y=function(){var e=Object(m.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.propublica.org/congress/v1/members/senate/".concat(a,"/current.json"),{dataType:"json",headers:{"X-API-Key":"ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.results,console.log(r),g(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){e.preventDefault(),console.log("Senators search submitted"),y(),l("")},S=function(){var e=Object(m.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.propublica.org/congress/v1/members/house/".concat(a,"/current.json"),{dataType:"json",headers:{"X-API-Key":"ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.results,console.log(r),g(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(e){e.preventDefault(),console.log("House Reps search submitted"),S(),l("")};return r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("h1",null,"Know your Vote")),r.a.createElement(o.b,{to:"/senate",className:"dropdown-item nav-options",id:"nav-search"},"Senate"),r.a.createElement("img",{src:"https://i.imgur.com/2GuvUqT.png",alt:"Congress Illustration"}),r.a.createElement(o.b,{to:"/house",className:"dropdown-item nav-options",id:"nav-search"},"House"),r.a.createElement(o.b,{to:"/about",className:"dropdown-item nav-options",id:"nav-about"},"About")),r.a.createElement("main",null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:p}),r.a.createElement(h.b,{path:"/about",component:d}),r.a.createElement(h.b,{path:"/senate",render:function(e){return r.a.createElement("div",null,r.a.createElement(b,Object.assign({},e,{handleChange:w,handleSubmit:k,stateSearch:a,value:"Seach Senators"})),v?r.a.createElement(E,Object.assign({},e,{stateResults:v,stateSearch:a})):r.a.createElement("h4",null,"Please enter a valid two-letter state abbriviation."))}}),r.a.createElement(h.b,{path:"/house",render:function(e){return r.a.createElement("div",null,r.a.createElement(b,Object.assign({},e,{handleChange:w,handleSubmit:j,stateSearch:a,value:"Seach House Reps"})),v?r.a.createElement(E,Object.assign({},e,{stateResults:v,stateSearch:a})):r.a.createElement("h4",null,"Please enter a valid two-letter state abbriviation."))}}),r.a.createElement(h.b,{path:"/member/:id",render:function(e){return r.a.createElement(f,e)}}),r.a.createElement(h.b,{path:"*",render:function(){return r.a.createElement(h.a,{to:"/home"})}}))))};a(33);s.a.render(r.a.createElement(o.a,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7ecfaf5b.chunk.js.map