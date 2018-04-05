package lt.judalabiau.BookStore.books;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class BookController {

	private final BookService bookService;

	public BookController(BookService bookService) {
		this.bookService = bookService;
	}

	@PreAuthorize("hasAnyRole('ADMINISTRATOR', 'SALESMAN','CUSTOMER')")
    @GetMapping("/books")//visu knygu listui grazinti
    public @ResponseBody Iterable<Book> getBooks () {
        return bookService.getBooks();
    }

	@PreAuthorize("hasRole('ADMINISTRATOR')")
    @PostMapping("/books")//prideti knyga i lista
    public @ResponseBody void addBook(@RequestBody Book book){
        bookService.createBook(book);
    }

	@PreAuthorize("hasRole('ADMINISTRATOR')")
    @DeleteMapping("/books/{id}")    //pasalinti knygai is listo
    public @ResponseBody void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }

	@PreAuthorize("hasRole('ADMINISTRATOR')")
    @PutMapping("/books/{id}")	//knygos updeitas
    public @ResponseBody void updateBook(@PathVariable Long id, @RequestBody Book book){
	    bookService.updateBook(id, book);
    }
}
