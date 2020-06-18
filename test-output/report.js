$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Banking domain",
  "description": "",
  "id": "login-to-banking-domain",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-to-banking-domain;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User opens Bank Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enters valid credentials \"userName\" and \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User will be able to login successfuly",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_opens_Bank_Application()"
});
formatter.result({
  "duration": 201880432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userName",
      "offset": 31
    },
    {
      "val": "password",
      "offset": 46
    }
  ],
  "location": "StepDefinition.user_enters_valid_credentials_and(String,String)"
});
formatter.result({
  "duration": 5504365,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_be_able_to_login_successfuly()"
});
formatter.result({
  "duration": 327835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 169653,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Login with valid new credentials",
  "description": "",
  "id": "login-to-banking-domain;login-with-valid-new-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User opens Bank Application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters valid credentials \"userName_2\" and \"password_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User will be able to login successfuly",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_opens_Bank_Application()"
});
formatter.result({
  "duration": 127391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userName_2",
      "offset": 31
    },
    {
      "val": "password_2",
      "offset": 48
    }
  ],
  "location": "StepDefinition.user_enters_valid_credentials_and(String,String)"
});
formatter.result({
  "duration": 216142,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_be_able_to_login_successfuly()"
});
formatter.result({
  "duration": 148522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "StepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 180521,
  "status": "passed"
});
});