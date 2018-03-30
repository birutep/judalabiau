package lt.judalabiau.BookStore.users;

import lt.judalabiau.BookStore.users.create.CreateAdminCommand;
import lt.judalabiau.BookStore.users.create.CreateCustomerCommand;
import lt.judalabiau.BookStore.users.create.CreateSalesmanCommand;
import lt.judalabiau.BookStore.users.create.CreateUserCommand;
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
            switch (createUserCommand.getRole().getRoleName()){
                case "ADMIN":
                    userRepository.save( new Administrator((CreateAdminCommand) createUserCommand));
                    break;
                case "SALESMAN":
                    userRepository.save( new Salesman((CreateSalesmanCommand) createUserCommand));
                    break;
                case "CUSTOMER":
                    userRepository.save( new Customer((CreateCustomerCommand) createUserCommand));
                    break;
                default:
                    //gal mesim exceptiona
                     System.out.println("Tokios roles nera");
                     break;
            }
        }
    }

}
