package lt.judalabiau.BookStore.users;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
//-------------------GET--------------------------
    @GetMapping("/users")//grazina visus userius
    @ResponseBody
    public Iterable<User> getAll(){
        return userService.getAll();
    }
//-------------------POST-------------------------
    @PostMapping("/users")    //registruoti useri
    @ResponseBody
    public void createUser(@RequestBody CreateUserCommand cmd){
         userService.createUser(cmd);
    }
}
