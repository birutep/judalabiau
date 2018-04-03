package lt.judalabiau.BookStore.users;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Role {
    @Id
    private Long id;

    private String roleName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "role")
    private Set<User> users = new HashSet<>();

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }
    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }


}