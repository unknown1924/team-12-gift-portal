package com.example.Giftshop.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

public class Gifts {
	
	@Id
	@Field(name="Gift_id")
	private int giftId;
	@Field(name="Gift_item")
	private String item;
	@Field(name="Gift_price")
	private int price;
	
	
	public int getGiftId() {
		return giftId;
	}
	public void setGiftId(int giftId) {
		this.giftId = giftId;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Gifts(int giftId, String item, int price) {
		super();
		this.giftId = giftId;
		this.item = item;
		this.price = price;
	}
	@Override
	public String toString() {
		return "Gifts [giftId=" + giftId + ", item=" + item + ", price=" + price + "]";
	}
	
	
	
	

}
