(this.webpackJsonpnyfcwebsite=this.webpackJsonpnyfcwebsite||[]).push([[0],{104:function(e,t,s){},105:function(e,t,s){},106:function(e,t,s){},107:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(28),i=s.n(a),r=(s(60),s(10)),l=s(11),o=s(13),j=s(12),h=s(16),d=[{title:"Home",url:"/",cName:"nav-links"},{title:"About Us",url:"/aboutus",cName:"nav-links"},{title:"Exercises",url:"/exercises",cName:"nav-links"},{title:"Contact",url:"/contact",cName:"nav-links"},{title:"Career",url:"/career",cName:"nav-links"}],b=(s(61),s(0)),u=function(){return Object(b.jsxs)("nav",{className:"navbarItem",children:[Object(b.jsxs)(h.b,{to:"/",children:[Object(b.jsx)("i",{className:"fas fa-dumbbell"}),Object(b.jsx)("h1",{className:"navbar-logo",children:"NYFC"})]}),d.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))]})},m=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"navbar-item",children:Object(b.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(b.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})})}),this.state.clicked&&Object(b.jsx)("ul",{className:"nav-menu",children:d.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))})]})}}]),s}(n.Component),x=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={windowWidth:null},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){console.log(window.innerWidth),this.setState({windowWidth:window.innerWidth}),window.addEventListener("resize",this.onResize.bind(this))}},{key:"onResize",value:function(){console.log("on resize: ",window.innerWidth),this.setState({windowWidth:window.innerWidth})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize.bind(this))}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.state.windowWidth<760?Object(b.jsx)(m,{}):Object(b.jsx)(u,{})})}}]),s}(n.Component),O=s(3),p=(s(70),s(109)),v=function(){return Object(b.jsxs)("div",{className:"main-container",children:[Object(b.jsx)("video",{className:"main-video",src:"https://assets.mixkit.co/videos/preview/mixkit-man-exercising-with-the-barbell-at-the-gym-23457-large.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(b.jsxs)("div",{className:"main-textbox",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"main-headline",children:"Train Insane or Remain the Same"}),Object(b.jsx)("div",{className:"main-line"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"main-intro",children:"We work hard to maintain the values that we established in 1973, when we were just a small chain of squash clubs. We\u2019re consistently improving our offerings and services, and pride ourselves on creating connections with our members and delivering the most personalized fitness experiences possible."}),Object(b.jsx)(h.b,{to:"/aboutus",children:Object(b.jsx)(p.a,{type:"primary",className:"main-button",children:"Learn More"})})]})]})]})};s(72);var f=function(){return Object(b.jsxs)("div",{className:"footer-container",children:[Object(b.jsxs)("div",{className:"footer-container-content",children:[Object(b.jsx)("div",{className:"footer-intro-section",children:Object(b.jsx)("p",{children:"We work hard to maintain the values that we established in 1973, when we were just a small chain of squash clubs. We\u2019re consistently improving our offerings and services, and pride ourselves on creating connections with our members and delivering the most personalized fitness experiences possible."})}),Object(b.jsxs)("div",{className:"footer-icon-section",children:[Object(b.jsx)("p",{calssName:"footer-contact",children:"Follow Us"}),Object(b.jsx)("i",{className:"fab fa-facebook-square"}),Object(b.jsx)("i",{className:"fab fa-instagram"}),Object(b.jsx)("i",{className:"fab fa-linkedin"}),Object(b.jsx)("i",{className:"fab fa-twitter-square"}),Object(b.jsx)("p",{calssName:"footer-number",children:"1-212-123-4567"})]}),Object(b.jsxs)("section",{className:"footer-freetrial-section",children:[Object(b.jsx)("p",{className:"footer-free-headline",children:"Try us out! Enter your email for a free trial."}),Object(b.jsx)("div",{className:"input-place",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{className:"footer-input",type:"email",name:"email",placeholder:"Yor Email Here"}),Object(b.jsx)(p.a,{type:"primary",className:"free-button",children:"Go"})]})})]})]}),Object(b.jsx)("p",{className:"footer-copyright",children:"Copyright \xa9 2021 by NYFC, Inc."})]})};var g=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{}),Object(b.jsx)(f,{})]})},w=(s(73),function(){return Object(b.jsx)("div",{className:"about-container",children:Object(b.jsxs)("div",{className:"about-textbox",children:[Object(b.jsx)("h1",{className:"about-headline",children:"About Us"}),Object(b.jsx)("div",{className:"about-intro",children:Object(b.jsx)("p",{className:"about-text",children:"What began as an opportunity to bring the immensely popular sport of squash to the New York masses has evolved and expanded to a network of over 150 clubs catering to over half a million members across eight states and two countries (including Switzerland!). Dedicated to offering our members the best possible experience, we\u2019ve proudly been at the forefront of fitness for over four decades while still maintaining that familiar, neighborhood feel."})})]})})});var N=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{}),Object(b.jsx)(f,{})]})},y=(s(74),function(){return Object(b.jsx)("div",{className:"career-container",children:Object(b.jsxs)("div",{className:"career-textbox",children:[Object(b.jsx)("h1",{className:"career-headline",children:"Career"}),Object(b.jsx)("div",{className:"career-intro",children:Object(b.jsx)("p",{className:"career-text",children:"We\u2019ve got big plans for Blink\u2019s future and we want you to be a part of them. We understand the importance of continued training and education, so we\u2019re all about helping our employees develop core competencies and skills that can be used through their entire career. We\u2019re adding new locations and gaining members all the time, so new opportunities to grow are constantly popping up."})})]})})});var k=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(f,{})]})},U=(s(75),function(){return Object(b.jsx)("div",{className:"contact-container",children:Object(b.jsxs)("div",{className:"contact-textbox",children:[Object(b.jsx)("h1",{className:"contact-headline",children:"Contact"}),Object(b.jsx)("div",{className:"contact-intro",children:Object(b.jsxs)("ul",{className:"contact-text",children:["How can we help? Ask the experts!",Object(b.jsx)("li",{className:"contact-text-list",children:"How can we help? Ask the experts!"}),Object(b.jsx)("li",{className:"contact-text-list",children:"Hours of Operation: 9AM to 5PM,"}),Object(b.jsx)("li",{className:"contact-text-list",children:"Headquarters: 888.123.1123"}),Object(b.jsx)("li",{className:"contact-text-list",children:"Local Store: 800-496-7687 or sales@nyfc.com"}),Object(b.jsx)("li",{className:"contact-text-list",children:"Service Department: 800 NYFC FIXX or service@gnyfc.com"})]})})]})})});var C=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(U,{}),Object(b.jsx)(f,{})]})},F=(s(76),s(77),function(e){var t=e.title,s=e.imgUrl,n=e.linkUrl;return Object(b.jsx)(b.Fragment,{children:n?Object(b.jsx)(h.b,{to:n,style:{textDecoration:"none"},children:Object(b.jsx)("div",{style:{backgroundImage:"url(".concat(s,")")},className:"ex-menu-item",children:Object(b.jsx)("div",{className:"ex-content",children:Object(b.jsx)("h1",{className:"ex-title",children:t})})})}):Object(b.jsx)("div",{style:{backgroundImage:"url(".concat(s,")")},className:"ex-menu-item",children:Object(b.jsx)("div",{className:"ex-content",children:Object(b.jsx)("h1",{className:"ex-title",children:t})})})})}),W=(s(78),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={sections:[{title:"Upper Body Workout",imgUrl:"https://static01.nyt.com/images/2017/03/13/well/move/NYT_Strength-training_Bodyweight-Squat_Christine_Final/NYT_Strength-training_Bodyweight-Squat_Christine_Final-blog480-v2.jpg",id:1,linkUrl:"/exercises/upper"},{title:"Lower Body Workout",imgUrl:"https://static01.nyt.com/images/2017/03/13/well/move/NYT_StrengthTraining_Mountain-Climbers_Christine_Final/NYT_StrengthTraining_Mountain-Climbers_Christine_Final-blog480-v2.jpg",id:2,linkUrl:"/exercises/lower"}]},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"ex-upper-lower-works-menu",children:this.state.sections.map((function(e){var t=e.title,s=e.imgUrl,n=e.id,c=e.linkUrl;return Object(b.jsx)(F,{title:t,imgUrl:s,linkUrl:c},n)}))})}}]),s}(c.a.Component)),q=function(){return Object(b.jsxs)("div",{className:"ex-container",children:[Object(b.jsx)("h1",{className:"ex-headline",children:"Exercises"}),Object(b.jsx)(W,{})]})};var S=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(q,{}),Object(b.jsx)(f,{})]})},_=s(2),B=s(8),z=[{id:1,title:"Upper Body Workout",routeName:"upper",workouts:[{id:1,name:"Arnold press",imageUrl:"https://keepfitkingdom.com/wp-content/uploads/2016/06/5-Top-Overhead-Press-Variations-Keep-Fit-Kingdom-770x472.jpg",linkUrl:"/exercises/upper/arnoldpress"},{id:2,name:"Bench Press",imageUrl:"https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/article/strong-man-barbell-bench-press-800.jpg",linkUrl:"/exercises/upper/benchpress"}]}],E=(s(79),function(e){var t=e.name,s=e.imageUrl,n=e.linkUrl;return Object(b.jsx)(h.b,{to:n,style:{textDecoration:"none"},children:Object(b.jsxs)("div",{className:"upper-item",children:[Object(b.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(s,")")}}),Object(b.jsx)("div",{className:"upper-footer"}),Object(b.jsx)("span",{className:"name",children:t})]})})}),T=(s(80),function(e){var t=e.title,s=e.workouts;return Object(b.jsxs)("div",{className:"upper-list",children:[Object(b.jsx)("h1",{className:"upper-title",children:t.toUpperCase()}),Object(b.jsx)("div",{className:"upper-work-each",children:s.map((function(e){var t=e.id,s=Object(B.a)(e,["id"]);return Object(b.jsx)(E,Object(_.a)({},s),t)}))})]})}),A=(s(81),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={collections:z},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state.collections;return Object(b.jsx)("div",{className:"upper-workout-page",children:e.map((function(e){var t=e.id,s=Object(B.a)(e,["id"]);return Object(b.jsx)(T,Object(_.a)({},s),t)}))})}}]),s}(c.a.Component));var P=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(A,{}),Object(b.jsx)(f,{})]})},Y=[{id:1,title:"Lower Body Workout",routeName:"lower",workouts:[{id:1,name:"Squat",imageUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/handsome-muscular-man-doing-squat-exercise-with-royalty-free-image-1597762598.jpg?crop=0.541xw:0.812xh;0.148xw,0.188xh&resize=640:*",linkUrl:"/exercises/lower/squat"},{id:2,name:"Leg Press",imageUrl:"https://smithmachine.co.uk/wp-content/uploads/2020/06/Man-using-leg-press-in-gym.jpg",linkUrl:"/exercises/lower/legpress"}]}],I=(s(82),s(83),function(e){var t=e.name,s=e.imageUrl,n=e.linkUrl;return Object(b.jsx)(h.b,{to:n,style:{textDecoration:"none"},children:Object(b.jsxs)("div",{className:"lower-item",children:[Object(b.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(s,")")}}),Object(b.jsx)("div",{className:"lower-footer"}),Object(b.jsx)("span",{className:"name",children:t})]})})}),L=function(e){var t=e.title,s=e.workouts;return Object(b.jsxs)("div",{className:"lower-list",children:[Object(b.jsx)("h1",{className:"lower-title",children:t.toUpperCase()}),Object(b.jsx)("div",{className:"lower-work-each",children:s.map((function(e){var t=e.id,s=Object(B.a)(e,["id"]);return Object(b.jsx)(I,Object(_.a)({},s),t)}))})]})},D=(s(84),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={collections:Y},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state.collections;return Object(b.jsx)("div",{className:"lower-workout-page",children:e.map((function(e){var t=e.id,s=Object(B.a)(e,["id"]);return Object(b.jsx)(L,Object(_.a)({},s),t)}))})}}]),s}(c.a.Component));var M=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D,{}),Object(b.jsx)(f,{})]})},R=(s(85),s(21)),H=s.n(R),G=function(){return Object(b.jsxs)("div",{className:"bench-container",children:[Object(b.jsxs)("div",{className:"bench-textbox",children:[Object(b.jsx)("h1",{className:"bench-headline",children:"BenchPress"}),Object(b.jsx)("div",{className:"bench-intro",children:Object(b.jsxs)("ol",{className:"bench-text",children:[Object(b.jsx)("li",{children:"Lie flat on your back on a bench."}),Object(b.jsx)("li",{children:"Grip the bar with hands just wider than shoulder-width apart, so when you\u2019re at the bottom of your move your hands are directly above your elbows."}),Object(b.jsx)("li",{children:"Bring the bar slowly down to your chest as you breathe in."}),Object(b.jsx)("li",{children:"Push up as you breathe out, gripping the bar hard and watching a spot on the ceiling rather than the bar, so you can ensure it travels the same path every time."})]})})]}),Object(b.jsx)("div",{className:"bencn-wrapper",children:Object(b.jsx)(H.a,{className:"react-player",width:"100%",height:"100%",url:"https://www.youtube.com/watch?v=esQi683XR44"})})]})};var K=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(G,{}),Object(b.jsx)(f,{})]})},X=(s(104),function(){return Object(b.jsxs)("div",{className:"arnold-container",children:[Object(b.jsxs)("div",{className:"arnold-textbox",children:[Object(b.jsx)("h1",{className:"arnold-headline",children:"ArnoldPress"}),Object(b.jsx)("div",{className:"arnold-intro",children:Object(b.jsxs)("ol",{className:"arnold-text",children:[Object(b.jsx)("li",{children:"Using a safe and controlled motion, kick your knees up one at a time in order to get each dumbbell into place. Once the dumbbells are in place, rotate your palms so they are facing you."}),Object(b.jsx)("li",{children:"Take a deep breath then press the dumbbells overhead by extending the elbows and contracting the deltoids."}),Object(b.jsx)("li",{children:"As you press, rotate the dumbbells until your palms are facing forward."}),Object(b.jsx)("li",{children:"Slowly lower the dumbbells back to the starting position."})]})})]}),Object(b.jsx)("div",{className:"arnold-wrapper",children:Object(b.jsx)(H.a,{className:"react-player",width:"100%",height:"100%",url:"https://www.youtube.com/watch?v=hmnZKRpYaV8&feature=emb_title"})})]})});var J=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(X,{}),Object(b.jsx)(f,{})]})},Q=(s(105),function(){return Object(b.jsxs)("div",{className:"squat-container",children:[Object(b.jsxs)("div",{className:"squat-textbox",children:[Object(b.jsx)("h1",{className:"squat-headline",children:"Squat"}),Object(b.jsx)("div",{className:"squat-intro",children:Object(b.jsxs)("ol",{className:"squat-text",children:[Object(b.jsx)("li",{children:"Stand with feet a little wider than hip width, toes facing front."}),Object(b.jsx)("li",{children:"Drive your hips back\u2014bending at the knees and ankles and pressing your knees slightly open\u2014as you\u2026"}),Object(b.jsx)("li",{children:"Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back."}),Object(b.jsx)("li",{children:"Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle."}),Object(b.jsx)("li",{children:"Return to a standing upright position."})]})})]}),Object(b.jsx)("div",{className:"squat-wrapper",children:Object(b.jsx)(H.a,{className:"react-player",width:"100%",height:"100%",url:"https://www.youtube.com/watch?v=bEv6CCg2BC8"})})]})});var V=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Q,{}),Object(b.jsx)(f,{})]})},Z=(s(106),function(){return Object(b.jsxs)("div",{className:"leg-container",children:[Object(b.jsxs)("div",{className:"leg-textbox",children:[Object(b.jsx)("h1",{className:"leg-headline",children:"Leg Press"}),Object(b.jsx)("div",{className:"leg-intro",children:Object(b.jsxs)("ol",{className:"leg-text",children:[Object(b.jsx)("li",{children:"Choose the appropriate weight and set the seat so that the knees are bent just over right angles."}),Object(b.jsx)("li",{children:"Position feet about shoulder width apart."}),Object(b.jsx)("li",{children:"Try to push through your heels, keeping the knees lined up over the toes."}),Object(b.jsx)("li",{children:"Extend the legs until nearly straight, avoiding locking the knees."})]})})]}),Object(b.jsx)("div",{className:"leg-wrapper",children:Object(b.jsx)(H.a,{className:"react-player",width:"100%",height:"100%",url:"https://www.youtube.com/watch?v=Gk8cCEQh-CE"})})]})});var $=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Z,{}),Object(b.jsx)(f,{})]})};var ee=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(x,{}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{exact:!0,path:"/",children:Object(b.jsx)(g,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/aboutus",children:Object(b.jsx)(N,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/exercises",children:Object(b.jsx)(S,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/contact",children:Object(b.jsx)(C,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/career",children:Object(b.jsx)(k,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/exercises/upper",children:Object(b.jsx)(P,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/exercises/lower",children:Object(b.jsx)(M,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/exercises/upper/benchpress",children:Object(b.jsx)(K,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/exercises/upper/arnoldpress",children:Object(b.jsx)(J,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/exercises/lower/squat",children:Object(b.jsx)(V,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/exercises/lower/legpress",children:Object(b.jsx)($,{})})]})]})})};i.a.render(Object(b.jsx)(ee,{}),document.getElementById("root"))},60:function(e,t,s){},61:function(e,t,s){},70:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){}},[[107,1,2]]]);
//# sourceMappingURL=main.86d5f840.chunk.js.map