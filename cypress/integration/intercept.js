it('should intercept form data correctly without cy.intercept()', () => {
  cy.visit('http://localhost:3000/');
  cy.get('input').attachFile('image.jpeg');
  cy.get('button').click();
  cy.get('span').should(function ($span) {
    expect($span).to.have.text('SUCCESS')
  });
});

it('should intercept binary form data correctly with cy.intercept()', () => {
  cy.intercept('PUT', 'http://localhost:3000/upload', function (req) {
    req.reply((res) => {
      res.delay(1000).send();
    });
  });

  cy.visit('http://localhost:3000/');
  cy.get('input').attachFile('image.jpeg');
  cy.get('button').click();
  cy.get('span').should(function ($span) {
    expect($span).to.have.text('SUCCESS')
  });
});

it('should intercept text form data correctly with cy.intercept()', () => {
  cy.intercept('PUT', 'http://localhost:3000/upload', function (req) {
    req.reply((res) => {
      res.delay(1000).send();
    });
  });

  cy.visit('http://localhost:3000/');
  cy.get('input').attachFile('test.xml');
  cy.get('button').click();
  cy.get('span').should(function ($span) {
    expect($span).to.have.text('SUCCESS')
  });
});
