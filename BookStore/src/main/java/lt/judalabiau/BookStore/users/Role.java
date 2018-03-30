package lt.judalabiau.BookStore.users;


import javax.persistence.*;

@Entity
public class Role {
    @Id
    private Long id;

    private String roleName;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "role")
    private User user;

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