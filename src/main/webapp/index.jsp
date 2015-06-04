<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Insert title here</title>
<%
//云适配服务器地址
String targetOrigin = "http://192.168.22.168:8080";
%>
<script>
	var targetOrigin = "<%=targetOrigin%>";
	function messageHandler(e) {
		console.log("messageHandler::"+e.data.substring(0,50));
		if (e.origin == targetOrigin) {
			document.write(e.data);
		}
	}
	window.addEventListener("message", messageHandler, true);
</script>
</head>
<body>
	<iframe id="widget" src="<%=targetOrigin%>/think/html.jsp" style="display:none;"></iframe>
</body>
</html>