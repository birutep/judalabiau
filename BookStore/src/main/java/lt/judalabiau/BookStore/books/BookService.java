package lt.judalabiau.BookStore.books;

import lt.judalabiau.BookStore.books.dto.BookDTO;
import lt.judalabiau.BookStore.books.dto.converters.BookToDTO;
import lt.judalabiau.BookStore.books.dto.converters.DTOtoBook;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class BookService {

	private final BookRepository bookRepository;
	private final BookToDTO bookToDTOconverter;
	private final DTOtoBook dtOtoBookconverter;

	public BookService(BookRepository bookRepository, BookToDTO bookToDTOconverter, DTOtoBook dtOtoBookconverter) {
		this.bookRepository = bookRepository;
		this.bookToDTOconverter = bookToDTOconverter;
		this.dtOtoBookconverter = dtOtoBookconverter;
	}

	@Transactional
	public Iterable<BookDTO> getBooks() {
		List<BookDTO> booksDtoSet = new ArrayList<>();
		bookRepository.findAll()
				.iterator()
				.forEachRemaining(book->booksDtoSet.add(bookToDTOconverter.convert(book)));
		return booksDtoSet;
	}

	@Transactional
	public BookDTO createBook(BookDTO dto) {
	    if(dto==null){
	        return null;
        }
        Book book = dtOtoBookconverter.convert(dto);
        Book saved = bookRepository.save(book);
        return bookToDTOconverter.convert(saved);
	}

	@Transactional
	public void deleteBook(Long id) {
		bookRepository.deleteById(id);
	}


	@Transactional
	public BookDTO updateBook(Long id, BookDTO dto) {
		Book original = bookRepository.findById(id).get();      //jei knyga kurios id norim editint yra repo
		if(original!=null){
		    Book forUpdate = dtOtoBookconverter.convert(dto);   //is dto sukuriam nauja knyga, jai perduodam originalios id ir issaugome repozitorijoje
		    forUpdate.setId(original.getId());
		    Book saved = bookRepository.save(forUpdate);
		    return bookToDTOconverter.convert(saved);           //grazinam issaugota knyga DTO pavidale
        }
        return null;
	}

	//-------------Metodas kolkas reikalingas tik sukuriant pradine duombaze dbinitui bei testamas------------------------
	@Transactional
    public void saveAll(Iterable<Book> books){
        bookRepository.saveAll(books);
    }
    //---------------------------------------------------------------------------
}
