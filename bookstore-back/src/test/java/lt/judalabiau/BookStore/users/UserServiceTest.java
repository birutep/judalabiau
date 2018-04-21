package lt.judalabiau.BookStore.users;

import lt.judalabiau.BookStore.books.dto.BookDTO;
import lt.judalabiau.BookStore.users.dto.UserDTO;
import lt.judalabiau.BookStore.users.dto.converters.DTOtoAdmin;
import lt.judalabiau.BookStore.users.dto.converters.DTOtoCustomer;
import lt.judalabiau.BookStore.users.dto.converters.DTOtoSalesman;
import lt.judalabiau.BookStore.users.dto.converters.UserToDTO;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static lt.judalabiau.BookStore.constants.UserConstants.*;
import static org.junit.Assert.*;


@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserToDTO toDTOConverter;

    @Autowired
    private DTOtoAdmin toAdminConverter;

    @Autowired
    private DTOtoSalesman toSalesmanConverter;

    @Autowired
    private DTOtoCustomer toCustomerCoverter;

    private UserDTO initialAdmin;
    private UserDTO initialSalesman;
    private UserDTO initialCustomer;

    @Before
    public void setUp() throws Exception{
        initialAdmin = new UserDTO();
        initialAdmin.setfName(FIRST_NAME);
        initialAdmin.setlName(LAST_NAME);
        initialAdmin.setEmail(EMAIL);
        initialAdmin.setPassword(PASSWORD);
        initialAdmin.setPhone(PHONE);
        initialAdmin.setAddress(ADDRESS);
        initialAdmin.setBirthday(BIRTH_DATA);
        initialAdmin.setRole(ROLE_ADMIN_DTO);

        initialSalesman = new UserDTO();
        initialSalesman.setfName(FIRST_NAME);
        initialSalesman.setlName(LAST_NAME);
        initialSalesman.setEmail(EMAIL);
        initialSalesman.setPassword(PASSWORD);
        initialSalesman.setPhone(PHONE);
        initialSalesman.setAddress(ADDRESS);
        initialSalesman.setBirthday(BIRTH_DATA);
        initialSalesman.setRole(ROLE_SALESMAN_DTO);

        initialCustomer = new UserDTO();
        initialCustomer.setfName(FIRST_NAME);
        initialCustomer.setlName(LAST_NAME);
        initialCustomer.setEmail(EMAIL);
        initialCustomer.setPassword(PASSWORD);
        initialCustomer.setPhone(PHONE);
        initialCustomer.setAddress(ADDRESS);
        initialCustomer.setBirthday(BIRTH_DATA);
        initialCustomer.setRole(ROLE_CUSTOMER_DTO);
    }

    @Test
    public void bookServiseSavesCorrectly(){
        UserDTO savedAdmin = userService.createUser(initialAdmin);
        UserDTO savedSalesman=userService.createUser(initialSalesman);
        UserDTO savedCustomer = userService.createUser(initialCustomer);

        assertNotNull(savedAdmin);
        //sekantys du pridejaimai turi grazint null, nes tokiu pat emailu useriai neregsitruojami
        //todo kai toks meailass jau yra mest excepriona, testa perasyt, kad jsi tiketusi excepriono
        assertNull(savedSalesman);
        assertNull(savedCustomer);

        initialSalesman.setEmail("mailas@mailas.lt");
        initialCustomer.setEmail("emailiukas@mailas.lt");

        savedSalesman = userService.createUser(initialSalesman);
        savedCustomer=userService.createUser(initialCustomer);
        assertNotNull(savedSalesman);
        assertNotNull(savedSalesman);
    }
}