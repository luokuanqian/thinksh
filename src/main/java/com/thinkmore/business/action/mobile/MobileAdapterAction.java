package com.thinkmore.business.action.mobile;
import org.apache.commons.lang.StringUtils;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.thinkmore.business.action.BaseController;
import com.thinkmore.business.bean.site.SiteAdapter;
import com.thinkmore.business.service.site.SiteAdapterService;
import com.thinkmore.framework.common.spider.JsoupSpider;
/**
 * 手机适配核心类
 * 
 * @author lizhuang
 * @date 2015.06.05
 */
@Controller
@RequestMapping(value = "/mobile")
public class MobileAdapterAction extends BaseController {
	@Autowired
	private SiteAdapterService siteAdapterService;

	/**
	 * 获取指定URL的domain
	 * 
	 * @param url
	 * @return
	 */
	public String getDomain(String url) {
		int index = url.substring(8).indexOf("/");
		return url.substring(0, index + 8);
	}

	/**
	 * 获取指定URL的HTML内容
	 */
	@RequestMapping(value = "/adapterUrl",produces="text/html;charset=UTF-8")
	@ResponseBody
	public String adapterUrl() {
		try {
			String ref=request.getHeader("referer");
			//System.out.println("fromUrl:::" + ref);
			String toUrl = null;
			otherLogger.error("fromUrl:::" + ref);
			if (StringUtils.isNotBlank(ref)) {
				otherLogger.error("getDomainURL:::" + getDomain(ref));
				// SiteAdapter sa=siteAdapterService.getDao().findUniqueBy("fromUrl", fromUrl);
				SiteAdapter ad = siteAdapterService.getSiteAdapter(ref, getDomain(ref));
				if (ad == null) {
					otherLogger.error("nothing adapter here");
					toUrl = request.getParameter("url");
				} else {
					toUrl = ad.getToUrl();
				}
			} else {
				toUrl = request.getParameter("url");
			}
			if (StringUtils.isEmpty(toUrl)) {
				return "1";
			}
			otherLogger.error("toUrl:::" + toUrl);
			// toUrl="http://www.gov.cn/";
			// toUrl="http://tyut.webtrn.cn/cms/mobile.htm";
			JsoupSpider js = new JsoupSpider();
			Document doc = js.getHTML(toUrl);
			if (doc != null) {
				//render(doc.html());
				return doc.html();
			} else {
				return "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "1";
	}

	public String execute() {
		return null;
	}
}
