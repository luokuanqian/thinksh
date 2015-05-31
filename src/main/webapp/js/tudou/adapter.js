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
					success(r.responseText);
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
	console.log("$w_completed");
	if ($d.addEventListener || event.type === "load" || $d.readyState === "complete" ) {
		$w_detach();
		if(!Whaty.isReady){
			console.log("Whaty.isReady---:"+Whaty.isReady);
			Whaty.isReady = true;
			$w_init();
		}
	}
}
var version = "1.0"
function Whaty() {}
$Wp=Whaty.prototype;
$Wp.enableDebug =false;
$Wp.isReady =false;
$Wp.loadsc =false;
$Wp.createElement = function(tag) {
    return $d.createElement(tag);
}
function log(msg) {
	$w.console = $w.console || {}; 
	console.log || (console.log = opera.postError);
	console.log(msg);
}
function removeElements(eles){
	for (var r = 0;r<eles.length; r++) {
        var o = eles[r];
        console.log("removeElements::"+o);
        o.parentNode.removeChild(o);
     }
	return eles;
}

function insertAfter(newEl, targetEl){
    var parentEl = targetEl.parentNode;
    if(parentEl.lastChild == targetEl){
          parentEl.appendChild(newEl);
     }else{
          parentEl.insertBefore(newEl,targetEl.nextSibling);
     }            
}

function clearAllContent(){
	console.log("clearAllContent::");
	var tags=["link","script","style"];
	for(var i=0;i<tags.length;i++) {
		var r = $d.querySelectorAll(tags[i]);
	    removeElements(r);
	}
	console.log("clearAllContent::end");
}


function loadjs(url,callback){
	var script= $Wp.createElement('script'); 
	script.onload = script.onreadystatechange = function() {  
	    if (!this.readyState || this.readyState === "loaded" ||    this.readyState === "complete" ) { 
	        callback();
	        // Handle memory leak in IE 
	        script.onload = script.onreadystatechange = null;  
	    }
	 };
	script.src= url;
	return script;
}

function loadcss(url){
	var link = $d.createElement("link"); 
	link.rel = "stylesheet"; 
	link.href = url; 
	return link;
}

Whaty.prototype.isReady =false;

function removeElements(eles){
	for (var r = 0,i = eles.length; i > r; r++) {
        var o = eles[r];
        o.parentNode.removeChild(o)
     }
	return eles;
}

function ready(){
	console.log("ready================");
	if (Whaty.isReady) {
		return;
	}
	if ($d.readyState === "complete" ) {
		console.log("setTimeout readyState complete");
		setTimeout(ready);
	} else if ($d.addEventListener ) {
		console.log("$d.addEventListener");
		$d.addEventListener("DOMContentLoaded", $w_completed, false );
		$d.addEventListener( "load", $w_completed, false );
	} else {
		console.log("$d.attachEvent");
		$w.attachEvent("onload",$w_completed);
		$w.attachEvent( "onreadystatechange", $w_completed);
		var top = false;
		try {
			top = $w.frameElement == null && $d.documentElement;
		} catch(e) {}
		if ( top && top.doScroll ) {
			(function doScrollCheck() {
				if ( !Whaty.isReady) {
					try {
						top.doScroll("left");
					} catch(e) {
						return setTimeout(doScrollCheck, 50);
					}
					$w_detach();
					//jQuery.ready();
					ready();
				}
			})();
		}
	}
}

function loadresource(){
	var sc=loadcss('http://localhost/think/js/amazeui/css/amazeui.min.css');
	var head= $d.getElementsByTagName('head')[0];
	head.appendChild(sc);
	console.log("head================"+head);

	sc=loadjs('/think/js/jquery/core/jquery-2.1.1.min.js',function(){});
	console.log("sc================"+sc);
	head.appendChild(sc);
	sc=loadjs('/think/js/amazeui/js/amazeui.min.js',function(){});
	head.appendChild(sc);
}

function del_ff(elem){
	var elem_child = elem.childNodes;
	for(var i=0; i<elem_child.length;i++){
		if(elem_child[i].nodeName == "#text" && !/\s/.test(elem_child.nodeValue)){
			elem.removeChild(elem_child);
		}
	}
}

