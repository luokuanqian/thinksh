package com.thinkmore.framework.monitor.log;

import java.io.Serializable;
import java.net.SocketTimeoutException;
import java.util.List;

import javax.xml.stream.XMLStreamException;

import net.sf.ehcache.Cache;
import net.sf.ehcache.Element;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.CannotCreateTransactionException;

import com.mchange.v2.resourcepool.CannotAcquireResourceException;
@SuppressWarnings("unchecked")
public class LogAdviceInterceptor implements MethodInterceptor{
	private static final Logger maxLogAdviceLogger = LoggerFactory.getLogger("maxSlowLog");
	private static final Logger slowLogger = LoggerFactory.getLogger("slowLog");
	private static final Logger logAdvicelogger = LoggerFactory.getLogger("logAdvice");
	private final static String EXCEPTION_MESSAGE = "Read timed out";
	private final static String SEND_EXCEPTION_MESSAGE = "Could not send Message";
	private final static String NO_CONNECTIONS="Connections could not be acquired";
	public static final int MAX_SLOW_TIMEOUT=10000;
	public static final int SLOW_TIMEOUT=5000;
	private Cache cache;
	@Override
	public Object invoke(MethodInvocation invocation) throws Throwable{
		Object result=null;
		String cacheKey =null;
		String targetName = invocation.getThis().getClass().getName();  
        String methodName = invocation.getMethod().getName();
		try{
			long start=System.currentTimeMillis();
//	        Object[] arguments = invocation.getArguments();
//	        cacheKey = getCacheKey(targetName, methodName,arguments,start); 
//	        Element element = new Element(cacheKey, start);
//	        cache.put(element);
			result=invocation.proceed();
//			cache.remove(cacheKey);
//			Thread.sleep(MAX_SLOW_TIMEOUT);
			long end=System.currentTimeMillis();
			long overTime=end -start;
			if(overTime>SLOW_TIMEOUT){
				cacheKey = getCacheKey(targetName, methodName,overTime);
		        if(overTime>MAX_SLOW_TIMEOUT){
		        	System.out.println("max");
		        	maxLogAdviceLogger.debug(cacheKey);
				}else{
					System.out.println("slow");
					slowLogger.debug(cacheKey);
				}
			}
		}catch(Exception e){
			if (isCausedByTimeOutException(e)) {
				cacheKey=(cacheKey!=null)?cacheKey:getCacheKey(targetName, methodName);
				logAdvicelogger.debug(cacheKey+"\n"+e.getMessage());
			}else{
				throw e;
			}
		}
		return result;
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
	
	/**
	 * 打印日志并清空缓存
	 */
	public void printCacheToLog(){
		List<Serializable> keys=cache.getKeys();
		for (Serializable key : keys) {
			Element ele=cache.get(key);
			if(ele!=null){
				logAdvicelogger.debug(ele.getObjectValue()+",key:"+key);
			}else{
				logAdvicelogger.debug("null"+",key:"+key);
			}
		}
		removeAll();
	}
	
	/**
	 * 清空所有日志
	 */
	public void removeAll(){
		cache.removeAll();
	}
	
	/**  
     * 拦截Service/DAO的方法，并查找该结果是否存在，如果存在就返回cache中的值，  
     * 否则，返回数据库查询结果，并将查询结果放入cache  
     
    public Object invoke(MethodInvocation invocation) throws Throwable {   
        String targetName = invocation.getThis().getClass().getName();   
        String methodName = invocation.getMethod().getName();   
        Object[] arguments = invocation.getArguments();   
        Object result;   
       
        logger.debug("Find object from cache is " + cache.getName());   
           
        String cacheKey = getCacheKey(targetName, methodName, arguments);   
        Element element = cache.get(cacheKey);   
        if (element == null) {   
            logger.debug("Hold up method , Get method result and create cache........!");   
            result = invocation.proceed();   
            element = new Element(cacheKey, (Serializable) result);   
            cache.put(element);   
        }   
        return element.getValue();   
    }*/  
	
	/** 
     * 获得cache key的方法，cache key是Cache中一个Element的唯一标识 
     * cache key包括 包名+类名+方法名，如com.thinkmore.framework.monitor.log.LogAdvice
     */  
    private String getCacheKey(String targetName, String methodName, Object...arguments) {  
        StringBuffer sb = new StringBuffer();  
        sb.append(targetName).append(".").append(methodName);  
        if ((arguments != null) && (arguments.length != 0)) {  
            for (int i = 0; i < arguments.length; i++) {  
                sb.append(".").append(arguments[i]);  
            }  
        }  
        return sb.toString();  
    }
	
	public Cache getCache() {
		return cache;
	}
	public void setCache(Cache cache) {
		this.cache = cache;
	}
}
