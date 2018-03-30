package lt.judalabiau.BookStore.users;



import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "USER_TYPE", discriminatorType = DiscriminatorType.STRING)
public abstract class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String fName;

    @NotNull
    private String lName;

    /**
     * Validacija neleis įvesti neteisingą adresą.
     * El. Pašto lauke yra @Pattern apribojimas su sudėtinga reguliaraus išraiškos,
     * atitinkančios galiojančius el. Pašto adresus.
     * Jei el. Pašto reikšmė neatitinka šios įprastinės išraiškos,
     * bus išduota patvirtinimo klaida.
     * Nuoroda čia: https://docs.oracle.com/cd/E19798-01/821-1841/gkahq/index.html
     */
    @Pattern(regexp = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\."
            + "[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@"
            + "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
            message = "{invalid.email}")
    private String email;

    @NotEmpty
    //@ValidPassword Atkomentavus prašo prideti maven dependency. Palieku Birutei.
    private String password;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id")
    private Role role;


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
}
    