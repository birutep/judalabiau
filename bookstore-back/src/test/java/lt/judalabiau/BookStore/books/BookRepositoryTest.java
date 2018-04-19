package lt.judalabiau.BookStore.books;

import lt.judalabiau.BookStore.books.dto.BookDTO;
import lt.judalabiau.BookStore.books.dto.converters.BookToDTO;
import lt.judalabiau.BookStore.books.dto.converters.DTOtoBook;
import lt.judalabiau.BookStore.users.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BookRepositoryTest {


    @Autowired
    private BookService bookRepository;

    @Autowired
    BookToDTO bookToDTOconverter;

    @Autowired
    DTOtoBook dtoToBookconverter;

    @Test
    public void basicRepositoryCommandsTest(){
        Book newBook = new Book();
        newBook.setTitle("aurimelio testai");
        newBook.setAuthors("aurimas Činčikas");
        newBook.setPrice(new BigDecimal(15.99));
        newBook.setIsbn("isbn-12345");
        newBook.setCount(15L);
        newBook.setCategory("testai");
        newBook.setId(6663L);

        BookDTO saved  = bookRepository.createBook(bookToDTOconverter.convert(newBook));
        System.out.println(saved.getTitle()+" "+saved.getAuthors());
//        Book found = bookRepository.findById(666L).get();
//        System.out.println(found.getTitle());
    }

}