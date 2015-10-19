package com.thinkmore.business.service;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import com.thinkmore.framework.common.log.LogUtil;
import com.thinkmore.framework.orm.hibernate.HibernateDao;

/**
 * @Desc:
 * @author:tudou
 * @createTime:2014年10月3日
 */
@Service
public abstract class BaseService {
	public static final Logger errorLogger = LogUtil.getLogger("error");
	public static final Logger otherLogger = LogUtil.getLogger("other");
	public static final Logger testLogger = LogUtil.getLogger("test");
	public static final Logger loginLogger = LogUtil.getLogger("login");

	@SuppressWarnings("rawtypes")
	public abstract HibernateDao getDao();

	@Autowired
	protected JdbcTemplate jdbcTemplate;
}
