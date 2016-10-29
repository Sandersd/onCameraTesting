var selenium = require('selenium-webdriver');

describe('OnCamera Testing', function() {

    // Open the app in the browser before each test is run
    beforeEach(function(done) {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
        setTimeout(function () {
            console.log('inside timeout');
            // done();
        }, 500);
        this.driver = new selenium.Builder().
            withCapabilities(selenium.Capabilities.chrome()).
            build();

        this.driver.manage().window().setSize(300, 768);
        this.driver.get('https://app02.oncamera.co/').then(function() {
          done();
        });
    });

    // Close the browser after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        this.driver.quit().then(done);
    });


    // Test the navigation bar by clicking on the 'REVIEW' link and checking the URL changes to '/review'
    it('Displays the red button', function(done) {

      // this.driver.sleep(1000).then(function () {
      //   console.log("Wait");
      // });

      this.driver.findElement(selenium.By.className('disconnected-notice')).then(function(elm) {
        console.log('Disconnected');
        elm.click();
      }, function(err) {
        if (err.state && err.state === 'no such element') {
          console.log('Connected');
        } else {
          console.log(err);
          webdriver.promise.rejected(err);
        }
      });

      this.driver.sleep(1000).then(function () {
        console.log("Wait");
      });

      this.driver.wait(selenium.until.elementLocated(selenium.By.id('hamburgerButton')), 5 * 1000).then(function(elm) {
          elm.click();
      });

      this.driver.findElement(selenium.By.id('signIn')).then(function(element) {
        element.click();
      });

      this.driver.sleep(3000).then(function () {
          console.log("Wait");
      });
      this.driver.wait(selenium.until.elementLocated(selenium.By.linkText('PIN')), 5 * 1000).then(function(elm) {
        elm.click();
      });

      this.driver.wait(selenium.until.elementLocated(selenium.By.id('at-field-username')), 5 * 1000).then(function(elm) {
        elm.sendKeys('1111111112');
      });

      this.driver.wait(selenium.until.elementLocated(selenium.By.id('at-field-password')), 5 * 1000).then(function(elm) {
        elm.sendKeys('1111');
      });

      this.driver.wait(selenium.until.elementLocated(selenium.By.className('submit')), 5 * 1000).then(function(elm) {
        elm.click();
      });

      this.driver.sleep(3000).then(function () {
        console.log("Wait");
      });
      this.driver.wait(selenium.until.elementLocated(selenium.By.id('armCallButton')), 5 * 1000).then(function(elm) {
        elm.click();
      });

      this.driver.findElement(selenium.By.id('firstOfficerCallButton')).then(function(elm) {
        console.log('Red Button exists');
      }, function(err) {
          if (err.state && err.state === 'no such element') {
              console.log('Element not found');
          } else {
              webdriver.promise.rejected(err);
          }
      });



        done();
    });
});
