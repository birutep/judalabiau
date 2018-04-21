package lt.judalabiau.BookStore.users;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

     boolean existsByEmail(@Param("email") String email);
     User getFirstById(Long id);
}
