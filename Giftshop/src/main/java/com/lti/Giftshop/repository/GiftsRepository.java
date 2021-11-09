package com.lti.Giftshop.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.lti.Giftshop.entities.Gifts;



public interface GiftsRepository extends MongoRepository<Gifts,Integer>{

}
