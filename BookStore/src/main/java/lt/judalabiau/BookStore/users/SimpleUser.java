package lt.judalabiau.BookStore.users;

import lt.judalabiau.BookStore.users.User;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.util.Date;

@Entity
@DiscriminatorValue("USER")
public class SimpleUser extends User {

    @Temporal(value = TemporalType.DATE)
    @Past
    @NotNull
    private Date birthday;

    private String address;
    private Long phone;

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

    public Long getPhone() {
        return phone;
    }
    public void setPhone(Long phone) {
        this.phone = phone;
    }
}
    