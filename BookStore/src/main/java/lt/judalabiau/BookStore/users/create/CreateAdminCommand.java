package lt.judalabiau.BookStore.users.create;

import javax.validation.constraints.NotNull;

public class CreateAdminCommand extends CreateUserCommand {
    @NotNull
    private Long phone;

    public Long getPhone() {
        return phone;
    }
    public void setPhone(Long phone) {
        this.phone = phone;
    }
}
