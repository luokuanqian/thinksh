package com.thinkmore.business.service;

import org.springframework.stereotype.Service;
import com.thinkmore.framework.orm.hibernate.HibernateDao;

/**
 *  
 * 
 * @Desc:
 * @author:tudou
 * @createTime:2014年10月3日
 */
@Service
public abstract class BaseService {

	public abstract HibernateDao getDao();
}
