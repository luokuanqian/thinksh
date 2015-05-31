package com.thinkmore.framework.test.junit.user;

import java.util.Iterator;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.thinkmore.business.bean.site.Site;
import com.thinkmore.business.bean.user.SysUser;
import com.thinkmore.framework.common.test.spring.SpringTxTestCase;

/**
 *  
 * 
 * @desc:一个学生的CRUD单元测试类 此类中说明了如何使用SpringTxTestCase编写单元测试的示例。纯手打。
 *                      希望大家开发时先编写测试类，再来写前端JS。不要问我为什么。 1，后台出现问题，前台你也不用瞎折腾了。
 *                      2，编写可靠规范的测试类对于项目的维护和编写是必须的。
 * @author:tudou
 * @createTime:2014年9月21日
 */
public class SysUserTest extends SpringTxTestCase {
	// 方法1:使用基于spring-text的注解测试。支持事务，回滚等一系列操作【推荐使用：简洁，强大，不用写太多的代码】
	/***************************************************************************
	 * @Autowired与@Resource都可以用来装配bean. 
	 *                                  都可以写在字段上,或写在setter方法上。默认我们不写setter方法，除非特殊必要
	 *                                  。
	 * 
	 * @Autowired基于spring[org.springframework.beans.factory.annotation.Autowired]的byType自己注入，它会自己找寻和它匹配的类型【一般是接口的实现类】注入，没有没有才会根据name注入。 
	 *                                                                                                                                  如果我们想使用根据名称自己注入
	 *                                                                                                                                  ：@Autowired
	 *                                                                                                                                  (
	 *                                                                                                                                  )
	 * @Qualifier("baseDao")或者直接使用@Resource。当你的一个接口对应多个实现类时，你必须考虑这么多。
	 * 
	 * @Resource基于JDK的byName[javax.annotation.Resource]自动注入。如果你要根据name精确查询某个bean可以使用此方法。相当于下面的方法2。
	 **************************************************************************/
	@Autowired
	SessionFactory sessionFactory;

	// 方法2:需要此类extends
	// TestCase，它是非注解方式,直接使用ESSH框架底层的SpringContextFactory基于原生Junit4单元测试，不能回滚数据。
	// 注：使用这种方法是byName的SpringContextFactory.getBean("batchServiceImpl")中，这个bean的名称必须是实现类的bean名称，而不是接口，虽然它被强制转换成了接口：基于接口的编程。
	// import junit.framework.TestCase;
	// IStudentService studentService;
	// IBatchService batchService;
	// IEnumConstService enumConstService;
	//
	// setUp:junit测试前做的工作。可以理解为junit3的Before或者spring的前置拦截器。
	// @Override
	// protected void setUp() throws Exception {
	// batchService = (IBatchService)
	// SpringContextFactory.getBean("batchServiceImpl");
	// enumConstService = (IEnumConstService)
	// SpringContextFactory.getBean("enumConstServiceImpl");
	// studentService = (IStudentService)
	// SpringContextFactory.getBean("studentServiceImpl");
	// super.setUp();
	// }
	// //tearDown与setUp相反。
	// @Override
	// protected void tearDown() throws Exception {
	// super.tearDown();
	// }

	/**
	 * @Rollback(value=false)会使你的数据在测试完毕后回滚，不会真实插入数据库中。 你可以 1，打注释掉它然后插入一条数据。
	 *                                                 2，取消注释掉再插入一条数据。看看。
	 *                                                 3，比如如果你的学号是唯一的
	 *                                                 ，再插入这条数据看看？无论是否有回滚
	 *                                                 ，测试都是失败的。
	 */
	// @Rollback(value=true)
	@Test
	public void testSave() {
		Session session = sessionFactory.openSession();
		 Site site1 = new Site();
		 site1.setCode("1");
		 site1.setTitle("多想-thinkmore");
		 Site site2 = new Site();
		 site2.setCode("2");
		 site2.setTitle("甲斯特弗雷-justplay");
		//
		// SysUser sysUser1 = new SysUser();
		// sysUser1.setLoginId("1");
		// sysUser1.setUserName("tudou");
		// sysUser1.setTrueName("土豆");
		// sysUser1.setSite(site);
		 session.saveOrUpdate(site1);
		 session.saveOrUpdate(site2);
		// session.saveOrUpdate(sysUser1);
		Query query = session.createQuery("from Site");
		Iterator<Site> it = query.iterate();
		while (it.hasNext()) {
			Site site = it.next();
			System.out.println(site.getId());
		}
		session.close();
	}
}
