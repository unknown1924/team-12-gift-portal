package com.example.Giftshop.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Giftshop.entities.Users;

public interface UsersRepository extends MongoRepository<Users,String>{

}
