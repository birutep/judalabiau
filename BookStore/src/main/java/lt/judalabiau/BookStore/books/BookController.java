package lt.judalabiau.BookStore.books;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class BookController {

	private final BookService bookService;

	public BookController(BookService bookService) {
		this.bookService = bookService;
	}

	//visu knygu listui grazinti
    @GetMapping("/books")
    public @ResponseBody Iterable<Book> getBooks () {
        return bookService.getBooks();
    }

    //prideti knyga i lista
    @PostMapping("/books")
    public @ResponseBody void addBook(@RequestBody Book book){
        bookService.createBook(book);
    }

    //pasalinti knygai is listo
    @DeleteMapping("/books/{id}")
    public @ResponseBody void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }

	//knygos updeitas
    @PutMapping("/books/{id}")
    public @ResponseBody void updateBook(@PathVariable Long id, @RequestBody Book book){
	    bookService.updateBook(id, book);
    }
}
