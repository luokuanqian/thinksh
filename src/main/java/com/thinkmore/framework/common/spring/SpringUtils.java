package com.thinkmore.framework.common.spring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.web.context.support.WebApplicationContextUtils;


/** 
 * @Desc:Spring辅助类，用于获取spring上下文和管理的bean
 * @author:tudou
 * @createTime:2014年10月2日
 */
public class SpringUtils implements ApplicationContextAware {

	private static ApplicationContext applicationContext;

	/**
	 * 实现ApplicationContextAware接口的context注入函数, 将其存入静态变量.
	 */
	public void setApplicationContext(ApplicationContext applicationContext) {
		SpringUtils.applicationContext = applicationContext;
	}

	/**
	 * 取得存储在静态变量中的ApplicationContext.
	 */
	public static ApplicationContext  getApplicationContext(){
//		if (null == applicationContext) {
//			applicationContext = WebApplicationContextUtils.getWebApplicationContext(ServletActionContext.getServletContext());
//		}
		  if (applicationContext == null)
		            throw new IllegalStateException("applicaitonContext未注入,请在applicationContext.xml中定义SpringUtils");
		return applicationContext;
	}

	/**
	 * 从静态变量ApplicationContext中取得Bean, 自动转型为所赋值对象的类型.
	 */
	@SuppressWarnings("unchecked")
	public static <T> T getBean(String name) {
		return (T) getApplicationContext().getBean(name);
	}

	/**
	 * 从静态变量ApplicationContext中取得Bean, 自动转型为所赋值对象的类型.
	 */
	@SuppressWarnings("unchecked")
	public static <T> T getBean(Class<T> clazz) {
		return (T) getApplicationContext().getBeansOfType(clazz);
	}

}
