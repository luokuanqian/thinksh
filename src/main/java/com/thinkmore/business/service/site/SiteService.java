package com.thinkmore.business.service.site;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thinkmore.business.bean.site.Site;
import com.thinkmore.business.dao.site.SiteDao;
import com.thinkmore.business.service.BaseService;
import com.thinkmore.framework.orm.Page;
import com.thinkmore.framework.orm.hibernate.HibernateDao;

/** 
 * @Desc:
 * @author:tudou
 * @createTime:2014年10月3日
 */
@Service
public class SiteService extends BaseService {
	@Autowired
	private SiteDao siteDao;
	
	public Page<Site> getPageSites(){
		return siteDao.getPageSites();
	}
	
	public Site getSiteById(String id){
		return siteDao.findUniqueBy("id", id);
	}

	@Override
	public SiteDao getDao() {
		return siteDao;
	}
}
