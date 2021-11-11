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
	@Field(name="Category")
	private String category;
	@Field(name="Gift_price")
	private double price;
	
	//Constructor
	public Gifts(int giftId, String item, String category, double price) {
		super();
		this.giftId = giftId;
		this.item = item;
		this.category = category;
		this.price = price;
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

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	
}
