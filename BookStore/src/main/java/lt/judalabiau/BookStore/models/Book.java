package lt.judalabiau.BookStore.models;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column
	private String title;

	@Column
	private Date releaseDate;

	@Column
	private int isbn;

	@Column
	private BigDecimal price;

	@Column
	private String description;

	@Column
	private String photopath;

	@Column
	private int count;

	@Column
	private double rating; // Count stars

	@Column
	private int ratingCount; // How many voters voted

	@Column
	private boolean eAvailable;

	@Column
	private String category;

	@ManyToMany
	@JoinTable(name = "author_book", joinColumns = @JoinColumn(name = "book_id"), inverseJoinColumns = @JoinColumn(name = "author_id"))
	private Set<Author> authors = new HashSet<>();

	public Book() {
		super();
	}

	public Book(Long id, String title, Date releaseDate, int isbn, BigDecimal price, String description,
			String photopath, int count, double rating, int ratingCount, boolean eAvailable, String category,
			Set<Author> authors) {
		super();
		this.id = id;
		this.title = title;
		this.releaseDate = releaseDate;
		this.isbn = isbn;
		this.price = price;
		this.description = description;
		this.photopath = photopath;
		this.count = count;
		this.rating = rating;
		this.ratingCount = ratingCount;
		this.eAvailable = eAvailable;
		this.category = category;
		this.authors = authors;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

	public int getIsbn() {
		return isbn;
	}

	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPhotopath() {
		return photopath;
	}

	public void setPhotopath(String photopath) {
		this.photopath = photopath;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public int getRatingCount() {
		return ratingCount;
	}

	public void setRatingCount(int ratingCount) {
		this.ratingCount = ratingCount;
	}

	public boolean iseAvailable() {
		return eAvailable;
	}

	public void seteAvailable(boolean eAvailable) {
		this.eAvailable = eAvailable;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Set<Author> getAuthors() {
		return authors;
	}

	public void setAuthors(Set<Author> authors) {
		this.authors = authors;
	}
	
	

}
