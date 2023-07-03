Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

import ReservationPage from "../Pages/ReservationPage.cy"

it('Verify the Purchase Process with Valid Data',  ()=>{
const Reservation = new ReservationPage

Reservation.Website()
Reservation.selectDepartureCity()
Reservation.selectdestinationCity()
Reservation.clickSubmitButton()
Reservation.ClickOnTheFlight()
Reservation.FillFirstName()
Reservation.FillAdresse()
Reservation.FillCity()
Reservation.FillCreditCard()
Reservation.FilltheNameOnTheCard()
Reservation.ClickOnConfirmButton()
Reservation.AssertOnTheConfirmationMessage()
})