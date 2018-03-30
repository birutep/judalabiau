package lt.judalabiau.BookStore.users;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(value = "ADMINISTRATOR")
public class Administrator extends User{

    public Administrator() {
    }
    public Administrator(CreateUserCommand cmd) {
        super(cmd);
        this.setPhone(cmd.getPhone());
    }
}
    