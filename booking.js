var base_page = Object();
base_page.SE = "www.lapoint.se";
base_page.NO = "www.lapoint.no";
base_page.DK = "www.lapoint.dk";
base_page.UK = "www.lapoint.com";

var heading = Object();

heading.SE = "Online-bokning";
heading.NO = "Online-booking";
heading.DK = "Online-booking";
heading.UK = "Online reservation"

var sidebar_header = Object();

sidebar_header.SE = "Prisinformation";
sidebar_header.NO = "Prisinformasjon";
sidebar_header.DK = "Pris information";
sidebar_header.UK = "Price information";

var sidebar_body = Object();
sidebar_body.SE = "Ingen prisinformation tillg&auml;nglig";
sidebar_body.NO = "Ingen prisinformasjon gitt";
sidebar_body.DK = "Ingen pris oplysninger";
sidebar_body.UK = "No price information provided";

var analytics = Object();

analytics.SE = "UA-4376661-2";
analytics.NO = "UA-4376661-3";
analytics.DK = "UA-4376661-5";
analytics.UK = "UA-4376661-4";




var heading_text = Object();
heading_text.SE = "H&auml;r kan du enkelt boka och betala din resa med Lapoint. Fyll bara i fomul&auml;ret nedan och klicka dig vidare. F&aring;r du problem s&aring; tveka inte utan sl&aring; en signal eller maila oss s&aring; hj&auml;lper vi till.";

heading_text.NO = "Her kan du enkelt bestille og betale din Lapoint reise. Fyll inn skjemaet nedenfor og klikk deg videre. Har du sp&oslash;rsm&aring;l, vennligst ikke n&oslash;l med &aring; ta kontakt p&aring; telefon eller mail, s&aring; hjelper vi deg gjerne.";

heading_text.DK = "Her kan du booke og betale din rejse med Lapoint. Udfyld formularen og klik videre. Er der nogle problemer er du velkommen til at ringe eller skrive, s&aring; hj&aelig;lper vi dig.";

heading_text.UK = "It's easy to book your stay at Lapoint camps. Just fill in the form below and follow the steps. If it gets tricky just send us an email or give us a call. We are always happy to help.";

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
}

$(document).ready(function(){
	var lang = window.siteLanguageVersion || 'UK';

	$("<center>"+
	"<h1 style='margin-left: 15px;width: 965px; text-align:left;'>"+ heading[lang]+"</h1>"+
	"<hr style='margin-left: 15px;width: 965px;margin-top: 10px;margin-bottom: 10px;' />"+
	"</center>").insertBefore("#wrapper");

	if($("#sidebar").length == 0) {
		$("<div id='sidebar' style='margin-top: 24px'><div class='bookingbox booking-priceinformation' style='background-color: rgb(230, 230, 230);'>"+
		"<h2 class='bookformmain'>"+sidebar_header[lang]+"</h2>"+
		"<p>"+sidebar_body[lang]+"</p>"+
    		"</div></div>").appendTo("#wrapper");
	}

	window.checkScrollActivation = function() {
		return false;
	};

	/*var analytics_country = analytics[lang];

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', analytics_country, 'auto');
	ga('send', 'pageview');	*/
});


function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

