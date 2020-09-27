import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Chart} from 'primereact/chart';

import './HomePage.css';

const chartData = {
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726"
            ],
            hoverBackgroundColor: [
                "#64B5F6",
                "#81C784",
                "#FFB74D"
            ]
        }
    ]
};
class HomePage extends React.Component<{},{}>{
    
    render(){
        return(
           <div>
               <div>
                   <p className = "CenterText">Here is the graphs</p>
                   <div>
                        <Chart type="pie" data={chartData}/>
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
                        <Button className="ButtonSpacing"> Submit </Button>   
                    </Form>
               </div>
           </div>
        )
    }
}
export default HomePage;