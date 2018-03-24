package lt.judalabiau.BookStore.users.salesman;

import lt.judalabiau.BookStore.users.User;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class Salesman extends User {

    @NotNull
    private String phone;

    public Salesman() {
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
    