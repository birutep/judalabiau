package lt.judalabiau.BookStore.users;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("SALESMAN")
public class Salesman extends User{
    public Salesman() {
    }

    public Salesman(CreateUserCommand cmd) {
        super(cmd);
        this.setPhone(cmd.getPhone());
    }
}

