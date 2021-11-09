package com.example.Giftshop.controller;

import java.util.*;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Giftshop.repository.GiftsRepository;
import com.example.Giftshop.repository.OrdersRepository;
import com.example.Giftshop.entities.Gifts;
import com.example.Giftshop.entities.Orders;

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
 public void deleteorder(String id) {
	ord.deleteById(id);
}
@GetMapping("/user/gift")
public List<Gifts> getgift(){
List<Gifts> list = gft.findAll();
return list;
}

}
