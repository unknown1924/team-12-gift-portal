package com.lti.Giftshop.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.lti.Giftshop.entities.Category;

public interface CategoryRepository extends MongoRepository<Category,Integer> {

}
