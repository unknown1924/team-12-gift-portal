package com.lti.Giftshop.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.Giftshop.entities.Complaints;
import com.lti.Giftshop.entities.Gifts;
import com.lti.Giftshop.entities.Orders;
import com.lti.Giftshop.entities.Users;
import com.lti.Giftshop.repository.ComplaintsRepository;
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
	private ComplaintsRepository compRepo;
	@Autowired
	SequenceGeneratorService sequenceGeneratorService;
	
	
	//User SignUp
	@PostMapping("/user/signup")
	public Users addUser(@RequestBody Users user) {
		user.setUserId(sequenceGeneratorService.generateSequence(Complaints.SEQUENCE_NAME));
		return userRepo.save(user);
	}
	
	//Get user - Get a user object based on Username
	@GetMapping("/user/{username}")
	public Users getUser(@PathVariable("username") String username) {
		return userRepo.findUser(username);
	}
	//Get user - Get orders for that user
	@GetMapping("/user/{username}/seeOrders")
	public List<Orders> getorders(@PathVariable("username") String username){
		try {
			List<Orders> list = userRepo.findUser(username).getOrder_list();
			return list;
		}
		catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	
}
	//Get complaints - See all complaints for that user
	@GetMapping("/user/{username}/seeComplaint")
	public List<Complaints> getComplaints(@PathVariable("username") String username)
	{
	try {
		List<Complaints> list = userRepo.findUser(username).getComplaint_list();
		return list;
	}
	catch(Exception e) {
		e.printStackTrace();
		return null;
	}	
	}
	
	//View All gifts
	@GetMapping("/user/{username}/getGifts")
	public List<Gifts> getGifts(){
		try {
			return giftRepo.findAll(Sort.by(Sort.Direction.ASC,"giftId"));
					//return giftRepo.findAll();
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
	//Add a complaint
	@PostMapping("/user/{username}/addComplaint/{orderID}")
	public boolean addComplaint(@PathVariable("username") String username,
			@PathVariable("orderID") long orderID,
			@RequestBody Complaints complaint) {
		try {
			Users user = userRepo.findUser(username);
			complaint.setCompStatus(false);
			complaint.setCompId(sequenceGeneratorService.generateSequence(Complaints.SEQUENCE_NAME));
			complaint.setOrderId(orderID);
			if(user.getComplaint_list()==null) {
				List<Complaints>compList = new ArrayList<>();
				compList.add(complaint);
				user.setComplaint_list(compList);
				//userRepo.save(user);
			}
			else {
				List<Complaints>compList = user.getComplaint_list();
				compList.add(complaint);
				user.setComplaint_list(compList);
				//userRepo.save(user);
			}
			compRepo.save(complaint);
			userRepo.save(user);
			return true;	
		}
		catch(Exception e) {
			e.printStackTrace();
			return false;
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
				Gifts giftFound= giftRepo.findById(order.getGift_id()).get();
				order.setTotal_amt(order.getTotal_amt()+giftFound.getPrice()*order.getOrder_Quant());
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
//	@PutMapping("/user/{username}/sendGift")
//	public boolean sendGift(@PathVariable("username") String username,
//			@RequestBody Orders order) {
//		
//		order.setOrderId(sequenceGeneratorService.generateSequence(Orders.SEQUENCE_NAME));
//
//		try {
//			Users user = userRepo.findUser(username);
//			order.setOrderStatus("Placed");
//			if(user.getOrder_list()==null) {
//				List<Orders>userOrders = new ArrayList<>();
//				userOrders.add(order);
//				user.setOrder_list(userOrders);
//			}
//			else {
//				List<Orders> userOrders = user.getOrder_list();
//				userOrders.add(order);
//				user.setOrder_list(userOrders);
//			}
//			orderRepo.save(order);
//			userRepo.save(user);
//			return true;	
//		}
//		catch(Exception e) {
//			e.printStackTrace();
//			return false;
//		}
		
	}




