package lt.judalabiau.BookStore.users;

import lt.judalabiau.BookStore.books.Book;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public void createUser(CreateUserCommand createUserCommand){
        if(userRepository.existsByEmail(createUserCommand.getEmail())){
            //veliau mesim exception
            System.out.println("Toks useris jau yra----------------");
        }else{
            switch (createUserCommand.getRole()){
                case 1:
                    userRepository.save( new Administrator(createUserCommand));
                    break;
                case 2:
                    userRepository.save( new Salesman( createUserCommand));
                    break;
                case 3:
                    userRepository.save( new Customer(createUserCommand));
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
