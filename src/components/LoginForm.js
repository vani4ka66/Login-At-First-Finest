import React from "react";
import './LoginForm.css'

export default class LoginForm extends React.Component{
    constructor(props){
        super()

    }

    render(){
        return <div>
            <form className="form">
                <label className="label" htmlFor="username">Name</label>
                <input className="input" name="username" />

                <label className="label" for="password">Password</label>
                <input className="input" name="password" />
                <button className="submit" type="submit">Submit</button>
            </form>
        </div>
    }

    
}