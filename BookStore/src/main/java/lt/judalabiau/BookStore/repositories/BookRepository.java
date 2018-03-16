package lt.judalabiau.BookStore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.judalabiau.BookStore.models.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long> {

}
