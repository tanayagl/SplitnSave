var Products=[];
var myapp = angular.module("myModule",['ngCookies']);

myapp.controller("Main",function($scope,$cookies,$http,$log){
  $scope.show=false;
  $scope.init = function() {
    //$cookies.put('Email', "devarshsheth13@gmail.com");
    //$cookies.put('username', "Devarsh");
    if($cookies.get('Email') == null) {
    window.location.replace("homepage.html");
    }
    else
    { 
        if($cookies.get('transactions')!=null)
        {
          $scope.searchText=$cookies.get('transactions');
          $cookies.remove('transactions');
        }
    var Email={
                    Email: $cookies.get('Email'),
                   };
        // $cookies.remove('Email');
     $http({
      method:'POST',
      url:'https://splitnsave.pythonanywhere.com/api/transactions',
      data:JSON.stringify(Email),
     })
            .then(successcallback,errorcallback);
    
         }
  
};
   $scope.search = function(item) {
            if ($scope.searchText == undefined) {
                return true;
            } else {
                if (item.Product_Name.toLowerCase()
                    .indexOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        };
//$scope.Products=Products;
//alert(Products[0].Sharer[0].Rating);
var successcallback = function (response) {
                $log.info(response);
                Products=response.data.products;
                $scope.Products=Products;
                $scope.show=true;
               // alert(Products[0].Sharer[0].Rating);
              };
  var errorcallback = function(reason){
        alert("Reload Again");
        $log.info(reason);
        };
//$scope.show=true;
    $scope.saveRatingToServer = function(sharer,Product) {
    var index = $scope.Products.indexOf(Product);
    var index2 = $scope.Products[index]['Sharer'].indexOf(sharer);
    var input ={
      User_Id:$scope.Products[index]['Sharer'][index2].User_Id,
      Rating:$scope.Products[index]['Sharer'][index2].Rating,
      Email:$cookies.get('Email'),
      Product_Id:$scope.Products[index].Product_Id
    }
      $http({
      method:'POST',
      url:'https://splitnsave.pythonanywhere.com/api/updaterating',
      data:JSON.stringify(input),
     })
            .then(sendsuccesscallback,senderrorcallback);
    
    };
    var sendsuccesscallback = function (response) {
                $log.info(response);
              };
  var senderrorcallback = function(reason){
        alert("Reload Again");
        $log.info(reason);
        };
  $scope.moveProfile=function(userid)
  {
    //$cookies.put('otheruserid',userid);
    $cookies.put('otheruserid',userid);
    window.location.href="userprofile.html";
  };
  $scope.gotoproduct = function(productid)
  {
    $cookies.put('productid',productid);
    window.location.href="product_detail.html";
  }
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


