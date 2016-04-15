var myapp = angular.module("myModule",['ngCookies']);

myapp.controller("Main",function($scope,$cookies,$http,$log){
	var Products=[{
		Product_Name:"Book",
		Product_Image:"https:image.freepik.com/free-icon/shopping-cart-with-product-inside_318-59544.png",
		Product_Id:"1",
		Location:"Ahmedabad",
		Post_Date:"12/3/2016",
		Price:"300",
		Sharer:[
		{First_Name:"Chaitanya",Last_Name:"Shah",User_Id:"1",User_Image:"http://simpleicon.com/wp-content/uploads/user1.png",Status:"1"},
		{First_Name:"Chaitanya",Last_Name:"Shah",User_Id:"1",User_Image:"http://simpleicon.com/wp-content/uploads/user1.png",Status:"2"}
		]
	},
	  {
		Product_Name:"Book",
		Product_Image:"https:image.freepik.com/free-icon/shopping-cart-with-product-inside_318-59544.png",
		Product_Id:"2",
		Location:"Ahmedabad",
		Post_Date:"12/3/2016",
		Price:"300",
		Sharer:[
		{First_Name:"Chaitanya",Last_Name:"Shah",User_Id:"1",User_Image:"http://simpleicon.com/wp-content/uploads/user1.png",Status:"2"},
		{First_Name:"Chaitanya",Last_Name:"Shah",User_Id:"1",User_Image:"http://simpleicon.com/wp-content/uploads/user1.png",Status:"2"}
		]
	  },
	   {
		Product_Name:"Book",
		Product_Image:"https:image.freepik.com/free-icon/shopping-cart-with-product-inside_318-59544.png",
		Product_Id:"3",
		Location:"Ahmedabad",
		Post_Date:"12/3/2016",
		Price:"300",
		Sharer:[
		{First_Name:"Chaitanya",Last_Name:"Shah",User_Id:"1",User_Image:"http://simpleicon.com/wp-content/uploads/user1.png",Status:"1"},
		{First_Name:"Chaitanya",Last_Name:"Shah",User_Id:"1",User_Image:"http://simpleicon.com/wp-content/uploads/user1.png",Status:"1"}
		]
	  }];
	$scope.show=false;
	$scope.init = function() {
		//$cookies.put('Email', "devarshsheth13@gmail.com");
		//$cookies.put('username', "Devarsh");
		if($cookies.get('Email') == null) {
 		window.location.replace("homepage.html");
		}
		else
		{	
		
		var Email={
                    Email: $cookies.get('Email'),
                   };
        // $cookies.remove('Email');
		 $http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/myposts',
		  data:JSON.stringify(Email),
		 })
            .then(successcallback,errorcallback);
         }
        // $scope.show=true;

  
};
var successcallback = function (response) {
                $log.info(response);
                Products=response.data.Products;
                $scope.Products=Products;
                $scope.show=true;
              };
  var errorcallback = function(reason){
        alert("Reload Again");
        $log.info(reason);
        };
	//$scope.Products=Products;
	$scope.deletePost = function(product)
	{
	var index = $scope.Products.indexOf(product);
  	$scope.Products.splice(index, 1);
  	var Product_Id={
                    Product_Id: product.Product_Id,
                   };
        // $cookies.remove('Email');
		 $http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/deletepost',
		  data:JSON.stringify(Product_Id),
		 })
            .then(deletesuccesscallback,deleteerrorcallback);
    
         
	};
	var deletesuccesscallback = function (response) {
                $log.info(response);
              	};
  	var deleteerrorcallback = function(reason){
        alert("Reload Again");
        $log.info(reason);
        };
	$scope.getconfirm = function(sharer,Product)
	{
		var index = $scope.Products.indexOf(Product);

		var index2 = $scope.Products[index]['Sharer'].indexOf(sharer);
		$scope.Products[index].Sharer[index2].Status=2;
		var input ={
		      User_Id:$scope.Products[index]['Sharer'][index2].User_Id,
		      Status:$scope.Products[index]['Sharer'][index2].Status,
		      Email:$cookies.get('Email'),
		      Product_Id:$scope.Products[index].Product_Id
    	};
    	$http({
      method:'POST',
      url:'https://splitnsave.pythonanywhere.com/api/updatepost',
      data:JSON.stringify(input),
     })
            .then(sendsuccesscallback,senderrorcallback);
	};
	$scope.getreject = function(sharer,Product)
	{
		var index = $scope.Products.indexOf(Product);

		var index2 = $scope.Products[index]['Sharer'].indexOf(sharer);
		$scope.Products[index].Sharer[index2].Status=3;
		var input ={
		      User_Id:$scope.Products[index]['Sharer'][index2].User_Id,
		      Status:$scope.Products[index]['Sharer'][index2].Status,
		      Email:$cookies.get('Email'),
		      Product_Id:$scope.Products[index].Product_Id
    	};
    	$scope.Products[index].Sharer.splice(index2, 1);
    	$http({
		      method:'POST',
		      url:'https://splitnsave.pythonanywhere.com/api/updatepost',
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

    $scope.confirmdeal = function(product)
    {
    var index = $scope.Products.indexOf(product);
  	$scope.Products.splice(index, 1);
  		var Product_Id={
                    Product_Id: product.Product_Id,
                   };
        // $cookies.remove('Email');
		 $http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/confirmdeal',
		  data:JSON.stringify(Product_Id),
		 })
            .then(confirmdealsuccesscallback,confirmdealerrorcallback);
    }
    var confirmdealsuccesscallback = function (response) {
                $log.info(response);
              };
  	var confirmdealerrorcallback = function(reason){
        alert("Reload Again");
        $log.info(reason);
        };
	$scope.rejectshow = function(Status)
	{
		
		if(Status==1)
		{
			return 'btn btn-sm btn-default';
		}
		else
		{
			return 'btn btn-sm btn-danger';
		}
	};
	$scope.confirmclass = function(Status)
	{
		if(Status==1)
		{
			return 'btn btn-sm btn-primary';
		}
		else
		{
			return 'btn btn-sm btn-success';
		}
	};
	$scope.confirmtext = function(Status)
	{
		if(Status==1)
		{
			return 'Accept';
		}
		else
		{
			return 'Accepted';
		}
	};
	$scope.gotoproduct = function(productid)
	{
		$cookies.put('productid',productid);
		window.location.href="product_detail.html";
	}
	$scope.gotoprofile = function(userid)
	{
		$cookies.put('otheruserid',userid);
		window.location.href="userprofile.html";
	}
	$scope.editpost = function(productid)
	{
		$cookies.put('editproduct',productid);
		window.location.href="editpost.html"
	}
	 $scope.search = function(item) {
            if ($scope.searchText == undefined) {
                return true;
            } else {
                if (item.Title.toLowerCase()
                    .indexOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        };
});