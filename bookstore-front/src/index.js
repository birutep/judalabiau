import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
//custom elements
import BookStore from "./stores/BookStore";
import App from './App';

//primereact
import 'primereact/resources/primereact.min.css';

const Root = (
    <Provider BookStore={BookStore}>
        <App/>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
