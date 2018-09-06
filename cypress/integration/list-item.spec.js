describe('List Items', () => {
  beforeEach(() => {
    cy.seedAndVisit()
  })

  it('should properly display complete items', () => {
    cy.get('.todo-list li')
      .filter('.completed')
      .should('have.length', 1)
      .and('contain', 'Eggs')
      .find('.toggle')
      .should('be.checked')
  })

  it('shold show remaing todos in the footer', () => {
    cy.get('.todo-count')
      .should('contain', 3)
  })

  xit('should remove a todo', () => {
    cy.route({
      url: 'api/todos/1',
      method: 'DELETE',
      status: 200,
      response: {}
    })
    cy.get('.todo-list li')
      .as('list')

    cy.get('@list')
      .first()
      .find('.destroy')
      .invoke('show')
      .click()

    cy.get('@list')
      .should('have.length', 3)
      .and('not.contain', 'Milk')
  })
  xit('should mark an incomlete item complete', () => {
    cy.fixture('todos')
      .then(todos => {
        const target = Cypress._.head(todos)
        cy.route(
          'PUT',
          `/api/todos/${target.id}`,
          Cypress._.merge(target, { isComplete: true })
        )
      })

    cy.get('.todo-list li')
      .first()
      .as('first-todo')

    cy.get('@first-todo')
      .find('.toggle')
      .click()
      .should('be.checked')

    cy.get('@first-todo')
      .should('have.class', 'completed')

    cy.get('.todo-count')
      .should('contain', 3)
  })
})
