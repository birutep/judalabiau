package lt.judalabiau.BookStore.users.salesman;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesmanRepository extends CrudRepository<Salesman, Long> {
}
    