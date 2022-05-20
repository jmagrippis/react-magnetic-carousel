/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      isInViewport(): Chainable<Element>
      isNotInViewport(): Chainable<Element>
    }
  }
}

import './commands'
