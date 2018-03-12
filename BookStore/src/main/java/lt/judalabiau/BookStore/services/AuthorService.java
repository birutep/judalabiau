package lt.judalabiau.BookStore.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.judalabiau.BookStore.models.Author;
import lt.judalabiau.BookStore.repositories.AuthorRepository;

@Service
public class AuthorService {

	@Autowired
	private AuthorRepository authorRepository;

	@Transactional
	public List<Author> getAuthor() {
		return authorRepository.findAll();
	}

	@Transactional
	public void createAuthor(Author author) {
		authorRepository.save(author);
	}

	@Transactional
	public void deleteAuthor(Long id) {
		authorRepository.deleteById(id);
	}

	@Transactional
	public void updateAuthor(Long id, Author author) {
		authorRepository.save(author);
	}
}
