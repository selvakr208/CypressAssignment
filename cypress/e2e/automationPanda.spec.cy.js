

describe('My First Cypress Test Suite', function () {

  beforeEach("Hooks launch homepage", function()  {
    cy.viewport(1280, 720)
    cy.visit('/2021/12/29/want-to-practice-test-automation-try-these-demo-sites/', { headers: { "Accept-Encoding": "gzip, deflate" } })
    cy.contains('Speaking').click()
    console.log("before each hooks invoked")
    cy.fixture('testdataLocal').then(function (data) {
      this.data = data;
    })

  })

  // before(function () {
  //   cy.fixture('testdataLocal').then(function (data) {
  //     this.data = data;
  //   })
  // })


  it('Verify the title of the page', function () {
    
    cy.url().should('eq', 'https://automationpanda.com/speaking/')
    cy.get('title').invoke("text").then(text => {
    //  expect(text).to.eq('Speaking | Automation Panda')
        expect(text).to.eq(this.data.speakingPageTitle)
    }
    )
  })


  it('Verify Keynote Addresses using Mocha Assertions', function() {
    
    cy.contains('Keynote Addresses').then(($el) => {
      if ($el.length) {
        cy.get('h2').contains('Keynote Addresses').invoke("text").then(text => {
      //    expect(text).to.eq('Keynote Addresses')
          expect(text).to.eq(this.data.keynoteAddressesText)
        })

        cy.get('td').contains('Reimagining Automation').invoke("text").then(text => {
        //  expect(text).to.eq('Reimagining Automation')
          expect(text).to.eq(this.data.reimaginingAutomationText)
        })
      } else {
        
      }
    });
  })

  it('Verify Keynote Addresses', () => {
    cy.url().should('eq', 'https://automationpanda.com/speaking/')
    
    cy.contains('Keynote Addresses').should('be.visible')
    cy.contains('Keynote Addresses').then(($el) => {
      if ($el.length) {
        cy.contains('Reimagining Automation').should('be.visible')
      } else {
        
      }
    });

    cy.get('h2').should('contain', 'Keynote Addresses')


  })



})