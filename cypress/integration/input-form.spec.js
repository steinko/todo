describe('Test imput form', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Focuses input form on load', () => {
    cy.focused().should('have.class', 'new-todo')
  })

  it('accepts input', () => {
    const typeText = 'buy milk'
    cy.get('.new-todo')
      .type(typeText)
      .should('have.value', typeText)
  })

  context('Form submission', () => {
    beforeEach(() => { cy.server() })
    it('should add a new todo on submit', () => {
      const entered = 'Buy Eggs'
      cy.route('POST', '/api/todos', {
        name: entered,
        id: 1,
        isComplete: false
      })
      cy.get('.new-todo')
        .type(entered)
        .type('{enter}')
        .should('have.value', '')
      cy.get('.todo-list li')
        .should('have.length', 1)
        .and('contain', entered)
    })

    it('shoul show an error on a failed submission', () => {
      cy.route({
        url: '/api/todos',
        method: 'POST',
        status: 500,
        response: { }
      })
      cy.get('.new-todo')
        .type('test{enter}')
      cy.get('.todo-list li')
        .should('not.exist')

      cy.get('.error')
        .should('be.visible')
    })
  })
})
