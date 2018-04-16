package lt.judalabiau.BookStore.users;

import lt.judalabiau.BookStore.users.dto.UserDTO;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@DiscriminatorValue("CUSTOMER")
public class Customer extends User {

    @NotNull
    @Temporal(value = TemporalType.DATE)
    private Date birthday;
    private String address;
    private long phone;

    public Customer() {
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

    public long getPhone() {
        return phone;
    }
    public void setPhone(long phone) {
        this.phone = phone;
    }
}
    