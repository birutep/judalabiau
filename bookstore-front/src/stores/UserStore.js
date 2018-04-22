import { observable, action, computed } from "mobx";

class UserStore {
    @observable changed = false;
    @observable
    userToEdit = {
        fName: "",
        lName: "",
        email: "",
        phone: "",
        role: "",
        id: ""
    };

    @action
    changeState = () => {
        this.changed = !this.changed;
    };

    @action
    editUser = user => {
        this.userToEdit.fName = user.fName;
        this.userToEdit.lName = user.lName;
        this.userToEdit.email = user.email;
        this.userToEdit.phone = user.phone;
        this.userToEdit.role = user.role;
        this.userToEdit.dateOfBirth = user.dateOfBirth;
        this.userToEdit.id = user.id;
    };

    @computed
    get watchChanged() {
        return this.changed;
    }
}

const store = new UserStore();

export default store;
