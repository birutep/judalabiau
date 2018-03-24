package lt.judalabiau.BookStore.users.administrator;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class AdministratorService
{
    private AdministratorRepository administratorRepository;

    public AdministratorService(AdministratorRepository administratorRepository)
    {
        this.administratorRepository = administratorRepository;
    }

    @Transactional
    public Iterable<Administrator> getAdministrators()
    {
        return this.administratorRepository.findAll();
    }

    @Transactional
    public void createAdministrator(Administrator administrator)
    {
        this.administratorRepository.save(administrator);
    }

    @Transactional
    public void deletAdministrator(Long id)
    {
        this.administratorRepository.deleteById(id);
    }

    @Transactional
    public void updateAdministrator(Long id, Administrator administrator)
    {
        Administrator original = this.administratorRepository.findById(id).orElse(null);
        if (original != null)
        {
            administrator.setId(id);
            this.administratorRepository.save(administrator);
        }
    }

    @Transactional
    public void saveAllAdminstrators(Iterable<Administrator> administrators)
    {
        this.administratorRepository.saveAll(administrators);
    }
}
    