import {observable, action, computed} from 'mobx'

class BookStore {
    @observable changed = false;

    @action changeState = () => {
        this.changed = !this.changed;
    };

    @computed get watchChanged() {
        return this.changed;
    };
}

const store = new BookStore();

export default store;