import React, { Component } from 'react'
import {Prompt} from 'react-router-dom';
class Contact extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false
        }
    }
    onChecked = (condition) => {
        this.setState({
            isChecked: condition
        })
    }
    render() {
        let {isChecked} = this.state
        return (
            <div>
                <h1>Contact</h1>
                <button type="button" class="btn btn-primary" onClick = {() => this.onChecked(false)}>Allow</button><br/><br/>
                <button type="button" class="btn btn-danger" onClick ={() => this.onChecked(true)}>Don't Allow</button>
                <Prompt
                    when={isChecked}
                    message = {location => (`Are you sure want to come ${location.pathname}`)}
                />
           </div>
        )
    }
}
export default Contact
