package com.example.Giftshop.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

public class Users {
	
	@Id
	@Field(name="User_id")
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
	public Users(int userId, String username, String password, String userEmail, String nameofUser, long userMobile) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.userEmail = userEmail;
		this.nameofUser = nameofUser;
		this.userMobile = userMobile;
	}
	
	
	

}
