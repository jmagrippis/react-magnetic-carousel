import '@testing-library/cypress/add-commands'

type Coordinates = {
  top: number
  bottom: number
  right: number
  left: number
}

const isInBounds = (
  coordinates: Coordinates,
  {top, bottom, right, left}: Coordinates
) =>
  coordinates.top < bottom &&
  coordinates.bottom > top &&
  coordinates.right > left &&
  coordinates.left < right

Cypress.Commands.add('isInViewport', {prevSubject: true}, (subject) =>
  cy.window().then((window) => {
    const {documentElement} = window.document
    const bottom = documentElement.clientHeight
    const right = documentElement.clientWidth
    const rect = subject[0].getBoundingClientRect()

    expect(rect).to.satisfy(() =>
      isInBounds(rect, {bottom, right, top: 0, left: 0})
    )

    return subject
  })
)

Cypress.Commands.add('isNotInViewport', {prevSubject: true}, (subject) =>
  cy.window().then((window) => {
    const {documentElement} = window.document
    const bottom = documentElement.clientHeight
    const right = documentElement.clientWidth
    const rect = subject[0].getBoundingClientRect()

    expect(rect).not.to.satisfy(() =>
      isInBounds(rect, {bottom, right, top: 0, left: 0})
    )

    return subject
  })
)
