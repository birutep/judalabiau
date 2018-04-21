package lt.judalabiau.BookStore.users;

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

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
    public void userServiceSavesCorrectly(){
        Long booksBefore = userRepository.count();

        UserDTO savedAdmin = userService.createUser(initialAdmin);
        UserDTO savedSalesman=userService.createUser(initialSalesman);
        UserDTO savedCustomer = userService.createUser(initialCustomer);

        assertNotNull(savedAdmin);
        //sekantys du pridejaimai turi grazint null, nes tokiu pat emailu useriai neregsitruojami
        //todo kai toks meailass jau yra mest excepriona, testa perasyt, kad jsi tiketusi excepriono
        //todo pagaudyt validaciju exceprionus, pvz blogas email, trumpas slaptazodis ir pan
        assertNull(savedSalesman);
        assertNull(savedCustomer);

        initialSalesman.setEmail("mailas@mailas.lt");
        initialCustomer.setEmail("emailiukas@mailas.lt");

        savedSalesman = userService.createUser(initialSalesman);
        savedCustomer=userService.createUser(initialCustomer);
        assertNotNull(savedSalesman);
        assertNotNull(savedCustomer);

        Long booksAfter = userRepository.count();

        assertNotEquals(booksBefore, booksAfter);
        booksBefore+=3;
        assertEquals(booksAfter, booksBefore);
    }

    @Test
    public void userServiceGetsCorrectly(){
        List<UserDTO> users = new ArrayList<>();
        UserDTO testUser = new UserDTO();
        testUser.setEmail("emailfortest@email.lt");
        testUser.setfName("fname");
        testUser.setlName("lname");
        testUser.setRole(1L);
        testUser.setPhone(861122333L);
        testUser.setPassword("notnull");
        testUser.setAddress("address");
        testUser.setBirthday(new Date());
        userService.createUser(testUser);

        userService.getAll().iterator()
                .forEachRemaining(
                        user->users.add(user)
        );

        assertNotEquals(0, users.size());
        assertEquals(userRepository.count(), users.size());

        UserDTO adimFromGet =users.stream()
                .filter(user->user.getEmail().equals("emailfortest@email.lt"))
                .findFirst().get();

        assertEquals("fname", adimFromGet.getfName());
        assertEquals("lname", adimFromGet.getlName());
        //adminas tokiu lauku neturi, todel getas is repositorijos dto modeliui
        //juos nurato null, nors pradiniam dto jie ir buvo nustatyti
        assertNull(adimFromGet.getBirthday());
        assertNull(adimFromGet.getAddress());

    }

    @Test
    public void UserServiceUpdatesCorrectly(){
        UserDTO user = toDTOConverter.convert(userRepository.getFirstById(1L));
        String previousName = user.getfName();
        Long previousPhone = user.getPhone();
        user.setPhone(previousPhone++);
        user.setfName("edited name");
        user.setPassword("pass123");

        UserDTO updated = userService.updateUser(1L, user);
        user.setfName(previousName);
        user.setPhone(previousPhone);

        assertEquals(user.getEmail(), updated.getEmail());
        assertEquals(user.getlName(), updated.getlName());
        assertNotEquals(user.getfName(), updated.getfName());
        assertNotEquals(user.getPhone(), updated.getPhone());

    }

    @Test
    public void UserServiceDeletesCorrectly(){
        UserDTO user = toDTOConverter.convert(userRepository.getFirstById(2L));
        Long count = userRepository.count();
        assertNotEquals(0, userRepository.count());
        assertNotNull(userRepository.findAll());

        userService.deleteUser(user.getId());

        assertNull(userRepository.findById(user.getId()).orElse(null));
        assertNotEquals(java.util.Optional.ofNullable(count), userRepository.count());
        assertEquals(count-1L, userRepository.count());
    }


}