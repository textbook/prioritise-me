describe("home page", () => {
  it("shows the page title", () => {
    cy.visit("/");
    cy.title().should("eq", "prioritise.me");
  });
});
