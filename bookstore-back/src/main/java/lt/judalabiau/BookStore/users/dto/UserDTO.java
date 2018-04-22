package lt.judalabiau.BookStore.users.dto;

import lt.judalabiau.BookStore.users.Role;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Date;

public class UserDTO {
    private Long id;
    //bendri laukai
    @NotNull
    @Size(min = 1, max = 254, message = "Vartotojo vardas privalo būti nuo {min} iki {max} simbolių ilgio.")
    @Pattern(regexp = "^[a-zA-ZĀ-ž\\s]+$", message = "Vartotojo vardo simboliais gali būti tik raidės.")
    private String fName;

    @NotNull
    @Size(min = 1, max = 254, message = "Vartotojo pavardė privalo būti nuo {min} iki {max} simbolių ilgio.")
    @Pattern(regexp = "^[a-zA-ZĀ-ž\\s]+$", message = "Vartotojo vardo simboliais gali būti tik raidės.")
    private String lName;

    @NotNull
    @Size(min = 6, max = 254, message = "Slaptažodis privalo būti nuo {min} iki {max} simbolių ilgio.")
    private String password;

    @NotNull
    @Size(min = 3, max = 254, message = "Vartotojo elektroninis paštas privalo būti nuo {min} iki {max} simbolių ilgio.")
    @Pattern(regexp = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message = "toks elektroninis paštas negalimas")
    private String email;

    @NotNull
    private Long role;
//atskiri laukai
    private Long phone;//privalomi tik adminui ir pardavejui
    private Date birthday;//privalomas tik pirkejui
    private String address;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

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

    public Long getRole() {
        return role;
    }
    public void setRole(Long role) {
        this.role = role;
    }

    public Long getPhone() {
        return phone;
    }
    public void setPhone(Long phone) {
        this.phone = phone;
    }

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

    @Override
    public String toString() {
        return "UserDTO{" +
                "id=" + id +
                ", fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", role=" + role +
                ", phone=" + phone +
                ", birthday=" + birthday +
                ", address='" + address + '\'' +
                '}';
    }
}
