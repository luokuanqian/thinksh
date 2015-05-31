package com.thinkmore.framework.test.common.spider;

import java.io.IOException;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import org.apache.commons.lang.StringUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class JsoupTest {
	Map<String, Element> topMenumap = new LinkedHashMap<String, Element>();
	Map<String, Element> map = new LinkedHashMap<String, Element>();
	private boolean isInit=false;
	public String title=null;

	/**
	 * 删除注释
	 * 
	 * @param content
	 * @return
	 */
	private String deleteComent(String content) {
		if (content == null) {
			content = "";
		}
		while (content.indexOf("<!--") >= 0 && content.indexOf("-->") >= 0) {
			content = content.substring(0, content.indexOf("<!--")) + content.substring(content.indexOf("-->") + 3);
		}
		while (content.indexOf("/*") >= 0 && content.indexOf("*/") >= 0) {
			content = content.substring(0, content.indexOf("/*")) + content.substring(content.indexOf("*/") + 2);
		}
		return content;
	}

	private void getChildElement(Element parentElement, Integer level) {
		parentElement.html(deleteComent(parentElement.html()));
		// System.out.println("key:"+(level+","+parentElement.hashCode())+",value:"+parentElement.html());
		if (parentElement.children().size() > 0) {
			level += 1;
			for (int i = 0; i < parentElement.children().size(); i++) {
				if (("ul".equals(parentElement.tagName().toLowerCase())) || ("table".equals(parentElement.tagName().toLowerCase()))) {// 整体标签
					String html = parentElement.html().replaceAll(" ", "").replaceAll(" ", "");// 去中英文空格
					if (html.contains("首页") || parentElement.id().contains("nav")) {
//						 System.out.println("----------------------首页Start-----------------------------");
						Elements links = parentElement.select("a");
						for (Element ele : links) {
							if (topMenumap.get(level + "," + ele.hashCode()) == null) {
								topMenumap.put(level + "," + ele.hashCode(), ele);
								//System.out.println(level + "," + ele.hashCode() + ",---------------" + ele.html());
								// System.out.println("a:" +
								// ele.attr("abs:href") + ",文本:" + ele.text());
							}
						}
//						 System.out.println("----------------------首页End-----------------------------");
					} else {
						map.put(level + "," + parentElement.hashCode(), parentElement);
					}
				} else {
					getChildElement(parentElement.child(i), level);
				}
			}
		} else {
			if ("script".equals(parentElement.tagName().toLowerCase())) {
				return;
			}
			if (StringUtils.isNotEmpty(parentElement.html())) {
				level += 1;
				map.put(level + "," + parentElement.hashCode(), parentElement);
			}
		}
	}

	public void init() {
		String url = "http://www.thjnpx.org/cms/";
		//url="http://www.taqpx.org/cms/";
		//url="http://www.jyzdy.org/zgclCMS/";
		//url = "http://www.tsinghua.edu.cn/publish/newthu/index.html";
		Document doc = null;
		int i = 1;
		while (doc == null && i < 4) {
			try {
				doc = Jsoup.connect(url).get();
			} catch (IOException e) {
				System.out.println("连接超时次数：" + i);
			}
			i++;
		}
		if (doc == null) {
			return;
		}
		System.out.println("--------------------分析中--------------------------------");
		title=doc.title();
		System.out.println("网站链接:" + url);
		System.out.println("网站标题:" + title);
		// System.out.println("html----------:"+doc.body().html());
		deleteComent(null);
		Element body = doc.body();
		getChildElement(body, 0);
		isInit=true;
	}

	public Map getTopMenu() {
		if(!isInit){
			init();
		}
		return topMenumap;
	}

	public Map doProcess() {
		if(!isInit){
			init();
		}
		Iterator<String> it = map.keySet().iterator();
		while (it.hasNext()) {
			String key = it.next();
			Element val = map.get(key);
			// 如果是ul或者table，用相应的组件渲染
			if (("ul".equals(val.tagName().toLowerCase())) || ("table".equals(val.tagName().toLowerCase()))) {
				System.out.println("------------------列表开始-----------------------------");
				Elements links = val.select("a");
				for (Element ele : links) {
					System.out.println("a:" + ele.attr("abs:href") + ",文本:" + ele.text());
				}
				System.out.println("------------------列表结束-----------------------------");
			} else {
				System.out.println("------------------非列表-----------------------------");
				if ("a".equals(val.tagName().toLowerCase())) {
					System.out.println("a:" + val.attr("abs:href") + ",文本:" + val.text());
				} else {
					if ("span".equals(val.tagName().toLowerCase())) {
						System.out.println("父容器:" + val.parent().tagName());
					}
					System.out.println("标签:" + val.tagName() + ",html:" + val.html());
				}
			}
		}
		System.out.println("---------------top menu---------------------");
		it = topMenumap.keySet().iterator();
		while (it.hasNext()) {
			String key = (String) it.next();
			Element val = topMenumap.get(key);
			Elements links = val.select("a");
			for (Element ele : links) {
				System.out.println("a:" + ele.attr("abs:href") + ",文本:" + ele.text());
			}
		}
		return map;
	}

	public static void main(String[] args) {
		JsoupTest test=new JsoupTest();
		test.init();
		test.doProcess();
	}
}
