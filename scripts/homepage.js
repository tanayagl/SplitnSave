var myapp = angular.module("myModule",['ngCookies']);
myapp.controller("Main",function($scope,$cookies,$http,$log){
	$scope.init = function() {
		//$cookies.put('Email', "devarshsheth13@gmail.com");
		//$cookies.put('username', "Devarsh");
      // $cookies.remove('Email');

  
};
 $scope.signup = function()
{
     $cookies.put('otherpage','homepage.html');
     window.location.href="signup.html";
};
 $scope.Category="Category";
 $scope.searchText="";
 $scope.Search = "Select Category";
$scope.loadsearch = function(soc,Category) {
        $scope.Search = soc;
        $scope.Category=Category;
        $(".search-field").prop('disabled', false);
    };
$scope.search = function()
{
    if($scope.Category=='Apartments')
    {
        $cookies.put('searchpage',$scope.searchText);
        window.location.href="apartments.html";
    }
    else if($scope.Category=='Books')
    {
        $cookies.put('searchpage',$scope.searchText);
        window.location.href="books.html";
    }
    else if($scope.Category=='Cabs')
    {
        $cookies.put('searchpage',$scope.searchText);
        //alert($cookies.get('searchpage'));
        window.location.href="cabs.html";
    }
    else if($scope.Category=='Laundry')
    {
        $cookies.put('searchpage',$scope.searchText);
        window.location.href="laundry.html";
    }
}
});