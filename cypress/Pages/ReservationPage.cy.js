import ConfirmationPage from "./Confirmationpage.cy"

class ReservationPage { 


get departureCity() { return cy.get('[name="fromPort"]') }
get destinationCity() { return cy.get('[name="toPort"]') }
get SubmitButton() { return cy.get('[type="submit"]') }
get TheCheapest() { return cy.get('[type="submit"]') }
get Name() { return cy.get('#inputName') }
get Adresse() { return cy.get('#address') }
get City() { return cy.get('#city') }
get Creditcard() { return cy.get('#creditCardNumber') }
get NameOnTheCard() { return cy.get('#nameOnCard') }
get ConfirmButton() { return cy.get('.controls > .btn') }
get ConfirmationMessage(){ return cy.get('h1')}




Website() { cy.visit('/') }
selectDepartureCity() { this.departureCity.select('Paris').wait(1000); return this }
selectdestinationCity() { this.destinationCity.select('Rome'); return this }
clickSubmitButton() { this.SubmitButton.click(); return this }
ClickOnTheFlight() { this.TheCheapest.eq(2).click() 
    return ReservationPage }
FillFirstName() { this.Name.type('Mooaz Abdelrahman').wait(1000) 
return this}
FillAdresse() { this.Adresse.type('6 of October')
return this } 
FillCity() { this.City.type('6 of october') 
return this}
FillCreditCard() { this.Creditcard.type('12345678901234') 
return this }
FilltheNameOnTheCard() { this.NameOnTheCard.type('Mooaz Abdelrahman') 
return this }
ClickOnConfirmButton() { this.ConfirmButton.click() 
return ConfirmationPage }
AssertOnTheConfirmationMessage(){ this.ConfirmationMessage.should('to.have.text','Thank you for your purchase today!')
return ConfirmationPage}}
        
export default ReservationPage
    
    
   