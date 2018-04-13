package lt.judalabiau.BookStore.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import lt.judalabiau.BookStore.users.UserRepository;


@EnableGlobalMethodSecurity(prePostEnabled=true)
@EnableWebSecurity
@EnableJpaRepositories(basePackageClasses = UserRepository.class)
@Configuration
@EnableAspectJAutoProxy
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{	
	
	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		auth.userDetailsService(userDetailsService)
			.passwordEncoder(new PasswordEncoder() {
				@Override
				public String encode(CharSequence charSequence) {
					return charSequence.toString();
				}
				
				@Override
				public boolean matches(CharSequence incomingPassword, String storedPassword) {
					if (incomingPassword.equals(storedPassword)) {
						return true;
					}
					return false;
				}
			});
	}
	
	@Override
	protected void configure (HttpSecurity http) throws Exception{
		http.cors()
			.and()
			.formLogin()
				.usernameParameter("username")
				.passwordParameter("password")
			.and()
			.authorizeRequests()
				.antMatchers("/", "/swagger-ui.html").permitAll()	
				.antMatchers("/books/**").authenticated()
				.antMatchers("/users/**").authenticated()
				.anyRequest().permitAll()
			.and()
			.httpBasic().authenticationEntryPoint(getBasicAuthEntryPoint())
			.and()
			. sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http.headers().frameOptions().disable();
		http.csrf().disable();
	}
	
	public AuthenticationEntryPointImpl getBasicAuthEntryPoint() {
		return new AuthenticationEntryPointImpl();
	}
	
}
