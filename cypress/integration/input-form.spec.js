describe('Test imput form', ()=>{
  beforeEach(() => {
    cy.visit('/')
  })
  it('Focuses input form on load',() => {
     
      cy.focused().should('have.class','new-todo')

  })
  xit('accepts input',() => {
      const typeText = 'buy milk'
      cy.get('.new-todo')
      .type(typeText)
      .should('have.value', typeText)
  })
})