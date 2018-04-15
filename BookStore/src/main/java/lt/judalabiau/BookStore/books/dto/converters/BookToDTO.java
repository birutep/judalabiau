package lt.judalabiau.BookStore.books.dto.converters;

import lt.judalabiau.BookStore.books.Book;
import lt.judalabiau.BookStore.books.dto.BookDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;



@Component
public class BookToDTO implements Converter<Book, BookDTO> {

    @Nullable
    @Override
    public BookDTO convert(Book book) {
        if(book==null){
            return null;
        }
        final BookDTO dto = new BookDTO();
        dto.setPhotopath(book.getPhotopath());
        dto.setRating(book.getRating());
        dto.setAuthors(book.getAuthors());
        dto.setCategory(book.getCategory());
        dto.setCount(book.getCount());
        dto.setIsbn(book.getIsbn());
        dto.setPrice(book.getPrice());
        dto.setTitle(book.getTitle());
        dto.setDescription(book.getDescription());
        dto.seteAvailable(book.geteAvailable());
        dto.setRatingCount(book.getRatingCount());
        dto.setReleaseYear(book.getReleaseYear());
        dto.setId(book.getId());
        return dto;
    }
}
