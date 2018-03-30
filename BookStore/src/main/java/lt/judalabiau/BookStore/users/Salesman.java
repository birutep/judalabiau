package lt.judalabiau.BookStore.users;

import lt.judalabiau.BookStore.users.User;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
@DiscriminatorValue("SALESMAN")
public class Salesman extends User{

    @NotNull
    private Long phone;

    public Long getPhone() {
        return phone;
    }
    public void setPhone(Long phone) {
        this.phone = phone;
    }
}

