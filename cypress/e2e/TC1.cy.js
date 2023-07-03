Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
import HomePage from "../Pages/HomePage.cy"

it('verify that the picture is displayed', ()=>{ 
const Home = new HomePage()
Home.Website()
Home.ClickOnPicture()
Home.AssertonPicture()
Home.ReturnToHomepage()
Home.AssertOnWelcome()
})