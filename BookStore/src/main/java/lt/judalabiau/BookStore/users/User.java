package lt.judalabiau.BookStore.users;



import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "USER", discriminatorType = DiscriminatorType.STRING)
public abstract class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @NotEmpty
    @Size (max=20)
    private String fName;
    
    @NotNull
    @NotEmpty
    @Size (max=20)
    private String lName;
    
    @NotNull
    @NotEmpty
    @Email
    private String email;
    
    @NotNull
    @NotEmpty
    //uzdetos ribos, kad nebutu per trumpas, per ilgas.
    //BET kai reikes jau encryptinti passworda, turi column ilgis but atitinkamai pagal
    // encoderi. BCrypt berods naudoja 60 ilgio stringa. Tai encryptinant reik nepamirst!
    @Size (min=6, max=15)
    private String password;
    
    @NotNull
    private Long phone;

    @JsonIgnore
    //buvo pries tai FetchType.LAZY. Pakeiciau i EAGER, nes autentifikacijos
    //metu mesdavo su lazy iniciacija susijusia klaida (nes role User lenteleje yra tik kaip skaiciukas,
    //todel prie LAZY nesusieja to skaiciuko su realia role.
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "role_id")
    private Role role;

    public User() {
    }

    public User(CreateUserCommand createUserCommand) {
        this.fName = createUserCommand.getfName();
        this.lName = createUserCommand.getlName();
        this.email = createUserCommand.getEmail();
        this.password = createUserCommand.getPassword();
    }

    //BP: idejau tik du authentification reikalingus laukus (email,pass,role).
    //Jei kas nors neveikia su atpazinimu, vienas is zingsniu - pilnai uzpildyti ikrentancio userio laukus.
    public User(User user) {
		this.email=user.getEmail();
		this.password=user.getPassword();
		this.role=user.getRole();
	}

	public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getfName() {
        return fName;
    }
    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }
    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }
    public void setRole(Role role) {
        this.role = role;
    }

    public Long getPhone() {
        return phone;
    }
    public void setPhone(Long phone) {
        this.phone = phone;
    }
}
    