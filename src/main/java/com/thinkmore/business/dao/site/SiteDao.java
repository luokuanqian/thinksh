package com.thinkmore.business.dao.site;



import org.springframework.stereotype.Repository;
import com.thinkmore.business.bean.site.Site;
import com.thinkmore.framework.orm.Page;
import com.thinkmore.framework.orm.hibernate.HibernateDao;

/**
 * @Desc:站点信息
 * @author:tudou
 * @createTime:2014年10月3日
 */
@Repository
public class SiteDao extends HibernateDao<Site, String> {
	public Page<Site> getPageSites() {
		Page<Site> page = new Page<Site>(20);
		return this.findPage(page, "from Site ");
	}
}
