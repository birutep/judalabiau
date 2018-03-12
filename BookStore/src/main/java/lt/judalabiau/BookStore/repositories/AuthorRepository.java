package lt.judalabiau.BookStore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.judalabiau.BookStore.models.Author;

public interface AuthorRepository extends JpaRepository<Author, Long>{

}
