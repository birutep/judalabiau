package lt.judalabiau.BookStore.books.dto.converters;


import lt.judalabiau.BookStore.books.Book;
import lt.judalabiau.BookStore.books.dto.BookDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;

@Component
public class DTOtoBook implements Converter<BookDTO, Book> {

    @Nullable
    @Override
    public Book convert(BookDTO dto) {
        if(dto==null){
            return null;
        }
        final Book book = new Book();
        book.setPhotopath(dto.getPhotopath());
        book.setRating(dto.getRating());
        book.setAuthors(dto.getAuthors());
        book.setCategory(dto.getCategory());
        book.setCount(dto.getCount());
        book.setIsbn(dto.getIsbn());
        book.setPrice(dto.getPrice());
        book.setTitle(dto.getTitle());
        book.setDescription(dto.getDescription());
        book.seteAvailable(dto.geteAvailable());
        book.setRatingCount(dto.getRatingCount());
        book.setReleaseYear(dto.getReleaseYear());
        return book;
    }
}
