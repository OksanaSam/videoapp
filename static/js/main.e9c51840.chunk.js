(this.webpackJsonpvideoapp=this.webpackJsonpvideoapp||[]).push([[0],{30:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),o=a.n(i),c=a(17),l=a.n(c),s=a(28),m=a(12),u=a(13),d=a(15),p=a(14),v=(a(36),a(37),a(59),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-bar ui segment"},r.a.createElement("p",null,"search"),r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:""},r.a.createElement("input",{onChange:this.onInputChange,value:this.state.term,type:"text",name:"",id:""})))))}}]),a}(n.Component)),h=a(29),f=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:5,key:"AIzaSyC7RBajlDUC6UfyFuGGERn46dg2WSEKETo"}});a(58);function E(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement("div",{onClick:function(){return a(t)},className:"item video-item"},r.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.snippet.title)))}function b(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return r.a.createElement(E,{key:e.id.videoId,onVideoSelect:a,video:e})}));return r.a.createElement("div",{className:"ui relaxed divided list"},n)}function g(e){var t=e.video;if(!t)return r.a.createElement("p",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{width:"560",height:"315",src:a,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,title:t.snippet.title})),r.a.createElement("div",{className:"ui segment"},r.a.createElement("h4",{className:"ui header"},t.snippet.title),r.a.createElement("p",null,t.snippet.description)))}var w=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/search",{params:{q:a}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onTermSubmit("buildings")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{onFormSubmit:this.onTermSubmit}),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement(g,{video:this.state.selectedVideo})),r.a.createElement("div",{className:"five  wide column"},r.a.createElement(b,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.e9c51840.chunk.js.map