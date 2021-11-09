package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Book;
import com.example.demo.services.BookService;

@RestController

public class BookController {
	@Autowired
	private BookService bs;
	
	@GetMapping("/books")
		public List<Book> getAllBooks() {
		return this.bs.getAllBooks();
	}
	@GetMapping("/books/{id}")
	public ResponseEntity<Book> getBookById(@PathVariable("id") int id) {
		Book book = bs.getBookById(id);
		if(book==null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); 
		}
		return ResponseEntity.of(Optional.of(book));
	}
	@PostMapping("/books")
	public Book addBook(@RequestBody Book b) {
		Book book = bs.addBook(b);	
		return book;
	}
	@PutMapping("/books/{id}")
	public void updateBook(@RequestBody Book b, @PathVariable("id") int id) {
		bs.updateBook(b, id);
	}
	@DeleteMapping("/books/{id}")
	public ResponseEntity<Void> deleteBook(@PathVariable("id") int id) {
		Book b = bs.deleteBook(id);
		if(b==null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	///////////////////////////////////////////////////////////////
	/*Login Form */
	@RequestMapping(value="/form",method=RequestMethod.GET)
	public String userForm() {
		return "index";
		//index.html
	}
	
}
//Admin : (CRUD-gift, user), (GET, Update)-complaint
//User: (CRUD)Order, gift(GET/READ)
