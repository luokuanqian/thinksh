package com.thinkmore.business.service.site;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thinkmore.business.bean.site.Site;
import com.thinkmore.business.bean.site.SiteAdapter;
import com.thinkmore.business.dao.site.SiteAdapterDao;
import com.thinkmore.business.dao.site.SiteDao;
import com.thinkmore.business.service.BaseService;
import com.thinkmore.framework.orm.Page;

/**
 *  
 * 
 * @Desc:
 * @author:tudou
 * @createTime:2014年10月3日
 */
@Service
public class SiteAdapterService extends BaseService {
	@Autowired
	private SiteAdapterDao siteAdapterDao;

	public Page<SiteAdapter> getPageSites() {
		return siteAdapterDao.getPageSiteAdapters();
	}

	public SiteAdapter getSiteById(String id) {
		return siteAdapterDao.findUniqueBy("id", id);
	}

	public SiteAdapterDao getDao() {
		return siteAdapterDao;
	}
}
