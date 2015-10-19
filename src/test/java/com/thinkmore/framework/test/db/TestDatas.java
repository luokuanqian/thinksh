package com.thinkmore.framework.test.db;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import com.thinkmore.business.bean.site.Site;
import com.thinkmore.business.bean.site.SiteAdapter;
import com.thinkmore.framework.test.common.orm.HibernateConfigurationUtil;

public class TestDatas {

	public static void main(String[] args) {
		SessionFactory sessionFactory = HibernateConfigurationUtil.getSessionFactory();
		Session son = sessionFactory.openSession();
		try {
			Transaction tr = son.beginTransaction();
			Site site1 = new Site();
			site1.setTitle("中国政府网");
			site1.setDomain("http://www.gov.cn");
			site1.setCode("zgzfw");
			Site site2 = new Site();
			site2.setTitle("太原理工成教");
			site2.setDomain("http://tyut.webtrn.cn");
			site1.setPath("/cms");
			site2.setCode("tylgcj");
			son.save(site1);
			son.save(site2);
			
			SiteAdapter sa1=new SiteAdapter();
			sa1.setFromUrl("http://192.168.22.168/cms/");
			sa1.setToUrl("http://www.gov.cn/");
			sa1.setSite(site1);
			
			SiteAdapter sa2=new SiteAdapter();
			sa2.setFromUrl("http://192.168.22.168/cms/");
			sa2.setToUrl("http://tyut.webtrn.cn/cms/mobile.htm");
			sa2.setSite(site2);
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
