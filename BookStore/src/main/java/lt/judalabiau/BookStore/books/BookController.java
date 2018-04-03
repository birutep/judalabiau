package lt.judalabiau.BookStore.books;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class BookController {

	private final BookService bookService;

	public BookController(BookService bookService) {
		this.bookService = bookService;
	}

    @GetMapping("/books")//visu knygu listui grazinti
    public @ResponseBody Iterable<Book> getBooks () {
        return bookService.getBooks();
    }

    @PostMapping("/books")//prideti knyga i lista
    public @ResponseBody void addBook(@RequestBody Book book){
        bookService.createBook(book);
    }

    @DeleteMapping("/books/{id}")    //pasalinti knygai is listo
    public @ResponseBody void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }

    @PutMapping("/books/{id}")	//knygos updeitas
    public @ResponseBody void updateBook(@PathVariable Long id, @RequestBody Book book){
	    bookService.updateBook(id, book);
    }
}
