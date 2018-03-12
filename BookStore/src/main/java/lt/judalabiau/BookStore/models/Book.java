package lt.judalabiau.BookStore.models;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

	
	
}
