describe('Pagina de cadastro, cenário de cadastro incorreto', () => {
  
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
  
    it('Deve verificar a mensagem de dados obrigatórios no cadastro', () => {
      cy.getByData('register').click()
      cy.getByData('btnRegister').click()
      cy.get('.text-danger').contains('Email is required!')
      cy.getByData('btnRegister').click()
      cy.get(':nth-child(2) > ap-vmessage > .text-danger').contains('Full name is required!')
      cy.get(':nth-child(3) > ap-vmessage > .text-danger').contains('User name is required!')
      cy.get(':nth-child(4) > ap-vmessage > .text-danger').contains('Password is required!')
    })

    it('Deve verificar para cada campo do preenchimento incorreto', () => {
        cy.getByData('register').click()
        cy.getByData('btnRegister').click()
        cy.getByData('email').type('aminah')
        cy.get('.text-danger').contains('Invalid e-mail')
        cy.getByData('fullName').type('s')
        cy.getByData('registerUserName').type('s')
        cy.getByData('registerPassword').type('1')
        cy.getByData('btnRegister').click()
        cy.get(':nth-child(2) > ap-vmessage > .text-danger').contains('Mininum length is 2')
        cy.get(':nth-child(3) > ap-vmessage > .text-danger').contains('Mininum length is 2')
        cy.get(':nth-child(4) > ap-vmessage > .text-danger').contains('Mininum length is 8')
        cy.getByData('registerPassword').type('123456789ABCDEF')
        cy.getByData('registerUserName').type('sS')
        cy.getByData('btnRegister').click()
        cy.get(':nth-child(4) > ap-vmessage > .text-danger').contains('Maximun length is 18')
        cy.get(':nth-child(3) > ap-vmessage > .text-danger').contains('Must be lower case')
        cy.getByData('registerUserName').clear()
        cy.getByData('registerUserName').type('S')
        cy.getByData('btnRegister').click()
        cy.get('[text="Mininum length is 2"] > .text-danger').contains('Mininum length is 2')
        cy.get('[text="Must be lower case"] > .text-danger').contains('Must be lower case')
        cy.getByData('registerUserName').clear()
        cy.getByData('registerUserName').type('aminah')
        cy.getByData('btnRegister').click()
        cy.get(':nth-child(3) > ap-vmessage > .text-danger').contains('Username already taken')
        
      })
  })
