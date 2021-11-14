package com.lti.Giftshop.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.lti.Giftshop.entities.Complaints;
import com.lti.Giftshop.entities.Gifts;
import com.lti.Giftshop.entities.Orders;
import com.lti.Giftshop.entities.UserFields;
import com.lti.Giftshop.entities.Users;
import com.lti.Giftshop.repository.*;
import com.lti.Giftshop.service.SequenceGeneratorService;

@CrossOrigin
@RestController("/admin")
public class AdminController {
	@Autowired
	UsersRepository userRepo;
	@Autowired
	OrdersRepository orderRepo;
	@Autowired
	ComplaintsRepository compRepo;
	@Autowired
	GiftsRepository giftRepo;
	@Autowired
	SequenceGeneratorService sequenceGeneratorService;
	/////////////////////////////////////////////
	//Returns a list of all Users in the database
	@GetMapping("/showAllUsers")
	public List<Users> getAllUsers(){
		try {
			return userRepo.findAll();
		}
		catch(Exception e) {
			System.out.println("Probably the database is empty!");
			return null;
		}
	}
	//Filter out fields and display all users
	@GetMapping("/getAllUsers")
	public List<UserFields> getAllUsersFiltered(){
		try {
			List<UserFields> lst = userRepo.findNameAndExcludeId();
			return lst;
		}
		catch(Exception e) {
			e.printStackTrace();
			System.out.println("Probably the database is empty or there is an error!");
			return null;
		}
	}

