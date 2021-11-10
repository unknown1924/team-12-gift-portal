package com.lti.Giftshop.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.lti.Giftshop.entities.Users;
import com.lti.Giftshop.repository.UsersRepository;

public class UserDetailsServiceImpl implements UserDetailsService{
    @Autowired 
	private UsersRepository usersRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		//fetching user from db
		Users user = usersRepository.getUsername(username);
		if(user== null)
			throw new UsernameNotFoundException("Can't find user");
		
		CustomUserDetails customUserDetails=new CustomUserDetails(user);
		return customUserDetails;
	}

}
