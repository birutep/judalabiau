package lt.judalabiau.BookStore.users.salesman;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class SalesmanController
{
    private SalesmanService salesmanService;

    public SalesmanController(SalesmanService salesmanService)
    {
        this.salesmanService = salesmanService;
    }

    //visu pardaveju istui grazinti
    @GetMapping("/sellers")
    public @ResponseBody Iterable<Salesman> getSellers()
    {
        return this.salesmanService.getSellers();
    }

    //prideti pardaveja i lista
    @PostMapping("/sellers")
    public @ResponseBody void addSalesman(@RequestBody Salesman salesman)
    {
        this.salesmanService.createSalesman(salesman);
    }

    //istrinti pardaveja is listo
    @DeleteMapping("/salesman/{id}")
    public @ResponseBody void deleteSalesman(@PathVariable Long id)
    {
        this.salesmanService.deleteSalesman(id);
    }

    //pardavejui redagauoti
    @PostMapping("/salesman/{id}")
    public @ResponseBody void updateSalesman(@PathVariable Long id, @RequestBody Salesman salesman)
    {
        this.salesmanService.updateSalesman(id, salesman);
    }
}
    