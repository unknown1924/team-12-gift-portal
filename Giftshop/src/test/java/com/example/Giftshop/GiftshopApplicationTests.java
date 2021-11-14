package com.example.Giftshop;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

//import com.lti.Giftshop.GiftshopApplication;
@RunWith(SpringRunner.class)
@SpringBootTest(classes=com.lti.Giftshop.GiftshopApplication.class)
@AutoConfigureMockMvc
class GiftshopApplicationTests {
	@Autowired private MockMvc mockMvc;
	@Test
//	void contextLoads() {
//	}
	 public void testAdminController() throws Exception {
		    mockMvc
		        .perform(get("/admin"))
		        .andExpect(status().isOk());
		  }
	@Test
//	void contextLoads() {
//	}
	 public void testUserController() throws Exception {
		    mockMvc
		        .perform(get("/user"))
		        .andExpect(status().isOk());
		  }

}
