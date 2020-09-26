import React from 'react';
import Form from 'react-bootstrap/Form';

import './HomePage.css';

class HomePage extends React.Component<{},{}>{
    render(){
        return(
           <div>
               <div>
                   <p className = "CenterText">Here is the graphs</p>
                   <div>
                       
                   </div>
               </div>
               <div className = "InputArea">
                   <p className = "CenterText">Monthly Input</p>
                   <Form>
                        <Form.Group>
                            <p className = "CenterText">Spending</p>
                            <Form.Control placeholder="Spending" />
                            <p className = "CenterText">Debts</p>
                            <Form.Control placeholder="Debts" />
                            <p className = "CenterText">Savings/Investments</p>
                            <Form.Control placeholder="Savings/Investments" />
                        </Form.Group>
                    </Form>
               </div>
           </div>
        )
    }
}
export default HomePage;