/// <reference types="cypress" />

describe("Home Page", () => {
  it("Title should be 'Home'", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Home");
  });
});

describe("About Page", () => {
  it("Title should be 'About'", () => {
    cy.visit("http://localhost:5173/about");
    cy.contains("About");
  });
});
