package lt.judalabiau.BookStore.books.dto.converters;

import lt.judalabiau.BookStore.books.Book;
import lt.judalabiau.BookStore.books.dto.BookDTO;
import org.junit.Before;
import org.junit.Test;

import static lt.judalabiau.BookStore.constants.BookConstants.*;

import java.math.BigDecimal;

import static org.junit.Assert.*;

public class BookConvertersTest {

    private BookToDTO converterToDto;
    private DTOtoBook converterTobook;

    @Before
    public void setup(){
        converterTobook = new DTOtoBook();
        converterToDto = new BookToDTO();
    }

    @Test
    public void testNull(){
        assertNull(converterToDto.convert(null));
        assertNull(converterTobook.convert(null));
    }

    @Test
    public void testEmpty(){
        assertNotNull(converterToDto.convert(new Book()));
        assertNotNull(converterTobook.convert(new BookDTO()));
    }

    @Test
    public void testBookConvertsToBookDTO(){
        Book book = new Book();
        book.setPhotopath(PHOTO);
        book.setRating(RATING);
        book.setAuthors(AUTHORS);
        book.setCategory(CATEGORY);
        book.setCount(COUNT);
        book.setIsbn(ISBN);
        book.setPrice(PRICE);
        book.setTitle(TITLE);
        book.setDescription(DESCRIPTION);
        book.seteAvailable(E_AVAILABLE);
        book.setRatingCount(RATING_COUNT);
        book.setReleaseYear(YEAR);

        BookDTO dto = converterToDto.convert(book);

        assertNotNull(dto);
        assertEquals(PHOTO, dto.getPhotopath());
        assertEquals(RATING, dto.getRating());
        assertEquals(AUTHORS, dto.getAuthors());
        assertEquals(CATEGORY, dto.getCategory());
        assertEquals(COUNT, dto.getCount());
        assertEquals(ISBN, dto.getIsbn());
        assertEquals(PRICE, dto.getPrice());
        assertEquals(TITLE, dto.getTitle());
        assertEquals(DESCRIPTION, dto.getDescription());
        assertEquals(E_AVAILABLE, dto.geteAvailable());
        assertEquals(RATING_COUNT, dto.getRatingCount());
        assertEquals(YEAR, dto.getReleaseYear());
    }

    @Test
    public void testBookDTOconvertsToBook(){
        BookDTO dto = new BookDTO();
        dto.setPhotopath(PHOTO);
        dto.setRating(RATING);
        dto.setAuthors(AUTHORS);
        dto.setCategory(CATEGORY);
        dto.setCount(COUNT);
        dto.setIsbn(ISBN);
        dto.setPrice(PRICE);
        dto.setTitle(TITLE);
        dto.setDescription(DESCRIPTION);
        dto.seteAvailable(E_AVAILABLE);
        dto.setRatingCount(RATING_COUNT);
        dto.setReleaseYear(YEAR);

        Book book = converterTobook.convert(dto);

        assertNotNull(book);
        assertEquals(PHOTO, book.getPhotopath());
        assertEquals(RATING, book.getRating());
        assertEquals(AUTHORS, book.getAuthors());
        assertEquals(CATEGORY, book.getCategory());
        assertEquals(COUNT, book.getCount());
        assertEquals(ISBN, book.getIsbn());
        assertEquals(PRICE, book.getPrice());
        assertEquals(TITLE, book.getTitle());
        assertEquals(DESCRIPTION, book.getDescription());
        assertEquals(E_AVAILABLE, book.geteAvailable());
        assertEquals(RATING_COUNT, book.getRatingCount());
        assertEquals(YEAR, book.getReleaseYear());
    }

}