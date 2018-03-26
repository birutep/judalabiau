package lt.judalabiau.BookStore.users.administrator;

import lt.judalabiau.BookStore.users.user.User;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class Administrator extends User
{
    @NotNull
    private Integer phone;

    public Administrator() { }

    public Integer getPhone() { return phone; }

    public void setPhone(Integer phone) { this.phone = phone; }


}
    