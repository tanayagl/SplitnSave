var myapp = angular.module("myModule",[]);

myapp.controller("Main",function($scope){
	var Products=[{
		Product_Name:"Book",
		Product_Image:"https:image.freepik.com/free-icon/shopping-cart-with-product-inside_318-59544.png",
		Product_Id:"1",
		Location:"Ahmedabad",
		Confirm_Date:"12/3/2016",
		Price:"300",
		Sharer:[
		{First_Name:"Chaitanya",Last_Name:"Shah",User_Id:"1",User_Image:"http://simpleicon.com/wp-content/uploads/user1.png",Rating:"3"},
		{First_Name:"Chaitanya",Last_Name:"Shah",User_Id:"1",User_Image:"http://simpleicon.com/wp-content/uploads/user1.png",Rating:"3"}
		]
	  },
	  {
		Product_Name:"Book",
		Product_Image:"https:image.freepik.com/free-icon/shopping-cart-with-product-inside_318-59544.png",
		Product_Id:"1",
		Location:"Ahmedabad",
		Confirm_Date:"12/3/2016",
		Price:"300",
		Sharer:[
		{First_Name:"Chaitanya",Last_Name:"Shah",User_Id:"1",User_Image:"http://simpleicon.com/wp-content/uploads/user1.png",Rating:"3"},
		{First_Name:"Chaitanya",Last_Name:"Shah",User_Id:"1",User_Image:"http://simpleicon.com/wp-content/uploads/user1.png",Rating:"3"}
		]
	  }];
	$scope.Products=Products;
    $scope.saveRatingToServer = function(rating) {
    };
}).directive('fundooRating', function () {
    return {
      restrict: 'A',
      template: '<ul class="rating">' +
                  '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                    '\u2605' +
                  '</li>' +
                '</ul>',
      scope: {
        ratingValue: '=',
        max: '=',
        readonly: '@',
        onRatingSelected: '&'
      },
      link: function (scope, elem, attrs) {

        var updateStars = function() {
          scope.stars = [];
          for (var  i = 0; i < scope.max; i++) {
            scope.stars.push({filled: i < scope.ratingValue});
          }
        };

        scope.toggle = function(index) {
          if (scope.readonly && scope.readonly === 'true') {
            return;
          }
          scope.ratingValue = index + 1;
          scope.onRatingSelected({rating: index + 1});
        };

        scope.$watch('ratingValue', function(oldVal, newVal) {
          if (newVal) {
            updateStars();
          }
        });
      }
    }
  });



