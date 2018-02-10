var helper = require('./helper');
var faker = require('faker');

describe('Protractor Demo App', function() {
  it('should register user successfully',function(){
    browser.get(browser.params.url);


    var register = element(by.id('register'));
    helper.waitElementToBeClickable(register);
    register.click();

    var fakerFirstName = faker.name.firstName();
    var firstName = element(by.id('first-name'));
    helper.waitElementToBeVisisble(firstName);
    firstName.sendKeys(fakerFirstName);

    var email = element(by.id('email'));
    helper.waitElementToBeVisisble(email);
    email.sendKeys('test@email.com');

    var password = element(by.id('password'));
    helper.waitElementToBeVisisble(password);
    password.sendKeys('123123w');

    var confirmPassword = element(by.id('password-repeat'));
    helper.waitElementToBeVisisble(password);
    confirmPassword.sendKeys('123123w1'); //Entered incorrect confirmPassword

    var registerBtn = element(by.id('register_button'));
    helper.waitElementToBeVisisble(registerBtn);
    registerBtn.click();
  })
});
