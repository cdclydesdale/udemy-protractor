describe('Etsy Cart Testing', function(){

  //Launch Browser before each function
  beforeEach(function(){
    browser.get(browser.params.url);
    browser.manage().window().maximize();
  })

  it('should take User to Home Page',function(){
    browser.get(browser.params.url);
    expect(browser.getTitle()).toBe('Etsy.com | Shop for anything from creative people everywhere');

    var cartLink = element(by.id('gnav-account-cart-description'));
    cartLink.click();

  });

  //Launch Browser after each function
  afterEach(function(){
    browser.manage().deleteAllCookies();
  })

});
