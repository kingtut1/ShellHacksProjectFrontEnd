# Shell Hacks 2020
This project was created during a 36 hour hackathon at FIU. 

Our goal was to promote financial literacy since, COVID-19 has left millions unemployed and with uncertain financial future. We believe that by promoting financial literacy through an easy to use and insightful web-application we can serve the communities most affected. We plan to accomplish this by creating a picture of your financial health so users can improve their financial literacy. We noticed that many affected people might want to know how they can minimize their spending due to these times. 

## Login Page
Allows the user to log into the application. 

## Create Account Page
We ask for basic information and then we ask for their monthly income, total debt along with other questions about their ideal spending distributions. If the user doesn’t know we use the pre populated 20, 10, 70 rule. We then use the information they input monthly to track their spending across time and compare to the ideal budgeting rule to give them an idea on how well they are working toward their goal.

## Home Page
The homepage provides a dashboard of their current spending this month which is updated manually by the user. Of course, in the future this could be auto updated if we configure bank account api’s. We used prime react bar graphs to showcase to the user how much they’ve been spending on specific categories. In the future we also plan to aggregate these categories by needs and wants to further simplify spending and incentives better spending habits. 
![Home Page](\src\shellhacksHOME.JPG)

## Insights Page
The insights page will give the user a more indepth view of their spendings. Many times I have wondered where my money went last month I had x amount left over. This page plans to tackle that problem by giving you access to previous months spendings. We plan on adding a feature where we suggest plans of action for you so, that you get a better understanding of some financial moves you can make.
![Insights Page](\src\shellhacksINSIGHTS.JPG)

## Settings Page
The settings page was built to be able to modify user preferences or information. The page should accept input from the user and set those values in the database. The page asks you for your Monthly income, Total Debt, what percentage of your income the user wants to spend ideally on debt, and allows the user to change their password. Most of this information was required during account creation.