if (inIframe()) {
	!function(a,b){"use strict";function c(b,c,d){"addEventListener"in a?b.addEventListener(c,d,!1):"attachEvent"in a&&b.attachEvent("on"+c,d)}function d(b,c,d){"removeEventListener"in a?b.removeEventListener(c,d,!1):"detachEvent"in a&&b.detachEvent("on"+c,d)}function e(a){return a.charAt(0).toUpperCase()+a.slice(1)}function f(a){var b,c,d,e=null,f=0,g=function(){f=Ha(),e=null,d=a.apply(b,c),e||(b=c=null)};return function(){var h=Ha();f||(f=h);var i=ya-(h-f);return b=this,c=arguments,0>=i||i>ya?(e&&(clearTimeout(e),e=null),f=h,d=a.apply(b,c),e||(b=c=null)):e||(e=setTimeout(g,i)),d}}function g(a){return na+"["+pa+"] "+a}function h(b){ma&&"object"==typeof a.console&&console.log(g(b))}function i(b){"object"==typeof a.console&&console.warn(g(b))}function j(){k(),h("Initialising iFrame ("+location.href+")"),l(),o(),n("background",X),n("padding",_),B(),t(),u(),p(),D(),v(),ja=C(),O("init","Init message from host page"),Ea()}function k(){function a(a){return"true"===a?!0:!1}var c=ia.substr(oa).split(":");pa=c[0],Y=b!==c[1]?Number(c[1]):Y,aa=b!==c[2]?a(c[2]):aa,ma=b!==c[3]?a(c[3]):ma,ka=b!==c[4]?Number(c[4]):ka,V=b!==c[6]?a(c[6]):V,Z=c[7],ga=b!==c[8]?c[8]:ga,X=c[9],_=c[10],va=b!==c[11]?Number(c[11]):va,ja.enable=b!==c[12]?a(c[12]):!1,ra=b!==c[13]?c[13]:ra,Ba=b!==c[14]?c[14]:Ba}function l(){function b(){var b=a.iFrameResizer;h("Reading data from page: "+JSON.stringify(b)),Da="messageCallback"in b?b.messageCallback:Da,Ea="readyCallback"in b?b.readyCallback:Ea,ua="targetOrigin"in b?b.targetOrigin:ua,ga="heightCalculationMethod"in b?b.heightCalculationMethod:ga,Ba="widthCalculationMethod"in b?b.widthCalculationMethod:Ba}function c(a,b){return"function"==typeof a&&(h("Setup custom "+b+"CalcMethod"),Ga[b]=a,a="custom"),a}"iFrameResizer"in a&&Object===a.iFrameResizer.constructor&&(b(),ga=c(ga,"height"),Ba=c(Ba,"width")),h("TargetOrigin for parent set to: "+ua)}function m(a,b){return-1!==b.indexOf("-")&&(i("Negative CSS value ignored for "+a),b=""),b}function n(a,c){b!==c&&""!==c&&"null"!==c&&(document.body.style[a]=c,h("Body "+a+' set to "'+c+'"'))}function o(){b===Z&&(Z=Y+"px"),n("margin",m("margin",Z))}function p(){document.documentElement.style.height="",document.body.style.height="",h('HTML & body height set to "auto"')}function q(b){function f(){O(b.eventName,b.eventType)}var g={add:function(b){c(a,b,f)},remove:function(b){d(a,b,f)}};b.eventNames&&Array.prototype.map?(b.eventName=b.eventNames[0],b.eventNames.map(g[b.method])):g[b.method](b.eventName),h(e(b.method)+" event listener: "+b.eventType)}function r(a){q({method:a,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),q({method:a,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),q({method:a,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),q({method:a,eventType:"Input",eventName:"input"}),q({method:a,eventType:"Mouse Up",eventName:"mouseup"}),q({method:a,eventType:"Mouse Down",eventName:"mousedown"}),q({method:a,eventType:"Orientation Change",eventName:"orientationchange"}),q({method:a,eventType:"Print",eventName:["afterprint","beforeprint"]}),q({method:a,eventType:"Ready State Change",eventName:"readystatechange"}),q({method:a,eventType:"Touch Start",eventName:"touchstart"}),q({method:a,eventType:"Touch End",eventName:"touchend"}),q({method:a,eventType:"Touch Cancel",eventName:"touchcancel"}),q({method:a,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),q({method:a,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),q({method:a,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===ra&&q({method:a,eventType:"IFrame Resized",eventName:"resize"})}function s(a,b,c,d){return b!==a&&(a in c||(i(a+" is not a valid option for "+d+"CalculationMethod."),a=b),h(d+' calculation method set to "'+a+'"')),a}function t(){ga=s(ga,fa,Ia,"height")}function u(){Ba=s(Ba,Aa,Ja,"width")}function v(){!0===V?(r("add"),G()):h("Auto Resize disabled")}function w(){h("Disable outgoing messages"),sa=!1}function x(){h("Remove event listener: Message"),d(a,"message",T)}function y(){null!==$&&$.disconnect()}function z(){r("remove"),y(),clearInterval(la)}function A(){w(),x(),!0===V&&z()}function B(){var a=document.createElement("div");a.style.clear="both",a.style.display="block",document.body.appendChild(a)}function C(){function d(){return{x:a.pageXOffset!==b?a.pageXOffset:document.documentElement.scrollLeft,y:a.pageYOffset!==b?a.pageYOffset:document.documentElement.scrollTop}}function e(a){var b=a.getBoundingClientRect(),c=d();return{x:parseInt(b.left,10)+parseInt(c.x,10),y:parseInt(b.top,10)+parseInt(c.y,10)}}function f(a){function c(a){var b=e(a);h("Moving to in page link (#"+d+") at x: "+b.x+" y: "+b.y),S(b.y,b.x,"scrollToOffset")}var d=a.split("#")[1]||a,f=decodeURIComponent(d),g=document.getElementById(f)||document.getElementsByName(f)[0];b!==g?c(g):(h("In page link (#"+d+") not found in iFrame, so sending to parent"),S(0,0,"inPageLink","#"+d))}function g(){""!==location.hash&&"#"!==location.hash&&f(location.href)}function j(){function a(a){function b(a){a.preventDefault(),f(this.getAttribute("href"))}"#"!==a.getAttribute("href")&&c(a,"click",b)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),a)}function k(){c(a,"hashchange",g)}function l(){setTimeout(g,ca)}function m(){Array.prototype.forEach&&document.querySelectorAll?(h("Setting up location.hash handlers"),j(),k(),l()):i("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return ja.enable?m():h("In page linking not enabled"),{findTarget:f}}function D(){h("Enable public methods"),Ca.parentIFrame={autoResize:function(a){return!0===a&&!1===V?(V=!0,v()):!1===a&&!0===V&&(V=!1,z()),V},close:function(){S(0,0,"close"),A()},getId:function(){return pa},getPageInfo:function(a){"function"==typeof a?(Fa=a,S(0,0,"pageInfo")):(Fa=function(){},S(0,0,"pageInfoStop"))},moveToAnchor:function(a){ja.findTarget(a)},reset:function(){R("parentIFrame.reset")},scrollTo:function(a,b){S(b,a,"scrollTo")},scrollToOffset:function(a,b){S(b,a,"scrollToOffset")},sendMessage:function(a,b){S(0,0,"message",JSON.stringify(a),b)},setHeightCalculationMethod:function(a){ga=a,t()},setWidthCalculationMethod:function(a){Ba=a,u()},setTargetOrigin:function(a){h("Set targetOrigin: "+a),ua=a},size:function(a,b){var c=""+(a?a:"")+(b?","+b:"");O("size","parentIFrame.size("+c+")",a,b)}}}function E(){0!==ka&&(h("setInterval: "+ka+"ms"),la=setInterval(function(){O("interval","setInterval: "+ka)},Math.abs(ka)))}function F(){function c(a){function b(a){!1===a.complete&&(h("Attach listeners to "+a.src),a.addEventListener("load",g,!1),a.addEventListener("error",i,!1),l.push(a))}"attributes"===a.type&&"src"===a.attributeName?b(a.target):"childList"===a.type&&Array.prototype.forEach.call(a.target.querySelectorAll("img"),b)}function d(a){l.splice(l.indexOf(a),1)}function e(a){h("Remove listeners from "+a.src),a.removeEventListener("load",g,!1),a.removeEventListener("error",i,!1),d(a)}function f(a,c,d){e(a.target),O(c,d+": "+a.target.src,b,b)}function g(a){f(a,"imageLoad","Image loaded")}function i(a){f(a,"imageLoadFailed","Image load failed")}function j(a){O("mutationObserver","mutationObserver: "+a[0].target+" "+a[0].type),a.forEach(c)}function k(){var a=document.querySelector("body"),b={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return n=new m(j),h("Create body MutationObserver"),n.observe(a,b),n}var l=[],m=a.MutationObserver||a.WebKitMutationObserver,n=k();return{disconnect:function(){"disconnect"in n&&(h("Disconnect body MutationObserver"),n.disconnect(),l.forEach(e))}}}function G(){var b=0>ka;a.MutationObserver||a.WebKitMutationObserver?b?E():$=F():(h("MutationObserver not supported in this browser!"),E())}function H(a,b){function c(a){var c=/^\d+(px)?$/i;if(c.test(a))return parseInt(a,W);var d=b.style.left,e=b.runtimeStyle.left;return b.runtimeStyle.left=b.currentStyle.left,b.style.left=a||0,a=b.style.pixelLeft,b.style.left=d,b.runtimeStyle.left=e,a}var d=0;return b=b||document.body,"defaultView"in document&&"getComputedStyle"in document.defaultView?(d=document.defaultView.getComputedStyle(b,null),d=null!==d?d[a]:0):d=c(b.currentStyle[a]),parseInt(d,W)}function I(a){a>ya/2&&(ya=2*a,h("Event throttle increased to "+ya+"ms"))}function J(a,b){for(var c=b.length,d=0,f=0,g=e(a),i=Ha(),j=0;c>j;j++)d=b[j].getBoundingClientRect()[a]+H("margin"+g,b[j]),d>f&&(f=d);return i=Ha()-i,h("Parsed "+c+" HTML elements"),h("Element position calculated in "+i+"ms"),I(i),f}function K(a){return[a.bodyOffset(),a.bodyScroll(),a.documentElementOffset(),a.documentElementScroll()]}function L(a,b){function c(){return i("No tagged elements ("+b+") found on page"),ea}var d=document.querySelectorAll("["+b+"]");return 0===d.length?c():J(a,d)}function M(){return document.querySelectorAll("body *")}function N(a,c,d,e){function f(){ea=m,za=n,S(ea,za,a)}function g(){function a(a,b){var c=Math.abs(a-b)<=va;return!c}return m=b!==d?d:Ia[ga](),n=b!==e?e:Ja[Ba](),a(ea,m)||aa&&a(za,n)}function i(){return!(a in{init:1,interval:1,size:1})}function j(){return ga in qa||aa&&Ba in qa}function k(){h("No change in size detected")}function l(){i()&&j()?R(c):a in{interval:1}||k()}var m,n;g()||"init"===a?(P(),f()):l()}function O(a,b,c,d){function e(){a in{reset:1,resetPage:1,init:1}||h("Trigger event: "+b)}function f(){return wa&&a in ba}f()?h("Trigger event cancelled: "+a):(e(),Ka(a,b,c,d))}function P(){wa||(wa=!0,h("Trigger event lock on")),clearTimeout(xa),xa=setTimeout(function(){wa=!1,h("Trigger event lock off"),h("--")},ca)}function Q(a){ea=Ia[ga](),za=Ja[Ba](),S(ea,za,a)}function R(a){var b=ga;ga=fa,h("Reset trigger event: "+a),P(),Q("reset"),ga=b}function S(a,c,d,e,f){function g(){b===f?f=ua:h("Message targetOrigin: "+f)}function i(){var g=a+":"+c,i=pa+":"+g+":"+d+(b!==e?":"+e:"");h("Sending message to host page ("+i+")"),ta.postMessage(na+i,f)}!0===sa&&(g(),i())}function T(b){function d(){return na===(""+b.data).substr(0,oa)}function e(){function d(){ia=b.data,ta=b.source,j(),da=!1,setTimeout(function(){ha=!1},ca)}document.body?d():(h("Waiting for page ready"),c(a,"readystatechange",e))}function f(){ha?h("Page reset ignored by init"):(h("Page size reset by host page"),Q("resetPage"))}function g(){O("resizeParent","Parent window requested size check")}function k(){var a=m();ja.findTarget(a)}function l(){return b.data.split("]")[1].split(":")[0]}function m(){return b.data.substr(b.data.indexOf(":")+1)}function n(){return"iFrameResize"in a}function o(){var a=m();h("MessageCallback called from parent: "+a),Da(JSON.parse(a)),h(" --")}function p(){var a=m();h("PageInfoFromParent called from parent: "+a),Fa(JSON.parse(a)),h(" --")}function q(){return b.data.split(":")[2]in{"true":1,"false":1}}function r(){switch(l()){case"reset":f();break;case"resize":g();break;case"inPageLink":case"moveToAnchor":k();break;case"message":o();break;case"pageInfo":p();break;default:n()||q()||i("Unexpected message ("+b.data+")")}}function s(){!1===da?r():q()?e():h('Ignored message of type "'+l()+'". Received before initialization.')}d()&&s()}function U(){"loading"!==document.readyState&&a.parent.postMessage("[iFrameResizerChild]Ready","*")}var V=!0,W=10,X="",Y=0,Z="",$=null,_="",aa=!1,ba={resize:1,click:1},ca=128,da=!0,ea=1,fa="bodyOffset",ga=fa,ha=!0,ia="",ja={},ka=32,la=null,ma=!1,na="[iFrameSizer]",oa=na.length,pa="",qa={max:1,min:1,bodyScroll:1,documentElementScroll:1},ra="child",sa=!0,ta=a.parent,ua="*",va=0,wa=!1,xa=null,ya=16,za=1,Aa="scroll",Ba=Aa,Ca=a,Da=function(){i("MessageCallback function not defined")},Ea=function(){},Fa=function(){},Ga={height:function(){return i("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return i("Custom width calculation function not defined"),document.body.scrollWidth}},Ha=Date.now||function(){return(new Date).getTime()},Ia={bodyOffset:function(){return document.body.offsetHeight+H("marginTop")+H("marginBottom")},offset:function(){return Ia.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Ga.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,K(Ia))},min:function(){return Math.min.apply(null,K(Ia))},grow:function(){return Ia.max()},lowestElement:function(){return Math.max(Ia.bodyOffset(),J("bottom",M()))},taggedElement:function(){return L("bottom","data-iframe-height")}},Ja={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Ga.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(Ja.bodyScroll(),Ja.documentElementScroll())},max:function(){return Math.max.apply(null,K(Ja))},min:function(){return Math.min.apply(null,K(Ja))},rightMostElement:function(){return J("right",M())},taggedElement:function(){return L("right","data-iframe-width")}},Ka=f(N);c(a,"message",T),U()}(window||{});
}