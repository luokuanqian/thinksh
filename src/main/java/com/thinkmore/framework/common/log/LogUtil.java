package com.thinkmore.framework.common.log;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
/**
 * 日志辅助类
 * 使用slf4j，兼容多种日志
 * @author tudou
 *
 */
public class LogUtil {
	// 私有变量，防止被人清空
	private static Map<String, Logger> map = new HashMap<String, Logger>();
	// 默认必须的logger
	private static String[] loggerNames = { "error", "other", "login", "test", "slowLog", "SystemOut" };
	static {
		for (int i = 0; i < loggerNames.length; i++) {
			map.put(loggerNames[i], LoggerFactory.getLogger(loggerNames[i]));
		}
	}

	/**
	 * 添加logger，支持一次性添加多个logger
	 * 
	 * @param loggerName
	 * @return
	 */
	public static boolean addLogger(String... loggerName) {
		if (loggerName != null && loggerName.length > 0) {
			for (int i = 0; i < loggerName.length; i++) {
				if (StringUtils.isNotBlank(loggerName[i])) {
					map.put(loggerName[i], LoggerFactory.getLogger(loggerName[i]));
				}
			}
			return true;
		}
		return false;
	}

	/**
	 * 获取logger
	 * 
	 * @param loggerName
	 * @return
	 */
	public static Logger getLogger(String loggerName) {
		if(StringUtils.isBlank(loggerName)){
			return LoggerFactory.getLogger("other");
		}
		Logger logger = map.get(loggerName);
		if (logger == null) {
			return LoggerFactory.getLogger("other");
		}
		return logger;
	}
	
	/**
	 * 获得拼接的String
	 * 通常用于包名+类名+方法名，如com.thinkmore.framework.monitor.log.LogAdvice
	 */
	public static String StringAppend(Object... arguments) {
		StringBuffer sb = new StringBuffer();
		if ((arguments != null) && (arguments.length != 0)) {
			for (int i = 0; i < arguments.length; i++) {
				if (arguments[i] == null) {
					arguments[i] = "null";
				}
				sb.append(arguments[i]).append(".");
			}
			sb.deleteCharAt(sb.length() - 1);
		}
		return sb.toString();
	}

	/**
	 * 完整的堆栈信息
	 * 使用log.error("", e);也可以打印完整的堆栈信息，注意中间有个,号
	 * @param e Exception
	 * @return Full StackTrace
	 */
	public static String getStackTrace(Exception e) {
		StringWriter sw = null;
		PrintWriter pw = null;
		try {
			sw = new StringWriter();
			pw = new PrintWriter(sw);
			e.printStackTrace(pw);
			pw.flush();
			sw.flush();
		} finally {
			if (sw != null) {
				try {
					sw.close();
				} catch (IOException e1) {
					e1.printStackTrace();
				}
			}
			if (pw != null) {
				pw.close();
			}
		}
		return sw.toString();
	}
}
