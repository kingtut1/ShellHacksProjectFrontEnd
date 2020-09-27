import React from 'react';
import './InsightsPage.css'
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import { Chart } from 'primereact/chart';
import { CardDeck } from 'reactstrap';

const chartData = {
    labels: ['Entertainment', 'Shopping', 'Travel', 'Food and Drinks'],
    datasets: [
        {
            data: [103.5, 105.50, 89.28, 85.50],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726",
                "red"
            ],
            hoverBackgroundColor: [
                "#64B5F6",
                "#81C784",
                "#FFB74D",
                "red"
            ]
        }
    ]
};
const chartData2 = {
    labels: ['Entertainment', 'Shopping', 'Travel', 'Food and Drinks'],
    datasets: [
        {
            data: [25, 20, 35, 40],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726",
                "red"
            ],
            hoverBackgroundColor: [
                "#64B5F6",
                "#81C784",
                "#FFB74D",
                "red"
            ]
        }
    ]
};

class InsightPage extends React.Component<{}, {}>
{
    render() {
        return (
            <div className="InsightsArea">
                <h1> Insights </h1>
                <hr></hr>
                <CardDeck>
                    <Card style={{ width: '20%' }}>
                        <Card.Body>
                            <Card.Title>This is your Spending for this month</Card.Title>
                            <br>
                            </br>
                            <Card.Subtitle>Total amount spent: $356.78</Card.Subtitle>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Card.Text>
                                <ul>
                                    <li> Entertainment: <em>$103.50</em></li>
                                    <li> Shopping: <em>$105.50</em></li>
                                    <li> Travel and Transportation: <em>$89.28</em></li>
                                    <li> Food and Drinks: <em>$85.50</em></li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '80%' }}>
                        <Card.Body>
                            <Card.Title>A closer look at your spending this month</Card.Title>
                            <Chart type="pie" data={chartData} />
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br></br>
                <Card>
                    <Card.Title>Your spending in the past six months</Card.Title>
                    <Chart type="pie" data={chartData2} />

                </Card>
                
            </div>
        )
    }
}
export default InsightPage;