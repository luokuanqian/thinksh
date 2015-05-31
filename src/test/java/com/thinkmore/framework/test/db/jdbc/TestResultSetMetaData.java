package com.thinkmore.framework.test.db.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

/**
 *  
 * 
 * @Desc:
 * @author:tudou
 * @createTime:2014年9月21日
 */
public class TestResultSetMetaData {
	@Test
	public void testResultSetMetaData() throws Exception {
		String url = "jdbc:mysql://localhost:3306/thinkmore?useUnicode=true&characterEncoding=utf8&";
		String username = "root";
		String password = "111111";
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		Connection con = DriverManager.getConnection(url, username, password);
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery("select id id,title from site");
		ResultSetMetaData rsmd = rs.getMetaData();
		int columnCount = rsmd.getColumnCount();
		for (int i = 1; i <= columnCount; i++) {
			String tmp = rsmd.getColumnName(i) + "###" + rsmd.getColumnLabel(i);
			System.out.println(tmp);
		}
		rs.close();
		stmt.close();
		con.close();
	}
}
