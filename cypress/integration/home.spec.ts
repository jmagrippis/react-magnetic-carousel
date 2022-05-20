describe('Homepage', () => {
  beforeEach(() => {
    cy.viewport('iphone-xr')
    cy.visit('/')
  })

  it('has a working carousel', () => {
    cy.findByRole('heading', {level: 1, name: /magnetic carousel/i})
  })
})
