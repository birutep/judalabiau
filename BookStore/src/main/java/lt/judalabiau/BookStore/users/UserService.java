package lt.judalabiau.BookStore.users;

import lt.judalabiau.BookStore.users.dto.UserDTO;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public void createUser(UserDTO userDTO){
        if(userRepository.existsByEmail(userDTO.getEmail())){
            //veliau mesim exception
            System.out.println("Toks useris jau yra----------------");
        }else{
            switch (userDTO.getRole()){
                case 1:
                    userRepository.save( new Administrator(userDTO));
                    break;
                case 2:
                    userRepository.save( new Salesman(userDTO));
                    break;
                case 3:
                    userRepository.save( new Customer(userDTO));
                    break;
                default:
                    //gal mesim exceptiona
                     System.out.println("Tokios roles nera");
                     break;
            }
        }
    }

    @Transactional
    public Iterable<User> getAll(){
        return userRepository.findAll();
    }

    @Transactional
    public void saveAll(Iterable<User> users){
        userRepository.saveAll(users);
    }

}
