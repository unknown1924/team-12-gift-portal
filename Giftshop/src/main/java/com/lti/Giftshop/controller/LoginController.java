package com.lti.Giftshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.Giftshop.entities.Users;
import com.lti.Giftshop.repository.UsersRepository;
@CrossOrigin
@RestController("/Login")
public class LoginController {
	//Login Api
	@Autowired
	private UsersRepository userRepo;
	
	@PostMapping("/login")
	public boolean userlogin(@RequestBody Users user) {
	try{
	Users userfound=userRepo.findUser(user.getUsername());
	if((userfound.getPassword()).equals(user.getPassword()))
	return true;
	else return false;
	}

	catch(Exception e) {
	e.printStackTrace();
	return false;
	}
	}
}
