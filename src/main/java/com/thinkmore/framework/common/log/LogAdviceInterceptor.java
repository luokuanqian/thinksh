package com.thinkmore.framework.common.log;
import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.slf4j.Logger;
/**
 * 监控慢处理的方法级别日志
 * @author tudou
 *
 */
public class LogAdviceInterceptor implements MethodInterceptor {
	private static final Logger slowLogger = LogUtil.getLogger("slowLog");
	public static final int SLOW_TIMEOUT = 5000;

	@Override
	public Object invoke(MethodInvocation invocation) throws Throwable {
		Object result = null;
		String cacheKey = null;
		String targetName = invocation.getThis().getClass().getName();
		String methodName = invocation.getMethod().getName();
		long start = System.currentTimeMillis();
		result = invocation.proceed();
		long end = System.currentTimeMillis();
		long overTime = end - start;
		if (overTime > SLOW_TIMEOUT) {
			cacheKey = LogUtil.StringAppend(targetName, methodName, overTime);
			slowLogger.debug(cacheKey);
		}
		return result;
	}
}
