package com.thinkmore.business.action;

import java.io.IOException;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

@Scope("prototype")
@Controller
public class MobileAction extends BaseAction {
	private static final long serialVersionUID = 1L;

	// http://localhost:8080/think/mobile/Jsoup.action
	public String init() throws IOException {
		response.getWriter().write("--------init start--------");
		// JsoupSpider js = new JsoupSpider();
		// js.init();
		// JSONObject obj = JSONObject.fromObject(js.getTopMenu());
		// renderText(obj.toString());
		// renderText("---------------------------");
		System.out.println("--------init end--------");
		return null;
	}

	public String execute() {
		// renderText("execute");
		System.out.println("--------execute--------");
		return null;
	}
}
