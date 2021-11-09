package com.example.Giftshop.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Giftshop.entities.Gifts;



public interface GiftsRepository extends MongoRepository<Gifts,String>{

}
