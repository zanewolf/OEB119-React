(this["webpackJsonplab-3d"]=this["webpackJsonplab-3d"]||[]).push([[0],{118:function(e,t,n){var a={"./tree10.svg":119,"./tree5":57,"./tree5.json":57,"./tree5.nwk":120,"./tree5.svg":121,"./tree6":58,"./tree6.eps":122,"./tree6.json":58,"./tree6.nwk":123,"./tree6.svg":124,"./tree7.svg":125,"./tree8.svg":126,"./tree9.svg":127};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=118},119:function(e,t,n){e.exports=n.p+"static/media/tree10.9852740d.svg"},120:function(e,t,n){e.exports=n.p+"static/media/tree5.6bcb438e.nwk"},121:function(e,t,n){e.exports=n.p+"static/media/tree5.529d52c8.svg"},122:function(e,t,n){e.exports=n.p+"static/media/tree6.bb52a25a.eps"},123:function(e,t,n){e.exports=n.p+"static/media/tree6.d7e5d6c4.nwk"},124:function(e,t,n){e.exports=n.p+"static/media/tree6.be7f6722.svg"},125:function(e,t,n){e.exports=n.p+"static/media/tree7.95ca4c00.svg"},126:function(e,t,n){e.exports=n.p+"static/media/tree8.a1c3e0d3.svg"},127:function(e,t,n){e.exports=n.p+"static/media/tree9.50b7d926.svg"},129:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(42),i=n.n(o),c=n(43),l=(n(76),n(6)),s=n(3),u=n(4),p=n(44);p.initializeApp({apiKey:"AIzaSyCJjV8q4wpotKVA88i8BrTsCs3kBq-9-Qw,",authDomain:"oeb119-dsb-react.firebaseapp.com,",databaseURL:"https://oeb119-dsb-react.firebaseio.com,",projectId:"oeb119-dsb-react,",storageBucket:"oeb119-dsb-react.appspot.com,",messagingSenderId:"784427202656,",appId:"1:784427202656:web:17a171df3c522d570aeb05,",measurementId:"G-39CMTV4QF9"});var m=p,f=n(5),d=n(60),h=n.n(d);function b(){var e=Object(f.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n"]);return b=function(){return e},e}var x=function(e){return r.a.createElement(s.Box,Object.assign({},e,{sx:{position:"relative",overflow:"hidden",paddingTop:"56.25%"}}))},g=u.default.iframe(b()),v=function(e){var t=Object(a.useRef)(null),n=e.url.split("-").slice(-1);return Object(a.useEffect)((function(){new window.Sketchfab(t.current).init(n,{success:function(e){e.start(),e.addEventListener("viewerready",(function(){e.setPostProcessing({enable:!0,vignetteEnable:!1})})),console.log("Viewer initialized!")},error:function(){console.log("Viewer failed to initialize")},autospin:0,autostart:0,camera:0,dof:0,ui_stop:0,transparent:1,annotations_visible:0,ui_annotations:0,ui_animations:1,ui_inspector:0,ui_settings:0,ui_vr:0,ui_infos:0,ui_hint:0})}),[e.url]),r.a.createElement(x,{className:"ViewerBox"},r.a.createElement(g,{ref:t,src:"about:blank",allowFullScreen:"allowfullscreen",title:"Viewer",width:"640",height:"400",frameBorder:"0"}))},E=function(e){return r.a.createElement(s.Link,Object.assign({},e,{sx:{color:"blue",textDecoration:"none",fontSize:["10px","12px"]}}))},O=function(e){return r.a.createElement(s.Heading,Object.assign({},e,{sx:{fontFamily:"Poppins",fontWeight:600,fontStyle:"italic",fontSize:["16px","20px"],letterSpacing:"0.5px",color:"white"}}))},j=function(e){return r.a.createElement(s.Text,Object.assign({},e,{sx:{textTransform:"uppercase",letterSpacing:"2.5px",color:"amber",marginTop:"3px",fontSize:["10px","12px"]}}))},y=function(e){return r.a.createElement(s.Text,Object.assign({},e,{sx:{textTransform:"uppercase",letterSpacing:"2.5px",color:"ochre",marginTop:"3px",fontSize:["10px","12px"]}}))},k=function(e){var t=e.data,n=t.metadata,a=t.resource,o=n.taxon,i=n.attribution;return"Museum of Comparative Zoology (MCZ)"==i.institution?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement("em",null,o)),r.a.createElement(j,null,i.institution),r.a.createElement(y,null,i.people)):r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement("em",null,o)),r.a.createElement(j,null,i.institution),r.a.createElement(y,null,i.people),r.a.createElement(E,{href:a,target:"_blank"},"[link]"))},F=n.p+"static/media/watermark.1a9fac0d.png";function w(){var e=Object(f.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-blend-mode: luminosity;\n  opacity: 0.05;\n  z-index: 5;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events : none;\n"]);return w=function(){return e},e}function C(){var e=Object(f.a)(["\n  max-height: 75vh;\n  width: auto;\n  object-fit: contain;\n  background-color:black;\n"]);return C=function(){return e},e}var S=function(e){return r.a.createElement(s.Box,Object.assign({},e,{sx:{height:"100%",width:["100%","65%"],backgroundColor:"black"}}))},P=Object(u.default)(s.Image)(C()),M=function(e){var t=e.children;return r.a.createElement(S,null,r.a.createElement(s.Flex,{sx:{flexFlow:"column nowrap",position:"fixed",width:"inherit",top:"0%",justifyContent:"flex-start",alignItems:"stretch"}},t))},L=u.default.div(w(),F),T=function(e){return console.log(e.props),"Museum of Comparative Zoology (MCZ)"===e.props?r.a.createElement(L,null):null},z=function(){var e=Object(a.useContext)(Ie),t=Object(a.useContext)(Me),n=e.specimens[t];return console.log(n),"sketchfab"===n.type?r.a.createElement(M,null,r.a.createElement(s.Box,null,r.a.createElement(T,{props:n.metadata.attribution.institution}),r.a.createElement(v,{url:n.resource})),r.a.createElement(s.Box,{sx:{alignSelf:"center",marginTop:"3%"}},r.a.createElement(k,{data:n}))):"video"===n.type.split("-")[0]?r.a.createElement(M,null,r.a.createElement(s.Box,{sx:{display:"flex",justifyContent:"center"}},r.a.createElement(h.a,{url:n.resource,playing:!0,loop:!0})),r.a.createElement(s.Box,{sx:{alignSelf:"center",marginTop:"3%"}},r.a.createElement(k,{data:n}))):r.a.createElement(M,null,r.a.createElement(s.Box,{sx:{display:"flex",justifyContent:"center"}},r.a.createElement(P,{src:n.resource,alt:n.metadata.taxon})),r.a.createElement(s.Box,{sx:{alignSelf:"center",marginTop:"3%"}},r.a.createElement(k,{data:n})))},B=n(23),A=n(62),I=n(63);function _(){var e=Object(f.a)(["\n  & h1{\n    margin:10px 0px 4px 0px;\n    font-weight:bold;\n  }\n"]);return _=function(){return e},e}function D(){var e=Object(f.a)(["\n  & h1,h2,h3 {\n    font-family:Poppins;\n  }\n  & h1 {\n    font-weight:900;\n    font-size: 28px;\n    margin-bottom: 5px;\n\n  }\n  & h2 {\n    font-weight:600;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-size: 18px;\n    margin-bottom: auto;\n    margin-top: 10px;\n  }\n  & h3 {\n    font-weight:300;\n    letter-spacing: 1px;\n    font-size: 13px;\n    font-style: italic;\n    margin: auto;\n  }\n  & li, p {\n    letter-spacing: 0px;\n    line-height: 22px;\n  }\n  & li {\n    margin-bottom: 5px;\n    list-style-type: square;\n  }\n  & ul {\n    margin-top: 5px;\n  }\n\n"]);return D=function(){return e},e}var R=Object(u.default)(s.Box)(D()),W=(Object(u.default)(s.Box)(_()),function(e){e.show;var t=e.handler,n=Object(a.useContext)(Ie),o=Object(a.useContext)(Me),i=Object(a.useContext)(Le),c=Object(a.useContext)(Te),u=Object(a.useContext)(Pe),p=Object(A.debounce)(t,500,{leading:!1}),m=Object(a.useState)(null),f=Object(l.a)(m,2),d=f[0],h=f[1];Object(a.useEffect)((function(){p(d)}),[d]);var b=function(e){return r.a.createElement("span",{onMouseEnter:function(){h(!0),u(e.href.replace("#",""))},onMouseLeave:function(){h(!1)}},r.a.createElement(s.Link,{sx:{color:"blue"},onClick:function(){i(e.href.replace("#","")),console.log(o)},style:{cursor:"pointer"}},e.children))},x=n.content[c].md;return Object(a.useMemo)((function(){return r.a.createElement(R,null,r.a.createElement(I.a,{options:{overrides:{a:{component:b}}}},x))}),[c])}),N=n(32);function H(){var e=Object(f.a)(["\n  position: fixed;\n  z-index: 50;\n  background-color: none;\n"]);return H=function(){return e},e}var U=Object(u.default)(s.Box)(H()),V=function(e){var t=Object(a.useContext)(Ie),n=Object(a.useContext)(Se),o=t.specimens[n],i=e.show,c=Object(a.useState)({posX:null,posY:null}),u=Object(l.a)(c,2),p=u[0],m=u[1],f=Object(a.useState)(null),d=Object(l.a)(f,2),h=d[0],b=d[1],x=function(e){m({posX:e.clientX,posY:e.clientY})};return Object(a.useEffect)((function(){return window.addEventListener("mousemove",x),function(){return window.removeEventListener("mousemove",x)}}),[i]),Object(a.useMemo)((function(){if("sketchfab"===o.type)fetch("https://api.sketchfab.com/v3/models/"+o.resource.split("-").slice(-1)).then((function(e){return e.json()})).then((function(e){return e.thumbnails.images.find((function(e){return e.width>=64&&e.width<=256}))})).then((function(e){return b(e.url)})).catch(console.log);else if("image"===o.type)fetch(o.resource).then((function(e){return e.blob()})).then((function(e){var t=URL.createObjectURL(e);b(t)}));else if("video-wikicommons"===o.type){var e=new URL(o.resource),t=e.pathname.split("/"),n=e.origin+t.slice(0,3).join("/")+"/thumb/"+t.slice(3).join("/")+"/200px--"+t.slice(-1)[0]+".jpg";fetch(n).then((function(e){return e.blob()})).then((function(e){var t=URL.createObjectURL(e);b(t)}))}else if("video-digimorph"===o.type){var a=o.resource.split("/").slice(0,-1).join("/")+"/specimen.jpg";b(a)}}),[o]),i?r.a.createElement(U,{sx:{top:p.posY+5,left:p.posX+5}},r.a.createElement(s.Image,{sx:{borderRadius:"8px",width:128,boxShadow:"0px 3px 8px #A9A9A9",backgroundColor:"white"},src:h})):null},J=n(65),Z=n.n(J);function Y(){var e=Object(f.a)(["\n  flex-direction: column;\n"]);return Y=function(){return e},e}function q(){var e=Object(f.a)(["\n  flex-direction: row;\n  height: 120px;\n  align-items: center;\n"]);return q=function(){return e},e}var G=Object(u.default)(s.Flex)(q()),K=function(e){return r.a.createElement(s.Text,Object.assign({},e,{sx:{margin:"0px 8px",fontFamily:"Cabin",fontSize:"11px",color:"ochre","> strong":{fontSize:"10px",letterSpacing:"0.25px",textTransform:"uppercase",color:"blue"}}}))},X=Object(u.default)(s.Flex)(Y()),Q=function(e){return r.a.createElement(s.Image,Object.assign({},e,{sx:{width:"20px",height:"20px",cursor:"pointer"}}))};function $(e){var t=e.data.people,n=t.instructor,o=t.text,i=t.development,c=e.data.support,s=Object(a.useState)(!1),u=Object(l.a)(s,2),p=u[0],m=u[1];return r.a.createElement(G,null,r.a.createElement(Q,{src:Z.a,onMouseEnter:function(){m(!0)},onMouseLeave:function(){m(!1)}}),p?r.a.createElement(X,null,r.a.createElement(K,null,r.a.createElement("strong",null,"Instructor:","\xa0","\xa0"),n),r.a.createElement(K,null,r.a.createElement("strong",null,"Original text:","\xa0","\xa0"),o),r.a.createElement(K,null,r.a.createElement("strong",null,"Development:","\xa0","\xa0"),i),r.a.createElement(K,null,r.a.createElement("strong",null,"Supported by:","\xa0","\xa0"),c)):r.a.createElement(r.a.Fragment,null))}function ee(){var e=Object(f.a)(["\n  height: 100%;\n  overflow: auto;\n"]);return ee=function(){return e},e}function te(){var e=Object(f.a)(["\n  & label {\n    margin:10px 0px 4px 0px;\n    font-family: Poppins;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-size: 15px;\n    margin-bottom: auto;\n  }\n  & select {\n    letter-spacing: 0.5px;\n    font-size: 14px;\n  }\n\n"]);return te=function(){return e},e}var ne=function(e){return r.a.createElement(s.Text,Object.assign({},e,{sx:{fontFamily:"Poppins",fontSize:"16px",fontWeight:"500",color:"black","> strong":{fontWeight:"900",letterSpacing:"1.5px"}}}))},ae=function(e){return r.a.createElement(s.Box,Object.assign({},e,{sx:{padding:"2% 5%",display:"flex",flexFlow:"column nowrap",height:"100%",backgroundColor:"white",width:["100%","35%"],maxHeight:["55%","100%"],minHeight:["55%","100%"]}}))},re=Object(u.default)(s.Box)(te()),oe=Object(u.default)(s.Box)(ee()),ie=function(){var e=Object(a.useContext)(Ie),t=Object(a.useContext)(Be),n=Object(a.useContext)(Ae),o=Object(a.useContext)(Te),i=Object(a.useContext)(ze),c=Object(a.useState)(!1),s=Object(l.a)(c,2),u=s[0],p=s[1];return r.a.createElement(ae,null,r.a.createElement(ne,null,r.a.createElement("strong",null,N.courseID,":","\xa0"),N.courseTitle),r.a.createElement(re,{as:"form"},r.a.createElement(B.a,{htmlFor:"labChoice"},"LAB"),r.a.createElement(B.b,{id:"labChoice",value:t,onChange:function(e){n(e.target.value)}},Object.entries(e.labs).sort((function(e,t){return parseInt(e[0].slice(-2).trim())-parseInt(t[0].slice(-2).trim())})).map((function(e){return r.a.createElement("option",{value:e[0]},e[1].title)})))),r.a.createElement(re,{as:"form"},r.a.createElement(B.a,{htmlFor:"nodeChoice"},"NODE"),r.a.createElement(B.b,{id:"nodeChoice",value:o,onChange:function(e){i(e.target.value)}},Object.entries(e.labs[t].nodes).sort((function(e,t){return parseInt(e[0].slice(2,5).trim().replace("-",""))-parseInt(t[0].slice(2,5).trim().replace("-",""))})).map((function(e){return r.a.createElement("option",{value:e[0]},e[1].title)})))),r.a.createElement(oe,null,r.a.createElement(W,{show:u,handler:p}),r.a.createElement(V,{show:u})),r.a.createElement($,{data:N}))},ce=n(31),le=n.n(ce);function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var pe=r.a.createElement("g",null,r.a.createElement("path",{d:"M250,491c-64.4,0-124.9-25.1-170.4-70.6C34.1,374.9,9,314.4,9,250c0-64.4,25.1-124.9,70.6-170.4C125.1,34.1,185.6,9,250,9 s124.9,25.1,170.4,70.6c45.5,45.5,70.6,106,70.6,170.4c0,64.4-25.1,124.9-70.6,170.4C374.9,465.9,314.4,491,250,491z"}),r.a.createElement("path",{fill:"#FFFFFF",d:"M250,18c31.3,0,61.7,6.1,90.3,18.2C367.9,47.9,392.7,64.6,414,86c21.3,21.3,38,46.1,49.7,73.7 c12.1,28.6,18.2,59,18.2,90.3s-6.1,61.7-18.2,90.3c-11.7,27.6-28.4,52.4-49.7,73.7c-21.3,21.3-46.1,38-73.7,49.7 c-28.6,12.1-59,18.2-90.3,18.2c-31.3,0-61.7-6.1-90.3-18.2c-27.6-11.7-52.4-28.4-73.7-49.7c-21.3-21.3-38-46.1-49.7-73.7 C24.1,311.7,18,281.3,18,250s6.1-61.7,18.2-90.3C47.9,132.1,64.6,107.3,86,86c21.3-21.3,46.1-38,73.7-49.7 C188.3,24.1,218.7,18,250,18 M250,0C111.9,0,0,111.9,0,250s111.9,250,250,250s250-111.9,250-250S388.1,0,250,0L250,0z"})),me=r.a.createElement("g",null,r.a.createElement("polyline",{fill:"none",stroke:"#FFFFFF",strokeWidth:18,strokeLinecap:"round",strokeMiterlimit:10,points:"286.7,290.5  249.6,352.4 139.6,168.7  "}),r.a.createElement("line",{fill:"none",stroke:"#FFFFFF",strokeWidth:18,strokeLinecap:"round",strokeMiterlimit:10,x1:213.4,y1:412.8,x2:249.6,y2:352.4}),r.a.createElement("polyline",{fill:"none",stroke:"#FFFFFF",strokeWidth:18,strokeLinecap:"round",strokeMiterlimit:10,points:"360.4,167.3  286.7,290.5 213,167.3  "}),r.a.createElement("line",{fill:"none",stroke:"#FFFFFF",strokeWidth:18,strokeLinecap:"round",strokeMiterlimit:10,x1:323.7,y1:228.7,x2:286.8,y2:167.1}),r.a.createElement("circle",{stroke:"#FFFFFF",strokeWidth:18,strokeLinecap:"round",strokeMiterlimit:10,cx:139.6,cy:168.7,r:21.5}),r.a.createElement("circle",{fill:"#FFFFFF",stroke:"#FFFFFF",strokeWidth:18,strokeLinecap:"round",strokeMiterlimit:10,cx:287.4,cy:288,r:21.5}),r.a.createElement("circle",{stroke:"#FFFFFF",strokeWidth:18,strokeLinecap:"round",strokeMiterlimit:10,cx:213,cy:168.7,r:21.5}),r.a.createElement("circle",{stroke:"#FFFFFF",strokeWidth:18,strokeLinecap:"round",strokeMiterlimit:10,cx:286.8,cy:168.7,r:21.5}),r.a.createElement("circle",{stroke:"#FFFFFF",strokeWidth:18,strokeLinecap:"round",strokeMiterlimit:10,cx:360.4,cy:168.7,r:21.5})),fe=function(e){var t=e.svgRef,n=e.title,a=ue(e,["svgRef","title"]);return r.a.createElement("svg",se({baseProfile:"tiny",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 500 500",xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,pe,me)},de=r.a.forwardRef((function(e,t){return r.a.createElement(fe,se({svgRef:t},e))})),he=(n.p,n(66)),be=n(67),xe=n(69),ge=n(70),ve=n(22),Ee=n.n(ve);n(96);function Oe(){var e=Object(f.a)(["\n  position: relative;\n  overflow: hidden;\n  /* padding-top: 56.25%; */\n  > canvas {\n    position: relative;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0;\n  }\n"]);return Oe=function(){return e},e}var je=u.default.div(Oe());r.a.Component;function ye(){var e=Object(f.a)(["\n  width: 85vmax;\n  height: 85vmin;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  z-index: 30;\n"]);return ye=function(){return e},e}var ke=le.a.styled(ye()),Fe=function(e){var t=Object(a.useContext)(Ie),o=Object(a.useContext)(Be),i=Object(a.useState)(!1),c=Object(l.a)(i,2),s=c[0],u=c[1],p=Object(a.useState)(t.labs[o].tree),m=Object(l.a)(p,2),f=m[0],d=m[1];function h(){u(!s)}return Object(a.useEffect)((function(){d(t.labs[o].tree)}),[o]),r.a.createElement(ce.ModalProvider,null,r.a.createElement(de,{width:e.iconSize,onClick:h,style:{cursor:"pointer"}}),r.a.createElement(ke,{isOpen:s,onBackgroundClick:h,onEscapeKeydown:h},r.a.createElement("img",{src:n(118)("./"+f),style:{width:"100%",height:"100%"}})))};function we(){var e=Object(f.a)(["\n  z-index: 10;\n  position: fixed;\n  bottom: 50%;\n  right: calc(65% - ","/2);\n"]);return we=function(){return e},e}function Ce(){var e=Object(f.a)(["\n  height: 100%;\n  background-color: black;\n  font-family: 'Cabin', sans-serif;\n"]);return Ce=function(){return e},e}var Se=r.a.createContext(),Pe=r.a.createContext(),Me=r.a.createContext(),Le=r.a.createContext(),Te=r.a.createContext(),ze=r.a.createContext(),Be=r.a.createContext(),Ae=r.a.createContext(),Ie=r.a.createContext(),_e=Object(u.default)(s.Box)(Ce()),De=function(e){return r.a.createElement(s.Flex,Object.assign({},e,{sx:{flexFlow:["column-reverse nowrap","row nowrap"],height:"100vh"}}))},Re=Object(u.default)(s.Box)(we(),"56px");function We(e){var t=Object(a.useState)(Object.keys(e.data.labs).sort((function(e,t){return e.slice(3)-t.slice(3)}))[0]),n=Object(l.a)(t,2),o=n[0],i=n[1],c=Object(a.useState)(Object.keys(e.data.labs[o].nodes)[0]),s=Object(l.a)(c,2),u=s[0],p=s[1],m=Object(a.useState)(e.data.nodes[u].default),f=Object(l.a)(m,2),d=f[0],h=f[1],b=Object(a.useState)(d),x=Object(l.a)(b,2),g=x[0],v=x[1];return Object(a.useEffect)((function(){p(Object.keys(e.data.labs[o].nodes)[0])}),[o]),Object(a.useEffect)((function(){h(e.data.nodes[u].default)}),[u]),r.a.createElement(Ie.Provider,{value:e.data},r.a.createElement(Ae.Provider,{value:i},r.a.createElement(Be.Provider,{value:o},r.a.createElement(ze.Provider,{value:p},r.a.createElement(Te.Provider,{value:u},r.a.createElement(Le.Provider,{value:h},r.a.createElement(Me.Provider,{value:d},r.a.createElement(_e,null,r.a.createElement(Re,null,r.a.createElement(Fe,{iconSize:"56px"})),r.a.createElement(De,null,r.a.createElement(Se.Provider,{value:g},r.a.createElement(Pe.Provider,{value:v},r.a.createElement(ie,null),r.a.createElement(z,null))))))))))))}var Ne={colors:{black:"#000",white:"#fff",blue:"#1ea9d7",ochre:"#D67C1E",amber:"#D64E29",azure:"#06698A"},fonts:{body:"system-ui, sans-serif",heading:"inherit",monospace:"Menlo, monospace"}},He=function(e){return r.a.createElement(s.Text,Object.assign({},e,{sx:{fontFamily:"Poppins",fontWeight:"900",fontSize:"30px",letterSpacing:"2px",textTransform:"uppercase",color:"ochre"}}))};function Ue(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)({labs:{},nodes:{},specimens:{},content:{}}),c=Object(l.a)(i,2),p=c[0],f=c[1];return Object(a.useEffect)((function(){m.database().ref("/").once("value").then((function(e){f({labs:e.val().labs,nodes:e.val().nodes,specimens:e.val().specimens,content:e.val().content})})).then((function(){return o(!0)}))}),[]),n?r.a.createElement(u.ThemeProvider,{theme:Ne},r.a.createElement(We,{data:p})):r.a.createElement(u.ThemeProvider,{theme:Ne},r.a.createElement(s.Flex,{sx:{flexFLow:"column nowrap",justifyContent:"center",alignItems:"center",minHeight:"100vh"}},r.a.createElement(He,null,"Ahoy Mateys...")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,null,r.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e){e.exports=JSON.parse('{"courseID":"OEB 126","courseTitle":"Vertebrate Evolution","people":{"instructor":"Dr. Stephanie E. Pierce","text":"Zachary A. Morris","tf":"Philip Fahn-Lai","development":"Philip Fahn-Lai, Dr. Lauren Davidson"},"support":["Bok Learning Lab, Harvard MCZ"]}')},57:function(e){e.exports=JSON.parse("{\"newick\":\"(Archeria+:1.5,(Seymouriamorpha+:1.5,('Lepospondyli+':1.5,(Diadectomorpha+:1.5,(Casineria+:1.5,((Parareptilia__-future:1.5,(Captorrhinidae+:1.5,(Romeriids+:1.5,(Araeoscelidia+:1.5,(Younginiformes+:1.5,(Coelurosauravidae+:1.5,(Sauropterygia__-future:1.5,Pantestudines__-future:1.5,Ichthyopterygia+:1.5,((Kuehneosauridae+:1.5,(Sophineta+:1.5,(Rhynchocephalia:1.5,(Marmoretta+:1.5,(Megachirella+:1.5,(Gekkota:1.5,(Scinciformata:1.5,(Laterata:1.5,(Iguania:1.5,Anguimorpha:1.5,Ophidia-crown=Serpentes:1.5)Toxicofera:1.5):1.5):1.5):1.5)Squamata:1.5):1.5)Lepidosauria:1.5):1.5)Lepidosauromorpha:1.5,(Protorosauria+:1.5,(Trilophosaurus+:1.5,(Rhynchosauria+:1.5,(Prolacerta+:1.5,(Proterosuchidae+:1.5,(Erythrosuchidae+:1.5,(Proterochampsidae+:1.5,(Euparkeria+:1.5,(Phytosauria+:1.5,(Avemetatarsalia__-future:1.5,(Aetosauria+:1.5,(('Poposauroidea+':1.5,Shuvosauridae+:1.5):1.5,(Rauisuchidae+:1.5,('Sphenosuchidae+':1.5,(Protosuchus+:1.5,(Thalattosuchia+:1.5,(Notosuchia+:1.5,(Isisfordia+:1.5,(Gavialidae:1.5,(Alligatoridae:1.5,Crocodylidae:1.5):1.5)Crocodylia:1.5)Eusuchia:1.5):1.5)Mesoeucrocodylia:1.5):1.5)Crocodylomorpha:1.5):1.5):1.5)Pseudosuchia:1.5)Archosauria:1.5):1.5):1.5):1.5):1.5)Archosauriformes:1.5):1.5):1.5):1.5)Archosauromorpha:1.5)Sauria:1.5):1.5):1.5)Neodiapsida:1.5)Diapsida:1.5):1.5):1.5)Sauropsida:1.5,Synapsida__-future:1.5):1.5)Amniota:1.5):1.5):1.5):1.5)Reptiliomorpha;\"}")},58:function(e){e.exports=JSON.parse('{"newick":"(Pterosauria__-future:1.5,(Ixalerpeton+:1.5,(Marasuchus+:1.5,((Heterodontosaurus+:1.5,((Scutellosaurus+:1.5,(Scelidosaurus+:1.5,(Stegosauria+:1.5,Ankylosauria+:1.5):1.5):1.5)Thyreophora:1.5,((Pachycephalosauria+:1.5,(Psittacosaurus+:1.5,(Protoceratops+:1.5,Ceratopsidae+:1.5):1.5)Ceratopsia:1.5)Marginocephalia:1.5,(Hypsilophodontidae+:1.5,(Iguanodon+:1.5,Hadrosauridae+:1.5):1.5)Ornithopoda:1.5)Cerapoda:1.5):1.5)Ornithischia:1.5,((\'Prosauropods+\':1.5,(Diplodocoidea+:1.5,(Camarosaurus+:1.5,(Titanosauridae+:1.5,Brachiosaurus+:1.5)Macronaria:1.5):1.5)Sauropoda:1.5)Sauropodomorpha:1.5,(Herrerasauridae+:1.5,(Eoraptor+:1.5,(Coelophysis+:1.5,(Ceratosauria+:1.5,(Megalosauroidea+:1.5,(Allosauroidea+:1.5,(Compsognathus+:1.5,(Tyrannosauridae+:1.5,(Ornithomimosauria+:1.5,(Alvarezsauridae+:1.5,((Oviraptorosauria+:1.5,Therizinosauroidea+:1.5):1.5,((Dromaeosauridae+:1.5,Troodontidae+:1.5):1.5,(Archaeopteryx+:1.5,(Confuciusornis+:1.5,(Enantiornithes+:1.5,(Hesperornis+:1.5,(Ichthyornis+:1.5,(Palaeognathae:1.5,(Galloanserae:1.5,Neoaves:1.5):1.5)Aves:1.5):1.5)Ornithourae:1.5)Ornithothoraces:1.5)Pygostylia:1.5)Avialae:1.5)Paraves:1.5)Maniraptora:1.5):1.5):1.5):1.5)Coelurosauria:1.5):1.5)Tetanurae:1.5):1.5)Neotherapoda:1.5):1.5)Theropoda:1.5)Saurischia:1.5)Dinosauria:1.5)Dinosauriformes:1.5)Dinosauromorpha:1.5)Avemetatarsalia;"}')},65:function(e,t,n){e.exports=n.p+"static/media/info.1b6c8068.svg"},71:function(e,t,n){e.exports=n(129)},76:function(e,t,n){}},[[71,1,2]]]);
//# sourceMappingURL=main.78535eda.chunk.js.map