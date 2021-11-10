package com.lti.Giftshop.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.lti.Giftshop.entities.Gifts;
import com.lti.Giftshop.entities.Orders;
import com.lti.Giftshop.repository.GiftsRepository;
import com.lti.Giftshop.repository.OrdersRepository;
import com.lti.Giftshop.repository.UsersRepository;

@CrossOrigin
@RestController
public class UserController {
	@Autowired
	private UsersRepository userRepo;
	@Autowired
	private GiftsRepository giftRepo;
	@Autowired
	private OrdersRepository orderRepo;
	
	//View All gifts
	@GetMapping("/user/getGifts")
	public List<Gifts> getGifts(){
		return giftRepo.findAll();
//		try {
//			return giftRepo.findAll();
//		}
//		catch(Exception e) {
//			System.out.println("Probably the database is empty!");
//			return null;
//		}
		
	}
	//View Gifts by category
	@GetMapping("/user/giftByCategory/{id}")
	public List<Gifts> getGiftByCategory(@PathVariable("id") int id){
		try {
			return giftRepo.getAllGiftsByCategory(id);
		}
		catch(Exception e) {
			System.out.println("Probably the database is empty!");
			return null;
		}
		
	}
	
//@GetMapping("/user/order")
//	public List<Orders> getorders(){
//	List<Orders> list = ord.findAll();
//	return list;
//}
//
//
//@DeleteMapping("/user/order/{id}")
// public void deleteorder(Integer id) {
//	ord.deleteById(id);
//}
////All gifts
//@GetMapping("/user/gift")
//public List<Gifts> getgift(){
//List<Gifts> list = gft.findAll();
//return list;
//}


}
