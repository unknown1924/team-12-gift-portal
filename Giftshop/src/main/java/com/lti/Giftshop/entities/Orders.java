package com.lti.Giftshop.entities;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection="Orders")

public class Orders {
////	@Id
//	@Field(name="_id")
//	private String orderId;
	
	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";

    @Id
    private long orderId;
	
	@Field(name="Order_date")
	private Date order_date;
	
	@Field(name="Gift_id")
	private int gift_id;
	
	@Field(name="Order_quantity")
	private int order_Quant;
	
	@Field(name="Recipient_address")
	private String rx_address;
	
	@Field(name="Recipient_phone_number")
	private long rx_phone;
	
	@Field(name="Order_status")
	private String orderStatus;
	
	@Field(name="Surprise_Gift")
	private boolean surprise;
	
	@Field(name="Total_Amt")
	private double total_amt;
	
	//Constructor
	public Orders(Date order_date, int gift_id, int order_Quant, String rx_address, long rx_phone, String orderStatus,
			boolean surprise, double total_amt) {
		super();
		this.order_date = order_date;
		this.gift_id = gift_id;
		this.order_Quant = order_Quant;
		this.rx_address = rx_address;
		this.rx_phone = rx_phone;
		this.orderStatus = orderStatus;
		this.surprise = surprise;
		this.total_amt = total_amt;
	}
	

	public Orders() {
		super();
	}


	//Getters and Setters
	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}

	public Date getOrder_date() {
		return order_date;
	}

	public void setOrder_date(Date order_date) {
		this.order_date = order_date;
	}

	public int getGift_id() {
		return gift_id;
	}

	public void setGift_id(int gift_id) {
		this.gift_id = gift_id;
	}

	public int getOrder_Quant() {
		return order_Quant;
	}

	public void setOrder_Quant(int order_Quant) {
		this.order_Quant = order_Quant;
	}

	public String getRx_address() {
		return rx_address;
	}

	public void setRx_address(String rx_address) {
		this.rx_address = rx_address;
	}

	public long getRx_phone() {
		return rx_phone;
	}

	public void setRx_phone(long rx_phone) {
		this.rx_phone = rx_phone;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public boolean isSurprise() {
		return surprise;
	}

	public void setSurprise(boolean surprise) {
		this.surprise = surprise;
	}

	public double getTotal_amt() {
		return total_amt;
	}

	public void setTotal_amt(double total_amt) {
		this.total_amt = total_amt;
	}

	@Override
	public String toString() {
		return "Orders [order_date=" + order_date + ", gift_id=" + gift_id + ", order_Quant="
				+ order_Quant + ", rx_address=" + rx_address + ", rx_phone=" + rx_phone + ", orderStatus=" + orderStatus
				+ ", surprise=" + surprise + ", total_amt=" + total_amt + "]";
	}

	
	
	

}
