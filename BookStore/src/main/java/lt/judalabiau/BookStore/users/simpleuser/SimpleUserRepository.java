package lt.judalabiau.BookStore.users.simpleuser;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SimpleUserRepository extends CrudRepository<SimpleUser, Long> {
}
    