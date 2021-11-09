package com.lti.Giftshop.controller;

import java.util.*;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.Giftshop.entities.Gifts;
import com.lti.Giftshop.entities.Orders;
import com.lti.Giftshop.repository.GiftsRepository;
import com.lti.Giftshop.repository.OrdersRepository;

@RestController
public class UserController {

	private GiftsRepository gft;
	private OrdersRepository ord;
	
@GetMapping("/user/order")
	public List<Orders> getorders(){
	List<Orders> list = ord.findAll();
	return list;
}


@DeleteMapping("/user/order/{id}")
 public void deleteorder(Integer id) {
	ord.deleteById(id);
}
//All gifts
@GetMapping("/user/gift")
public List<Gifts> getgift(){
List<Gifts> list = gft.findAll();
return list;
}
//Gifts by category

}
