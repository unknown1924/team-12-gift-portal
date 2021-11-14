package com.lti.Giftshop.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="Gifts")
public class Gifts {
	@Transient
    public static final String SEQUENCE_NAME = "gifts_sequence";
	@Id
	@Field(name="_id")
	private long giftId;
	@Field(name="Gift_item")
	private String item;
	@Field(name="Category")
	private String category;
	@Field(name="img_source")
	private String imgSource;
	@Field(name="description")
	private String description;
	@Field(name="Gift_price")
	private double price;
	
	//Constructor
//	public Gifts(int giftId, String item, String category, double price) {
//		super();
//		this.giftId = giftId;
//		this.item = item;
//		this.category = category;
//		this.price = price;
//	}
	public Gifts(long giftId, String item, String category, String imgSource, String description, double price) {
		super();
		this.giftId = giftId;
		this.item = item;
		this.category = category;
		this.imgSource = imgSource;
		this.description = description;
		this.price = price;
	}

	//Getters and Setters

	public long getGiftId() {
		return giftId;
	}

	public void setGiftId(long giftId) {
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

	public String getImgSource() {
		return imgSource;
	}

	public void setImgSource(String imgSource) {
		this.imgSource = imgSource;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	
}
