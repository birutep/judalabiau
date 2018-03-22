package lt.judalabiau.BookStore.books;

import org.hibernate.validator.constraints.Range;

import java.math.BigDecimal;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

    @NotNull
	private String title;

	@Range(min = 1, max = 9999)
    private Integer releaseYear;

    @NotNull
	private String isbn;

    @NotNull
	private BigDecimal price;

    @Lob
	private String description;
    @Lob
	private String photopath;		//guru keliui naudoja Byte[]

	@NotNull
    private Long count;

	private Double rating; // Count stars
	private Integer ratingCount; // How many voters voted
	private Boolean eAvailable;

	@NotNull
	private String category;

    @NotNull
	private String authors;

	public Book() {
        this.title = "title";
        this.isbn = "default isbn";
        this.price = new BigDecimal(-1);
        this.count = 0L;
        this.authors = "default author";
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

	public Integer getReleaseYear() {
		return releaseYear;
	}
	public void setReleaseYear(Integer releaseYear) {
		this.releaseYear = releaseYear;
	}

	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
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

	public Long getCount() {
		return count;
	}
	public void setCount(Long count) {
		this.count = count;
	}

	public Double getRating() {
		return rating;
	}
	public void setRating(Double rating) {
		this.rating = rating;
	}

	public Integer getRatingCount() {
		return ratingCount;
	}
	public void setRatingCount(Integer ratingCount) {
		this.ratingCount = ratingCount;
	}

	public Boolean geteAvailable() {
		return eAvailable;
	}
	public void seteAvailable(Boolean eAvailable) {
		this.eAvailable = eAvailable;
	}

	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}

	public String getAuthors() {
		return authors;
	}
	public void setAuthors(String authors) {
		this.authors = authors;
	}
}
