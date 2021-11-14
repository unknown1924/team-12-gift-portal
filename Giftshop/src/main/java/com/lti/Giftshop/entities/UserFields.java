package com.lti.Giftshop.entities;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="userFields")
public class UserFields {
	@Field(name="User_username")
	private String username;
	
	@Field(name="User_email")
	private String userEmail;
	
	@Field(name="User_nameofuser")
	private String nameofUser;
	
	@Field(name="User_mobile")
	private long userMobile;
	public UserFields(String username, String userEmail, String nameofUser, long userMobile) {
		super();
		this.username = username;
		this.userEmail = userEmail;
		this.nameofUser = nameofUser;
		this.userMobile = userMobile;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
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
	
	
}
