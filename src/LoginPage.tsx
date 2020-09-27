import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class LoginPage extends React.Component< any, any > {
    /*
    private userNameField = "";
    private handleChange(event: React.FormEvent<HTMLFormElement>){
        //this.setState({value: event.target.value});
        this.state = {
            userNameField: " ", 
            passwordField: " ",
        }
        if(event.target.value === "userNameField")
        {
            
        }
    }
    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    */
    render() {
        return (
            <div>
                <p> Logo Here </p>
                <div>
                </div>
                <div className="LoginArea">
                    <Form>
                        <Form.Group controlId = "formUserName">
                            <Form.Control placeholder="UserName" name = "usernameField" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" name = "passwordField" />
                        </Form.Group>
                        <Button className="ButtonSpacing" variant="primary" type="submit"> Sign In </Button>
                        <Button className="ButtonSpacing"> Create Account </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default LoginPage;