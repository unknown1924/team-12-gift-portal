package com.lti.Giftshop.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="Gifts")
public class Gifts {
	
	@Id
	@Field(name="_id")
	private int giftId;
	@Field(name="Gift_item")
	private String item;
	@Field(name="Category_id")
	private int categoryId;
	@Field(name="Gift_price")
	private int price;
	//Constructor
	public Gifts(int giftId, int categoryId, String item, int price) {
		super();
		this.giftId = giftId;
		this.item = item;
		this.price = price;
		this.categoryId = categoryId;
	}
	//Getters and Setters
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
	
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	@Override
	public String toString() {
		return "Gifts [giftId=" + giftId + ", item=" + item + ", categoryId=" + categoryId + ", price=" + price + "]";
	}
	
	
	
	
	

}
