package lt.judalabiau.BookStore.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lt.judalabiau.BookStore.users.UserService;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserService userService;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<lt.judalabiau.BookStore.users.User> optionalUser = userService.findByEmail(email);
		
		optionalUser
			.orElseThrow(()-> new UsernameNotFoundException("User with this name not found."));
		
		return optionalUser.map(UserDetailsImpl::new).get();
	}

}
