package lt.judalabiau.BookStore.users.salesman;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class SalesmanService
{
    private SalesmanRepository salesmanRepository;

    public SalesmanService(SalesmanRepository salesmanRepository)
    {
        this.salesmanRepository = salesmanRepository;
    }

    @Transactional
    public Iterable<Salesman> getSellers() {
        return this.salesmanRepository.findAll();
    }

    @Transactional
    public void createSalesman(Salesman salesman) {
        this.salesmanRepository.save(salesman);
    }

    @Transactional
    public void deleteSalesman(Long id) {
        this.salesmanRepository.deleteById(id);
    }

    @Transactional
    public void updateSalesman(Long id, Salesman salesman) {
        Salesman original = this.salesmanRepository.findById(id).orElse(null);
        if (original != null) {
            salesman.setId(id);
            this.salesmanRepository.save(salesman);
        }
    }

    @Transactional
    public void saveAllSellers(Iterable<Salesman> salesman) {
        this.salesmanRepository.saveAll(salesman);
    }
}
    