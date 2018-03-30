package lt.judalabiau.BookStore.users;

import lt.judalabiau.BookStore.users.User;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
@DiscriminatorValue(value = "ADMINISTRATOR")
public class Administrator extends User{

}
    