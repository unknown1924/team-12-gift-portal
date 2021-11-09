package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.entities.Book;

public interface BookRepository extends MongoRepository<Book,Integer> {
	//public Book findById(int id);

}
