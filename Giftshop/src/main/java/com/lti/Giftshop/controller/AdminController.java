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
@RestController
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
	@GetMapping("/admin/showAllUsers")
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
	@GetMapping("/admin/getAllUsers")
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
	@GetMapping("/admin/showAllOrders")
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
		@GetMapping("/admin/sortUsersAsc")
		public List<Users> sortUserAsc(){
			//return userRepo.sortByNameAsc();
			return userRepo.findAll(Sort.by(Sort.Direction.ASC,"nameofUser"));
		}
	//Sort users by Name (Descending)
		@GetMapping("/admin/sortUsersDesc")
		public List<Users> sortUserDesc(){
			//return userRepo.sortByNameAsc();
			return userRepo.findAll(Sort.by(Sort.Direction.DESC,"nameofUser"));
		}
		//Sort orders by Date (Ascending)
		@GetMapping("/admin/sortOrdersAsc")
		public List<Orders> sortOrderAsc(){
			//return orderRepo.sortByDateAsc();
			return orderRepo.findAll(Sort.by(Sort.Direction.ASC,"order_date"));
		}
		//Sort orders by Date (Descending)
		@GetMapping("/admin/sortOrdersDesc")
		public List<Orders> sortOrderDesc(){
			//return orderRepo.sortByDateAsc();
			return orderRepo.findAll(Sort.by(Sort.Direction.DESC,"order_date"));
		}
	//Returns a list of all Complaints in the database
	@GetMapping("/admin/showAllComplaints")
	public List<Complaints> getAllComplaints(){
		try {
			return compRepo.findAll();	
		}
		catch(Exception e) {
			System.out.println("Probably the database is empty!");
			return null;
		}
	}
	///////////////////////////////////////////////////
	//Add new user to database
	@PostMapping("/admin/addUser")
	public Users addUser(@RequestBody Users user) {
		user.setUserId(sequenceGeneratorService.generateSequence(Complaints.SEQUENCE_NAME));
		user.setComplaint_list(null);
		user.setOrder_list(null);
		return userRepo.save(user);
	}
	@PostMapping("/admin/addGift")
	public Gifts addGifts(@RequestBody Gifts gift) {
		return giftRepo.save(gift);
	}
	/////////////////////////////////////////////
	//Update a user by ID
	@PutMapping("/admin/updateUser/{id}")
	public Users updateUser(@PathVariable("id") int id,@RequestBody Users user) {
		user.setUserId(id);
		return userRepo.save(user);
	}
	//Update an order status by ID
	@PutMapping("/admin/updateOrder/{id}")
	public Orders updateOrder(@PathVariable("id") long id,@RequestBody Orders order) {
		order.setOrderId(id);
		return orderRepo.save(order);
	}
	//Update/Resolve a complaint by ID
		@PutMapping("/admin/updateComplaint/{id}")
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
//			
//			try {
//				//comp.setCompId(sequenceGeneratorService.generateSequence(Complaints.SEQUENCE_NAME));
//				comp.setOrderId(id);
//				comp.setCompStatus(true);
//				compRepo.save(comp);
//				return true;
//			}
//			catch(Exception e) {
//				e.printStackTrace();
//				return false;
//			}

		}
	/////////////////////////////////////////////
	//Delete a user by ID
	@DeleteMapping("/admin/deleteUser/{id}")
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
	//Delete an order by ID
	@DeleteMapping("/admin/deleteOrder/{id}")
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
		@DeleteMapping("/admin/deleteOrders")
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
