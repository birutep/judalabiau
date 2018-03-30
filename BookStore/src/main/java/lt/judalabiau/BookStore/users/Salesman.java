package lt.judalabiau.BookStore.users;

import lt.judalabiau.BookStore.users.User;
import lt.judalabiau.BookStore.users.create.CreateSalesmanCommand;
import lt.judalabiau.BookStore.users.create.CreateUserCommand;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
@DiscriminatorValue("SALESMAN")
public class Salesman extends User{
    public Salesman() {
    }

    public Salesman(CreateSalesmanCommand createSalesmanCommand) {
        super(createSalesmanCommand);
        this.setPhone(createSalesmanCommand.getPhone());
    }
}

