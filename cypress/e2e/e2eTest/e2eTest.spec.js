import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPageObj from "../../page/loginPage.cy";
import dashboardPageObj from "../../page/dashboardPage";
let filePath="dummy.pdf"
Given("User Launch application", () => {
  loginPageObj.launchApp(
    Cypress.config().baseUrl,
    Cypress.config().credentials
  );
});

And("User click on Update button in edit option", () => {
  dashboardPageObj.clickEditOption();
  dashboardPageObj.clickUpdateButton();
});

And("User select Share with Assignment 1", () => {
  dashboardPageObj.selectAssignment1();
});
And("User write updates mesg as {string}", (msg) => {
  dashboardPageObj.writeUpdateMsg(msg)
});
And("User click on attach option",()=>{
  dashboardPageObj.clickAttachButton()
})
And("User Upload file",()=>{
  dashboardPageObj.uploadFile(filePath)
})
And("User verify tick mark and click on share",()=>{
  dashboardPageObj.verifyTickMarkAndShare()
})
Then("User verify msg {string} under uploaded file",(msg)=>{
  dashboardPageObj.verifyUploadedFile(msg)
})
