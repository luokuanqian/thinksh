package com.thinkmore.business.bean.user;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.thinkmore.business.bean.site.Site;
import com.thinkmore.framework.orm.hibernate.bean.IdStringEntity;

/**
 * @desc:用户表
 * @author:lizhuang
 * @createTime:2013-6-30
 */
@Entity
@Table(name = "sys_user")
public class SysUser extends IdStringEntity{
	private static final long serialVersionUID = 1L;
	private String userName;
	private String loginId;
	private String pwd;
	private String trueName;
	private String sex;
	private String email;
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastLoginDate;
	private String lastLoginIp;
	@Column(columnDefinition="bigint default 0")
	private Long loginNum;
	private String stat;// 状态
	private String operateUser;// 操作人
	@Column(name = "fk_role_id")
	private String roleId;
	@ManyToOne
	@JoinColumn(name = "fk_site_id")
	private Site site;// 站点

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getTrueName() {
		return trueName;
	}

	public void setTrueName(String trueName) {
		this.trueName = trueName;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getLastLoginDate() {
		return lastLoginDate;
	}

	public void setLastLoginDate(Date lastLoginDate) {
		this.lastLoginDate = lastLoginDate;
	}

	public String getLastLoginIp() {
		return lastLoginIp;
	}

	public void setLastLoginIp(String lastLoginIp) {
		this.lastLoginIp = lastLoginIp;
	}

	public Long getLoginNum() {
		return loginNum;
	}

	public void setLoginNum(Long loginNum) {
		this.loginNum = loginNum;
	}

	public String getStat() {
		return stat;
	}

	public void setStat(String stat) {
		this.stat = stat;
	}

	public String getOperateUser() {
		return operateUser;
	}

	public void setOperateUser(String operateUser) {
		this.operateUser = operateUser;
	}

	public String getRoleId() {
		return roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	public Site getSite() {
		return site;
	}

	public void setSite(Site site) {
		this.site = site;
	}
}
