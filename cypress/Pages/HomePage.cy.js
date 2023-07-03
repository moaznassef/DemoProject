class HomePage{ 
// Get Elements 

get Picture(){ 
    return cy.get(':nth-child(3) > a')}

get viewingThePicture(){ 
    return cy.get('.img-rounded')}

get Homepage(){ 
    return cy.get('.brand')}
get welcomText(){ 
    return cy.get('h1')
}
// Methods 

Website(){
cy.visit('/')}


ClickOnPicture(){ 
this.Picture.click().wait(1000)
return this
} 

AssertonPicture(){ 
this.viewingThePicture.should('be.visible') 
return this
}

ReturnToHomepage(){ 
this.Homepage.eq(0).click() 
return HomePage
}

AssertOnWelcome(){ 
    this.welcomText.should('have.text','Welcome to the Simple Travel Agency!')
}


}

export default HomePage 