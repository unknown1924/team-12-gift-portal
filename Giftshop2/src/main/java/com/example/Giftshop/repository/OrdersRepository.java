package com.example.Giftshop.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Giftshop.entities.Orders;


public interface OrdersRepository extends MongoRepository<Orders,String>{

}
