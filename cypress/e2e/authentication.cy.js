describe("Authentication Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("Should log in with valid credentials", () => {
    cy.get("#buttonPaciente").click();
    cy.get("#inputAuthEmail").type("ana@abc.com");
    cy.get("#inputAuthSenha").type("123");
    cy.get("#buttonSubmit").click();
    cy.get("#headerCardPaciente").should("have.text", "Informações do Usuário");
  });
});
