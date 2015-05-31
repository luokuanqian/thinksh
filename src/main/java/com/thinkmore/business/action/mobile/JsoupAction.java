package com.thinkmore.business.action.mobile;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Controller;
import com.thinkmore.business.action.BaseAction;
import com.thinkmore.business.bean.site.SiteAdapter;
import com.thinkmore.business.service.site.SiteAdapterService;
import com.thinkmore.framework.common.spider.JsoupSpider;

@Scope("prototype")
@Controller
public class JsoupAction extends BaseAction {
	private static final long serialVersionUID = 1L;
	@Resource
	private SiteAdapterService siteAdapterService;
	@Resource
	private JdbcTemplate jdbcTemplate;

	public void getHTML() {
		try {
			String fromUrl = request.getHeader("referer");
			String toUrl = null;
			String sql = "from site_adapter sa inner join  site s where sa.fromUrl=?";
			List<SiteAdapter> list = jdbcTemplate.query(sql, new RowMapper() {
				public SiteAdapter mapRow(ResultSet rs, int rowNum) throws SQLException {
					SiteAdapter sa = new SiteAdapter();
					sa.setToUrl(rs.getString("to_url"));
					return sa;
				}
			});
			if (list.isEmpty()) {
				renderText("1");
				return;
			}
			// SiteAdapter sa=
			// siteAdapterService.getDao().findUniqueBy("fromUrl", fromUrl);
			SiteAdapter sa = list.get(0);
			toUrl = sa.getToUrl();
			JsoupSpider js = new JsoupSpider();
			Document doc = js.getHTML(toUrl);
			if (doc != null) {
				renderText(doc.html());
			} else {
				renderText("there is nothing...");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// http://localhost/think/mobile/jsoup!init.action
	public void init() {
		try {
			System.out.println("--------------------init-------------------------");
			JsoupSpider js = new JsoupSpider();
			js.init();
			Map<String, Element> map = js.getTopMenu();
			JSONArray array = new JSONArray();
			Iterator<String> it = map.keySet().iterator();
			while (it.hasNext()) {
				String key = it.next();
				Element val = map.get(key);
				JSONObject obj = new JSONObject();
				obj.put("id", key);
				obj.put("tagName", val.tagName().toLowerCase());
				obj.put("href", val.attr("abs:href"));
				obj.put("text", val.text());
				array.add(obj);
			}
			renderText(array.toString());
			System.out.println("--------------------init end-------------------------");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public String execute() {
		System.out.println("--------------------execute-------------------------");
		// renderText("execute");
		return null;
	}
}
