package com.example.Giftshop.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

public class Complaints {
	
	@Id
	@Field(name="Comp_id")
	private int compId;
	@Field(name="Comp_message")
	private String compMessage;
	@Field(name="Comp_status")
	private boolean compStatus;
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
	public Complaints(int compId, String compMessage, boolean compStatus) {
		super();
		this.compId = compId;
		this.compMessage = compMessage;
		this.compStatus = compStatus;
	}
	@Override
	public String toString() {
		return "Complaints [compId=" + compId + ", compMessage=" + compMessage + ", compStatus=" + compStatus + "]";
	}
	
	

}
