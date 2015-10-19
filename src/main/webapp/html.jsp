<%@page import="org.apache.commons.lang3.StringUtils"%>
<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"%>
<%@ include file="/public/taglibs.jsp"%>
<c:set var="webname" value="云适配界面" />
<script>
<%
String ref=StringUtils.defaultIfEmpty(request.getHeader("referer"), "");
String url=StringUtils.defaultIfEmpty(request.getParameter("url"), "");
%>
var ref="<%=ref%>";
var url="<%=url%>";
//url="http://tyut.webtrn.cn/cms";
var $succ=function (result){
	try{
		if(result){
			console.log("------------------result:"+result);
		}
		window.top.postMessage(result, ref);
	}catch(e){}
}
var $w_init=function(){
	log("ref::"+ref);
	log("url::"+url);
	$w_ajax("POST","/mobile/adapterUrl","ref="+ref+"&url="+url,"text",$succ,$fail);
}
</script>
<%@ include file="/public/base_header3.jsp"%>
</head>
<body>
</body>
</html>
