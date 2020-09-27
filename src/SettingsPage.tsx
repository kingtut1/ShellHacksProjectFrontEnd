import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SettingsPage.css';


class SettingsPage extends React.Component< {}, {}>
{
    render()
    {
        return(
           <div>
               <div className = "InputArea">
                   <p className = "CenterText">Welcome To Your Settings</p>
                   <Form>
                        <Form.Group>
                            <p className = "CenterText">Monthly Income</p>
                            <Form.Control placeholder="Please Enter Your Montly Income..." />
                            <p className = "CenterText">Total Debt</p>
                            <Form.Control placeholder="Please Enter Your Updated Total Debt..." />
                            <p className = "CenterText">Change Password</p>
                            <Form.Control placeholder="Enter Your New Password..." />
                            <p className = "CenterText">What percentage of your income do you want to spend ideally on debt?</p>
                            <Form.Control placeholder="Enter Your Ideal Debt Coverage Monthly Here..." />
                        </Form.Group>
                        <Button className="ButtonSpacing"> Submit </Button>    
                    </Form>
               </div>
           </div>
        )
    }
}

export default SettingsPage;