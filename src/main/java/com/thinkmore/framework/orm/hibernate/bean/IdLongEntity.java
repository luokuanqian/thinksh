package com.thinkmore.framework.orm.hibernate.bean;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

/**
 *  
 * 
 * @Desc:通用对象模型属性
 * @author:tudou
 * @createTime:2014年9月21日
 */
@MappedSuperclass
public class IdLongEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	protected Long id;
	private Date createTime;// 创建时间
	private Date lastUpdateTime;// 最后修改时间
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@GeneratedValue(strategy = GenerationType.SEQUENCE)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getLastUpdateTime() {
		return lastUpdateTime;
	}

	public void setLastUpdateTime(Date lastUpdateTime) {
		this.lastUpdateTime = lastUpdateTime;
	}
}
