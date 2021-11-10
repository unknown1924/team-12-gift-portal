package com.lti.Giftshop.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.lti.Giftshop.entities.Users;

public interface UsersRepository extends MongoRepository<Users,Integer>{
	 //Sorting
	//@Query(value = "{writer : ?0}", sort = "{title : 1}")
//    @Query(sort= "{User_nameofuser:1}") //ASC
//    public List<Users> sortByNameAsc();
//    
//    @Query(sort= "{User_nameofuser:-1}") //DESC
//    public List<Users> sortByNameDesc();
}
