package lt.judalabiau.BookStore.books;

import lt.judalabiau.BookStore.books.dto.BookDTO;
import lt.judalabiau.BookStore.books.dto.converters.BookToDTO;
import lt.judalabiau.BookStore.books.dto.converters.DTOtoBook;
import lt.judalabiau.BookStore.users.UserService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static lt.judalabiau.BookStore.constants.BookConstants.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BookServiseTest {

    @Autowired
    private BookService bookService;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private BookToDTO bookToDTOconverter;

    @Autowired
    private DTOtoBook dtoToBookconverter;

    private BookDTO initial;

    @Before
    public void setUp() throws Exception {
        initial = new BookDTO();
        initial.setPhotopath(PHOTO);
        initial.setRating(RATING);
        initial.setAuthors(AUTHORS);
        initial.setCategory(CATEGORY);
        initial.setCount(COUNT);
        initial.setIsbn(ISBN);
        initial.setPrice(PRICE);
        initial.setTitle(TITLE);
        initial.setDescription(DESCRIPTION);
        initial.seteAvailable(E_AVAILABLE);
        initial.setRatingCount(RATING_COUNT);
        initial.setReleaseYear(YEAR);

    }

    @Test
    public void bookServiseSavesCorrectly(){
        BookDTO saved  = bookService.createBook(initial);

        assertNotNull(saved);
        assertNotSame(initial, saved);
        assertEquals(TITLE, saved.getTitle());
        assertEquals(PHOTO, saved.getPhotopath());
        assertEquals(RATING, saved.getRating());
        assertEquals(AUTHORS, saved.getAuthors());
        assertEquals(CATEGORY, saved.getCategory());
        assertEquals(COUNT, saved.getCount());
        assertEquals(ISBN, saved.getIsbn());
        assertEquals(PRICE, saved.getPrice());
        assertEquals(DESCRIPTION, saved.getDescription());
        assertEquals(E_AVAILABLE, saved.geteAvailable());
        assertEquals(RATING_COUNT, saved.getRatingCount());
        assertEquals(YEAR, saved.getReleaseYear());
    }

    @Test
    public void bookServiceGetsCorrectly(){
        List<BookDTO> found  = new ArrayList<>();
        bookService.createBook(initial);
        bookService.getBooks().iterator().forEachRemaining(found::add);
        assertNotEquals(0, found.size());

        BookDTO dto = found.stream().filter(b->b.getIsbn().equals(ISBN)).distinct().findFirst().get();
        assertEquals(TITLE, dto.getTitle());
        assertEquals(PHOTO, dto.getPhotopath());
        assertEquals(RATING, dto.getRating());
        assertEquals(AUTHORS, dto.getAuthors());
        assertEquals(CATEGORY, dto.getCategory());
        assertEquals(COUNT, dto.getCount());
        assertEquals(ISBN, dto.getIsbn());
        assertEquals(PRICE, dto.getPrice());
        assertEquals(DESCRIPTION, dto.getDescription());
        assertEquals(E_AVAILABLE, dto.geteAvailable());
        assertEquals(RATING_COUNT, dto.getRatingCount());
        assertEquals(YEAR, dto.getReleaseYear());
    }

    @Test
    public void bookServiceUpdatesCorrectly(){
        BookDTO saved  = bookService.createBook(initial);
        Long id = bookRepository.findAll().iterator().next().getId();

        BookDTO beforeUpdate = bookToDTOconverter.convert(bookRepository.findById(id).get());

        String oldTitle=beforeUpdate.getTitle();
        String oldauthor=beforeUpdate.getAuthors();

        beforeUpdate.setTitle("changed title");
        beforeUpdate.setAuthors("changed authors");
        bookService.updateBook(id, beforeUpdate);
        beforeUpdate.setTitle(oldTitle);
        beforeUpdate.setAuthors(oldauthor);

        BookDTO afterUpdate = bookToDTOconverter.convert(bookRepository.findById(id).get());

        assertEquals(beforeUpdate.getIsbn(), afterUpdate.getIsbn());
        assertEquals(beforeUpdate.getDescription(), afterUpdate.getDescription());
        assertEquals(beforeUpdate.getPrice(), afterUpdate.getPrice());
        assertNotEquals(beforeUpdate.getAuthors(), afterUpdate.getAuthors());
        assertNotEquals(beforeUpdate.getTitle(), afterUpdate.getTitle());

    }

    @Test
    public void bookServiceDeletesCorrectly(){
        BookDTO saved  = bookService.createBook(initial);
        Long id = bookRepository.findAll().iterator().next().getId();

        bookService.deleteBook(id);

        assertNotNull(bookRepository.findAll());
        assertNull(bookRepository.findById(id).orElse(null));

    }

}