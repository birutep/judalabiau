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
    public UserDTO createUser(UserDTO userDTO){
        if(userRepository.existsByEmail(userDTO.getEmail())){
            //veliau mesim exception
            System.out.println("Toks useris jau yra");
            return null;
        }else{
            User saved = null;
            switch (userDTO.getRole().intValue()){
                case 1:
                    saved = userRepository.save( converterToAdmin.convert(userDTO));
                    break;
                case 2:
                    saved = userRepository.save(converterToSalesman.convert(userDTO));
                    break;
                case 3:
                    saved = userRepository.save( converterToCustomer.convert(userDTO));
                    break;
                default:
                    //gal mesim exceptiona
                     System.out.println("Tokios roles nera");
                     break;
            }
            if(saved!=null){
                return converterToDTO.convert(saved);
            }
            return null;
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
    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }

    @Transactional
    public UserDTO updateUser(Long id, UserDTO dto){
        User userToUpdate = userRepository.findById(id).orElse(null);
        if(userToUpdate==null){
            System.out.println("Tokio tokiu id nera, netuyrime ka koreguoti");
            return null;
        }
        User userPassedByDTO = null;
        switch (dto.getRole().intValue()){
            case 1:userPassedByDTO=converterToAdmin.convert(dto); break;
            case 2:userPassedByDTO=converterToSalesman.convert(dto); break;
            case 3:userPassedByDTO=converterToCustomer.convert(dto); break;
            default:
                System.out.println("Nepavyko atnaujinti vartotojo, tokiso roles nera");        return null;
        }
        if(userPassedByDTO!=null){
            userPassedByDTO.setId(userToUpdate.getId());//id nekeiciamas, todel tiesiog perasom ta kuris buvo originalus
            User updated = userRepository.save(userPassedByDTO);    //issaugojimo i repozitorija rezultatas, kuris konvertuojamas atgal i dto kaip responsas
            return converterToDTO.convert(updated);
        }
        return null;
    }


    //naudojamas tik init pradine duombaze, jei neatsiras poreikio, buildinant pasalint
    @Transactional
    public void saveAll(Iterable<User> users){
        userRepository.saveAll(users);
    }

}
