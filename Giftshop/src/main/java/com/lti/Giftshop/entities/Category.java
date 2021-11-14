package com.lti.Giftshop.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="Gift_Category")
public class Category {

	@Id
	@Field(name="_id")
	private int categoryId;
	@Field(name="Category_name")
	private String category_name;
	//Constructor
	public Category(int categoryId, String category_name) {
		super();
		this.categoryId = categoryId;
		this.category_name = category_name;
	}
	//Getters and Setters
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public String getCategory_name() {
		return category_name;
	}
	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}
	@Override
	public String toString() {
		return "Category [categoryId=" + categoryId + ", category_name=" + category_name + "]";
	}
	
}
