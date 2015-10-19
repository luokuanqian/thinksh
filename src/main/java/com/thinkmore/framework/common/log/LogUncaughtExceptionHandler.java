package com.thinkmore.framework.common.log;
import org.slf4j.Logger;
public class LogUncaughtExceptionHandler implements Thread.UncaughtExceptionHandler {
	private static Logger log = LogUtil.getLogger("error");

	public void uncaughtException(Thread t, Throwable e) {
		log.error("exp:"+e.getMessage(), e);
	}
}