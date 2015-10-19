<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"%>
<%@ include file="/public/taglibs.jsp"%>
<c:set var="webname" value="测试AMUI" />
<%@ include file="/public/base_header.jsp"%>
<script type="text/javascript">
	
</script>
</head>
<body>
	<header data-am-widget="header" class="am-header am-header-default">
		<div class="am-header-left am-header-nav">
			<a href="#left-link" class=""><i class="am-header-icon am-icon-home"></i> </a>
		</div>
		<h1 class="am-header-title">
			<a href="#title-link" class="">Title</a>
		</h1>
		<nav data-am-widget="menu" class="am-menu  am-menu-offcanvas1" data-am-menu-offcanvas>
			<a href="javascript: void(0)" class="am-menu-toggle"> <i class="am-menu-toggle-icon am-icon-bars"></i></a>
			<div class="am-offcanvas">
				<div class="am-offcanvas-bar">
					<ul class="am-menu-nav am-avg-sm-1">
						<li><a href="#">测试一下</a></li>
						<li><a href="#">测试一下</a></li>
						<li><a href="#">测试一下</a></li>
						<li><a href="#">测试一下</a></li>
						<li><a href="#">测试一下</a></li>
						<li><a href="#">测试一下</a></li>
					</ul>
				</div>
			</div>
	</header>
	<%@ include file="/public/js_footer.jsp"%>
	<script type="text/javascript">
		$(document).ready(function() {
			//此方法是jquery加载数据常用的方法，write时不会进来
			console.log("---------------ready------------------");
		});
		(function($) {
			console.log("---------------11111111111111------------------" + $(".am-offcanvas"));
			$(function() {
				console.log("---------------222222------------------" + $(".am-offcanvas"));
			});
		})(jQuery);
	</script>
</body>
</html>
