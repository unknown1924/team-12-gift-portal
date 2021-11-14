package com.lti.Giftshop.entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="Users")
public class Users {

	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";
	@Id
	@Field(name="_id")
	private long userId;
	
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
	
	@Field(name="Orders")
	private List<Orders> order_list;
	
	@Field(name="Complaints")
	private List<Complaints> complaint_list;

	//private int order_id;

	//Constructor
	public Users(String username, String password, String userEmail, String nameofUser, long userMobile,
			String address, List<Orders> order_list) {
		super();
		
		this.username = username;
		this.password = password;
		this.userEmail = userEmail;
		this.nameofUser = nameofUser;
		this.userMobile = userMobile;
		this.address = address;
		this.order_list = order_list;
	}
	public Users() {
		super();
	}
	public Users(String username, String userEmail, String nameofUser, long userMobile) {
		super();
		this.username = username;
		this.userEmail = userEmail;
		this.nameofUser = nameofUser;
		this.userMobile = userMobile;
	}

	
	//Getters and Setters


	public long getUserId() {
		return userId;
	}

	public void setUserId(long l) {
		this.userId = l;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public List<Orders> getOrder_list() {
		return order_list;
	}

	public void setOrder_list(List<Orders> order_list) {
		this.order_list = order_list;
	}

	public List<Complaints> getComplaint_list() {
		return complaint_list;
	}

	public void setComplaint_list(List<Complaints> complaint_list) {
		this.complaint_list = complaint_list;
	}
	

	
	

}