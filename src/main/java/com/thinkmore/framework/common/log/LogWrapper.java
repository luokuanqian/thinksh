package com.thinkmore.framework.common.log;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
/**
 * @desc:日志包装类
 * @author:tudou
 * @createTime:2015年9月29日
 */
public class LogWrapper {
	private Logger logger;

//	LogWrapper(Class<?> clazz) {
//		this.logger = LogManager.getLogger(clazz);
//	}
//
//	LogWrapper(String name) {
//		this.logger = LogManager.getLogger(name);
//	}
	
	LogWrapper(Class<?> clazz) {
		this.logger = LoggerFactory.getLogger(clazz);
	}

	LogWrapper(String name) {
		this.logger = LoggerFactory.getLogger(name);
	}

	public void info(String msg) {
		logger.info(msg);
	}

	public void debug(String msg) {
		logger.debug(msg);
	}

	public void error(String msg) {
		logger.error(msg);
	}

	public void warn(String msg) {
		logger.warn(msg);
	}
}
