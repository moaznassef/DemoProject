// import ReservationPage from "./ReservationPage.cy";

// class HomePage2 {
//   // Elements
//   get departureCity() { return cy.get('[name="fromPort"]'); }
//   get destinationCity() { return cy.get('[name="toPort"]'); }
//   get submitButton() { return cy.get('[type="submit"]'); }
//   get tagElement() { return cy.get('h3'); }
//   get theCheapest() { return cy.get('[type="submit"]'); }
//   get tagElement2() { return cy.get('h2'); }

//   // Methods
//   website() { cy.visit('/'); }
//   selectDepartureCity(city) { this.departureCity.select(city).wait(1000); return this; }
//   selectDestinationCity(city) { this.destinationCity.select(city); return this; }
//   clickSubmitButton() { this.submitButton.click(); return this; }
//   assertOnTag() { this.tagElement.should('to.have.text', 'Flights from Paris to Rome: '); return this; }
//   clickOnTheFlight() { this.theCheapest.eq(2).click(); return ReservationPage; }
//   assertOnElement2() { this.tagElement2.should('to.have.text', 'Your flight from TLV to SFO has been reserved.'); return ReservationPage; }
// }

// export default HomePage2;

import ReservationPage from "./ReservationPage.cy";

class HomePage2 {
  // Elements
  get departureCity() { return cy.get('[name="fromPort"]') }
  get destinationCity() { return cy.get('[name="toPort"]') }
  get SubmitButton() { return cy.get('[type="submit"]') }
  get TagElement() { return cy.get('h3') }
  get TheCheapest() { return cy.get('[type="submit"]') }
  get TagElement2() { return cy.get('h2') }

  // Methods
  Website() { cy.visit('/') }
  selectDepartureCity() {
    this.departureCity.find('option').then(options => {
      const randomIndex = Math.floor(Math.random() * options.length)
      const selectedOption = options.get(randomIndex).value
      this.departureCity.select(selectedOption).wait(1000)
    })
    return this
  }
  selectdestinationCity() {
    this.destinationCity.find('option').then(options => {
      const randomIndex = Math.floor(Math.random() * options.length)
      const selectedOption = options.get(randomIndex).value
      this.destinationCity.select(selectedOption)
    })
    return this
  }
  clickSubmitButton() { this.SubmitButton.click(); return this }
  AssertOnTag() { this.TagElement.should('contain.text', 'Flights from'); return this }
  ClickOnTheFlight() { this.TheCheapest.eq(2).click(); return ReservationPage }
  AssertOnElement2() { this.TagElement2.should('contain.text', 'Your flight from'); return ReservationPage }
}

export default HomePage2;