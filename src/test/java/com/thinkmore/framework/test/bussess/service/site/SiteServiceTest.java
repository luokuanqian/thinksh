package com.thinkmore.framework.test.bussess.service.site;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import com.thinkmore.business.bean.site.Site;
import com.thinkmore.business.bean.user.SysUser;
import com.thinkmore.business.dao.site.SiteDao;
import com.thinkmore.business.service.site.SiteService;
import com.thinkmore.framework.common.spring.SpringUtils;
import com.thinkmore.framework.common.test.spring.SpringTxTestCase;
import com.thinkmore.framework.orm.Page;
import com.thinkmore.framework.orm.hibernate.HibernateDao;
import com.thinkmore.framework.utils.ReflectionUtils;

/**
 *  
 * 
 * @Desc:
 * @author:tudou
 * @createTime:2014年10月3日
 */
public class SiteServiceTest extends SpringTxTestCase {
	@Autowired
	private SiteService siteService;
	@Autowired
	private SessionFactory sessionFactory;
	
//	private HibernateDao<Site, Long> dao;
//	@Before
//	public void setUp() throws BeansException, SQLException, IOException {
//		dao = new HibernateDao<Site, Long>(sessionFactory, Site.class);
//	}
//	@Test
//	public void getPageSites(){
//		Page<Site> page=siteService.getPageSites();
//		List<Site> sites= page.getResult();
//		String namesString= ReflectionUtils.convertElementPropertyToString(sites, "title", ", ");
//		System.out.println("title:::"+namesString);
//	}
	
	@Test
	public void getSiteByHQL(){
		Session session=sessionFactory.openSession();
		try{
			int seconds=11;
			Thread.sleep(seconds*1000);
			SQLQuery query= session.createSQLQuery("select id from site");
			query.list();
			System.out.println("result========================================");
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			System.out.println("before:");
			System.out.println("connect:"+session.isConnected());
			System.out.println("open:::"+session.isOpen());
			session.clear();
			session.close();
			System.out.println("after:");
			System.out.println("connect:"+session.isConnected());
			System.out.println("open:::"+session.isOpen());
		}
		System.out.println("------------------------------------------------");
		Session session2=sessionFactory.openSession();
		try{
			int seconds2=8;
			Thread.sleep(seconds2*1000);
			SQLQuery query= session2.createSQLQuery("select id from site");
			query.list();
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			System.out.println("before:");
			System.out.println("connect:"+session2.isConnected());
			System.out.println("open:::"+session2.isOpen());
			session2.clear();
			session2.close();
			System.out.println("after:");
			System.out.println("connect:"+session2.isConnected());
			System.out.println("open:::"+session2.isOpen());
		}
	}
}
