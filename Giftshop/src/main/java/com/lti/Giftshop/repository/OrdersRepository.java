package com.lti.Giftshop.repository;



import org.springframework.data.mongodb.repository.MongoRepository;


import com.lti.Giftshop.entities.Orders;



public interface OrdersRepository extends MongoRepository<Orders,String>{

}
