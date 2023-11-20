/// <reference types="cypress" />

describe("Home Page", () => {
  it("Title should be 'Home'", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Click").click();
    // cy.contains("About");
    cy.url().should("include", "/about");
  });
});
