package lt.judalabiau.BookStore.datainit;

import lt.judalabiau.BookStore.books.Book;
import lt.judalabiau.BookStore.books.BookService;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

//@Component      //jei norit uzpildyt duombaze pasitestavimui atsikomentuojat, bet po paleidimo uzkomentuojat vel, nes kaskart paleidus jis prideda sitas knygas i duombaze
public class DatabaseInitialization implements ApplicationListener<ContextRefreshedEvent> {
    private final BookService bookService;
    private final List<Book> knygos = new ArrayList<>();

    public DatabaseInitialization(BookService bookService) {
        this.bookService = bookService;
    }

    private Iterable<Book> initAll(){
        Book b1 = new Book();
        b1.setAuthors("Aurimas Činčikas");
        b1.setTitle("Motyvaciniai pokalbiai arba kaip išlipti sausam");
        b1.setPrice(new BigDecimal(12.99));
        b1.setIsbn("123456");
        b1.setCount(15L);
        b1.setCategory("patarimų rinkinys");
        knygos.add(b1);
        Book b2 = new Book();
        b2.setAuthors("Jurgis Šidlauskis");
        b2.setTitle("Iš pirmos į antrą");
        b2.setPrice(new BigDecimal(9.99));
        b2.setIsbn("123456");
        b2.setCount(2L);
        b2.setCategory("istorinis");
        knygos.add(b2);
        Book b3 = new Book();
        b3.setAuthors("Daniel Razov");
        b3.setTitle("Tarp Vilmos ir Laimos");
        b3.setPrice(new BigDecimal(-1));
        b3.setIsbn("123456");
        b3.setCount(5L);
        b3.setCategory("romanas");
        knygos.add(b3);
        Book b4 = new Book();
        b4.setAuthors("Birutė Polkienė");
        b4.setTitle("Vienpusiai konfliktai");
        b4.setPrice(new BigDecimal(7.25));
        b4.setIsbn("123456");
        b4.setCount(28L);
        b4.setCategory("socialpsichologiopatinis");
        knygos.add(b4);
        Book b5 = new Book();
        b5.setAuthors("Vilma Laimužė");
        b5.setTitle("Mano tobulos formos arba ir vėl man CSSas");
        b5.setPrice(new BigDecimal(4.25));
        b5.setIsbn("123456");
        b5.setCount(15L);
        b5.setCategory("ese");
        knygos.add(b5);
        Book b6 = new Book();
        b6.setAuthors("Vincas Mykolaitis Maldeikis");
        b6.setTitle("Mamos šešėlyje");
        b6.setPrice(new BigDecimal(14.25));
        b6.setIsbn("123456");
        b6.setCount(25L);
        b6.setCategory("socialinis");
        knygos.add(b6);
        Book b7 = new Book();
        b7.setAuthors("Ernesta Pirmglas, Jurgis Antrauskis");
        b7.setTitle("Autoritarinė Demokratija");
        b7.setPrice(new BigDecimal(3.25));
        b7.setIsbn("123456");
        b7.setCount(4L);
        b7.setCategory("socialinis");
        knygos.add(b7);
        Book b8 = new Book();
        b8.setAuthors("Mykolas Bautrėnas");
        b8.setTitle("Susiliejimas su aplinka");
        b8.setPrice(new BigDecimal(31.45));
        b8.setIsbn("123456");
        b8.setCount(4L);
        b8.setCategory("anime");
        knygos.add(b8);
        Book b9 = new Book();
        b9.setAuthors("Mantas Pauliukonis 3");
        b9.setTitle("Nėra to raudono, ko nepaversčiau į žalią (JUnit Bible)");
        b9.setPrice(new BigDecimal(2.19));
        b9.setIsbn("123456");
        b9.setCount(120L);
        b9.setCategory("mokslinis");
        knygos.add(b9);
        Book b10 = new Book();
        b10.setAuthors("Redas Peškaitis");
        b10.setTitle("Pasakėčios iš 49 arba 69 autobuso");
        b10.setPrice(new BigDecimal(-1));
        b10.setIsbn("123456");
        b10.setCount(0L);
        b10.setCategory("pasakėčios");
        knygos.add(b10);

        return  knygos;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        bookService.saveAll(initAll());
    }
}
