package com.thinkmore.business.bean.site;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.thinkmore.framework.orm.hibernate.bean.IdStringEntity;

/**
 * @desc:站点信息
 * @author:lizhuang
 * @createTime:2013-6-30
 */
@Entity
@Table(name="site")
public class Site extends IdStringEntity {
	private static final long serialVersionUID = 1L;
	private String title;
	@Column(length=50)
	private String shortSiteName;
	@Column(length=100)
	private String siteName;
	@Column(length=50)
	private String domain;
	@Column(length=20)
	private String code;
	private String logo;
	private String copyright;
	@Column(length=2)
	private String stat;
	@Column(length=10)
	private String path;
	private String note;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getShortSiteName() {
		return shortSiteName;
	}

	public void setShortSiteName(String shortSiteName) {
		this.shortSiteName = shortSiteName;
	}

	public String getSiteName() {
		return siteName;
	}

	public void setSiteName(String siteName) {
		this.siteName = siteName;
	}

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public String getCopyright() {
		return copyright;
	}

	public void setCopyright(String copyright) {
		this.copyright = copyright;
	}

	public String getStat() {
		return stat;
	}

	public void setStat(String stat) {
		this.stat = stat;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}
}
