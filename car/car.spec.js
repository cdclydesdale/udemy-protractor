var carPage  = require('./car.po.js');
var carPage = new carPage();

describe('Cool Cars Site',function(){


  beforeEach(function(){
    browser.get('https://www.topgear.com/');
  });

  it('should have a title',function(){
    expect(browser.getTitle()).toBe(carPage.Title);
    //Here, we are checking if Tile is correct
  });

});
