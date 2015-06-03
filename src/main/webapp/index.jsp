<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Insert title here</title>
<script>
	var targetOrigin = "http://192.168.22.168:8080";

	var defaultTitle = "Portal";
	var notificationTimer = null;

	function messageHandler(e) {
		console.log("messageHandler::"+e.data);
		if (e.origin == targetOrigin) {
			notify(e.data);
		} else {
			// ignore messages from other origins
		}
	}

	function sendString(s) {
		document.getElementById("widget").contentWindow.postMessage(s,
				targetOrigin);
	}

	function notify(message) {
		stopBlinking();
		blinkTitle(message, defaultTitle);
	}

	function stopBlinking() {
		if (notificationTimer !== null) {
			clearTimeout(notificationTimer);
		}
		document.title = defaultTitle;
	}

	function blinkTitle(m1, m2) {
		document.title = m1;
		notificationTimer = setTimeout(blinkTitle, 1000, m2, m1)
	}

	function sendStatus() {
		var statusText = document.getElementById("statusText").value;
		sendString(statusText);
	}

	function loadDemo() {
		document.getElementById("sendButton").addEventListener("click",
				sendStatus, true);
		document.getElementById("stopButton").addEventListener("click",
				stopBlinking, true);
		sendStatus();
	}
	window.addEventListener("load", loadDemo, true);
	window.addEventListener("message", messageHandler, true);
</script>
</head>
<body>
	<h1>跨域通讯</h1>
	传递信息：
	<input type="text" id="statusText" value="Online">
	<button id="sendButton">确定</button>
	<br>
	<br>
	<iframe id="widget" src="http://192.168.22.168:8080/think/html.jsp"></iframe>
	<p>
		<button id="stopButton">停止标题闪烁</button>
	</p>
</body>
</html>