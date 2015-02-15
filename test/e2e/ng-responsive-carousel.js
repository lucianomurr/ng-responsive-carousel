describe('ng-responsive-carousel', function() {

  var showNext = element(by.css('.rc-control-next'));
  var showPrev = element(by.css('.rc-control-prev'));
  var images = element.all(by.css('.rc-item'));

  beforeEach(function() {
    browser.get('http://localhost:9000/');
  });

  it("should have images and load max 3 img", function() {

    browser.sleep(500);
    images.count().then(function(count) {

      expect(count).not.toEqual(0);

      browser.sleep(500);

      images.each(function(element, index) {
        console.log('Process: ' + index);
        if (index < 2 || index === (count - 1)) {
          expect(images.get(index).getAttribute('style')).not.toEqual('');
        } else {
          expect(images.get(index).getAttribute('style')).toEqual('');
        }
      });

    });
  });

  it("should show the next image after click to show next image", function() {

    showNext.click();
    browser.sleep(500);
    expect(images.get(0).getAttribute('class')).toMatch('prev');
    expect(images.get(1).getAttribute('class')).toMatch('current');
    expect(images.get(2).getAttribute('class')).toMatch('next');

  });

  it("should show the previous image after click to show prev image", function() {

    images.count().then(function(count) {
      showPrev.click();
      browser.sleep(500);
      expect(images.get(count - 2).getAttribute('class')).toMatch('prev');
      expect(images.get(count - 1).getAttribute('class')).toMatch('current');
      expect(images.get(0).getAttribute('class')).toMatch('next');

    });

  });


  it("should load the 3rd image", function() {

    images.count().then(function(count) {

      if (count > 3) {
        showNext.click();
        browser.sleep(100);
        expect(images.get(2).getAttribute('style')).not.toEqual('');
      }

    });

  });

  it("should load the image before", function() {

    images.count().then(function(count) {

      if (count > 3) {
        showPrev.click();
        browser.sleep(500);
        expect(images.get(count - 2).getAttribute('style')).not.toEqual('');
      }

    });

  });

});