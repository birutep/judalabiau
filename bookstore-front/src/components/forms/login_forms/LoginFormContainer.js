import React from "react";
import axios from "axios";
import LoginForm from "./LoginForm";


axios.defaults.withCredentials = true;
class LoginFormContainer extends Component{

    onEmailChange=(event)=>{this.setState({email:event.target.value})}
    
    onPassChange=(event)=>{this.setState({pass:event.target.value})}
    
    onSubmit = (event) => {
        
        let userData = new URLSearchParams();
        userData.append('username', this.state.email);
        userData.append('password', this.state.pass);

        axios.post('http://localhost:8080/login', userData,
        {headers:{'Content-type':'application/x-www-form-urlencoded'}})
           //apsirasyti, kas buna, kai buna ok
           //gal yra kazkoks setAuthenticatedObj arba context Reacte, kuris laiko
           //info apie prisijungusi asmeni
            .then((response) => { /* login ok */ })
            .catch((e) => { console.log(e); });
            event.preventDefault();
    }

    render() {
        return <LoginForm email={this.state.email} pass={this.state.pass}
        onEmailChange={this.onEmailChange}
        onPassChange={this.onPassChange}
        onSubmit={this.onSubmit} />;
    }

    // onCalc = (event) => {
    //     axios.get('http://localhost:8080/calc?left=1&right=2')
    //     .then((response) => { console.log(response); })
    //     .catch((e) => { console.log(e); });
    //     event.preventDefault();
    // }

    // handleClick(event){
    //     axios.post("http://localhost:8080/username="+this.state.username+"&password="+this.state.password).then(function (response) {
    //       if(response.data.code === 200){
    //           window.location('http://localhost:8080/hello')
    //       } else {
    //         console.log(response.data.code);
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //     }



}
export default LoginFormContainer;