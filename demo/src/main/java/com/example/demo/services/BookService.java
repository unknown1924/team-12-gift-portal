package com.example.demo.services;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.entities.Book;
import com.example.demo.repository.BookRepository;
@Component
public class BookService {
	@Autowired
	private BookRepository bookRepo;
	public List<Book> getAllBooks(){
		List<Book> list = this.bookRepo.findAll();
		return list;
	}
	public Book getBookById(int id) {
		Book book = null;
		try {
			book = this.bookRepo.findById(id);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return book;
	}
	//Adding book
	public Book addBook(Book b) {
		Book book = bookRepo.save(b);	
		return book;
	}
	//Updating a book by ID
	public void updateBook(Book b,int id) {
		b.setId(id);
		bookRepo.save(b);
	}
	//Delete a Book by ID
	public Book deleteBook(int id) {
		Optional<Book> book = null;
		try {
			book = bookRepo.findById(id);
			bookRepo.deleteById(id);
		}
		catch(Exception e){
			e.printStackTrace();	
		}
		return book;
		
	}

}
