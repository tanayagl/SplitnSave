var product1={
	Product_Id:"1",
	Category_Id:"1",
	Title:"Vrundavan Apartment",
	Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
	Price:"4.5 Lakhs",
	Image_Link:"http://placehold.it/800x300",
	Sharers:"3",
	Address:"hdbdh dhbchdbhdb hbshbs hsbhsb hsbhsbw hwbhbw",
	Start_Date:"2016-07-12",
	Sharers_Left:"2",
	Gender:"Male",
	Rooms:"1",
	Bed_Rooms:"1",
	Bath_Rooms:"1",
	BathRoom_Type:"Joint",
	IN_Time_Value:"1",
	OUT_Time_Value:"2",
	Location:"Gandhinagar"
};
var product2={
	Product_Id:"1",
	Category_Id:"2",
	Title:"Going To Goa",
	Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
	Price:"10000",
	Image_Link:"http://placehold.it/800x300",
	Sharers:"3",
	Sharers_Left:"2",
	Gender:"Male",
	CarService:"Ola",
	CarType:"Large",
	CarName:"Nano",
	Start_Date:"18/2/2016",
	Start_Time:"3 AM",
	End_Date:"30/2/2016",
	End_Time:"5 PM",
	Location:"Gandhinagar"
	}
var product3={
	Product_Id:"2",
	Category_Id:"3",
	Title:"Going To Goa",
	Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
	Price:"10000",
	Image_Link:"http://placehold.it/800x300",
	Sharers:"3",
	Sharers_Left:"2",
	Gender:"Male",
	Author_First_Name:"Daniel",
	Author_Last_Name:"Browninan",
	Start_Date:"18/2/2016",
	End_Date:"30/4/2016",
	Location:"Gandhinagar",
	College:"Da-IICT",
	Tag1:"Science",
	Tag2:"Geometry",
	Tag3:"Maths"
	}
var product={
	/*Product_Id:"2",
	Category_Id:"4",
	Title:"Going To Goa",
	Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
	Price:"10000",
	Image_Link:"http://placehold.it/800x300",
	Sharers:"3",
	Sharers_Left:"2",
	Gender:"Male",
	Start_Date:"18/2/2016",
	Start_Time:"3 AM",
	End_Date:"30/2/2016",
	End_Time:"5 PM",
	Weights:"6"*/
};
var option1=[{
	       Option_Name:"Kitchen",
	       Option_Value:1
			},
			{
	       Option_Name:"Internet",
	       Option_Value:1
			},
			{
	       Option_Name:"Television",
	       Option_Value:0
			},
			{
		   Option_Name:"A.C",
	       Option_Value:0
			},
			{
	       Option_Name:"Heater",
	       Option_Value:1
			},
			{
	       Option_Name:"Washing Machine",
	       Option_Value:1
			},
			{
	       Option_Name:"Parking Space",
	       Option_Value:1
			},
			{
	       Option_Name:"No Smoking",
	       Option_Value:0
			},
			{
	       Option_Name:"Wheelchair support",
	       Option_Value:0
			},
			{
	       Option_Name:"Elevator",
	       Option_Value:0
			},
			{
	       Option_Name:"Gym",
	       Option_Value:0
			},
			{
	       Option_Name:"Pool",
	       Option_Value:0
			},
			{
	       Option_Name:"Fire exit alarm",
	       Option_Value:0
			},
			{
	       Option_Name:"First-Aid-Kit",
	       Option_Value:0
			}];
var myapp = angular.module("myModule",['ngCookies']);

myapp.controller("Main",function($scope,$cookies,$http,$log){
	$scope.show=false;
	$scope.init = function() {
		//$cookies.put('Email', "shahchaitu4@gmail.com");
		//$cookies.put('username', "Chaitanya");
		//$cookies.put('productid','2');
		//$cookies.remove('productid');
		var Email;
		if($cookies.get('Email')==null)
		{
			Email="";
		}
		else
		{
			Email=$cookies.get('Email');
		}
		if($cookies.get('productid')==null)
		{
			window.location.replace("homepage.html");
		}
		else
		{
		var input={
                    Email: $cookies.get('Email'),
                    Product_Id: $cookies.get('productid'),
                   };
		 $http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/productdetail',
		  data:JSON.stringify(input),
		 })
            .then(loginsuccesscallback,loginerrorcallback);
         }
         //alert($cookies.get('productid'));
      // $cookies.remove('Email');

  
};
var input={

};
var a;
var loginsuccesscallback = function (response) {
				$scope.show=true;
               	$log.info(response);
               	input=response.data.user;
				$scope.input=input;
				$scope.Options=response.data.options;
				product=response.data.product;
				$scope.product=product;
				a=response.data.Category_Id;
				//alert(a);
				//alert(input['Status_Confirm']+" "+input['Status_Report']);
            	};
