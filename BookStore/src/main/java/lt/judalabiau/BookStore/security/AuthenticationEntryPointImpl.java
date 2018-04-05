package lt.judalabiau.BookStore.security;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

public class AuthenticationEntryPointImpl implements AuthenticationEntryPoint{

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)
			throws IOException, ServletException {
		//Authentication failed, send error response.
		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);  
		
		//TO DO: patestavus fronta paziureti ar sito nereik ismesti
		PrintWriter writer = response.getWriter();
	    writer.println("HTTP Status 401 : " + authException.getMessage());
	}

}
