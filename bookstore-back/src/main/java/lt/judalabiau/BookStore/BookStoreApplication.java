package lt.judalabiau.BookStore;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lt.judalabiau.BookStore.books.Book;
import lt.judalabiau.BookStore.books.BookService;
import lt.judalabiau.BookStore.books.dto.BookDTO;
import lt.judalabiau.BookStore.books.dto.converters.BookToDTO;
import lt.judalabiau.BookStore.users.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@EnableSwagger2
@SpringBootApplication
public class BookStoreApplication {
	@Bean
	public Docket swaggerDocket() {

		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(apiInfo())
				.select()
				.apis(RequestHandlerSelectors.basePackage("lt.judalabiau.BookStore"))
				.build();

	}
	private ApiInfo apiInfo() {

		return new ApiInfoBuilder()
				.title("Judalabiau bookstore REST Documentation")
				.version("0.0.1-SNAPSHOT")
				.build();
	}

	public static void main(String[] args) {
		SpringApplication.run(BookStoreApplication.class, args);
	}
}
