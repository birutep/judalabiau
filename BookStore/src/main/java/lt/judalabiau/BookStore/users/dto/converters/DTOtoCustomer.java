package lt.judalabiau.BookStore.users.dto.converters;

import lt.judalabiau.BookStore.users.Customer;
import lt.judalabiau.BookStore.users.dto.UserDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;


@Component
public class DTOtoCustomer implements Converter<UserDTO, Customer> {
    @Override
    public Customer convert(UserDTO dto) {
        if(dto==null || dto.getRole()!=3) {   //jei DTO role ne 1, ty, jei dto savyje laiko ne admina
            return null;
        }
        Customer customer = new Customer();
        customer.setfName(dto.getfName());
        customer.setlName(dto.getlName());
        customer.setEmail(dto.getEmail());
        customer.setPassword(dto.getPassword());
        customer.setPhone(dto.getPhone());
        customer.setBirthday(dto.getBirthday());
        customer.setAddress(dto.getAddress());
        return customer;
    }
}