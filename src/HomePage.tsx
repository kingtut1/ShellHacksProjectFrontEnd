import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Chart } from 'primereact/chart';
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'reactstrap';


import './HomePage.css';

const chartData = {
    labels: ['Entertainment', 'Shopping', 'Travel', 'Food and Drinks'],
    datasets: [
        {
            label: 'This Month',
            data: [103.5, 105.50, 89.28, 95.50],
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
let basicOptions = {
    legend: {
        labels: {
            fontColor: '#495057'
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                fontColor: '#495057'
            }
        }],
        yAxes: [{
            ticks: {
                fontColor: '#495057'
            }
        }]
    }
};
class HomePage extends React.Component<{}, {}>{

    render() {
        return (
            <div>
                <CardDeck>
                    <Card>
                        <p className="CenterText">This week</p>
                        <Chart type="bar" data={chartData} options={basicOptions} />
                    </Card>

                <Card>
                <div className="InputArea">
                    <p className="CenterText">Monthly Input</p>
                    <Form>
                        <Form.Group>
                            <p className="CenterText">Spending</p>
                            <Form.Control placeholder="Spending" />
                            <p className="CenterText">Debts</p>
                            <Form.Control placeholder="Debts" />
                            <p className="CenterText">Savings/Investments</p>
                            <Form.Control placeholder="Savings/Investments" />
                        </Form.Group>
                        <Button className="ButtonSpacing"> Submit </Button>
                    </Form>
                </div>
                </Card>
                </CardDeck>

            </div>
        )
    }
}
export default HomePage;