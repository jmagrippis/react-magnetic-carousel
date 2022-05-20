describe('Homepage', () => {
  beforeEach(() => {
    cy.viewport('iphone-xr')
    cy.visit('/')
  })

  it('has a working carousel', () => {
    cy.findByRole('heading', {level: 1, name: /magnetic carousel/i})

    cy.findByRole('img', {name: /London/i}).isInViewport()
    cy.findByRole('link', {name: /London/i})

    cy.findByRole('img', {name: /Christmas!/i}).isNotInViewport()
    cy.findByRole('link', {name: /Christmas!/i}).click()
    // we need to wait for the smooth scrolling to finish!
    cy.wait(500)
    cy.findByRole('img', {name: /Christmas!/i}).isInViewport()
    cy.findByRole('img', {name: /London/i}).isNotInViewport()
  })
})
