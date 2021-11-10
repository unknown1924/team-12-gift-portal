package com.lti.Giftshop.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.lti.Giftshop.entities.Orders;



public interface OrdersRepository extends MongoRepository<Orders,String>{
	 //Sorting
//    @Query(sort= "{Order_date:1}") //ASC
//    List<Orders> sortByDateAsc();
//    
//    @Query(sort= "{Order_date:-1}") //DESC
//    List<Orders> sortByDateDesc();
}
