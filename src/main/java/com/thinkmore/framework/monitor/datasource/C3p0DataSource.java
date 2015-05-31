package com.thinkmore.framework.monitor.datasource;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import com.thinkmore.framework.common.spring.SpringUtils;

public class C3p0DataSource {
	public static void instance() {
		ComboPooledDataSource cpds = (ComboPooledDataSource) SpringUtils.getBean("mysqlDataSource");
		cpds.getMaxConnectionAge();
		System.out.println(cpds.getMaxPoolSize());// 最大连接数
		System.out.println(cpds.getMinPoolSize());// 最小连接数
		try {
			System.out.println("mysql正在使用连接数:" + cpds.getNumBusyConnections());
			System.out.println("mysql空闲连接数:" + cpds.getNumIdleConnections());
			System.out.println("mysql总连接数:" + cpds.getNumConnections());
		} catch (Exception e1) {
			e1.printStackTrace();
		}
	}
}
