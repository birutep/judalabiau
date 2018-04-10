import React, { Component } from "react";
import axios from "axios/index";


const LoginForm = ({email, pass, onPassChange, onEmailChange, onSubmit},
    context) => {
    return <form onSubmit={onSubmit}>
    <input type="text" value={email} onChange={onEmailChange}/>
    <input type="password" value={pass} onChange={onPassChange}/>
    <input type="submit"/>
    </form>;}




export default LoginForm;