import React, { Component } from 'react';
import BookRegForm from './components/book_reg_form/BookRegForm';
import Wrap from './components/wrap/wrap'

class App extends Component {
  render() {
    return (
      <Wrap>
            <BookRegForm/>
      </Wrap>
    );
  }
}

export default App;
