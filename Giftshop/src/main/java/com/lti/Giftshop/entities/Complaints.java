package com.lti.Giftshop.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="Complaints")
public class Complaints {
	@Transient
    public static final String SEQUENCE_NAME = "complain_sequence";
	@Id
	@Field(name="_id")
	 private long compId;
	
	@Field(name="Comp_message")
	private String compMessage;
	
	@Field(name="Comp_status")
	private boolean compStatus;
	
	@Field(name="Order_id")
	private long orderId;
	
	//Constructor
	public Complaints(String compMessage, boolean compStatus, long orderId) {
		super();
		this.compMessage = compMessage;
		this.compStatus = compStatus;
		this.orderId = orderId;
	}


	public Complaints() {
		super();
		// TODO Auto-generated constructor stub
	}


	//Getters and Setters
	public long getCompId() {
		return compId;
	}

	public void setCompId(long compId) {
		this.compId = compId;
	}

	public String getCompMessage() {
		return compMessage;
	}

	public void setCompMessage(String compMessage) {
		this.compMessage = compMessage;
	}

	public boolean isCompStatus() {
		return compStatus;
	}

	public void setCompStatus(boolean compStatus) {
		this.compStatus = compStatus;
	}

	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}
	@Override
	public String toString() {
		return "Complaints [compId=" + compId + ", compMessage=" + compMessage + ", compStatus=" + compStatus
				+ ", orderId=" + orderId + "]";
	}
}
