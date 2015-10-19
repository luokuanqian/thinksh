package com.thinkmore.business.bean.site;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	@ManyToOne
	@JoinColumn(name = "fk_site_id")
	private Site site;
	private String fromUrl;// 来源地址
	private String toUrl;// 映射地址
	private String note;

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
	public Site getSite() {
		return site;
	}

	public void setSite(Site site) {
		this.site = site;
	}
}
