package lt.judalabiau.BookStore.users.administrator;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AdministratorController {
    private AdministratorService administratorService;

    public AdministratorController(AdministratorService administratorService) {
        this.administratorService = administratorService;
    }

    //visu administratoriu listui grazinti
    @GetMapping("/administrators")
    public
    @ResponseBody
    Iterable<Administrator> getAdministrators()
    {
        return this.administratorService.getAdministrators();
    }

    //ideti administratoriu i lista
    @PostMapping("/administrators")
    public
    @ResponseBody
    void addAdministrator(@RequestBody Administrator administrator)
    {
        this.administratorService.createAdministrator(administrator);
    }

    //pasalinti administratoriu is saraso
    @DeleteMapping("/administrators/{id}")
    public
    @ResponseBody
    void deleteAdministrator(@PathVariable Long id)
    {
        this.administratorService.deletAdministrator(id);
    }

    //administratoriui redaguoti
    @PutMapping("/administrators/{id}")
    public @ResponseBody void updateAdministratoriu(@PathVariable Long id, @RequestBody Administrator administrator)
    {
        this.administratorService.updateAdministrator(id, administrator);
    }
}
    