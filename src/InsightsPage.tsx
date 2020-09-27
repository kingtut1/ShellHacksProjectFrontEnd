import React from 'react';
import './InsightsPage.css'

class InsightPage extends React.Component<{}, {}>
{
    render() {
        return (
            <div className="InsightsArea">
                <h1> Insights </h1>
                <div className="box">
                    <h5>This is your Spending for this month</h5>
                    <p> September 20, 2020</p>
                    <p> Total amount spent: <em>$356.78</em> </p>
                    <p> Spending by category: 
                        <ul>
                            <li> Entertainment: <em>$103.50</em></li>
                            <li> Shopping: <em>$105.50</em></li>
                            <li> Travel and Transportation: <em>$89.28</em></li>
                            <li> Food and Drinks: <em>$85.50</em></li>
                            
                        </ul>
                    </p>

                    
                </div>

                <div className="box">
                    <p>A closer look at your spending</p>
                    
                </div>
                <div className="box">
                    <p>These are your insights</p>
                </div>
                <div className="box">
                    <p>These are your insights</p>
                </div>
                <div className="box">
                    <p>These are your insights</p>
                </div>
                <div className="box">
                    <p>These are your insights</p>
                </div>


            </div>
        )
    }
}
export default InsightPage;