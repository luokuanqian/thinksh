package com.thinkmore.business.bean.student;

import com.thinkmore.business.bean.site.Site;
import com.thinkmore.business.bean.user.SysUser;

/**
 * 学员
 * 
 * @author lizhuang
 */
public class Student {
	private String id;
	private Site site;
	private SysUser sysUser;
	private StudentTerm studentTerm;
	private String studentType;
	private String company;
	private String address;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Site getSite() {
		return site;
	}

	public void setSite(Site site) {
		this.site = site;
	}

	public SysUser getSysUser() {
		return sysUser;
	}

	public void setSysUser(SysUser sysUser) {
		this.sysUser = sysUser;
	}

	public StudentTerm getStudentTerm() {
		return studentTerm;
	}

	public void setStudentTerm(StudentTerm studentTerm) {
		this.studentTerm = studentTerm;
	}

	public String getStudentType() {
		return studentType;
	}

	public void setStudentType(String studentType) {
		this.studentType = studentType;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
