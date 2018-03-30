package lt.judalabiau.BookStore.users.create;

import lt.judalabiau.BookStore.users.Role;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public abstract class CreateUserCommand {
    @NotNull
    @Size(min = 1, max = 254, message = "Vartotojo vardas privalo būti nuo {min} iki {max} simbolių ilgio.")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Vartotojo vardo simboliais gali būti tik raidės arba skaičiai")
    private String fName;

    @NotNull
    @Size(min = 1, max = 254, message = "Vartotojo pavardė privalo būti nuo {min} iki {max} simbolių ilgio.")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Vartotojo vardo simboliais gali būti tik raidės arba skaičiai")
    private String lName;

    @NotNull
    @Size(min = 6, max = 254, message = "Slaptažodis privalo būti nuo {min} iki {max} simbolių ilgio.")
    private String password;

    @NotNull
    @Size(min = 3, max = 254, message = "Vartotojo elektroninis pa6tas privalo būti nuo {min} iki {max} simbolių ilgio.")
    @Pattern(regexp = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message = "toks elektroninis pa6tas negalimas")
    private String email;

    @NotNull
    private Role role;

    public String getfName() {
        return fName;
    }
    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }
    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }
    public void setRole(Role role) {
        this.role = role;
    }
}
