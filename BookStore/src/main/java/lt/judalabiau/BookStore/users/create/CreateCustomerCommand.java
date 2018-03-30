package lt.judalabiau.BookStore.users.create;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.util.Date;

public class CreateCustomerCommand extends CreateUserCommand{
    @NotNull
    @Past
    private Date birthday;

    private String address;

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
