package com.thinkmore.business.bean.student;

import java.util.Date;

import com.thinkmore.business.bean.site.Site;

/**
 * 学期
 * 
 * @author lizhuang
 */
public class StudentTerm {
	private String id;
	private String name;
	private Date startDate;
	private Date endDate;
	private Site site;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Site getSite() {
		return site;
	}

	public void setSite(Site site) {
		this.site = site;
	}
}
