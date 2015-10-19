<!Doctype html>
<%@page import="java.util.Date"%>
<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"%>
<%
	response.setHeader("Pragma", "No-cache");
	response.setHeader("Cache-Control", "no-cache");
	response.setDateHeader("Expires", -10);
%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<c:if test="${attr.webname==null}">
	<c:set var="webname" value="thinkMore" />
</c:if>
<html xmlns=http://www.w3.org/1999/xhtml>
<head>
<script id="whaty" src="${ctx}/js/ysp/adapter.js?d=<%=new Date().getTime()%>"></script>
<%@ include file="/public/meta.jsp"%>
<title>${webname}</title>
<script type="text/javascript">
	var basePath = "${ctx}";
	var d = document;
</script>
<style>
.center {
	text-align: center;
}
</style>