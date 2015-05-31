package com.thinkmore.framework.monitor.log;

import java.io.IOException;
import java.net.SocketTimeoutException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.xml.stream.XMLStreamException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.CannotCreateTransactionException;

import com.mchange.v2.resourcepool.CannotAcquireResourceException;

/** 
 * @Desc:记录慢请求的日志
 * @author:tudou
 * @createTime:2014年10月12日
 */
public class LogTimeoutFilter implements Filter{
	private static final Logger maxLogAdviceLogger = LoggerFactory.getLogger("maxslowLogfilter");
	private static final Logger slowLogger = LoggerFactory.getLogger("slowLogfilter");
	private static final Logger logAdvicelogger = LoggerFactory.getLogger("logAdvicefilter");
	private final static String EXCEPTION_MESSAGE = "Read timed out";
	private final static String SEND_EXCEPTION_MESSAGE = "Could not send Message";
	private final static String NO_CONNECTIONS="Connections could not be acquired";
	public static final int MAX_SLOW_TIMEOUT=10000;
	public static final int SLOW_TIMEOUT=5000;

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		String cacheKey =null;
		HttpServletRequest req = (HttpServletRequest)request;
		try{
			long start=System.currentTimeMillis();
			chain.doFilter(request, response);
			long end=System.currentTimeMillis();
			long overTime=end -start;
			if(overTime>SLOW_TIMEOUT){
				cacheKey = getCacheKey(req.getRequestURL().toString(),req.getHeader("referer"), req.getRemoteAddr()+overTime);
		        if(overTime>MAX_SLOW_TIMEOUT){
		        	maxLogAdviceLogger.debug(cacheKey);
				}else{
					slowLogger.debug(cacheKey);
				}
			}
		}catch(Exception e){
			if (isCausedByTimeOutException(e)) {
				cacheKey=(cacheKey!=null)?cacheKey:getCacheKey(req.getRequestURL().toString(),req.getHeader("referer"), req.getRemoteAddr());
				logAdvicelogger.debug(cacheKey+"\n"+e.getMessage());
			}else{
				throw new RuntimeException(e);
			}
		}
	}

	@Override
	public void destroy() {
	}
	
	private String getCacheKey(String... arguments) {  
        StringBuffer sb = new StringBuffer();  
        if ((arguments != null) && (arguments.length != 0)) {  
            for (int i = 0; i < arguments.length; i++) {
            	if(arguments[i]==null){
            		arguments[i]="null";
            	}
                sb.append(arguments[i]).append(".");  
            }
            sb.deleteCharAt(sb.length()-1);
        }  
        return sb.toString();  
    }
	
	private static boolean isCausedByTimeOutException(Throwable throwable) {
		Throwable currentThrowable;
		int i = 0 ;
		for (currentThrowable = throwable; (currentThrowable != null)&&(i<10); currentThrowable = currentThrowable.getCause()) {
			i++;
			String msg = currentThrowable.getMessage();
			//异常信息中包含有Read timed out或者Could not send Message
			if (msg != null && (msg.contains(EXCEPTION_MESSAGE) || msg.contains(SEND_EXCEPTION_MESSAGE))|| msg.contains(NO_CONNECTIONS)) {
				return true;
			}
			//异常类型为SocketTimeoutException
			if(currentThrowable instanceof SocketTimeoutException){
				return true;
			}
			//异常类型为XMLStreamException
			if(currentThrowable instanceof XMLStreamException){
				return true;
			}
			if(currentThrowable instanceof CannotCreateTransactionException){
				return true;
			}
			if(currentThrowable instanceof CannotAcquireResourceException){
				return true;
			}
		}
		return false;
	}

}
