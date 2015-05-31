package com.thinkmore.framework.orm.hibernate.bean;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import org.hibernate.annotations.GenericGenerator;

/**
 *  
 * 
 * @Desc:通用对象模型属性
 * @author:tudou
 * @createTime:2014年9月21日
 */
@MappedSuperclass
public class IdStringEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GenericGenerator(name = "idGenerator", strategy = "uuid")
	@GeneratedValue(generator = "idGenerator")
	@Column(length=40)
	private String id;
	private Date createTime;// 创建时间
	private Date lastUpdateTime;// 最后修改时间

	public String getId() {
		return id;
	}

	public void setId(String id) {
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
