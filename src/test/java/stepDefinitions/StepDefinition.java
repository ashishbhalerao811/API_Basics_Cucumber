package stepDefinitions;

import org.junit.runner.RunWith;
import cucumber.api.java.en.*;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class StepDefinition {
	
	@Given("^User opens Bank Application$")
	public void user_opens_Bank_Application() throws Throwable {
		System.out.println("User opens Bank Application");
	}

	@When("^User enters valid credentials \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_valid_credentials_and(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User enters valid credentials username="+arg1 +"password= "+arg2);
	}

	@Then("^User will be able to login successfuly$")
	public void user_will_be_able_to_login_successfuly() throws Throwable {
		System.out.println("User will be able to login successfully");
	}
	
	@Then("^Cards displayed are \"([^\"]*)\"$")
	public void cards_displayed_are(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Cards displayed are "+ arg1);
	}

}
