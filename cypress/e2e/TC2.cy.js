Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


import HomePage2 from "../Pages/HomePage2.cy"

it('check choosing two destination and choose the Flight',()=>{ 

const Page2 = new HomePage2
Page2.Website()
Page2.selectDepartureCity()
Page2.selectdestinationCity()
Page2.clickSubmitButton()
Page2.AssertOnTag()
Page2.ClickOnTheFlight()
Page2.AssertOnElement2()})

