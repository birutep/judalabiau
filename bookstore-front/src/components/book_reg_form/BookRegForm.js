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
        alert('A book was registered in BookStore: ' + this.state.title);
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

    saveBook() {
        axios.post('http://localhost:8080/addbook', {
            title: this.state.title,
            released: this.state.released,
            isbn: this.state.isbn,
            price: this.state.price,
            category: this.state.category,
            count: this.state.count,
            e_available: this.state.e_available,
            photopath: this.state.photopath,
            description: this.state.description
        })
            .then(() => {
                console.log("SIUNČIAM SIGNALĄ PER REDUX (AR KITĄ VELNIĄ), KAD ATNAUJINTŲ LISTĄ");
                this.setState({title: '',
                    released: '',
                    isbn: '',
                    price: '',
                    category: '',
                    count: '',
                    e_available: this.state.e_available,
                    photopath: '',
                    description: ''});
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <form className='BookRegForm' onSubmit={this.handleSubmit}>
                <label>
                    Knygos pavadinimas:
                    <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
                </label>
                <br/>

                <label>
                    Leidimo metai:
                    <input name="released" type="text" value={this.state.released} onChange={this.handleChange}/>
                </label>
                <br/>

                <label>
                    ISBN:
                    <input name="isbn" type="text" maxLength="13" value={this.state.isbn} onChange={this.handleChange}/>
                </label>
                <br/>

                <label>
                    Kaina:
                    <input name="price" type="text" value={this.state.price} onChange={this.handleChange}/>
                </label>
                <br/>

                <label>
                    Kategorija:
                    <select name="category" value={this.state.category} onChange={this.handleChange}>
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
                    <input name="count" type="text" value={this.state.count} onChange={this.handleChange}/>
                </label>
                <br/>

                <label>
                    Elektroninė knyga:
                    {/* http://react.tips/radio-buttons-in-reactjs/ */}
                    <input name="e_available" type="checkbox" onChange={this.handleCheckbox}/>
                </label>
                <br/>
                {/* RADIO BUTTON AS BOOLEAN ??? */}
                {/*
          <RadioGroup
            name="e_available"
            value={this.state.e_available} onChange={this.handleChange}
            value={this.props.e_available.size}
            options={[
              {label: "yes", value: "yes"},
              {label: "no", value: "no"},
            ]}
            OnChange={this.handleChange}
          /> */}
                <label>
                    {/* https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications */}
                    Viršelio nuotrauka:
                    {/* <input name="photopath" type="file" ref={input => {this.fileInput = input;}} value={this.state.photopath} onChange={this.handleChange} /> */}
                    <input name="photopath" type="file" value={this.state.photopath} onChange={this.handleChange}/>
                </label>
                <br/>

                <label>
                    Aprašymas:
                    <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
                </label>
                <br/>

                <input type="submit" value="Registruoti" onClick={this.saveBook}/>
            </form>
        );
    }

}

export default BookRegForm;