package lt.judalabiau.BookStore.books;

import javax.validation.Valid;

import lt.judalabiau.BookStore.books.dto.BookDTO;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class BookController {

	private final BookService bookService;

	public BookController(BookService bookService) {
		this.bookService = bookService;
	}

    @GetMapping("/books")//visu knygu listui grazinti
    public @ResponseBody Iterable<BookDTO> getBooks () {
        return bookService.getBooks();
    }

    @PostMapping("/books")//prideti knyga i repo
    public @ResponseBody BookDTO addBook(@Valid @RequestBody BookDTO dto){
        return bookService.createBook(dto);
    }

    @DeleteMapping("/books/{id}")    //pasalinti knygai is listo
    public @ResponseBody void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }

    @PutMapping("/books/{id}")	//knygos updeitas
    public @ResponseBody BookDTO updateBook(@PathVariable Long id, @Valid @RequestBody BookDTO dto){
	    return bookService.updateBook(id, dto);
    }
}
