package com.lti.Giftshop.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.lti.Giftshop.entities.Users;

public interface UsersRepository extends MongoRepository<Users,Integer>{
	@Query("{User_username:'?0'}")
    Users findUser(String username); 

}
