class dashboard {
  get editPenOption() {
    return cy.get(".fa-pen-to-square");
  }
  get updateButton() {
    return cy.get(".update_mssg_dialog");
  }
  get shareWith_text(){
    return cy.get("#token-input-myTeams")
  }
  get shareWithAssignment1Option(){
   return cy.get('[title="Assignment 1"]')
  }
  get updateMsgTextArea(){
    return cy.get('#project_status_update_team')
  }
  get attchButton(){
    return cy.get('.attachLinkonDialog')
  }
  get addFilesButton(){
    return cy.get('#fileupload')
  }
  get uploadCompletTickMark(){
    return cy.get('.file-upload-complete')
  }
  get shareButton(){
    return cy.get('.tweet-submit')
  }
  get updateDesciptionFiled(){
    return cy.get('.editableMessage')
  }
  clickEditOption() {
    this.editPenOption.click();
  }
  clickUpdateButton() {
    this.updateButton.click();
  }
  selectAssignment1(){
    this.shareWith_text.click()
    this.shareWithAssignment1Option.click()
  }
  writeUpdateMsg(msg){
    this.updateMsgTextArea.type(msg)
  }
  clickAttachButton(){
    this.attchButton.click()
  }
  uploadFile(path){
    this.addFilesButton.attachFile(path,'application/pdf')
  }
  verifyTickMarkAndShare(){
    this.uploadCompletTickMark.should('be.visible')
    this.shareButton.click()
  }
  verifyUploadedFile(msg){
    this.updateDesciptionFiled.should('contain',msg)
  }
}
let dashboardPageObj = new dashboard();
export default dashboardPageObj;
