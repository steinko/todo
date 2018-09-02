describe('List Items', () => {
  beforeEach(() => {
    cy.seedAndVisit()
  })

  it.only('properly display complete items', () => {
    cy.get('.todo-list li')
      .filter('.completed')
      .should('have.length', 1)
      .and('contain', 'Eggs')
      .find('.toggle')
      .should('be.checked')
  })
})
