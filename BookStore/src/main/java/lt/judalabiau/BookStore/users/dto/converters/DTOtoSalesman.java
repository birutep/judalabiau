package lt.judalabiau.BookStore.users.dto.converters;

import lt.judalabiau.BookStore.users.Administrator;
import lt.judalabiau.BookStore.users.Role;
import lt.judalabiau.BookStore.users.Salesman;
import lt.judalabiau.BookStore.users.dto.UserDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;


@Component
public class DTOtoSalesman implements Converter<UserDTO, Salesman> {
    @Override
    public Salesman convert(UserDTO dto) {
        if(dto==null || dto.getRole()!=2) {   //jei DTO role ne 1, ty, jei dto savyje laiko ne admina
            return null;
        }
        Salesman salesman = new Salesman();
        salesman.setfName(dto.getfName());
        salesman.setlName(dto.getlName());
        salesman.setEmail(dto.getEmail());
        salesman.setPassword(dto.getPassword());
        salesman.setPhone(dto.getPhone());

        Role role = new Role();
        role.setId(dto.getRole().longValue());
        role.setRoleName("SALESMAN");
        salesman.setRole(role);

        return salesman;
    }
}
