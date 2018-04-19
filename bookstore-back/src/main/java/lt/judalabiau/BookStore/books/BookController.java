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
//------------------------GET----------------------
    @GetMapping("/books")//visu knygu listui grazinti
    @ResponseBody
    public Iterable<BookDTO> getBooks () {
        return bookService.getBooks();
    }
//----------------------POST------------------------
    @PostMapping("/books")//prideti knyga i repo
    @ResponseBody
    public BookDTO addBook(@Valid @RequestBody BookDTO dto){
        return bookService.createBook(dto);
    }
//---------------------DELETE-----------------------
    @DeleteMapping("/books/{id}")    //pasalinti knygai is listo
    @ResponseBody
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }
//-------------------PUT------------------------------
    @PutMapping("/books/{id}")	//knygos updeitas
    @ResponseBody
    public  BookDTO updateBook(@PathVariable Long id, @Valid @RequestBody BookDTO dto){
	    return bookService.updateBook(id, dto);
    }
}
