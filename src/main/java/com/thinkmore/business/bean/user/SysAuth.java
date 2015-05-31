package com.thinkmore.business.bean.user;

/**
 * @Desc:权限
 * @author:tudou
 * @createTime:2014年9月3日
 */
public class SysAuth {
	private String id;
	private String name;
	private String actionUrl;
	private boolean isUse;
	private String note;

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

	public String getActionUrl() {
		return actionUrl;
	}

	public void setActionUrl(String actionUrl) {
		this.actionUrl = actionUrl;
	}

	public boolean isUse() {
		return isUse;
	}

	public void setUse(boolean isUse) {
		this.isUse = isUse;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

}
