package com.thinkmore.framework.common.log;
import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.math.NumberUtils;
import org.slf4j.Logger;
import com.thinkmore.framework.common.log.LogUtil;
/**
 * @Desc:记录慢请求的日志和出现错误的日志
 * @author:tudou
 * @createTime:2014年10月12日
 */
public class SlowLogFilter implements Filter {
	private static final Logger slowLogger = LogUtil.getLogger("slowLog");
	private static final Logger errorLogger = LogUtil.getLogger("error");
	private static int MDEFAULT_TIME = 5000;// 默认5秒
	private static int MAX_TIME = 10000;// 最高10秒
	private static int MIN_TIME = 2000;// 最低2秒

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// 可配置参数，不符合的参数取默认值
		String slowTime = filterConfig.getInitParameter("slowTime");
		if (NumberUtils.isNumber(slowTime)) {
			Integer st = Integer.valueOf(slowTime);
			if (st >= MIN_TIME && st <= MAX_TIME) {
				MDEFAULT_TIME = st;
			}
		}
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
		String cacheKey = null;
		HttpServletRequest req = (HttpServletRequest) request;
		long start = System.currentTimeMillis();
		chain.doFilter(request, response);
		long end = System.currentTimeMillis();
		long overTime = end - start;
		if (overTime > MDEFAULT_TIME) {
			cacheKey = LogUtil.StringAppend(req.getRequestURL().toString(), req.getHeader("referer"), req.getRemoteAddr() + overTime);
			slowLogger.debug("over " + MDEFAULT_TIME / 1000 + " sec:" + cacheKey);
		}
	}

	@Override
	public void destroy() {
	}

	boolean log(HttpServletRequest req, Exception e) {
		String cacheKey = LogUtil.StringAppend(String.valueOf(req.getRequestURL()), req.getHeader("referer"), req.getRemoteAddr());
		errorLogger.error("logFilter Exp:" + cacheKey + "\n", e);
		throw new RuntimeException(e);
	}
}
