package lt.judalabiau.BookStore.users;

import lt.judalabiau.BookStore.users.User;
import lt.judalabiau.BookStore.users.create.CreateAdminCommand;
import lt.judalabiau.BookStore.users.create.CreateUserCommand;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
@DiscriminatorValue(value = "ADMINISTRATOR")
public class Administrator extends User{

    public Administrator() {
    }
    public Administrator(CreateAdminCommand createAdminCommand) {
        super(createAdminCommand);
        this.setPhone(createAdminCommand.getPhone());
    }
}
    