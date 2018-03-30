package lt.judalabiau.BookStore.users;

import lt.judalabiau.BookStore.users.User;
import lt.judalabiau.BookStore.users.create.CreateCustomerCommand;
import lt.judalabiau.BookStore.users.create.CreateUserCommand;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.util.Date;

@Entity
@DiscriminatorValue("CUSTOMER")
public class Customer extends User {

    @Temporal(value = TemporalType.DATE)
    private Date birthday;
    private String address;

    public Customer() {
    }

    public Customer(CreateCustomerCommand createCustomerCommand) {
        super(createCustomerCommand);
        this.setPhone(createCustomerCommand.getPhone());
        this.setBirthday(createCustomerCommand.getBirthday());
        this.setAddress(createCustomerCommand.getAddress());
    }

    public Date getBirthday() {
        return birthday;
    }
    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

}
    