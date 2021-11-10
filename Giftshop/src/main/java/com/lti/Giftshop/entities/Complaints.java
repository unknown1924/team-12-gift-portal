package com.lti.Giftshop.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="Complaints")
public class Complaints {
	
	@Id
	@Field(name="_id")
	private int compId;
	
	@Field(name="Comp_message")
	private String compMessage;
	
	@Field(name="Comp_status")
	private boolean compStatus;
	
	@Field(name="Order_id")
	private int orderId;
	
	//Constructor
	public Complaints(int compId, String compMessage, boolean compStatus, int orderId) {
		super();
		this.compId = compId;
		this.compMessage = compMessage;
		this.compStatus = compStatus;
		this.orderId = orderId;
	}
	//Getters and Setters
	public int getCompId() {
		return compId;
	}

	public void setCompId(int compId) {
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

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	@Override
	public String toString() {
		return "Complaints [compId=" + compId + ", compMessage=" + compMessage + ", compStatus=" + compStatus
				+ ", orderId=" + orderId + "]";
	}
}
