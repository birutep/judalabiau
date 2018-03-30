package lt.judalabiau.BookStore.users;



import lt.judalabiau.BookStore.users.create.CreateUserCommand;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "USER", discriminatorType = DiscriminatorType.STRING)
public abstract class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fName;
    private String lName;
    private String email;
    private String password;
    private Long phone;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id")
    private Role role;

    public User() {
    }

    public User(CreateUserCommand createUserCommand) {
        this.fName = createUserCommand.getfName();
        this.lName = createUserCommand.getlName();
        this.email = createUserCommand.getEmail();
        this.password = createUserCommand.getPassword();
        this.role = createUserCommand.getRole();
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
    