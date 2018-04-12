package lt.judalabiau.BookStore.datainit;

import lt.judalabiau.BookStore.books.Book;
import lt.judalabiau.BookStore.books.BookService;
import lt.judalabiau.BookStore.users.*;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

//@Component
//jei norit uzpildyt duombaze pasitestavimui atsikomentuojat, bet po paleidimo uzkomentuojat vel, nes kaskart paleidus jis prideda sitas knygas i duombaze
public class DatabaseInitialization implements ApplicationListener<ContextRefreshedEvent> {
    private final BookService bookService;
    private final UserService userService;
    private final List<Book> knygos = new ArrayList<>();
    private final List<User> useriai = new ArrayList<>();

    public DatabaseInitialization(BookService bookService, UserService userService) {
        this.bookService = bookService;
        this.userService = userService;
    }

    private Iterable<Book> initBooks(){
        Book b1 = new Book();
        b1.setAuthors("Aurimas Činčikas");
        b1.setTitle("Motyvaciniai pokalbiai arba kaip išlipti sausam");
        b1.setPrice(new BigDecimal(12.99));
        b1.setIsbn("123456");
        b1.setCount(15L);
        b1.setCategory("patarimų rinkinys");
        b1.setRating(5.0);
        b1.setPhotopath("notfound.png");
        knygos.add(b1);
        Book b2 = new Book();
        b2.setAuthors("Jurgis Šidlauskis");
        b2.setTitle("Chain of Responsibility paskutinė stotelė");
        b2.setPrice(new BigDecimal(9.99));
        b2.setIsbn("123456");
        b2.setCount(2L);
        b2.setCategory("nuotykių");
        b2.setRating(4.5);
        b2.setPhotopath("notfound.png");
        knygos.add(b2);
        Book b3 = new Book();
        b3.setAuthors("Daniel Razov");
        b3.setTitle("Tarp Vilmos ir Laimos");
        b3.setPrice(new BigDecimal(-1));
        b3.setIsbn("123456");
        b3.setCount(5L);
        b3.setCategory("romanas");
        b3.setRating(4.0);
        b3.setPhotopath("notfound.png");
        knygos.add(b3);
        Book b4 = new Book();
        b4.setAuthors("Birutė Polkienė");
        b4.setTitle("Vienpusiai konfliktai");
        b4.setPrice(new BigDecimal(7.25));
        b4.setIsbn("123456");
        b4.setCount(28L);
        b4.setCategory("socialpsichologiopatinis");
        b4.setRating(3.5);
        b4.setPhotopath("notfound.png");
        knygos.add(b4);
        Book b5 = new Book();
        b5.setAuthors("Vilma Laimužė");
        b5.setTitle("Mano tobulos formos arba ir vėl man CSSas");
        b5.setPrice(new BigDecimal(4.25));
        b5.setIsbn("123456");
        b5.setCount(15L);
        b5.setCategory("ese");
        b5.setRating(3.5);
        b5.setPhotopath("notfound.png");
        knygos.add(b5);
        Book b6 = new Book();
        b6.setAuthors("Vincas Mykolaitis Maldeikis");
        b6.setTitle("Mamos šešėlyje");
        b6.setPrice(new BigDecimal(14.25));
        b6.setIsbn("123456");
        b6.setCount(25L);
        b6.setCategory("socialinis");
        b6.setRating(2.5);
        b6.setPhotopath("notfound.png");
        knygos.add(b6);
        Book b7 = new Book();
        b7.setAuthors("Ernesta Duglas");
        b7.setTitle("Autoritarinė Demokratija");
        b7.setPrice(new BigDecimal(3.25));
        b7.setIsbn("123456");
        b7.setCount(4L);
        b7.setCategory("socialinis");
        b7.setRating(1.5);
        b7.setPhotopath("notfound.png");
        knygos.add(b7);
        Book b8 = new Book();
        b8.setAuthors("Mykolas Bautrėnas");
        b8.setTitle("Windows pradžiamokslis");
        b8.setPrice(new BigDecimal(31.45));
        b8.setIsbn("123456");
        b8.setCount(4L);
        b8.setCategory("anime");
        b8.setRating(1.0);
        b8.setPhotopath("notfound.png");
        knygos.add(b8);
        Book b9 = new Book();
        b9.setAuthors("Mantas Pauliukonis 3");
        b9.setTitle("Nėra to raudono, ko nepaversčiau į žalią (JUnit Bible)");
        b9.setPrice(new BigDecimal(2.19));
        b9.setIsbn("123456");
        b9.setCount(120L);
        b9.setCategory("mokslinis");
        b9.setRating(0.5);
        b9.setPhotopath("notfound.png");
        knygos.add(b9);
        Book b10 = new Book();
        b10.setAuthors("Redas Peškaitis");
        b10.setTitle("Pasakėčios iš 49 arba 69 autobuso");
        b10.setPrice(new BigDecimal(-1));
        b10.setIsbn("123456");
        b10.setCount(0L);
        b10.setCategory("pasakėčios");
        b10.setRating(0.0);
        b10.setPhotopath("notfound.png");
        knygos.add(b10);

        return  knygos;
    }
    private Iterable<User> initUsers(){
        Role adm = new Role();
        adm.setId(1L);
        adm.setRoleName("ADMINISTRATOR");
        Role sls = new Role();
        sls.setId(2L);
        sls.setRoleName("SALESMAN");
        Role ctm = new Role();
        ctm.setId(3L);
        ctm.setRoleName("CUSTOMER");


        Administrator u1  = new Administrator();
        u1.setfName("Konstantinas");
        u1.setlName("Didysis");
        u1.setEmail("kostia@gmail.com");
        u1.setPassword("abc123");
        u1.setPhone(862211111L);
        u1.setRole(adm);
        useriai.add(u1);

        Salesman u2  = new Salesman();
        u2.setfName("Kamilė");
        u2.setlName("Petkute");
        u2.setEmail("tigriuke@gmail.com");
        u2.setPassword("abc123");
        u2.setPhone(862211111L);
        u2.setRole(sls);
        useriai.add(u2);

        Customer u3  = new Customer();
        u3.setfName("Žilvinas");
        u3.setlName("Greitutavičius");
        u3.setEmail("zilva@gmail.com");
        u3.setPassword("abc123");
        u3.setPhone(862211111L);
        u3.setRole(ctm);
        u3.setBirthday(new Date());
        useriai.add(u3);

        Customer u4  = new Customer();
        u4.setfName("Lukas");
        u4.setlName("Kilkus");
        u4.setEmail("garazas@gmail.com");
        u4.setPassword("abc123");
        u4.setPhone(862211111L);
        u4.setRole(ctm);
        u4.setBirthday(new Date());
        useriai.add(u4);

        return useriai;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        bookService.saveAll(initBooks());
        userService.saveAll(initUsers());
    }
}
