(this["webpackJsonpp2p-react"]=this["webpackJsonpp2p-react"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),i=n.n(r),s=(n(11),n(4)),c=n.n(s);n(12);var l=function(){return navigator.serviceWorker.onmessage=function(e){console.log(e),alert("got message")},a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.js")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))},u=n(1),d=n.n(u),p=n(5),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwatest",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pwatest","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)})),window.addEventListener("fetch",(function(e){"POST"===e.request.method&&!1!==e.request.url.startsWith("https://lucaspontoexe.github.io/pwatest/upload")&&(e.respondWith(Response.redirect("https://lucaspontoexe.github.io/pwatest/")),e.waitUntil(Object(p.a)(d.a.mark((function t(){var n,o,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request.formData();case 2:return n=t.sent,t.next=5,window.self.clients.get(e.resultingClientId||e.clientId);case 5:o=t.sent,a=n.get("file"),o.postMessage({file:a,action:"load-image"});case 8:case"end":return t.stop()}}),t)})))()))}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.9fea9a14.chunk.js.map