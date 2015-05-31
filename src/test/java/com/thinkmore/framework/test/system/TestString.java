package com.thinkmore.framework.test.system;

import org.junit.Test;

import junit.framework.TestCase;

/**
 * @desc:
 * @author:lizhuang
 * @createTime:2013-7-3
 */
public class TestString extends TestCase {
	@Test
	public void testFormatString() {
		String url="www.thjnpx.org";
		String s="88888888";
		StringBuffer content=new StringBuffer();
		content.append("亲爱的学员:<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好！</div>");
		content.append("<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		content.append("欢迎您参加国管局和清华大学联合举办的“全国公共机构节能管理远程培训项目”，");
		content.append("请点击下面的链接查看（无法下载，打印需设置打印机）您的入学通知书，并记录通知书上的账号及密码登陆项目网站，于6月21日开学后正式上线学习。</div>");
		content.append("<div><a href='#url#").append("/recruit/offer_letter.jsp?id=#id#").append("' >");
		content.append("#url#/recruit/offer_letter.jsp?id=#id#");
		content.append("</a></div><div>(如果您无法点击这个链接，请将此链接复制到浏览器地址栏后访问)</div>");
		content.append("<div>您的发票学校将统一以快递形式寄出，由于学员数量较大，发票快递工作预计将于开学前后完成，请您耐心等候。</div>");
		content.append("<div>-----------------------------------</div>");
		content.append("<div>公共机构节能管理远程培训项目组</div>");
		content.append("<div>地&nbsp;&nbsp;址：清华大学创新大厦B座7层节能管理项目组</div>");
		content.append("<div>邮&nbsp;&nbsp;编：100084</div>");
		content.append("<div>教学服务电话：010-62797020 , 010-62792835</div>");
		content.append("<div>技术支持电话：010-62796475</div>");
		content.append("<div>传&nbsp;&nbsp;真：010-62796084 </div>");
		content.append("<div>E-mail:  ycxt4@mail.tsinghua.edu.cn</div>");
		String cont=content.toString().replace("#url#", url).replace("#id#", s);
		System.out.println(cont);

	}
}
