package lt.judalabiau.BookStore.users.dto.converters;

import lt.judalabiau.BookStore.users.Administrator;
import lt.judalabiau.BookStore.users.dto.UserDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;


@Component
public class DTOtoAdmin implements Converter<UserDTO, Administrator> {
    @Override
    public Administrator convert(UserDTO dto) {
        if(dto==null || dto.getRole()!=1) {   //jei DTO role ne 1, ty, jei dto savyje laiko ne admina
            return null;
        }
        Administrator admin = new Administrator();
        admin.setfName(dto.getfName());
        admin.setlName(dto.getlName());
        admin.setEmail(dto.getEmail());
        admin.setPassword(dto.getPassword());
        admin.setPhone(dto.getPhone());
        return admin;
    }
}
