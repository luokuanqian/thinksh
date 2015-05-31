<%@page import="org.jsoup.select.Elements"%>
<%@page import="org.jsoup.nodes.Element"%>
<%@page import="com.thinkmore.framework.test.common.spider.*"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Map"%>
<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"%>
<nav data-am-widget="menu" class="am-menu  am-menu-offcanvas1" data-am-menu-offcanvas>
	<a href="javascript: void(0)" class="am-menu-toggle"> <i class="am-menu-toggle-icon am-icon-bars"></i>
	</a>
	<div class="am-offcanvas">
		<div class="am-offcanvas-bar">
			<ul class="am-menu-nav am-avg-sm-1">
			<% 
				Map<String,Element> map=test.getTopMenu();
				Iterator<String> it = map.keySet().iterator();
				while (it.hasNext()) {
					String key = it.next();
					Element val = map.get(key);
					Elements links = val.select("a");
					for (Element ele : links) {
			%>
						<li><a href="<%=ele.attr("abs:href")%>"><%=ele.text()%></a></li>
			<%
					}
				}
			%>
			</ul>
		</div>
	</div>
</nav>