var loginerrorcallback = function(reason){
				alert("Reload Again");
				$log.info(reason);
				};
	/*var input={
		User_Id:1,
		First_Name:"Riddhesh",
		Rating:"3.7",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
		Status_Confirm:'0',
		Status_Report:'0'
	  };*/

	$scope.gotoprofile = function(userid)
	{
		$cookies.put('otheruserid',userid);
		window.location.href="userprofile.html"
	}
	
	//$scope.Options=option1;
	//$scope.product=product;
	//$scope.input=input;
	$scope.expression = function(id)
	{
		if(id==Math.round(input['rating']))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	$scope.checkImage = function()
	{
		if (product.Image_Link=="")
			return "Image not Available"
		else
			return true
	}
	$scope.checkproduct = function(string)
	{
		if(string=="")
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	$scope.checkoption = function(string)
	{
		if(string==0)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	if(a==1 || a==2)
	{
		$scope.Amenities="";
	}
	else if(a==4)
	{
		$scope.Amenities="Suitable Clothes and Service";
	}
	else
	{
		$scope.Amenities="Amenities";
	}

	$scope.checkApartments=function()
	{

		if(a==1)
		{
			return true;
		}
		else
		{
			return false;
		}
	};
	$scope.checkCabs=function()
	{

		if(a==2)
		{
			return true;
		}
		else
		{
			return false;
		}
	};
	$scope.checkBooks=function()
	{

		if(a==3)
		{
			return true;
		}
		else
		{
			return false;
		}
	};
	$scope.checkLaundry=function()
	{

		if(a==4)
		{
			return true;
		}
		else
		{
			return false;
		}
	};
	$scope.requesttext=function(Status)
	{
		if(Status==0)
		{
			return 'Send Request';
		}
		else if(Status==1)
		{
			return 'Already Requested'
		}
		else
		{
			return 'Request Accepted'
		}
	}
	$scope.reporttext=function(Status)
	{
		if(Status==0)
		{
			return 'Report Post';
		}
		else
		{
			return 'Already Reported'
		}
	};
	$scope.showrequest = function()
	{
		if(input.Email==$cookies.get('Email'))
		{
			return false;
		}
		else if($cookies.get("admin")!=null)
		{
			return false;
		}
		else
		{
			return true;
		}
	};
	$scope.showreport = function()
	{
		if(input.Email==$cookies.get('Email'))
		{
			return false;
		}
		else if($cookies.get("admin")!=null)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	$scope.addrequest = function(Status)
	{
		if($cookies.get('Email')!=null)
		{
			if(Status==0)
			{
			var input={
                    Email: $cookies.get('Email'),
                    Product_Id:product.Product_Id,
                   };
			 $http({
			  method:'POST',
			  url:'https://splitnsave.pythonanywhere.com/api/sendrequest',
			  data:JSON.stringify(input),
			 })
	            .then(requestsuccesscallback,requesterrorcallback);
				}
		}
		else
		{
			 $('.bs-example-modal-sm').modal('show');
		}
	}
	var requestsuccesscallback = function (response) {
               	$log.info(response);
               	$scope.input.Status_Confirm=1;
            	};
	var requesterrorcallback = function(reason){
				alert("Reload Again");
				$log.info(reason);
				};
	$scope.addreport = function(Status)
	{
		if($cookies.get('Email')!=null)
		{
			if(Status==0)
			{
			var input={
                    Email: $cookies.get('Email'),
                    Product_Id:product.Product_Id,
                   };
       
			 $http({
			  method:'POST',
			  url:'https://splitnsave.pythonanywhere.com/api/reportproduct',
			  data:JSON.stringify(input),
			 })
	            .then(reportsuccesscallback,reporterrorcallback);
			}
		}
		else
		{
			 $('.bs-example-modal-sm').modal('show');
		}
	}
	 $scope.signup = function()
		{
		     $cookies.put('otherpage','product_detail.html');
		     window.location.href="signup.html";
		};
	var reportsuccesscallback = function (response) {
               	$log.info(response);
               	$scope.input.Status_Report=1;
            	};
	var reporterrorcallback = function(reason){
				alert("Reload Again");
				$log.info(reason);
				};
	
});
