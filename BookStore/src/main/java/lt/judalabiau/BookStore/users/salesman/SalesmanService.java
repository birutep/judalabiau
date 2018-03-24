package lt.judalabiau.BookStore.users.salesman;

import javax.transaction.Transactional;

public class SalesmanService
{
    private SalesmanRepository salesmanRepository;

    public SalesmanService(SalesmanRepository salesmanRepository)
    {
        this.salesmanRepository = salesmanRepository;
    }

    @Transactional
    public Iterable<Salesman> getSalesmans() {
        return this.salesmanRepository.findAll();
    }

    @Transactional
    public void createAdministrator(Salesman salesman) {
        this.salesmanRepository.save(salesman);
    }

    @Transactional
    public void deletSalesman(Long id) {
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
    public void saveAllSalesmans(Iterable<Salesman> salesman) {
        this.salesmanRepository.saveAll(salesman);
    }
}
    