	//Returns a list of all Orders in the database
	@GetMapping("/showAllOrders")
	public List<Orders> getAllOrders(){
		try {
			return orderRepo.findAll();
		}
		catch(Exception e) {
			System.out.println("Probably the database is empty!");
			return null;
		}
		
	}
	//Sort users by Name (Ascending)
		@GetMapping("/sortUsersAsc")
		public List<Users> sortUserAsc(){
			//return userRepo.sortByNameAsc();
			return userRepo.findAll(Sort.by(Sort.Direction.ASC,"nameofUser"));
		}
	//Sort users by Name (Descending)
		@GetMapping("/sortUsersDesc")
		public List<Users> sortUserDesc(){
			//return userRepo.sortByNameAsc();
			return userRepo.findAll(Sort.by(Sort.Direction.DESC,"nameofUser"));
		}
		//Sort orders by Date (Ascending)
		@GetMapping("/sortOrdersAsc")
		public List<Orders> sortOrderAsc(){
			//return orderRepo.sortByDateAsc();
			return orderRepo.findAll(Sort.by(Sort.Direction.ASC,"order_date"));
		}
		//Sort orders by Date (Descending)
		@GetMapping("/sortOrdersDesc")
		public List<Orders> sortOrderDesc(){
			//return orderRepo.sortByDateAsc();
			return orderRepo.findAll(Sort.by(Sort.Direction.DESC,"order_date"));
		}
	//Returns a list of all Complaints in the database
	@GetMapping("/showAllComplaints")
	public List<Complaints> getAllComplaints(){
		try {
			return compRepo.findAll();	
		}
		catch(Exception e) {
			System.out.println("Probably the database is empty!");
			return null;
		}
	}
	// See all gifts
	//View All gifts
		@GetMapping("/getGifts")
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
	///////////////////////////////////////////////////
	//Add new user to database
	@PostMapping("/addUser")
	public Users addUser(@RequestBody Users user) {
		try {
		user.setUserId(sequenceGeneratorService.generateSequence(Users.SEQUENCE_NAME));
		user.setComplaint_list(null);
		user.setOrder_list(null);
		return userRepo.save(user);}
		catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	@PostMapping("/addGift")
	public Gifts addGifts(@RequestBody Gifts gift) {
		try {
			gift.setGiftId(sequenceGeneratorService.generateSequence(Gifts.SEQUENCE_NAME));
			return giftRepo.save(gift);
		}
		catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
	/////////////////////////////////////////////
	//Update a user by ID
	@PutMapping("/updateUser/{id}")
	public Users updateUser(@PathVariable("id") int id,@RequestBody Users user) {
		Users userFound = userRepo.findById(id).get();
		user.setUserId(id);
		user.setComplaint_list(userFound.getComplaint_list());
		user.setOrder_list(userFound.getOrder_list());
		return userRepo.save(user);
	}
	@PutMapping("/updateUserByName/{username}")
	public Users updateUserByName(@PathVariable("username") String username,@RequestBody Users user) {
		Users userFound = userRepo.findUser(username);
		user.setUsername(username);
		user.setUserId(userFound.getUserId());
		user.setComplaint_list(userFound.getComplaint_list());
		user.setOrder_list(userFound.getOrder_list());
		return userRepo.save(user);
	}

	//Update an order status to 'Delivered' by ID
	@PutMapping("/updateOrder/{id}")
	public Orders updateOrder(@PathVariable("id") long id) {
		Orders order = new Orders();
		try {
			Orders orderFound = orderRepo.findById(id).get();
			order.setOrderId(id);
			order.setGift_id(orderFound.getGift_id());
			order.setOrder_date(orderFound.getOrder_date());
			order.setOrder_Quant(orderFound.getOrder_Quant());
			order.setRx_address(orderFound.getRx_address());
			order.setRx_phone(orderFound.getRx_phone());
			order.setSurprise(orderFound.isSurprise());
			order.setTotal_amt(orderFound.getTotal_amt());
			//Setting status msg
			order.setOrderStatus("Delivered");
			orderRepo.save(order);
			//Updating the same in user's order list
			List<Users> lst = userRepo.findAll();
			lst.forEach((user) -> {
			List<Orders> lstOrders = user.getOrder_list();
			if(lstOrders!=null) {
			lstOrders.forEach((o) -> {
				if(o.getOrderId()==id)
					o.setOrderStatus("Delivered");
					userRepo.save(user);
					System.out.println("Updated in user");
				});
			}
			});
			return order ;
		}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	//Update the order status to "Processing"
	@PutMapping("/updateOrderProcessing/{id}")
	public Orders updateOrderProcessing(@PathVariable("id") long id) {
		Orders order = new Orders();
		try {
			Orders orderFound = orderRepo.findById(id).get();
			order.setOrderId(id);
			order.setGift_id(orderFound.getGift_id());
			order.setOrder_date(orderFound.getOrder_date());
			order.setOrder_Quant(orderFound.getOrder_Quant());
			order.setRx_address(orderFound.getRx_address());
			order.setRx_phone(orderFound.getRx_phone());
			order.setSurprise(orderFound.isSurprise());
			order.setTotal_amt(orderFound.getTotal_amt());
			//Setting status msg
			order.setOrderStatus("Processing");
			orderRepo.save(order);
			//Updating the same in user's order list
			List<Users> lst = userRepo.findAll();
			lst.forEach((user) -> {
			List<Orders> lstOrders = user.getOrder_list();
			if(lstOrders!=null) {
			lstOrders.forEach((o) -> {
				if(o.getOrderId()==id)
					o.setOrderStatus("Processing");
					userRepo.save(user);
					System.out.println("Updated in user");
				});
			}
			});
			return order ;
		}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	//Update the order status to "Dispatched"
	@PutMapping("/updateOrderDispatched/{id}")
	public Orders updateOrderDispatched(@PathVariable("id") long id) {
		Orders order = new Orders();
		try {
			Orders orderFound = orderRepo.findById(id).get();
			order.setOrderId(id);
			order.setGift_id(orderFound.getGift_id());
			order.setOrder_date(orderFound.getOrder_date());
			order.setOrder_Quant(orderFound.getOrder_Quant());
			order.setRx_address(orderFound.getRx_address());
			order.setRx_phone(orderFound.getRx_phone());
			order.setSurprise(orderFound.isSurprise());
			order.setTotal_amt(orderFound.getTotal_amt());
			//Setting status msg
			order.setOrderStatus("Dispatched");
			orderRepo.save(order);
			//Updating the same in user's order list
			List<Users> lst = userRepo.findAll();
			lst.forEach((user) -> {
			List<Orders> lstOrders = user.getOrder_list();
			if(lstOrders!=null) {
			lstOrders.forEach((o) -> {
				if(o.getOrderId()==id)
					o.setOrderStatus("Dispatched");
					userRepo.save(user);
					System.out.println("Updated in user");
				});
			}
			});
			return order ;
		}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	//Update/Resolve a complaint by ID
		@PutMapping("/updateComplaint/{id}")
		public boolean updateComplaint(@PathVariable("id") long id,
				@RequestBody Complaints comp) {
			try {
				//comp.setOrderId(id);
				comp.setCompStatus(true);
				compRepo.save(comp);
				List<Users> lst = userRepo.findAll();
				lst.forEach((user) -> {
				List<Complaints> lstComp = user.getComplaint_list();
				if(lstComp!=null) {
				lstComp.forEach((complaint) -> {
					if(complaint.getCompId()==id)
						complaint.setCompStatus(true);
						userRepo.save(user);
					});
				}
				});
				return true;
			}
			catch(Exception e){
				e.printStackTrace();
				return false;
			}


		}
	/////////////////////////////////////////////
	//Delete a user by ID
	@DeleteMapping("/deleteUser/{id}")
	public boolean deleteUser(@PathVariable("id") int id) {
		Optional<Users> user = null;
		try {
			user = userRepo.findById(id);
			System.out.println(user);
			userRepo.deleteById(id);
			return true;
		}
		catch(Exception e){
			e.printStackTrace();	
		}
		return false;
		
	}
	//Delete a user by Username
	@DeleteMapping("/deleteUserByUserName/{username}")
	public boolean deleteUserByUserName(@PathVariable("username") String username) {
		try {
			Users user = userRepo.findUser(username);
			System.out.println(user);
			userRepo.delete(user);
			return true;
		}
		catch(Exception e){
			e.printStackTrace();	
		}
		return false;
		
	}
	//Delete 
	//Delete an order by ID
	@DeleteMapping("/deleteOrder/{id}")
	public boolean deleteOrder(@PathVariable("id") long id) {
		//Optional<Orders> order = null;
		try {
			//order = orderRepo.findById(id);
			//System.out.println(order);
			orderRepo.deleteById(id);
			List<Users> lst = userRepo.findAll();
			lst.forEach((user) -> {
			List<Orders> lstOrders = user.getOrder_list();
			if(lstOrders!=null) {
			lstOrders.forEach((order) -> {
				if(order.getOrderId()==id)
					order.setOrderStatus("Cancelled by the Admin");
					userRepo.save(user);
				});
			}
			});
			return true;
		}
		catch(Exception e){
			e.printStackTrace();
			return false;
		}
	}
	//Deleting all orders
		@DeleteMapping("/deleteOrders")
		public boolean deleteOrder() {
			try {
				orderRepo.deleteAll();
				List<Users> lst = userRepo.findAll();
				lst.forEach((user) -> {
					List<Orders> lstOrders = user.getOrder_list();
					if(lstOrders!=null) {
					lstOrders.forEach((order) -> {
							order.setOrderStatus("Cancelled by the Admin");
							userRepo.save(user);
						});
					
					}
					});
//				lstUsers.forEach((user) -> {
//					if(user.getOrder_list()!=null) {
//						user.setOrder_list(null);
//						userRepo.save(user);
//					}
//				});
				return true;
			}	
			catch(Exception e){
				e.printStackTrace();
				return false;
			}
		}
		
}