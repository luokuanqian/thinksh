var $d = document, $w = window;
var useragent = navigator.userAgent;       
var startTime,endTime; 
var d=new Date();
var version = "1.0"
function Whaty() {}
Whaty.prototype.enableDebug =true;
Whaty.prototype.isReady =false;
var $wp=new Whaty();
var targetOrigin="http://114.112.69.156:19295/cloudadapter";
//var targetOrigin="http://192.168.22.168:8080/think";
var htmls="<!doctype html><html><iframe id='widget' src='"+targetOrigin+"/html.jsp?url="+$w.location.href+"' style='display:none;'></iframe></html>";
startTime=d.getTime();

function isMobileDevice(ua) {
    if (/(iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser)/i.test(ua)) {
        return true;
    }
    return false;
}

function log(msg) {
	console.log("$wp.isReady=============="+$wp.isReady);
	if($wp.enableDebug){
		$w.console = $w.console || {}; 
		console.log || (console.log = opera.postError);
		console.log(msg);
	}
}

function removeElements(eles){
	for (var r = 0;r<eles.length; r++) {
        var o = eles[r];
        log("removeElements::"+o);
        o.parentNode.removeChild(o);
     }
	return eles;
}

function clearAllContent(){
	//$d.body.innerHTML=null;
	var tags=["html","meta","body","link","script","style"];
	for(var i=0;i<tags.length;i++) {
		var r = $d.querySelectorAll(tags[i]);
	    removeElements(r);
	}
}
function clean(){
	if (!isMobileDevice(useragent)) {
		return;
	}
	log($wp.isReady+"=========clean======="+$d.readyState);
	log("html::::"+$d.querySelectorAll("html"));
	log("body::::"+$d.querySelectorAll("body"));
	if ($wp.isReady) {
		return;
	}
	clearAllContent();
}
clean();
var t=setTimeout(clean,15);

/**
 * Clean-up method for dom ready events
 */
function $w_detach() {
	if ($d.addEventListener ) {
		$d.removeEventListener( "DOMContentLoaded", $w_completed, false );
		$w.removeEventListener( "load", ready, true );
	} else {
		$d.detachEvent( "onreadystatechange", $w_completed );
		$w.detachEvent( "onload", ready );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function $w_completed() {
	log("$w_completed============="+$d.readyState);
	d=new Date();endTime=d.getTime();
	log("$w_completed："+(endTime-startTime)/1000);
	if ($d.addEventListener || event.type === "load" || $d.readyState === "complete" ) {
		$w_detach();
		if(!$wp.isReady){
			log("$wp.isReady---:"+$wp.isReady);
			$wp.isReady = true;
			clearTimeout(t);
			$w_init();
		}
	}
}

function ready(){
	clean();
	log($d.addEventListener+"ready================"+$d.readyState);
	d=new Date();endTime=d.getTime();
	log("ready："+(endTime-startTime)/1000);
	if ($wp.isReady) {
		return;
	}
	//clean();
	if ($d.readyState === "complete" ) {
		log("setTimeout readyState complete");
		setTimeout(ready,50);
	} else if ($d.addEventListener ) {
		log("$d.addEventListener");
		$d.addEventListener("DOMContentLoaded", $w_completed, false );
		$d.addEventListener( "load", ready, false );
	} else {
		log("$d.attachEvent");
		$w.attachEvent( "onreadystatechange", $w_completed);
		$w.attachEvent("onload",ready);
		var top = false;
		try {
			top = $w.frameElement == null && $d.documentElement;
		} catch(e) {}
		if ( top && top.doScroll ) {
			(function doScrollCheck() {
				d=new Date();endTime=d.getTime();
				log("ready doScrollCheck："+(endTime-startTime)/1000);
				if (!$wp.isReady) {
					try {
						top.doScroll("left");
					} catch(e) {
						return setTimeout(doScrollCheck, 50);
					}
					$w_detach();
					ready();
				}
			})();
		}
	}
}


var $w_init=function(){
	d=new Date();endTime=d.getTime();
	log("init时："+(endTime-startTime)/1000);
	log("init::"+$wp.isReady);
	clean();
	try{
		//$d.body.innerHTML=null;
	}catch(e){
		log("error::"+e);
	}
	log("开始write html:::"+htmls);
	$d.write(htmls);
	log("write end");
	window.addEventListener("message", messageHandler, true);
}

function messageHandler(e) {
	//log("messageHandler::"+e.data.substring(0,50));
	//log("adapter result::"+e.data);
	try{
		d=new Date();endTime=d.getTime();
		log("ajax请求后，渲染页面前："+(endTime-startTime)/1000);
		log("e.origin"+e.origin);
		log("e.data"+e.data.substring(0,50));
		//if (e.origin == targetOrigin) {
			$d.write(e.data);
		//}
		d=new Date();endTime=d.getTime();
		log("渲染界面后："+(endTime-startTime)/1000);
	}catch(e){}
}

function subSomething(){
	log("subSomething================"+$d.readyState);
	if($d.readyState === "complete"){
		if ($wp.isReady) {
			return;
		}
		log("=========write=======:"+htmls);
		$wp.isReady=true;
		window.addEventListener("message", messageHandler, true);
		$d.write(htmls);
	}
}

!function() {
	//$d.onreadystatechange = subSomething;
	if (isMobileDevice(useragent)) {
		log("================"+$d.readyState);
		ready();
		//$w.stop ? $w.stop() : $d.execCommand("Stop");
	}
}();

