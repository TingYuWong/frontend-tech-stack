/// <reference types="cypress" />

describe("Home Page", () => {
  it("Title should be 'Home'", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Click").click();
    cy.url().should("include", "/about");
  });

  it("Input should function normally", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-testId="test-input"]').type("My name is");
    cy.get('[data-testId="test-input"]').should("have.value", "My name is");
  });
});
