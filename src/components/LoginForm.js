import React from "react";
import styles from './LoginForm.module.css'

export default class LoginForm extends React.Component{
    constructor(props){
        super()

    }

    render(){
        return <div>
            <form className={styles.form}>
                <label className={styles.label} htmlFor="username">Name</label>
                <input className={styles.input} name="username" />

                <label className={styles.label} for="password">Password</label>
                <input className={styles.input} name="password" />
                <button className={styles.submit} type="submit">Submit</button>
            </form>
        </div>
    }

    
}