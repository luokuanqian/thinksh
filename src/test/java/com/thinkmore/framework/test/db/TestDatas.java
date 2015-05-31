package com.thinkmore.framework.test.db;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import com.thinkmore.business.bean.site.Site;
import com.thinkmore.business.bean.site.SiteAdapter;
import com.thinkmore.framework.test.common.orm.HibernateConfigurationUtil;

public class TestDatas {

	public static void main(String[] args) {
		Configuration cf = HibernateConfigurationUtil.getConfigure();
		cf.configure();
		SessionFactory sessionFactory = cf.buildSessionFactory();
		Session son = sessionFactory.openSession();
		try {
			Transaction tr = son.beginTransaction();
			Site site1 = new Site();
			site1.setTitle("中国政府网");
			site1.setCode("zgzfw");
			site1.setSiteDomain("http://www.gov.cn/");
			Site site2 = new Site();
			site2.setTitle("太原理工成教");
			site2.setCode("tylgcj");
			site2.setSiteDomain("http://tyut.webtrn.cn/cms/");
			son.save(site1);
			son.save(site2);

			SiteAdapter sa1 = new SiteAdapter();
			sa1.setFromUrl("http://localhost/think/testAMUI.jsp");
			sa1.setToUrl("http://www.gov.cn/");
			sa1.setSiteId(site1.getId());

			SiteAdapter sa2 = new SiteAdapter();
			sa2.setFromUrl("http://localhost/think/testAMUI.jsp?");
			sa2.setToUrl("http://tyut.webtrn.cn/cms/mobile.htm");
			sa2.setSiteId(site2.getId());
			son.save(sa1);
			son.save(sa2);
			tr.commit();
		} finally {
			if (son != null) {
				son.close();
			}
		}
	}
}
