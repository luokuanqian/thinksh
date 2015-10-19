package com.thinkmore.framework.common.log;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
/**
 * 日志监听类
 * 
 * @author tudou
 *
 */
public class LogListener implements ServletContextListener {
	public void contextInitialized(ServletContextEvent event) {
		ServletContext sc = event.getServletContext();
	    String enableSystemOut = sc.getInitParameter("enableSystemOut");
	    if("false".equals(enableSystemOut)){
	    	LogPrintStream.redirectSystemOut();// 重定向system.out日志到文件中
	    }
		Thread.setDefaultUncaughtExceptionHandler(new LogUncaughtExceptionHandler());
	}

	public void contextDestroyed(ServletContextEvent sce) {
	}
}