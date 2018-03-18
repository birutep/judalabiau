import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react';
import BookStore from "./stores/BookStore";

const Root = (
    <Provider BookStore={BookStore}>
        <App/>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
