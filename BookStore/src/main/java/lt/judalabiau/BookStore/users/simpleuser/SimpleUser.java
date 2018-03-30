package lt.judalabiau.BookStore.users.simpleuser;

import lt.judalabiau.BookStore.users.User;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.util.Date;

@Entity
public class SimpleUser extends User {

    @Temporal(value = TemporalType.DATE)
    @Past
    @NotNull
    private Date birthday;

    private String address;
    private String phone;

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

    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
}
    