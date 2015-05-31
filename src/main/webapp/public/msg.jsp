<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"%>
<%@ include file="/public/taglibs.jsp"%>
<c:set var="webname" value="消息" />
<%@ include file="/public/base_header.jsp"%>
<c:if test="${title==null}">
	<c:set var="title" value="消息"></c:set>
</c:if>
<c:if test="${msg==null}">
	<c:set var="msg" value="暂无消息"></c:set>
</c:if>
<c:set var="url" value="http://www.baidu.com"></c:set>
<script>
	function go(url) {
		window.location.href = url;
	}
</script>
</head>
<body>
	<div class="am-panel am-panel-success">
		<header class="am-panel-hd">
			<h3 class="am-panel-title">${title}</h3>
		</header>
		<div class="am-panel-bd">${msg}</div>
		<footer class="am-panel-footer center">
			<c:choose>
				<c:when test="${url!=null}">
					<button type="button" class="am-btn am-btn-success am-round" onclick="go('${url}');">
						<i class="am-icon-home am-icon-sm"></i>&nbsp;返回
					</button>
				</c:when>
				<c:otherwise>
				</c:otherwise>
			</c:choose>

		</footer>
	</div>
	<%@ include file="/public/js_footer.jsp"%>
</body>
</html>
