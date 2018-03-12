package lt.judalabiau.BookStore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.judalabiau.BookStore.models.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
