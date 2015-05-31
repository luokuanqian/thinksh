package com.thinkmore.framework.test.db.hibernate;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.cfg.Configuration;
import org.junit.Test;

/**
 * 
 * @Desc:
 * @author:tudou
 * @createTime:2014年9月21日
 */
public class TestResultSetMetaData {
	
	//hibernate3中使用，在hibernate4中已过时
	//Configuration cfg = new Configuration().configure();//XML方式
	//AnnotationConfiguration configuration = new AnnotationConfiguration();//注解方式
	//SessionFactory sessionFactory =cfg.buildSessionFactory();
	
	//前期hibernate4开始用，已过时
	//ServiceRegistry  serviceRegistry = new ServiceRegistryBuilder().applySettings(cfg.getProperties()).buildServiceRegistry();
	//SessionFactory sessionFactory = cfg.buildSessionFactory(serviceRegistry);  
	
	//后期hibernate4开始使用
	//ServiceRegistry  serviceRegistry = new StandardServiceRegistryBuilder().applySettings(cfg.getProperties()).build();
	//SessionFactory sessionFactory = cfg.buildSessionFactory(serviceRegistry);
	
	@Test
	public void testResultSetMetaData() throws Exception {
//		Configuration cfg = new Configuration().configure();
//		ServiceRegistry  serviceRegistry = new StandardServiceRegistryBuilder().applySettings(cfg.getProperties()).build();
//		SessionFactory sessionFactory = cfg.buildSessionFactory(serviceRegistry);
		AnnotationConfiguration cfg = new AnnotationConfiguration();//注解方式
		SessionFactory sessionFactory =cfg.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Query query = session.createSQLQuery("select u.truename,site.id as id,site.title as title from site site inner join sys_user u on u.fk_site_id=site.id");
		List<Object[]> lists = query.list();
		for (Object[] obj : lists) {
			System.out.println("id:"+obj[0]+",title:"+obj[1]);
		}
		session.close();
	}
}
