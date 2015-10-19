<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<c:set var="domain" value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}" />
<c:set var="basePath" value="${domain}${ctx}/" />
<%
String ctx = request.getContextPath();
String domain = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
String basePath = domain+ctx+"/";
%>
<%@ page trimDirectiveWhitespaces="true" %>