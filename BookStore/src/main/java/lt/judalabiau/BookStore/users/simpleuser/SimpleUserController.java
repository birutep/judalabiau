package lt.judalabiau.BookStore.users.simpleuser;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class SimpleUserController
{
    private SimpleUserService simpleUserService;

    public SimpleUserController(SimpleUserService simpleUserService)
    {
        this.simpleUserService = simpleUserService;
    }

    //visu pirkeju listui grazinti
    @GetMapping("/simpleusers")
    public @ResponseBody Iterable<SimpleUser> getSimpleUsers()
    {
        return this.simpleUserService.getSimpleUsers();
    }

    //prideti pirkeja i lista
    @PostMapping("/simpleusers")
    public @ResponseBody void addSimpleUser(@RequestBody SimpleUser simpleUser)
    {
        this.simpleUserService.cretaeSimpleUser(simpleUser);
    }

    //pasalinti pirkeja is listo
    @DeleteMapping("/simpleusers/{id}")
    public @ResponseBody void deleteSimpleUser(@PathVariable Long id)
    {
        this.simpleUserService.deleteSimpleUser(id);
    }

    @PutMapping("/simpleusers/{id}")
    public @ResponseBody void updateSimpleUser(@PathVariable Long id, @RequestBody SimpleUser simpleUser)
    {
        this.simpleUserService.updateSimpleUser(id, simpleUser);
    }
}
    