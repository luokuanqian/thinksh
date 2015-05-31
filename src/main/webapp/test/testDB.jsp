<%@page import="org.hibernate.SQLQuery"%>
<%@page import="org.hibernate.Session"%>
<%@page import="com.thinkmore.framework.common.spring.SpringUtils"%>
<%@ page language="java" contentType="text/html; UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; UTF-8" />
<title>Insert title here</title>
</head>
<%
SessionFactory sessionFactory=(SessionFactory)SpringUtils.getBean("sessionFactory");
Session session=sessionFactory.openSession();
int seconds=15;
try{
	Thread.sleep(seconds*1000);
	SQLQuery query= session.createSQLQuery("select id from site");
	query.list();
	System.out.println("result========================================");
} catch (Exception e) {
	e.printStackTrace();
}finally{
	System.out.println("before:");
	System.out.println("connect:"+session.isConnected());
	System.out.println("open:::"+session.isOpen());
	session.clear();
	session.close();
	System.out.println("after:");
	System.out.println("connect:"+session.isConnected());
	System.out.println("open:::"+session.isOpen());
}
System.out.println("------------------------------------------------");
%>
<body>


</body>
</html>