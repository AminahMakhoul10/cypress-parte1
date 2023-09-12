describe('Funcionalidades Foto, cenário de sucesso', () => {
  
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
  
    it('Deve realizar cadastro com sucesso', () => {
      cy.getByData('loginUserName').type('aminah123')
      cy.getByData('loginPassword').type('12345678')
      cy.getByData('loginBtn').click()
      cy.get(':nth-child(2) > a > .fa').click()
      cy.get('[type="file"]').selectFile('images/celso.jpeg', {force:true})
      cy.get('[placeholder="photo description"]').type('Celso Portiolli')
      cy.get('[type="submit"]').click()
      cy.contains('Upload complete').should('be.visible')
      cy.get('.fa-home').click()
      cy.get('.img-thumbnail').should('have.length',1)
      cy.wait(1000)
      cy.get('.img-thumbnail').first().click()
      cy.get('.fa-heart-o').click()
      cy.wait(1000)
      cy.get('[formcontrolname="comment"]').type('11 de setembro')
      cy.get('[type="submit"]').click()
      cy.wait(5000)
      cy.get('.fa-trash-o').click()

      
    })
  })