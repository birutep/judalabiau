package lt.judalabiau.BookStore.books.dto.converters;

import lt.judalabiau.BookStore.books.Book;
import lt.judalabiau.BookStore.books.dto.BookDTO;
import lt.judalabiau.BookStore.users.Administrator;
import lt.judalabiau.BookStore.users.Customer;
import lt.judalabiau.BookStore.users.Role;
import lt.judalabiau.BookStore.users.Salesman;
import lt.judalabiau.BookStore.users.dto.UserDTO;
import lt.judalabiau.BookStore.users.dto.converters.DTOtoAdmin;
import lt.judalabiau.BookStore.users.dto.converters.DTOtoCustomer;
import lt.judalabiau.BookStore.users.dto.converters.DTOtoSalesman;
import lt.judalabiau.BookStore.users.dto.converters.UserToDTO;
import org.junit.Before;
import org.junit.Test;
import org.omg.CORBA.DATA_CONVERSION;

import java.math.BigDecimal;
import java.util.Date;

import static lt.judalabiau.BookStore.constants.UserConstants.*;
import static org.junit.Assert.*;

public class UserConvertersTest {

    private final Role ROLE_ADMIN = new Role();
    private final Role ROLE_SALESMAN = new Role();
    private final Role ROLE_CUSTOMER = new Role();

    private DTOtoAdmin converterToAdmin;
    private DTOtoSalesman converterToSalesman;
    private DTOtoCustomer converterToCustomer;
    private UserToDTO converterToDto;

    @Before
    public void setup() {
        converterToAdmin = new DTOtoAdmin();
        converterToSalesman = new DTOtoSalesman();
        converterToCustomer = new DTOtoCustomer();
        converterToDto = new UserToDTO();

        ROLE_ADMIN.setId(1L);
        ROLE_ADMIN.setRoleName("ADMINISTRATOR");
        ROLE_SALESMAN.setId(2L);
        ROLE_SALESMAN.setRoleName("SALESMAN");
        ROLE_CUSTOMER.setId(3L);
        ROLE_CUSTOMER.setRoleName("CUSTOMER");
    }

    public void initDTO(UserDTO dto, Long roleId) {
        dto.setfName(FIRST_NAME);
        dto.setlName(LAST_NAME);
        dto.setEmail(EMAIL);
        dto.setRole(roleId);
        dto.setPhone(PHONE);
        dto.setBirthday(BIRTH_DATA);
        dto.setAddress(ADDRESS);
    }

    @Test
    public void testNull() {
        assertNull(converterToAdmin.convert(null));
        assertNull(converterToSalesman.convert(null));
        assertNull(converterToCustomer.convert(null));
        assertNull(converterToDto.convert(null));
    }


    @Test
    public void testDTOconvertsToUsersProperly() {
        UserDTO dto = new UserDTO();
        initDTO(dto, ROLE_ADMIN_DTO);

        Administrator admin = converterToAdmin.convert(dto);
        dto.setRole(ROLE_CUSTOMER_DTO);
        Customer customer = converterToCustomer.convert(dto);
        dto.setRole(ROLE_SALESMAN_DTO);
        Salesman salesman = converterToSalesman.convert(dto);

        assertNotNull(dto);
        assertNotNull(admin);
        assertNotNull(salesman);
        assertNotNull(customer);

        //ar atkeliavo vardai
        assertEquals(FIRST_NAME, admin.getfName());
        assertEquals(FIRST_NAME, salesman.getfName());
        assertEquals(FIRST_NAME, customer.getfName());

        //ar atkeliavo pavardes
        assertEquals(LAST_NAME, admin.getlName());
        assertEquals(LAST_NAME, salesman.getlName());
        assertEquals(LAST_NAME, customer.getlName());

        //ar atkeliavo email
        assertEquals(EMAIL, admin.getEmail());
        assertEquals(EMAIL, salesman.getEmail());
        assertEquals(EMAIL, customer.getEmail());

        //ar atkeliavo roles
        assertEquals(ROLE_ADMIN, admin.getRole());
        assertEquals(ROLE_SALESMAN, salesman.getRole());
        assertEquals(ROLE_CUSTOMER, customer.getRole());

        //ar atkeliavo telefonaiu
        assertEquals(PHONE, admin.getPhone());
        assertEquals(PHONE, salesman.getPhone());
        assertEquals(PHONE, (Long) customer.getPhone());//customeriui phone neprivalomas

        //ar atkeliavo gimimo data
        assertNull(converterToDto.convert(admin).getBirthday());    //adminas neturit gimimo datos lauko
        assertNull(converterToDto.convert(salesman).getBirthday()); //adminas neturi gimimo datos lauko
        assertEquals(BIRTH_DATA, customer.getBirthday());

        //ar atkeliavo adresas
        assertNull(converterToDto.convert(admin).getAddress());    //adminas neturit gimimo datos lauko
        assertNull(converterToDto.convert(salesman).getAddress()); //adminas neturi gimimo datos lauko
        assertEquals(ADDRESS, customer.getAddress());


    }

