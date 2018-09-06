describe('Footer', () => {
  context('sith a singele todo', () => {
    it('should display a singular todo in count', () => {
      cy.seedAndVisit([{ id: 1, name: 'Buy milk', isComplete: false }])
      cy.get('.todo-count')
        .should('contain', '1 todo left')
    })
  })
  context('with mutiple toddos', () => {
    beforeEach(() => {
      cy.seedAndVisit()
    })

    it('should display plural todos in count', () => {
      cy.get('.todo-count')
        .should('contain', '3 todos left')
    })

    it('should handel filter links', () => {
      const filters = [
        { link: 'Active', expectedLenght: 3 },
        { link: 'Completed', expectedLenght: 1 },
        { link: 'All', expectedLenght: 4 }
      ]
      cy.wrap(filters)
        .each(filter => {
          cy.contains(filter.link)
            .click()

          cy.get('.todo-list li')
            .should('have.length', filter.expectedLenght)
        })
    })
  })
})
