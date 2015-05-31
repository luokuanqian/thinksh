package com.thinkmore.business.bean.user;

/**
 * @desc:角色
 * @author:lizhuang
 * @createTime:2013-7-1
 */
public class SysRole {
	private String id;
	private String roleName;
	private String roleType;
	private String orderNo;
	private String authId;
	private String note;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getRoleType() {
		return roleType;
	}

	public void setRoleType(String roleType) {
		this.roleType = roleType;
	}

	public String getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(String orderNo) {
		this.orderNo = orderNo;
	}

	public String getAuthId() {
		return authId;
	}

	public void setAuthId(String authId) {
		this.authId = authId;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
}
