package com.example.Giftshop.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Giftshop.entities.Admin;


public interface AdminRepository extends MongoRepository<Admin,String>{

}
