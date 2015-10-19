package com.thinkmore.framework.test.common.orm;

import java.util.List;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.cfg.ImprovedNamingStrategy;
import org.hibernate.service.ServiceRegistry;
import com.thinkmore.framework.utils.ClassUtils;
/**
 * @className:HibernateConfigurationUtil.java
 * @classDescription:
 * @author:tudou
 * @createTime:2015年5月28日
 */
public class HibernateConfigurationUtil {
	// hibernate3中使用，在hibernate4中已过时
	// Configuration cfg = new Configuration().configure();//XML方式
	// AnnotationConfiguration configuration = new
	// AnnotationConfiguration();//注解方式
	// SessionFactory sessionFactory =cfg.buildSessionFactory();

	// 前期hibernate4开始用，已过时
	// Configuration cfg = new Configuration().configure();
	// ServiceRegistry serviceRegistry = new
	// ServiceRegistryBuilder().applySettings(cfg.getProperties()).buildServiceRegistry();
	// SessionFactory sessionFactory = cfg.buildSessionFactory(serviceRegistry);

	// 后期hibernate4开始使用
	// Configuration cfg = new Configuration().configure();
	// ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(cfg.getProperties()).build();
	// SessionFactory sessionFactory = cfg.buildSessionFactory(serviceRegistry);

	// ClassPathResource ac = new ClassPathResource("spring/spring-context.xml");
	// XmlBeanFactory xbf = new XmlBeanFactory(ac);
	// //注意： &sessionFactory ，一定要包含 &，不加Spring返回的是Hibernate下的SessionFactoryImpl类
	// LocalSessionFactoryBean lsfb=(LocalSessionFactoryBean)
	// xbf.getBean("&sessionFactory");
	// Configuration cfg=lsfb.getConfiguration();
	// SchemaExport export=new SchemaExport(cfg);
	// export.create(true, false);

	@SuppressWarnings("rawtypes")
	public static Configuration getConfigure() {
		Configuration cf = new Configuration();
		cf.setNamingStrategy(ImprovedNamingStrategy.INSTANCE);
		String packageToscan = "com.thinkmore.business.bean";
		List<Class> classes = ClassUtils.getClassesByPackageName(packageToscan);
		for (Class<?> cls : classes) {
			if (cls.getAnnotation(javax.persistence.Entity.class) != null) {
				cf.addAnnotatedClass(cls);
				//cf.addClass(cls);
			}
		}
		return cf;
	}
	
	public static SessionFactory getSessionFactory() {
		Configuration cfg = getConfigure().configure();
		ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(cfg.getProperties()).build();
		return cfg.buildSessionFactory(serviceRegistry);
	}

}
