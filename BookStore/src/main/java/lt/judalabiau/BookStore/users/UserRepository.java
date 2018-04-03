package lt.judalabiau.BookStore.users;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    public boolean existsByEmail(@Param("email") String email);
    
    public Optional<User> findByEmail(String email);
}