function del_ff2(elem){
	var elem_child = elem.childNodes;
	for(var i=0; i<elem_child.length;i++){
		//console.log("nodeName::::"+(elem_child[i].nodeName == "#text"));
		//console.log("nodeValue::::"+(!/\s/.test(elem_child.nodeValue)));
		if(elem_child[i].nodeName == "#text" && !/\s/.test(elem_child[i].nodeValue)){
			elem.parentNode.removeChild(elem_child[i]);
		}
	}
	return elem;
}

function clearAllContent(){
	//$d.body.innerHTML=null;
	var tags=["html","meta","body","link","script","style"];
	for(var i=0;i<tags.length;i++) {
		var r = $d.querySelectorAll(tags[i]);
	    removeElements(r);
	}
	
//	var reg = /("([^\\\"]*(\\.)?)*")|('([^\\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n))|(\/\*(\n|.)*?\*\/)/g,// 正则表达式
//    str = $d.innerHTML;
//	console.log(str); // 打印出：原文本
//	console.log(str.match(reg));// 打印出：匹配子串
//	str.replace(reg, function(word) { // 去除注释后的文本
//	    return /^\/{2,}/.test(word) || /^\/\*/.test(word) ? "" : word;
//	});

//	tags=["style","script"];
//	for(var i=0;i<tags.length;i++) {
//		var eles = $d.querySelectorAll(tags[i]);
//		for (var j = 0;j<eles.length; j++) {
//	        eles[j].innerHTML="";
//	     }
//	}
}

var $w_init=function(){
	d=new Date();endTime=d.getTime();
	log("init时："+(endTime-startTime)/1000);
	console.log("init::"+Whaty.isReady);
	//$w.stop ? $w.stop() : $d.execCommand("Stop");
	clearAllContent();
	try{
		//$d.body.innerHTML=null;
		del_ff2($d.body);
		console.log("$d.body.childNodes::"+$d.body.childNodes.length);
		removeElements($d.body.childNodes);
	}catch(e){
		console.log("error::"+e);
	}
	var html= $d.getElementsByTagName('html')[0];
	if(!html){
		//$d.write("<html></html>");
	}
//	if(!$d.body){
//		var body= $Wp.createElement('body');
//		var head= $d.getElementsByTagName('head')[0];
//		insertAfter(body,head);
//	}
	//loadresource();
	//console.log("$d.innerHTML::"+html.innerHTML);
	//$w_ajax("POST","http://localhost/think/mobile/jsoup!init.action","sitecode=1","text",$succ,$fail);
	d=new Date();endTime=d.getTime();
	log("ajax请求前："+(endTime-startTime)/1000);
	$w_ajax("POST","mobile/jsoup!getHTML.action?id=1","sitecode=1","text",$succ1,$fail);
	
}

var $succ1=function (result){
	try{
		if(result==1){
			return;
		}
		//$d.body.innerHTML=result;
		d=new Date();endTime=d.getTime();
		log("ajax请求后，渲染页面前："+(endTime-startTime)/1000);
		$d.write(result);
		d=new Date();endTime=d.getTime();
		log("渲染界面后："+(endTime-startTime)/1000);
	}catch(e){}
}

var $succ=function (result){
	console.log("result::"+result);
	var li="";
	result=eval(result);
	console.log("result.length::"+result.length);
	for(var i=0;i<result.length;i++){   
		li+="<li><a href=\""+result[i]['href']+"\">"+result[i]['text']+"</a></li>";
	}
	console.log("li::"+li);
	var menu="<nav data-am-widget=\"menu\" class=\"am-menu  am-menu-offcanvas1\" data-am-menu-offcanvas>" +
	"<a href=\"javascript: void(0)\" class=\"am-menu-toggle\"> <i class=\"am-menu-toggle-icon am-icon-bars\"></i></a>" +
	"<div class=\"am-offcanvas\"><div class=\"am-offcanvas-bar\"><ul class=\"am-menu-nav am-avg-sm-1\">" +li+"</ul></div></div></nav>";
	console.log("menu::"+menu);
	var head="<header data-am-widget=\"header\" class=\"am-header am-header-default\"><div class=\"am-header-left am-header-nav\">" +
			"<a href=\"#left-link\" ><i class=\"am-header-icon am-icon-home\"></i></a></div>" +
			"<h1 class=\"am-header-title\"><a href=\"#title-link\">Title</a></h1>"+menu+"</header>";
	try{
		$d.body.innerHTML=head;
	}catch(e){}
}

var $fail=function (result){
}

!function() {
	ready();
}();

