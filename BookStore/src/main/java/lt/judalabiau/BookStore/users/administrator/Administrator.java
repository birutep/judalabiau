package lt.judalabiau.BookStore.users.administrator;

import lt.judalabiau.BookStore.users.user.User;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class Administrator extends User
{
    @NotNull
    private String phone;

    public Administrator() { }

    public String getPhone() { return phone; }

    public void setPhone(String phone) { this.phone = phone; }


}
    