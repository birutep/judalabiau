package lt.judalabiau.BookStore.users.dto.converters;

import lt.judalabiau.BookStore.users.Administrator;
import lt.judalabiau.BookStore.users.Customer;
import lt.judalabiau.BookStore.users.Salesman;
import lt.judalabiau.BookStore.users.User;
import lt.judalabiau.BookStore.users.dto.UserDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;

@Component
public class UserToDTO implements Converter<User, UserDTO> {

    @Nullable
    @Override
    public UserDTO convert(User user) {
        if(user==null){
            return null;
        }
        UserDTO dto = new UserDTO();
        dto.setEmail(user.getEmail());
        dto.setfName(user.getfName());
        dto.setlName(user.getlName());
        dto.setRole(user.getRole().getId());
        dto.setId(user.getId());
        //del passwordo, ar reikia juos perduoti priekiui per DTO objekta

        if(user.getRole().getRoleName().equals("ADMINISTRATOR")){
            dto.setPhone(((Administrator)user).getPhone());
        }else if(user.getRole().getRoleName().equals("SALESMAN")){
            dto.setPhone(((Salesman)user).getPhone());
        }else if(user.getRole().getRoleName().equals("CUSTOMER")){
            dto.setPhone(((Customer)user).getPhone());
            dto.setAddress(((Customer)user).getAddress());
            dto.setBirthday(((Customer)user).getBirthday());
        }
        return dto;
    }
}
