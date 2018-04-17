package lt.judalabiau.BookStore.users;

import lt.judalabiau.BookStore.users.dto.UserDTO;
import lt.judalabiau.BookStore.users.dto.converters.DTOtoAdmin;
import lt.judalabiau.BookStore.users.dto.converters.DTOtoCustomer;
import lt.judalabiau.BookStore.users.dto.converters.DTOtoSalesman;
import lt.judalabiau.BookStore.users.dto.converters.UserToDTO;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final DTOtoAdmin converterToAdmin;
    private final DTOtoSalesman converterToSalesman;
    private final DTOtoCustomer converterToCustomer;
    private final UserToDTO converterToDTO;

    public UserService(UserRepository userRepository, DTOtoAdmin converterToAdmin, DTOtoSalesman converterToSalesman, DTOtoCustomer converterToCustomer, UserToDTO converterToDTO) {
        this.userRepository = userRepository;
        this.converterToAdmin = converterToAdmin;
        this.converterToSalesman = converterToSalesman;
        this.converterToCustomer = converterToCustomer;
        this.converterToDTO = converterToDTO;
    }

    @Transactional
    public void createUser(UserDTO userDTO){
        if(userRepository.existsByEmail(userDTO.getEmail())){
            //veliau mesim exception
            System.out.println("Toks useris jau yra----------------");
        }else{
            switch (userDTO.getRole()){
                case 1:
                    userRepository.save( converterToAdmin.convert(userDTO));
                    break;
                case 2:
                    userRepository.save(converterToSalesman.convert(userDTO));
                    break;
                case 3:
                    userRepository.save( converterToCustomer.convert(userDTO));
                    break;
                default:
                    //gal mesim exceptiona
                     System.out.println("Tokios roles nera");
                     break;
            }
        }
    }

    @Transactional
    public Iterable<UserDTO> getAll(){
        List<UserDTO> users = new ArrayList<>();
        userRepository.findAll().iterator().forEachRemaining(
                user->users.add(converterToDTO.convert(user))
        );
        return  users;
    }

    @Transactional
    public void saveAll(Iterable<User> users){
        userRepository.saveAll(users);
    }

}
