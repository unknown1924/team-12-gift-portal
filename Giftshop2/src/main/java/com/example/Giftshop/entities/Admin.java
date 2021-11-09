package com.example.Giftshop.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

public class Admin {
	
	
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

}
