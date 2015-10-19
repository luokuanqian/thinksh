var $d = document, $w = window;
var startTime,endTime; 
var d=new Date(); 
startTime=d.getTime();
function $$(id) {
	return d.getElementById(id);
}

/**
var result = ajax("GET","test.jsp?uname=ddd&password=bbb",null,"json");  
var result = ajax("POST","test.jsp","uname=ddd&password=bbb","xml");
 */
var r;
function $w_ajax(method, url, param, type,success,fail) {
	try {
		r = new XMLHttpRequest();
	} catch (notie) {
		try {
			r = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (other) {
		}
	}
	r.open(method, url, true);
	// 如果请求方法是post,下面这名必须加
	r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var result;
	r.onreadystatechange = function() {
		if (r.readyState == 4) {
			if (r.status == 200) {
				if ("json" == type) {
					result = eval("(" + r.responseText + ")");
				} else if ("xml" == type) {
					result = r.responseXML;
				} else {
					result = r.responseText;
				}
				if(success){
					success(result);
				}
			}else{
				if(fail){
					fail(r);
				}
			}
		}
	}
	r.send(param);
}

/**
 * Clean-up method for dom ready events
 */
function $w_detach() {
	if ($d.addEventListener ) {
		$d.removeEventListener( "DOMContentLoaded", $w_completed, false );
		$w.removeEventListener( "load", $w_completed, true );
	} else {
		$d.detachEvent( "onreadystatechange", $w_completed );
		$w.detachEvent( "onload", $w_completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function $w_completed() {
	log("$w_completed");
	d=new Date();endTime=d.getTime();
	log("$w_completed："+(endTime-startTime)/1000);
	if ($d.addEventListener || event.type === "load" || $d.readyState === "complete" ) {
		$w_detach();
		if(!Whaty.isReady){
			log("Whaty.isReady---:"+Whaty.isReady);
			Whaty.isReady = true;
			$w_init();
		}
	}
}
var version = "1.0"
function Whaty() {}
$Wp=Whaty.prototype;
$Wp.enableDebug =true;
$Wp.isReady =false;
$Wp.loadsc =false;
function log(msg) {
	if(Whaty.enableDebug){
		$w.console = $w.console || {}; 
		console.log || (console.log = opera.postError);
		console.log(msg);
	}
}
Whaty.prototype.isReady =false;


function ready(){
	log("ready================");
	d=new Date();endTime=d.getTime();
	log("ready："+(endTime-startTime)/1000);
	if (Whaty.isReady) {
		return;
	}
	if ($d.readyState === "complete" ) {
		log("setTimeout readyState complete");
		setTimeout(ready,1);
	} else if ($d.addEventListener ) {
		log("$d.addEventListener");
		$d.addEventListener("DOMContentLoaded", $w_completed,false);
		$d.addEventListener( "load",ready,false);
	} else {
		log("$d.attachEvent");
		$w.attachEvent("onreadystatechange", $w_completed);
		$w.attachEvent("onload",ready);
		var top = false;
		try {
			top = $w.frameElement == null && $d.documentElement;
		} catch(e) {}
		if ( top && top.doScroll ) {
			(function doScrollCheck() {
				d=new Date();endTime=d.getTime();
				log("ready doScrollCheck："+(endTime-startTime)/1000);
				if (!Whaty.isReady) {
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

var $fail=function (result){
}

!function() {
ready();
}();

