import React, {Component} from 'react';
import './BookRegForm.css';
import axios from "axios/index";

class BookRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            released: '',
            isbn: '',
            price: '',
            category: '',
            count: '',
            e_available: false,
            photopath: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.saveBook = this.saveBook.bind(this);

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleCheckbox() {
        this.setState({e_available: !this.state.e_available});
    }

    handleSubmit(event) {

      alert('"' + this.state.title + '" užregistruota Knygų parduotuvėje.' );
          event.preventDefault();
          // alert(
          //   `Selected file - ${this.fileInput.files[0].name}`
          // );
          
          // const data = new FormData(event.target);
          // fetch('/api/book-reg-form-submit-url', {
          //   method: 'POST',
          //   body: data,
          // });
     }

     
    render() {
        return (
        <div  className={BookRegFormCss.book_reg_form}>
          <h4><i className="fa fa-book"/> &nbsp; Knygų parduotuvė</h4>
        <form onSubmit={this.handleSubmit}>
          <h3>Naujos knygos registravimas</h3>
           <label>
              Knygos pavadinimas:
              <input name="title" placeholder="Įveskite knygos pavadinimą" className={BookRegFormCss.placeholder} required type="text" value={this.state.title} onChange={this.handleChange} />
            </label>
            <br/>

            <label>
              Autorius:
              <input name="author" placeholder="Įveskite autoriaus vardą ir pavardę arba slapyvardį" className={BookRegFormCss.placeholder} required type="text" value={this.state.author} onChange={this.handleChange} />
            </label>
            <br/>

            <label>
               Leidimo metai:
               <input name="released" placeholder="Įveskite knygos leidimo metus" className={BookRegFormCss.placeholder} type="text" pattern="[0-9]*" minLength="4" maxLength="4"  value={this.state.released} onChange={this.handleChange} />
            </label> 
            <br/>

            <label>
               ISBN:
               <input name="isbn" placeholder="Įveskite ISBN" className={BookRegFormCss.placeholder} required type="text" minLength="10" maxLength="13" value={this.state.isbn} onChange={this.handleChange} />
            </label> 
            <br/>

            <label>
               Kaina:
               <input name="price" placeholder="Įveskite kainą" className={BookRegFormCss.placeholder} required type="text" pattern="\d+?\.\d{2}\s*?$|0" value={this.state.price} onChange={this.handleChange} />
            </label> 
            <br/>

            <label>
              Kategorija:
              <select name="category" required value={this.state.category} onChange={this.handleChange}>
                <option value="" disabled> -- pasirinkite kategoriją -- </option>
                <option value="apsakymai">Apsakymas</option>
                <option value="biografinis">Biografija, autobiografija</option>
                <option value="detektyvinis">Detektyvinis romanas</option>
                <option value="ese">Esė, publicistika</option>
                <option value="dienorasciai">Dienoraščiai, laiškai ir memuarai</option>
                <option value="fantastika">Fantastika</option>             
                <option value="istorinis">Istorinis romanas</option>
                <option value="klasika">Klasika</option>
                <option value="meiles">Meilės romanas</option>
                <option value="modernas">Modernioji literatūra</option>
                <option value="poezija">Poezija</option>
                <option value="siaubo">Siaubo romanas</option>
                <option value="vaikams">Vaikų literatūra</option>
              </select>
            </label> 
            <br/>

            <label>
               Likutis sandėlyje:
               <input name="count" placeholder="Įveskite kiekį" className={BookRegFormCss.placeholder} required pattern="[0-9]*" type="text" value={this.state.count} onChange={this.handleChange} />
            </label> 
            <br/> 

            <label>
               Elektroninė knyga:
              <input name="e_available" type="checkbox" value={this.state.e_available} onChange={this.handleChange} />
            </label> 
            <br/>

            <label>
               Viršelio nuotrauka:
               <input name="photopath" type="file" value={this.state.photopath} onChange={this.handleChange} />
            </label>
            <br/>

            <label>
               Aprašymas:
               <textarea name="description" value={this.state.description} onChange={this.handleChange} />
            </label> 
            <br/>

            <input type="submit" value="Registruoti" />
          </form>
        </div>
        );
    }

}

export default BookRegForm;