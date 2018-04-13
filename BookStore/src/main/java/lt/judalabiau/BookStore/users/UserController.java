package lt.judalabiau.BookStore.users;

import org.springframework.security.access.prepost.PreAuthorize;
import javax.validation.Valid;

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
    @PreAuthorize("hasAnyRole('ADMINISTRATOR')")
    @GetMapping("/users")//grazina visus userius
    @ResponseBody
    public Iterable<User> getAll(){
        return userService.getAll();
    }
//-------------------POST-------------------------
    @PreAuthorize("hasAnyRole('ADMINISTRATOR')")
    @PostMapping("/users")    //registruoti useri
    @ResponseBody
    public void createUser(@Valid @RequestBody CreateUserCommand cmd){
         userService.createUser(cmd);
    }
}
