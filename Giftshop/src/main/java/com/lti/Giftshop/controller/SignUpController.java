package com.lti.Giftshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.lti.Giftshop.entities.Users;
import com.lti.Giftshop.repository.UsersRepository;
import com.lti.Giftshop.service.SequenceGeneratorService;

@CrossOrigin
@RestController("/SignUp")
public class SignUpController {
	@Autowired
	private UsersRepository userRepo;
	@Autowired
	SequenceGeneratorService sequenceGeneratorService;
	@PostMapping("/signup")
	public Users addUser(@RequestBody Users user) {
		try {
			user.setUserId(sequenceGeneratorService.generateSequence(Users.SEQUENCE_NAME));
			return userRepo.save(user);
		}
		catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
