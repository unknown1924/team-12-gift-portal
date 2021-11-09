package com.example.Giftshop.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Giftshop.entities.Complaints;


public interface ComplaintsRepository extends MongoRepository<Complaints,String>{

}
