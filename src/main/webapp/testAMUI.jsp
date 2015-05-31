<%@page import="com.thinkmore.framework.common.spider.JsoupSpider"%>
<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"%>
<%@ include file="/public/taglibs.jsp"%>
<c:set var="webname" value="测试AMUI" />
<%@ include file="/public/base_header.jsp"%>
<style>
.am-menu-offcanvas1 .am-menu-sub {
	background-color:;
}

#amz-header nav .am-active a {
	background: #0B76AC;
	color: #fff;
}

.am-menu-offcanvas1 .am-menu-nav>.am-open>a, .am-menu-offcanvas1 .am-menu-nav>li>a:hover, .am-menu-offcanvas1 .am-menu-nav>li>a:focus {
	background-color: #0B76AC;
}

.am-offcanvas-bar {
	background-color: #0e90d2;
}

.am-menu-sub {
	line-height: 2rem;
}

.am-menu-offcanvas1 .am-menu-sub {
	background-color: #0B76AC;
}

.am-header .am-header-title {
	font-size: 1.5rem;
	margin: 0 12%;
}
</style>
<%
	JsoupSpider test=new JsoupSpider();
	test.init();
%>
</head>
<body>
	<header data-am-widget="header" class="am-header am-header-default">
		<div class="am-header-left am-header-nav">
			<a href="#left-link" class=""><i class="am-header-icon am-icon-home"></i>
			</a>
		</div>
		<h1 class="am-header-title">
			<a href="#title-link" class="">Title</a>
		</h1>
		<%@ include file="/menu.jsp"%>
	</header>
	<%@ include file="/public/js_footer.jsp"%>
	<script>
		$(document).ready(function() {
		});
	</script>
</body>
</html>
