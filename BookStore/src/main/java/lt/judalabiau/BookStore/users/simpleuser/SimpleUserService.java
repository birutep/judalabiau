package lt.judalabiau.BookStore.users.simpleuser;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class SimpleUserService
{
    private SimpleUserRepository simpleUserRepository;

    public SimpleUserService(SimpleUserRepository simpleUserRepository)
    {
        this.simpleUserRepository = simpleUserRepository;
    }

    @Transactional
    public Iterable<SimpleUser> getSimpleUsers ()
    {
        return this.simpleUserRepository.findAll();
    }

    @Transactional
    public void cretaeSimpleUser(SimpleUser simpleUser)
    {
        this.simpleUserRepository.save(simpleUser);
    }

    @Transactional
    public void deleteSimpleUser(Long id)
    {
        this.simpleUserRepository.deleteById(id);
    }

    @Transactional
    public void updateSimpleUser(Long id, SimpleUser simpleUser)
    {
        SimpleUser original = this.simpleUserRepository.findById(id).orElse(null);
        if (original != null)
        {
            simpleUser.setId(id);
            this.simpleUserRepository.save(simpleUser);
        }
    }

    @Transactional
    public void saveAll(Iterable<SimpleUser> simpleUsers)
    {
        this.simpleUserRepository.saveAll(simpleUsers);
    }
}
    