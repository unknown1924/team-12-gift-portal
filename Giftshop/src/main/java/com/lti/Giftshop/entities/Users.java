package com.lti.Giftshop.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="Users")
public class Users {
	
	@Id
	@Field(name="_id")
	private int userId;
	
	@Field(name="User_username")
	private String username;
	
	@Field(name="User_password")
	private String password;
	
	@Field(name="User_email")
	private String userEmail;
	
	@Field(name="User_nameofuser")
	private String nameofUser;
	
	@Field(name="User_mobile")
	private long userMobile;
	
	@Field(name="address")
	private String address;
	
	@Field(name="Order_id")
	private int order_id;
	//List<Orders>
	
	//Constructor
	public Users(int userId, String username, String password, String userEmail, String nameofUser, long userMobile,
			String address, int order_id) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.userEmail = userEmail;
		this.nameofUser = nameofUser;
		this.userMobile = userMobile;
		this.address = address;
		this.order_id = order_id;
	}
	//Getters and Setters
	public int getOrder_id() {
		return order_id;
	}
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getNameofUser() {
		return nameofUser;
	}
	public void setNameofUser(String nameofUser) {
		this.nameofUser = nameofUser;
	}
	public long getUserMobile() {
		return userMobile;
	}
	public void setUserMobile(long userMobile) {
		this.userMobile = userMobile;
	}
	@Override
	public String toString() {
		return "Users [userId=" + userId + ", username=" + username + ", password=" + password + ", userEmail="
				+ userEmail + ", nameofUser=" + nameofUser + ", userMobile=" + userMobile + ", address=" + address
				+ ", order_id=" + order_id + "]";
	}
	
	

}
