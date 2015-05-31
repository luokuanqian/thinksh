package com.thinkmore.framework.common.utils;

import java.sql.Types;

import org.hibernate.Hibernate;
import org.hibernate.dialect.MySQL5Dialect;
import org.hibernate.type.BigDecimalType;
import org.hibernate.type.StringType;
/** 
 * @Desc:
 * @author:tudou
 * @createTime:2014年10月2日
 */
public class MySQLDialect extends MySQL5Dialect{
	public MySQLDialect(){
		super();
		//hibernate4以后的配置
		registerHibernateType(Types.DECIMAL, BigDecimalType.INSTANCE.getName());
		registerHibernateType(Types.LONGVARCHAR,StringType.INSTANCE.getName());
		registerHibernateType(Types.BINARY,StringType.INSTANCE.getName());
		registerHibernateType(-1, StringType.INSTANCE.getName());
		//hibernate4之前的配置
//		registerHibernateType(Types.DECIMAL, Hibernate.BIG_DECIMAL.getName());
//		registerHibernateType(Types.LONGVARCHAR,Hibernate.STRING.getName());
//		registerHibernateType(Types.BINARY,Hibernate.STRING.getName());
//		registerHibernateType(-1, Hibernate.STRING.getName());
	}
}