    @Test
    public void testAdminConvertsToDTOproperly() {
        Administrator administrator = new Administrator();
        administrator.setRole(ROLE_ADMIN);
        administrator.setfName(FIRST_NAME);
        administrator.setlName(LAST_NAME);
        administrator.setEmail(EMAIL);
        administrator.setPhone(PHONE);

        UserDTO dto = converterToDto.convert(administrator);

        assertNotNull(dto);
        assertEquals(ROLE_ADMIN_DTO, dto.getRole());
        assertEquals(FIRST_NAME, dto.getfName());
        assertEquals(LAST_NAME, dto.getlName());
        assertEquals(EMAIL, dto.getEmail());
        assertEquals(PHONE, dto.getPhone());
        assertNull(dto.getBirthday());
        assertNull(dto.getAddress());

    }

    @Test
    public void testSalesmanConvertsToDTOproperly() {
        Salesman salesman = new Salesman();
        salesman.setRole(ROLE_SALESMAN);
        salesman.setfName(FIRST_NAME);
        salesman.setlName(LAST_NAME);
        salesman.setEmail(EMAIL);
        salesman.setPhone(PHONE);

        UserDTO dto = converterToDto.convert(salesman);

        assertNotNull(dto);
        assertEquals(ROLE_SALESMAN_DTO, dto.getRole());
        assertEquals(FIRST_NAME, dto.getfName());
        assertEquals(LAST_NAME, dto.getlName());
        assertEquals(EMAIL, dto.getEmail());
        assertEquals(PHONE, dto.getPhone());
        assertNull(dto.getBirthday());
        assertNull(dto.getAddress());

    }

    @Test
    public void testCustomerConvertsToDTOproperly() {
        Customer customer = new Customer();
        customer.setRole(ROLE_CUSTOMER);
        customer.setfName(FIRST_NAME);
        customer.setlName(LAST_NAME);
        customer.setEmail(EMAIL);
        customer.setPhone(PHONE);

        UserDTO dto = converterToDto.convert(customer);

        assertNotNull(dto);
        assertEquals(ROLE_CUSTOMER_DTO, dto.getRole());
        assertEquals(FIRST_NAME, dto.getfName());
        assertEquals(LAST_NAME, dto.getlName());
        assertEquals(EMAIL, dto.getEmail());
        assertEquals(PHONE, dto.getPhone());
        assertNull(dto.getBirthday());  //neprivalomi laukai, tarkim nebuvo perduoti, ucustomeriui, konvertuojant turejo tapti nullais
        assertNull(dto.getAddress());

        customer.setAddress(ADDRESS);       //nustacius laukus customeriui ir dar karta konvertuojant, jau turi but ne nullai o tos reiksmes
        customer.setBirthday(BIRTH_DATA);
        dto=converterToDto.convert(customer);
        assertNotNull(dto.getBirthday());
        assertNotNull(dto.getAddress());
        assertEquals(ADDRESS, dto.getAddress());
        assertEquals(BIRTH_DATA, dto.getBirthday());

    }
}