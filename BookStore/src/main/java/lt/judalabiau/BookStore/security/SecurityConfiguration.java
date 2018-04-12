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
				public boolean matches(CharSequence arg0, String arg1) {
					// TODO Auto-generated method stub
					return true;
				}
			});
	}
	
	@Override
	protected void configure (HttpSecurity http) throws Exception{
		http.formLogin()
			.usernameParameter("username")
			.passwordParameter("password")
			.loginPage("/login")
			.and()
			.authorizeRequests()
				.antMatchers("/", "/swagger-ui.html").permitAll()
				.antMatchers("/login").permitAll()
				.antMatchers("/books/**").permitAll() //buvo butinai authentiated, bet testavimui padariau, kad books.GET veiktu visiems
				.antMatchers("/users/**").authenticated()
				.anyRequest().permitAll()
			.and()
			.httpBasic().authenticationEntryPoint(getBasicAuthEntryPoint());
//			.and()
//			. sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//			.and()
//			//zemiau: turetu aprasyti, ka veikti su logoutu. Dar neaisku, ar veikia.
//			.logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/login");
//		
//								//		CIA PVZ, kaip turetu atrodyti login aprasymas. Dar musiau reiks prideti permitAll kazkurioj vietoj
//								//		.formLogin()
//								//        	.usernameParameter("username") // default is username
//								//        	.passwordParameter("password") // default is password
//								//        	.loginPage("/authentication/login") // default is /login with an HTTP get
//								//        	.failureUrl("/authentication/login?failed") // default is /login?error
//								//        	.loginProcessingUrl("/authentication/login/process")
		http.headers().frameOptions().disable();
		http.csrf().disable();
	}
	
	public AuthenticationEntryPointImpl getBasicAuthEntryPoint() {
		return new AuthenticationEntryPointImpl();
	}
	
}
