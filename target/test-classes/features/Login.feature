Feature: Login to Banking domain
Scenario: Login with valid credentials
Given User opens Bank Application
When User enters valid credentials "userName" and "password"
Then User will be able to login successfuly
And Cards displayed are "true"

Scenario: Login with valid new credentials
Given User opens Bank Application
When User enters valid credentials "userName_2" and "password_2"
Then User will be able to login successfuly
And Cards displayed are "false"