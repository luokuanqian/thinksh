package com.thinkmore.business.action;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.ModelAttribute;

/**
 * 封装的action基类
 * 
 * @author lizhuang
 */
public class BaseController {
	protected static final Log otherLogger = LogFactory.getLog("other");

	private String toUrl;
	protected HttpServletRequest request;
	protected HttpServletResponse response;
	protected HttpSession session;

	@ModelAttribute
	public void setReqAndRes(HttpServletRequest request, HttpServletResponse response) {
		this.request = request;
		this.response = response;
		this.session = request.getSession();
	}

	/**
	 * 获得response输出对象 add by lizhuang
	 * 
	 * @return PrintWriter
	 * @throws IOException
	 */
	protected PrintWriter getOut() {
		try {
			return response.getWriter();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 绕过Template,直接输出内容的简便函数. add by lizhuang
	 */
	protected String render(String text, String contentType) {
		response.setContentType(contentType);
		try {
			response.getWriter().write(text);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 直接输出字符串.
	 */
	protected String renderText(String text) {
		return render(text, "text/plain;charset=UTF-8");
	}

	/**
	 * 直接输出JSON字符串.
	 */
	protected String renderJson(String text) {
		return render(text, "text/json;charset=UTF-8");
	}

	/**
	 * 直接输出字符串.
	 */
	protected void render(String text) {
		this.getOut().println(text);
	}

	/**
	 * 直接输出字符串GBK编码.
	 */
	protected String renderHtmlGBK(String html) {
		return render(html, "text/html;charset=GBK");
	}

	/**
	 * 直接输出XML.
	 */
	protected String renderXML(String xml) {
		return render(xml, "text/xml;charset=UTF-8");
	}

	/**
	 * 直接输出字符串
	 */
	protected String flushText(PrintWriter out, String str) {
		out.write(str);
		out.flush();
		out.close();
		return null;
	}

	/**
	 * 除WEB-INF目录外，跳转到指定的界面
	 * 
	 * @return
	 */
	public String goTo() {
		String url = request.getParameter("toUrl");
		String path1 = request.getContextPath();
		String basePath1 = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path1 + "/";
		if (StringUtils.isNotBlank(url)) {
			url = url.toUpperCase();
			// 安全限制，否则会有安全漏洞，如果需要跳转到WEB-INF目录的情况，请在配置文件中写死
			if (url.startsWith("/WEB-INF")) {
				try {
					if (url.startsWith("/WEB-INF/CLASSES/") || url.contains(".XML")) {
						response.sendRedirect(basePath1 + "error/visite_error.htm");
					}
				} catch (IOException e) {
					e.printStackTrace();
				}
				return null;
			}
			this.setToUrl(url);
		}
		return "goTo";
	}

	public String getToUrl() {
		return toUrl;
	}

	public void setToUrl(String toUrl) {
		this.toUrl = toUrl;
	}
}
