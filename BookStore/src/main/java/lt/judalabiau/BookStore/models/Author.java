package lt.judalabiau.BookStore.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
public class Author {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column
	private String name;

	@Column
	private String surname;

	@Column
	@Temporal(TemporalType.DATE)
	private Date birthDate;

	@Column
    @Temporal(TemporalType.DATE)
	private Date deathDate;

	@Column
	private String biography;

	@ManyToMany(mappedBy = "authors")
	private Set<Book> books = new HashSet<>();

	public Author() {
		super();
	}

	public Author( String name, String surname, Date birthDate, Date deathDate, String biography,
			Set<Book> books) {
		super();
		this.name = name;
		this.surname = surname;
		this.birthDate = birthDate;
		this.deathDate = deathDate;
		this.biography = biography;
		this.books = books;
	}

    public Author(String name, String surname, Date birthDate, String biography,
                  Set<Book> books) {
        super();
        this.name = name;
        this.surname = surname;
        this.birthDate = birthDate;
        this.deathDate = null;
        this.biography = biography;
        this.books = books;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public Date getDeathDate() {
		return deathDate;
	}

	public void setDeathDate(Date deathDate) {
		this.deathDate = deathDate;
	}

	public String getBiography() {
		return biography;
	}

	public void setBiography(String biography) {
		this.biography = biography;
	}

	public Set<Book> getBooks() {
		return books;
	}

	public void setBooks(Set<Book> books) {
		this.books = books;
	}
	
	
}
