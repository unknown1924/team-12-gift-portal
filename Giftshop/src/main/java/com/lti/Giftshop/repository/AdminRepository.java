package com.lti.Giftshop.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.lti.Giftshop.entities.Admin;


public interface AdminRepository extends MongoRepository<Admin,String>{

}
