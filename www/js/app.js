(function(){
    
    var app = angular.module('starter', ['ionic'])

    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    });

    app.controller('HotelListController', function(){
        this.hoteldata = hoteldata;
    });
    
    var hoteldata = [
        {name: 'Super 8 Chandler AZ', url : 'http://s3-media4.fl.yelpcdn.com/bphoto/5DtJ8-ZeW4qkVMayp97XdQ/o.jpg', beforeprice: 60, afterprice: 50},
        {name: 'Holiday Inn North Phoenix', url : 'http://s3-media2.fl.yelpcdn.com/bphoto/BYhjmS4hZCkc9e5wRkW3Zg/o.jpg', beforeprice: 70, afterprice: 55},
        {name: 'Hampton Inn Scottsdale', url : 'http://s3-media2.fl.yelpcdn.com/bphoto/jbguPk13QvJnoPd5YFaqhg/o.jpg', beforeprice: 65, afterprice: 53},
        {name: 'Best Value Inn North Phoenix', url : 'http://s3-media2.fl.yelpcdn.com/bphoto/HkGGuwUaUwF49S_CfW3Xdw/o.jpg', beforeprice: 75, afterprice: 65},
    ];
    
}());
