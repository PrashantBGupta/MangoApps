class login {
  get userName_txt() {
    return cy.get("#user_id");
  }
  get password_txt() {
    return cy.get("#password");
  }
  get loginButton() {
    return cy.get('[type="submit"]');
  }
  launchApp(url, creds) {
    cy.visit(url);
    this.userName_txt.type(atob(creds.userName),{log:false});
    this.password_txt.type(atob(creds.password),{log:false});
    this.loginButton.click();
  }
}
let loginPageObj = new login();
export default loginPageObj;
