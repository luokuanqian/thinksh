package com.thinkmore.framework.test.junit.orm.hibernate;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.mock.web.MockHttpServletRequest;

import com.thinkmore.framework.orm.PropertyFilter;
import com.thinkmore.framework.orm.hibernate.HibernateWebUtils;
/** 
 * @Desc:
 * @author:tudou
 * @createTime:2014年10月7日
 */
public class HibernateWebUtilsTest extends Assert {

	@Test
	public void mergeByCheckedIds() {
		List<TestBean> srcList = new ArrayList<TestBean>();
		srcList.add(new TestBean("A"));
		srcList.add(new TestBean("B"));

		List<String> idList = new ArrayList<String>();
		idList.add("A");
		idList.add("C");

		HibernateWebUtils.mergeByCheckedIds(srcList, idList, TestBean.class);
		assertEquals(2, srcList.size());
		assertEquals("A", srcList.get(0).getId());
		assertEquals("C", srcList.get(1).getId());

	}

	@Test
	public void buildPropertyFilters() {
		MockHttpServletRequest request = new MockHttpServletRequest();
		request.setParameter("filter_EQS_loginName", "abcd");
		request.setParameter("filter_LIKES_name_OR_email", "efg");

		List<PropertyFilter> filters = HibernateWebUtils.buildPropertyFilters(request);

		assertEquals(2, filters.size());

		PropertyFilter filter1 = filters.get(0);
		assertEquals(PropertyFilter.MatchType.EQ, filter1.getMatchType());
		assertEquals("loginName", filter1.getPropertyName());
		assertEquals(String.class, filter1.getPropertyType());
		assertEquals("abcd", filter1.getPropertyValue());

		PropertyFilter filter2 = filters.get(1);
		assertEquals(PropertyFilter.MatchType.LIKE, filter2.getMatchType());
		assertEquals(String.class, filter2.getPropertyType());
		assertEquals(true, filter2.isMultiProperty());
		assertEquals("efg", filter2.getPropertyValue());
	}

	public static class TestBean {
		private String id;

		public TestBean() {
		}

		public TestBean(String id) {
			this.id = id;
		}

		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}
	}

}
