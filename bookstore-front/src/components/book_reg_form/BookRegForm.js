import React, { Component } from 'react';
import './BookRegForm.css';

class BookRegForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pavadinimas: '',
        metai: '', 
        kategorija: '',
        aprasymas: ''
      };   
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleYearChange = this.handleYearChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      
      this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleTitleChange(event) {
                this.setState({pavadinimas: event.target.value});
      }

     handleYearChange(event) {
                this.setState({metai: event.target.value});
     }
  
    handleCategoryChange(event) {
                this.setState({kategorija: event.target.value});
     }
  
    handleDescriptionChange(event) {
                this.setState({aprasymas: event.target.value});
     }
  
  
     handleSubmit(event) {
          alert('A book was registered in BookStore: ' + this.state.pavadinimas);
          event.preventDefault();
     }

      render() {
        return (
          <form className='BookRegForm' onSubmit={this.handleSubmit}>
            <label>
              Knygos pavadinimas:
              <input name="pavadinimas" type="text" value={this.state.pavadinimas} onChange={this.handleTitleChange} />
            </label>
            <br/>
            <label>
               Leidimo metai:
               <input name="metai" type="text" value={this.state.metai} onChange={this.handleYearChange} />
             </label> 
             <br/>
             <label>
          Kategorija:
          <select name="kategorija" value={this.state.kategorija} onChange={this.handleCategoryChange}>
            <option value="vaikams">Vaikams</option>
            <option value="meiles">Meilės romanas</option>
            <option value="detektyvinis">Detektyvinis romanas</option>
            <option value="biografinis">Biografinis romanas</option>
          </select>
        </label> 
            <br/>
            <label>
               Aprašymas:
               <textarea name="aprasymas" value={this.state.aprasymas} onChange={this.handleDescriptionChange} />
             </label> 
             <br/>
            <input type="submit" value="Registruoti" />
          </form>
        );
      }

}

export default BookRegForm;