package com.thinkmore.business.service.site;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import com.thinkmore.business.bean.site.Site;
import com.thinkmore.business.bean.site.SiteAdapter;
import com.thinkmore.business.dao.site.SiteAdapterDao;
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
	
	/**
	 * 获取适配信息
	 * @param params
	 * @return
	 */
	public SiteAdapter getSiteAdapter(Object... params) {
		String sql = "select ad.*,s.path from site_adapter ad,site s  where s.id=ad.fk_site_id and ad.from_url = ? and s.domain=? ";
		SiteAdapter SiteAdapter = null;
		try {
			SiteAdapter = jdbcTemplate.queryForObject(sql, params, new RowMapper<SiteAdapter>() {
				public SiteAdapter mapRow(ResultSet rs, int rowNum) throws SQLException {
					SiteAdapter ad = new SiteAdapter();
					ad.setToUrl(rs.getString("to_url"));
					Site site = new Site();
					site.setPath(rs.getString("path"));
					ad.setSite(site);
					return ad;
				}
			});
		}catch (EmptyResultDataAccessException e) {
			//没有查询到结果，忽略错误日志
			return null;
		}catch (Exception e) {
			errorLogger.error(null, e);
		}
		return SiteAdapter;
	}
}
