package com.thinkmore.framework.test.db;

import junit.framework.TestCase;
import org.hibernate.cfg.Configuration;
import org.hibernate.tool.hbm2ddl.SchemaExport;
import com.thinkmore.framework.test.common.orm.HibernateConfigurationUtil;

public class TestCreateDB extends TestCase{
	
	public void testCreateDB() {
		Configuration cf= HibernateConfigurationUtil.getConfigure();
		cf.configure();
		SchemaExport se = new SchemaExport(cf);
		se.create(true, true);
	}
}
