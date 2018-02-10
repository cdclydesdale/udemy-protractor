exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4200/wd/hub',
  specs: ['./car/car.spec.js'],
  params: {
	  url:"https://www.etsy.com/"
  },
  suites:{
    car:'./car/car.spec.js',
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
}
