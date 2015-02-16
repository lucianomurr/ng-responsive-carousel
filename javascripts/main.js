(function(angular) {
  'use strict';

  var myApp = angular.module('carouselApp', ['ngResponsiveCarousel']);
  myApp.controller('mainController', function($scope) {
    $scope.welcome = 'Welcome to the ng-responsive-carousel page';
    $scope.carouselElement = [{
      title: 'Season One: Suit Up!',
      description: 'This photo is from season one, episode two ("Purple Giraffe"), which aired in September 2005, the year we\'re first introduced to Barney, Robin, Ted, Marshall and Lily. Cheers!',
      url: 'http://rack.2.mshcdn.com/media/ZgkyMDE0LzAzLzMxL2RlLzk0MTU5X2QwNTY2LjI3OWIxLmpwZwpwCXRodW1iCTg1MHg4NTA-CmUJanBn/61ea2394/8b0/94159_d0566.jpg'
    }, {
      title: 'Season Two: Robin Sparkles Is Born',
      description: 'Season two gave us our first glimpse at Robin Sparkles, the teen alter ego of Robin. This CSI spoof photo from 2007 is for a March Madness promotion.',
      url: 'http://rack.2.mshcdn.com/media/ZgkyMDE0LzAzLzMxL2NiLzk1OTc3X3Byb2QuMjU4ZjguanBnCnAJdGh1bWIJODUweDg1MD4KZQlqcGc/1a7a801c/116/95977_prod_0057.jpg'
    }, {
      title: 'Season Three: The Slap Bet Lingers',
      description: 'Barney and Marshall\'s slap bet continues in season three\'s "Slapsgiving" episode from 2007.',
      url: 'http://rack.1.mshcdn.com/media/ZgkyMDE0LzAzLzMxL2E3Lzk2NTkwX2QwODExLjQ3NWNhLmpwZwpwCXRodW1iCTg1MHg4NTA-CmUJanBn/77551864/406/96590_d0811.jpg'
    }, {
      title: 'Season Four: Madness at MacLaren\'s Pub',
      description: 'Lily competes in a wild hot dog-eating competition in "The Stinsons" episode in 2009.',
      url: 'http://rack.1.mshcdn.com/media/ZgkyMDE0LzAzLzMxL2Q5Lzk3ODExX2ZveF8wLmI1YTJiLmpwZwpwCXRodW1iCTg1MHg4NTA-CmUJanBn/c40a0ab7/afa/97811_fox_0313b.jpg'
    }, {
      title: 'Season Five: 100th Episode',
      description: 'The gang performs a musical number during "Girls Versus Suits," which marked the show\'s 100th episode in 2010.',
      url: 'http://rack.0.mshcdn.com/media/ZgkyMDE0LzAzLzMxL2MwLzk4NzA1X2QyNDMwLjczMzQ0LmpwZwpwCXRodW1iCTg1MHg4NTA-CmUJanBn/71ff8552/8d6/98705_d2430b.jpg'
    }];
  });

})(angular);