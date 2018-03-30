package lt.judalabiau.BookStore.users;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@Entity
@DiscriminatorValue("CUSTOMER")
public class Customer extends User {

    @Temporal(value = TemporalType.DATE)
    private Date birthday;
    private String address;

    public Customer() {
    }

    public Customer(CreateUserCommand cmd) {
        super(cmd);
        this.setPhone(cmd.getPhone());
        this.setBirthday(cmd.getBirthday());
        this.setAddress(cmd.getAddress());
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
    