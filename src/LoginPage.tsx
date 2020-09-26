import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class LoginPage {
    render() {
        return (
            <div>
                <p> Logo Here </p>
                <div>
                </div>
                <div className="LoginArea">
                    <Form>
                        <Form.Group>
                            <Form.Control placeholder="UserName" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
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