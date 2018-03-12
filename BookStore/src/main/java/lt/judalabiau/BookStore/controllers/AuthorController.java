package lt.judalabiau.BookStore.controllers;

import java.util.List;

import javax.validation.Valid;
import javax.xml.ws.RespectBinding;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lt.judalabiau.BookStore.models.Author;
import lt.judalabiau.BookStore.services.AuthorService;

@RestController
@RequestMapping(value = "/author")
public class AuthorController {

	@Autowired
	private AuthorService authorService;

	public AuthorController(AuthorService authorService) {
		super();
		this.authorService = authorService;
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<Author> getAuthor() {
		return this.authorService.getAuthor();
	}

	@RequestMapping(method = RequestMethod.POST)
	public void createAuthor(@RequestBody @Valid final Author author) {
		this.authorService.createAuthor(author);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteAuthor(@PathVariable Long id) {
		authorService.deleteAuthor(id);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.OK)
	public void updateAuthor(@PathVariable Long id, @RequestBody Author author) {
		this.authorService.updateAuthor(id, author);
	}
}
