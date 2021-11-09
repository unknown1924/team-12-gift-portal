package com.example.Giftshop.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

public class Orders {
	
	@Id
	@Field(name="Order_id")
	private int orderId;
	@Field(name="Order_status")
	private String orderStatus;
	@Field(name="Order_Qty")
	private int orderQty;
	
	
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public int getOrderQty() {
		return orderQty;
	}
	public void setOrderQty(int orderQty) {
		this.orderQty = orderQty;
	}
	public Orders(int orderId, String orderStatus, int orderQty) {
		super();
		this.orderId = orderId;
		this.orderStatus = orderStatus;
		this.orderQty = orderQty;
	}
	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", orderStatus=" + orderStatus + ", orderQty=" + orderQty + "]";
	}
	
	
	
	

}
