package lt.judalabiau.BookStore.models;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

    @NotNull
	private String title;

	private int releaseYear;

    @NotNull
	private String isbn;

    @NotNull
	private BigDecimal price;

	private String description;
	private String photopath;

    @NotNull
	private int count;

	private double rating; // Count stars
	private int ratingCount; // How many voters voted
	private boolean eAvailable;

	@NotNull
	private String category;

    @NotNull
	private String authors;

	public Book() {
        this.title = "title";
        this.releaseYear = 2018;
        this.isbn = "isbn----------------------";
        this.price = new BigDecimal(69.69);
        this.description = "description";
        this.photopath = "photopath";
        this.count = 69;
        this.rating = 0;
        this.ratingCount = 0;
        this.eAvailable = false;
        this.category = "category";
        this.authors = "authors";
	}

	public Book( String title, int releaseYear, String isbn, BigDecimal price, String description,
			String photopath, int count, double rating, int ratingCount, boolean eAvailable, String category,
			String authors) {

		this.title = title;
		this.releaseYear = releaseYear;
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

	public int getreleaseYear() {
		return releaseYear;
	}
	public void setreleaseYear(int releaseYear) {
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

    public String getAuthors() {
        return authors;
    }
    public void setAuthors(String authors) {
        this.authors = authors;
    }
}
