package com.lti.Giftshop.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.lti.Giftshop.entities.Complaints;


public interface ComplaintsRepository extends MongoRepository<Complaints,Long>{

}
