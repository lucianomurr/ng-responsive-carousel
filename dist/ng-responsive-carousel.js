(function() {
  'use strict';


  function ngResponsiveCarousel($compile) {
    return {
      restrict: 'E',
      scope: {
        data: '=carouselData'
      },
      compile: function(tElement, tAttributes) {

        return function(scope, iElement, iAttributes, containerCtrl) {

          var currentIndex = 0,
            totalSlides = scope.data.length,
            animating = false,
            tpl = '<div class="rc-container">';

          tpl += '<ul class="rc">';

          angular.forEach(scope.data, function(image, index) {
            tpl += '<li class="rc-item" rc-src="' + image.url + '"></li>';
          });

          tpl += '</ul>';

          tpl += '<div class="rc-controls">' +
            '  <div class="rc-control rc-control-prev" ng-click="goToPrev()"><i class="fa fa-chevron-left"></i></div>' +
            '  <div class="rc-control rc-control-next" ng-click="goToNext()"><i class="fa fa-chevron-right"></i></div>' +
            '</div>';

          tpl += '</div>';

          iElement.append($compile(angular.element(tpl))(scope));

          var slides = iElement[0].querySelectorAll('li');
          var slides2 = angular.element(iElement[0].querySelectorAll('li'));
          angular.element(iElement[0].querySelector('.current'));

          /**
           * [loadImage description]
           * @param  {[type]} element [description]
           * @return {[type]}         [description]
           */
          function loadImage(element) {
            if (element.attr('style') === undefined && element.attr("rc-src") != undefined) {
              element.attr('style', 'background-image: url("' + element.attr('rc-src') + '")');
            }
          }

          if (slides.length > 0) {

            angular.element(slides[slides.length - 1]).addClass('prev');

            var prevImage = angular.element(slides[slides.length - 1]);
            loadImage(prevImage);

            angular.element(slides[0]).addClass('current');

            var currentImage = angular.element(slides[0]);
            loadImage(currentImage);

            angular.element(slides[1]).addClass('next');

            var nextImage = angular.element(slides[1]);
            loadImage(nextImage);

          }

          scope.goToNext = function() {

            var index = currentIndex;

            //console.log("Go to next slide");
            if (currentIndex < totalSlides - 1) {
              index++;

            } else {
              index = 0;
            }

            goToSlide(index);

          };

          scope.goToPrev = function() {

            var index = currentIndex;

            //console.log("Go to previous slide");
            if (currentIndex > 0) {
              index--;
            } else {
              index = slides.length - 1;
              //console.log(currentIndex)
            }

            goToSlide(index);
          };

          function goToSlide(index) {

            //check if the carrousel already is animating
            if (animating) {
              //console.error("already animating");
              return;
            } else {
              animating = true;
              currentIndex = index;
            }


            //TODO - find a better way to remove class names
            angular.forEach(slides, function(slide, index) {
              angular.element(slide).removeClass('current prev next');
            });

            if (index < totalSlides && index >= 0) {

              angular.element(slides[index]).addClass('current');

              var current = slides[index];

              angular.element(current).bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
                transitionDone();
              });

            } else {
              //console.error("Image index out of range");
            }

            if (index < (totalSlides - 1)) {
              angular.element(slides[index + 1]).addClass('next');
              var image = angular.element(slides[index + 1]);
              loadImage(image);
            } else {
              angular.element(slides[0]).addClass('next');
              var image = angular.element(slides[index + 1]);
              loadImage(image);
            }

            if (index > 0) {
              angular.element(slides[index - 1]).addClass('prev');
              var image = angular.element(slides[index - 1]);
              loadImage(image);
            } else {
              angular.element(slides[slides.length - 1]).addClass('prev');
              var image = angular.element(slides[index - 1]);
              loadImage(image);
            }

          }



          /**
           * [transitionDone description]
           * @return {[type]} [description]
           */
          function transitionDone() {

            animating = false;

            var current = slides[currentIndex];

            current.removeEventListener('webkitTransitionEnd', function() {
              transitionDone();
            });
            current.removeEventListener('oTransitionEnd', function() {
              transitionDone();
            });
            current.removeEventListener('transitionEnd', function() {
              transitionDone();
            });

          }


        };

      }
    };
  }

  angular.module('ngResponsiveCarousel', [])
    .directive('ngResponsiveCarousel', ['$compile', ngResponsiveCarousel]);

})();