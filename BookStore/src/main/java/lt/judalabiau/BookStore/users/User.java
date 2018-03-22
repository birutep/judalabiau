package lt.judalabiau.BookStore.users;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Date;

@Entity
public abstract class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    private String username;
    @NotEmpty
    private String firstName;
    @NotEmpty
    private String lastName;

    /**
     * Gimtadienio laukas yra komentuojamas naudojant "@Past" apribojimą,
     * kuris užtikrina, kad gimtadienio data turi būti praeityje.
     */
    @Temporal(value = TemporalType.DATE)
    @Past
    private Date birthday;

    private String companyName;
    private int companyNo;
    private int vatNo;

    private String branchName;
    private String address;
    private String registeredAddress;

    /**
     * Validacija neleis įvesti neteisingą adresą.
     * El. Pašto lauke yra @Pattern apribojimas su sudėtinga reguliaraus išraiškos,
     * atitinkančios galiojančius el. Pašto adresus.
     * Jei el. Pašto reikšmė neatitinka šios įprastinės išraiškos,
     * bus išduota patvirtinimo klaida.
     * Nuoroda čia: https://docs.oracle.com/cd/E19798-01/821-1841/gkahq/index.html
     */
    @Pattern(regexp = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\."
            + "[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@"
            + "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
            message = "{invalid.email}")
    private String email;

    private String mobilePhone;

    @AssertTrue
    private boolean active;

    @NotEmpty
//    @ValidPassword Atkomentavus prašo prideti maven dependency. Palieku Birutei.
    private String password;

    @NotEmpty
    private String passwordHash;

    @NotNull
    private int roleId;


    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public int getCompanyNo() {
        return companyNo;
    }

    public void setCompanyNo(int companyNo) {
        this.companyNo = companyNo;
    }

    public int getVatNo() {
        return vatNo;
    }

    public void setVatNo(int vatNo) {
        this.vatNo = vatNo;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getRegisteredAddress() {
        return registeredAddress;
    }

    public void setRegisteredAddress(String registeredAddress) {
        this.registeredAddress = registeredAddress;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }
}
    