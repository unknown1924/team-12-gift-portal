package com.lti.Giftshop.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.lti.Giftshop.entities.Gifts;



public interface GiftsRepository extends MongoRepository<Gifts,Integer>{
	@Query(value= "{Category_id : ?0}")           // SQL Equivalent : SELECT * FROM BOOK select * from books where author=?
    List<Gifts> getAllGiftsByCategory(int categoryID);
}
