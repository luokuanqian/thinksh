<%@page import="com.thinkmore.framework.monitor.log.LogAdviceInterceptor"%>
<%@page import="com.thinkmore.business.service.site.SiteService"%>
<%@page import="com.thinkmore.framework.common.spring.SpringUtils"%>
<%@page import="org.hibernate.SQLQuery"%>
<%@page import="org.hibernate.Session"%>
<%@page import="org.hibernate.SessionFactory"%>
<%@page import="com.mchange.v2.c3p0.ComboPooledDataSource"%>
<%@ page language="java"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<html>
<head>
</head>
<body>
	<%
		StringBuffer sb=new StringBuffer();
		try{
		ComboPooledDataSource cpds = (ComboPooledDataSource) SpringUtils.getBean("dataSource");
			sb.append("##########mysql数据源配置##########<br/>") ;
			sb.append("正在使用连接数："+cpds.getNumBusyConnections()+"<br/>") ;
			sb.append("空闲连接数："+cpds.getNumIdleConnections()+"<br/>") ;
			sb.append("总连接数："+cpds.getNumConnections()+"<br/>") ;
			sb.append("未关闭的游离连接数："+cpds.getNumUnclosedOrphanedConnectionsAllUsers()+"<br/>") ;
			sb.append("最大连接数："+cpds.getMaxPoolSize()+"<br/>") ;
			sb.append("最小连接数："+cpds.getMinPoolSize()+"<br/>") ;
			sb.append("初始连接数："+cpds.getInitialPoolSize()+"<br/>") ;
			sb.append("连接不足时申请数："+cpds.getAcquireIncrement()+"<br/>") ;
			sb.append("空闲连接存活最大时间（秒）："+cpds.getMaxIdleTime()+"<br/>") ;
			sb.append("强制连接存活时间（秒）："+cpds.getMaxConnectionAge()+"<br/>") ;
			sb.append("获取连接超时时间（毫秒）："+cpds.getCheckoutTimeout()+"<br/>") ;
			sb.append("最大可缓存statement数："+cpds.getMaxStatements()+"<br/>") ;
			sb.append("连接放回池中是否检查连接："+cpds.isTestConnectionOnCheckin()+"<br/>") ;
			sb.append("隔多长时间检测空闲连接（秒）："+cpds.getIdleConnectionTestPeriod()+"<br/>") ;
			sb.append("检测连接时执行的SQL："+cpds.getPreferredTestQuery()+"<br/>") ;
			sb.append("是否开启未归还连接堆栈日志："+cpds.isDebugUnreturnedConnectionStackTraces()+"<br/>") ;
			sb.append("未归还连接超时时间（秒）："+cpds.getUnreturnedConnectionTimeout()+"<br/>") ;
			
			SessionFactory sf = (SessionFactory) SpringUtils.getBean("sessionFactory");
			Session ss= sf.openSession();
			SQLQuery query= ss.createSQLQuery("select id from site where id=:id");
			query.setParameter("id", "1");
			query.list();
			ss.close();
			sb.append("###################数据库连接成功################<br/>");
			
			SiteService siteService = (SiteService) SpringUtils.getBean("siteService");
			siteService.getPageSites();
			siteService.getSiteById("1");
			sb.append("###################测试SiteService成功################<br/>");
			LogAdviceInterceptor logAdvice = (LogAdviceInterceptor) SpringUtils.getBean("LogAdvice");
			logAdvice.printCacheToLog();
			sb.append("###################打印日志################<br/>");
			//out.print(sb.toString());
			//out.flush();
			}catch(Exception e){
		//out.print(e.getMessage());
		sb.append(e.getMessage()+"<br/>");
			}
	%>
	<div style="text-align: left;">
		<input type="button" value="停止" id="btnStart" />
	</div>
	<div style="text-align: left;" id="myDiv">
		<%=sb.toString()%>
	</div>

</body>
</html>
<script type="text/javascript">
	var myDiv=document.getElementById("myDiv");
	var btnStart = document.getElementById("btnStart");
	//var sec = document.getElementById("sec");
	var sec = 1000；
	var timer=window.setInterval(myrefresh, sec);
	function myrefresh() {
		 window.location.reload();
	}
	btnStart.onclick = function() {
		if (this.value == "开始") {
			this.value = "停止";
			btnReset.disabled = true;
			//每<input type="text" value="1" id="sec" />秒刷新&nbsp;&nbsp;&nbsp;
			//if(isNAN(sec)||sec<=0){
				//alert("请输入正整数。");
				//return;
			//}
			timer = window.setInterval(myrefresh, sec);
		} else {
			this.value = "开始";
			btnReset.disabled = false;
			window.clearInterval(timer);
		}
	}
</script>

