import React, { Component } from 'react';
import 'primereact/resources/primereact.min.css';
import {Dropdown} from '../../../../../node_modules/primereact/components/dropdown/Dropdown';

export class UserDropButton extends Component {
 
    constructor() {
        super();
        this.state = {
            user: null
        }


    };

    onUserChange(e) {
        this.setState({user: e.value});
    }

    render() {

        var users = [
            {name: "Administrator", code: "Admin"},
            {name: "Salesman", code: "Salesman"},
            {name: "Customer", code: "Cust" }
        ];

        return(
            <div style={{float: "left"}} >
            <div>This is UserDropDownMenu</div>
            <h3>Pasirinkite rolę</h3>

             <div className="content-section implementation">
             <Dropdown value={this.state.user} options={users} onChange={this.onUserChange} style={{width:'150px'}} placeholder="Pasirinkite vartotoją" />
             <div style={{marginTop: '.5em'}}>{this.state.user ? 'Selected User: ' + this.state.user.name : 'No user selected'}</div>
             </div>
            </div>
        );
    }
 }

export default UserDropButton;