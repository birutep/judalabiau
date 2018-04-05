package lt.judalabiau.BookStore.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class BookService {
	
	private final BookRepository bookRepository;	

	@Autowired
	public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
	
//	@Autowired
//	private BookRepository bookRepository;
//	
//	public BookService() {}
	
    @Transactional
	public Iterable<Book> getBooks() {
		return bookRepository.findAll();
	}

	@Transactional
	public void createBook(Book book) {
		bookRepository.save(book);
	}

	@Transactional
	public void deleteBook(Long id) {
		bookRepository.deleteById(id);
	}

	@Transactional
	public void updateBook(Long id, Book book) {
		Book original = bookRepository.findById(id).orElse(null);
		if(original!=null){
		    book.setId(id);
		    bookRepository.save(book);
        }
	}

	@Transactional
    public void saveAll(Iterable<Book> books){
        bookRepository.saveAll(books);
    }
}
