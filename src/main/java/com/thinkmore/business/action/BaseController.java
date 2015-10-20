package com.thinkmore.business.action;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
/**
 * 封装的action基类
 * 
 * @author lizhuang
 */
public class BaseController {
	protected static final Log otherLogger = LogFactory.getLog("other");
	@Autowired
	protected HttpServletRequest request;
	@Autowired
	protected HttpServletResponse response;
}
