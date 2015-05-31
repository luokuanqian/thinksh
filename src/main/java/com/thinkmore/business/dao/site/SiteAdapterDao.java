package com.thinkmore.business.dao.site;

import org.springframework.stereotype.Repository;

import com.thinkmore.business.bean.site.SiteAdapter;
import com.thinkmore.framework.orm.Page;
import com.thinkmore.framework.orm.hibernate.HibernateDao;

/**
 * @Desc:站点适配信息
 * @author:tudou
 * @createTime:2014年10月3日
 */
@Repository
public class SiteAdapterDao extends HibernateDao<SiteAdapter, String> {
	public Page<SiteAdapter> getPageSiteAdapters() {
		Page<SiteAdapter> page = new Page<SiteAdapter>(20);
		return this.findPage(page, "from SiteAdapterDao ");
	}
}
