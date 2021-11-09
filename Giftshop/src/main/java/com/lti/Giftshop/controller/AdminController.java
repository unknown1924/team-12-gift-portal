package com.lti.Giftshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.Giftshop.entities.Complaints;
import com.lti.Giftshop.entities.Orders;
import com.lti.Giftshop.entities.Users;
import com.lti.Giftshop.repository.*;

@CrossOrigin
@RestController
public class AdminController {
	@Autowired
	UsersRepository userRepo;
	OrdersRepository orderRepo;
	ComplaintsRepository compRepo;
	/////////////////////////////////////////////
	//Returns a list of all Users in the database
	@GetMapping("/admin/showAllUsers")
	public List<Users> getAllUsers(){
		return userRepo.findAll();
	}
	//Sort users by Name (Ascending)
	@GetMapping("/admin/sortUsersAsc")
	public List<Users> sortUserAsc(){
		return userRepo.sortByNameAsc();
	}
	//Sort users by Name (Descending)
	@GetMapping("/admin/sortUsersDesc")
	public List<Users> sortUserDesc(){
		return userRepo.sortByNameDesc();
	}
	//Returns a list of all Orders in the database
	@GetMapping("/admin/showAllOrders")
	public List<Orders> getAllOrders(){
		return orderRepo.findAll();
	}
	//Sort orders by Date (Ascending)
	@GetMapping("/admin/sortOrdersAsc")
	public List<Orders> sortOrderAsc(){
		return orderRepo.sortByDateAsc();
	}
	//Sort orders by Date (Descending)
	@GetMapping("/admin/sortOrdersDesc")
	public List<Orders> sortOrderDesc(){
		return orderRepo.sortByDateDesc();
	}
	//Returns a list of all Complaints in the database
	@GetMapping("/admin/showAllComplaints")
	public List<Complaints> getAllComplaints(){
		return compRepo.findAll();
	}
	///////////////////////////////////////////////////
	//Add new user to database
	@PostMapping("/admin/addUser")
	public Users addUser(@RequestBody Users user) {
		return userRepo.save(user);
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
	public Orders updateOrder(@PathVariable("id") int id,@RequestBody Orders order) {
		order.setOrderId(id);
		return orderRepo.save(order);
	}
	//Update/Resolve a complaint by ID
		@PutMapping("/admin/updateComplaint/{id}")
		public Complaints updateComplaint(@PathVariable("id") int id,@RequestBody Complaints comp) {
			comp.setOrderId(id);
			return compRepo.save(comp);
		}
	/////////////////////////////////////////////
	//Delete a user by ID
	@DeleteMapping("/admin/deleteUser/{id}")
	public boolean deleteUser(@PathVariable("id") int id) {
		try {
			userRepo.deleteById(id);
			return true;
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	//Delete an order by ID
	@DeleteMapping("/admin/deleteOrder/{id}")
	public boolean deleteOrder(@PathVariable("id") int id) {
		try {
			orderRepo.deleteById(id);
			return true;
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return false;
	}
}
