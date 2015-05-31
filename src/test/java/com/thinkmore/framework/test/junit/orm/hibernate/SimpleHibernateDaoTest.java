package com.thinkmore.framework.test.junit.orm.hibernate;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;

import com.thinkmore.business.bean.user.SysUser;
import com.thinkmore.framework.common.test.spring.SpringTxTestCase;
import com.thinkmore.framework.orm.hibernate.SimpleHibernateDao;
/** 
 * @Desc:
 * @author:tudou
 * @createTime:2014年10月7日
 */
public class SimpleHibernateDaoTest  extends SpringTxTestCase {

	private static final String DEFAULT_LOGIN_NAME = "admin";

	private SimpleHibernateDao<SysUser, Long> dao;

	@Autowired
	private SessionFactory sessionFactory;

	@Before
	public void setUp() throws BeansException, SQLException, IOException {
		dao = new SimpleHibernateDao<SysUser, Long>(sessionFactory, SysUser.class);
	}

	@Test
	public void crud() {
		SysUser user = new SysUser();
		user.setTrueName("foo");
		user.setUserName("foo");
		dao.save(user);
		dao.save(user);
		dao.delete(user);
	}

	@Test
	public void getAll() {
		List<SysUser> users = dao.getAll("id", true);
		assertEquals(6, users.size());
		assertEquals(DEFAULT_LOGIN_NAME, users.get(0).getUserName());
	}

	@Test
	public void findByProperty() {
		List<SysUser> users = dao.findBy("loginName", DEFAULT_LOGIN_NAME);
		assertEquals(1, users.size());
		assertEquals(DEFAULT_LOGIN_NAME, users.get(0).getUserName());

		SysUser user = dao.findUniqueBy("loginName", DEFAULT_LOGIN_NAME);
		assertEquals(DEFAULT_LOGIN_NAME, user.getUserName());
	}

	@Test
	public void findByHQL() {

		List<SysUser> users = dao.find("from SysUser u where loginName=?", DEFAULT_LOGIN_NAME);
		assertEquals(1, users.size());
		assertEquals(DEFAULT_LOGIN_NAME, users.get(0).getUserName());

		SysUser user = dao.findUnique("from SysUser u where loginName=?", DEFAULT_LOGIN_NAME);
		assertEquals(DEFAULT_LOGIN_NAME, user.getUserName());

		Map<String, Object> values = new HashMap<String, Object>();
		values.put("loginName", DEFAULT_LOGIN_NAME);
		users = dao.find("from SysUser u where loginName=:loginName", values);
		assertEquals(1, users.size());
		assertEquals(DEFAULT_LOGIN_NAME, users.get(0).getUserName());

		user = dao.findUnique("from SysUser u where loginName=:loginName", values);
		assertEquals(DEFAULT_LOGIN_NAME, user.getUserName());
	}

	@Test
	public void findByCriterion() {
		Criterion c = Restrictions.eq("loginName", DEFAULT_LOGIN_NAME);
		List<SysUser> users = dao.find(c);
		assertEquals(1, users.size());
		assertEquals(DEFAULT_LOGIN_NAME, users.get(0).getUserName());

		SysUser user = dao.findUnique(c);
		assertEquals(DEFAULT_LOGIN_NAME, user.getUserName());

		dao.findUnique(c);
	}

	@SuppressWarnings("unchecked")
	@Test
	public void batchUpdate() {
		Map map = new HashMap();
		map.put("ids", new Long[] { 1L, 23L });

		dao.batchExecute("update SysUser u set u.status='disabled' where id in(:ids)", map);
		SysUser u1 = dao.get(1L);
		assertEquals("disabled", u1.getStat());
		SysUser u3 = dao.get(3L);
		assertEquals("enabled", u3.getStat());
	}

	@Test
	public void eagerFetch() {
		String sql = "from SysUser u left join fetch u.roleList order by u.id";

		Query query = dao.createQuery(sql);
		List<SysUser> userList = dao.distinct(query).list();
		assertEquals(6, userList.size());
//		assertTrue(Hibernate.isInitialized(userList.get(0).getRoleList()));

//		Criteria criteria = dao.createCriteria().setFetchMode("roles", FetchMode.JOIN);
//		userList = dao.distinct(criteria).list();
//		assertEquals(6, userList.size());
//		assertTrue(Hibernate.isInitialized(userList.get(0).getRoleList()));
	}

	@Test
	public void getIdName() {
		assertEquals("id", dao.getIdName());
	}

}
