package lt.judalabiau.BookStore.users.salesman;

import lt.judalabiau.BookStore.users.User;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class Salesman extends User{

    @NotNull
    private Integer phone;

    public Integer getPhone() {
        return phone;
    }
    public void setPhone(Integer phone) {
        this.phone = phone;
    }
}

