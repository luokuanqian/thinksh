package com.thinkmore.business.bean.site;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.thinkmore.framework.orm.hibernate.bean.IdStringEntity;

/**
 * @desc:站点适配表
 * @author:lizhuang
 * @createTime:2015.05.28
 */
@Entity
@Table(name = "site_adapter")
public class SiteAdapter extends IdStringEntity {
	private static final long serialVersionUID = 1L;
	@Column(length = 40)
	private String siteId;
	private String fromUrl;// 来源地址
	private String toUrl;// 映射地址
	private String note;

	public String getSiteId() {
		return siteId;
	}

	public void setSiteId(String siteId) {
		this.siteId = siteId;
	}

	public String getFromUrl() {
		return fromUrl;
	}

	public void setFromUrl(String fromUrl) {
		this.fromUrl = fromUrl;
	}

	public String getToUrl() {
		return toUrl;
	}

	public void setToUrl(String toUrl) {
		this.toUrl = toUrl;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
}
