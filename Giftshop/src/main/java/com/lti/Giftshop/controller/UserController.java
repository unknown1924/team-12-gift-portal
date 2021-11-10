package com.lti.Giftshop.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.Giftshop.entities.Gifts;
import com.lti.Giftshop.entities.Orders;
import com.lti.Giftshop.entities.Users;
import com.lti.Giftshop.repository.GiftsRepository;
import com.lti.Giftshop.repository.OrdersRepository;
import com.lti.Giftshop.repository.UsersRepository;
import com.lti.Giftshop.service.SequenceGeneratorService;

@CrossOrigin
@RestController
public class UserController {
	@Autowired
	private UsersRepository userRepo;
	@Autowired
	private GiftsRepository giftRepo;
	@Autowired
	private OrdersRepository orderRepo;
	@Autowired
	SequenceGeneratorService sequenceGeneratorService;
	
	//Get user - Get a user object based on Username
	@GetMapping("/user/{username}")
	public Users getUser(@PathVariable("username") String username) {
		return userRepo.findUser(username);
	}
	//Get user - Get orders for that user
	@GetMapping("/user/{username}/seeOrders")
	public List<Orders> getorders(@PathVariable("username") String username){
	List<Orders> list = userRepo.findUser(username).getOrder_list();
	return list;
}
	//View All gifts
	@GetMapping("/user/getGifts")
	public List<Gifts> getGifts(){
		try {
			return giftRepo.findAll();
		}
		catch(Exception e) {
			System.out.println("Probably the database is empty! or there is an error");
			return null;
		}
		
	}
	//View Gifts by category
	@GetMapping("/user/giftByCategory/{category}")
	public List<Gifts> getGiftByCategory(@PathVariable("category") String category){
		try {
			return giftRepo.getAllGiftsByCategory(category);
		}
		catch(Exception e) {
			System.out.println("Probably the database is empty!");
			return null;
		}
		
	}
	// Send a gift
	@PutMapping("/user/{username}/sendGift")
	public boolean sendGift(@PathVariable("username") String username,
			@RequestBody Orders order) {
		
		order.setOrderId(sequenceGeneratorService.generateSequence(Orders.SEQUENCE_NAME));

		try {
			Users user = userRepo.findUser(username);
			order.setOrderStatus("Placed");
			if(user.getOrder_list()==null) {
				List<Orders>userOrders = new ArrayList<>();
				userOrders.add(order);
				user.setOrder_list(userOrders);
			}
			else {
				List<Orders> userOrders = user.getOrder_list();
				userOrders.add(order);
				user.setOrder_list(userOrders);
			}
			
			
			orderRepo.save(order);
			userRepo.save(user);
			return true;	
		}
		catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}



}
