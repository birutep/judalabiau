package lt.judalabiau.BookStore.users;

import javax.validation.Valid;

import lt.judalabiau.BookStore.users.dto.UserDTO;
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
    public Iterable<UserDTO> getAll(){
        return userService.getAll();
    }
//-------------------POST-------------------------
    @PostMapping("/users")    //registruoti useri
    @ResponseBody
    public void createUser(@Valid @RequestBody UserDTO dto){
         userService.createUser(dto);
    }
}
