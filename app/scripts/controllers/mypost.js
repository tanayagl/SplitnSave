var myapp = angular.module("myModule",[]);

myapp.controller("Main",function($scope){
	var Products=[{
		Product_Name:"Book",
		Product_Image:"https:image.freepik.com/free-icon/shopping-cart-with-product-inside_318-59544.png",
		Product_Id:"1",
		Location:"Ahmedabad",
		Post_Date:"12/3/2016",
		Price:"300",
		Status:"0"
	  },
	  {
		Product_Name:"Book",
		Product_Image:"https:image.freepik.com/free-icon/shopping-cart-with-product-inside_318-59544.png",
		Product_Id:"1",
		Location:"Ahmedabad",
		Post_Date:"12/3/2016",
		Price:"300",
		Status:"1"
	  },
	   {
		Product_Name:"Book",
		Product_Image:"https:image.freepik.com/free-icon/shopping-cart-with-product-inside_318-59544.png",
		Product_Id:"1",
		Location:"Ahmedabad",
		Post_Date:"12/3/2016",
		Price:"300",
		Status:"1"
	  }];
	$scope.Products=Products;
	$scope.productStatus=function(status)
	{
		if(status==0)
		{
			return "Confirmed";
		}
		else
		{
			return "On Display";
		}
	}
	$scope.btnClass=function(status) 
	{
		if(status==0)
		{
			return "btn btn-success";
		}
		else
		{
			return "btn btn-info";
		}
	}
	$scope.deletePost = function(product)
	{
	var index = $scope.Products.indexOf(product);
  	$scope.Products.splice(index, 1);     
	};
});
