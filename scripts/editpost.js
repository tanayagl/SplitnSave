var option1=[{
	       Option_Name:"Kitchen",
	       Option_Value:0
			},
			{
	       Option_Name:"Internet",
	       Option_Value:0
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
	       Option_Value:0
			},
			{
	       Option_Name:"Washing Machine",
	       Option_Value:0
			},
			{
	       Option_Name:"Parking Space",
	       Option_Value:0
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
var option2=[{
	       Option_Name:"No Smoking",
	       Option_Value:0
			},
			{
	       Option_Name:"No Kids",
	       Option_Value:0
			},
			{
	       Option_Name:"No Luggage",
	       Option_Value:0
			},
			{
		   Option_Name:"No Pets",
	       Option_Value:0
			},
			{
	       Option_Name:"No Music",
	       Option_Value:0
			},
			{
	       Option_Name:"Non Stop Journey",
	       Option_Value:0
			}];
var option4=[{
	       Option_Name:"White Clothes",
	       Option_Value:0
			},
			{
	       Option_Name:"Light Clothes",
	       Option_Value:0
			},
			{
	       Option_Name:"Cotton Clothes",
	       Option_Value:0
			},
			{
		   Option_Name:"Silk Clothes",
	       Option_Value:0
			},
			{
	       Option_Name:"DryCleaning",
	       Option_Value:0
			},
			{
	       Option_Name:"SteamPress",
	       Option_Value:0
			},
			{
	       Option_Name:"Fabric Softner",
	       Option_Value:0
			}];
var product={
	/*Category:"",
	Title:"",
	Description:"",
	Price:"",
	Image_Link:"",
	Sharers:"",
	Gender:"",*/
};
var category={
	//Category:"1"
};
var Apartments={
	Rooms:"",
	Bed_Rooms:"",
	Bath_Rooms:"",
	BathRoom_Type:"",
	IN_Time_Value:"",
	OUT_Time_Value:"",
	Location:"",
	Address:"",
	optionname:"Amenities",
	Start_Date:""
};
var Cabs={
	Location:"",
	Start_Date:"",
	Start_Time:"",
	End_Date:"",
	End_Time:"",
	CarService:"",
	CarType:"",
	CarName:"",
	optionname:"Amenities",
};
var Books={
	Author_First_Name:"",
	Author_Last_Name:"",
	Start_Date:"",
	End_Date:"",
	Location:"",
	College:"",
	Tag1:"",
	Tag2:"",
	Tag3:"",
	optionname:"",
};
var Laundry={
	Start_Date:"",
	Start_Time:"",
	End_Date:"",
	End_Time:"",
	Weights:"",
	optionname: "What type of CLothes do you have / What type of service you want"
};
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
		
		var Product={
                    Product_Id: $cookies.get('editproduct'),
                   };
        // $cookies.remove('Email');
		$http({
				  method:'POST',
				  url:'https://splitnsave.pythonanywhere.com/api/editpost',
				  data:JSON.stringify(Product),
				 })
		            .then(getsuccesscallback,geterrorcallback);
		         
         //$cookies.remove('Email');
         $scope.show=true;
  		}
};
var getsuccesscallback = function (response) {
				$log.info(response);
				$scope.Option=response.data.options;
				$scope.product=response.data.subproduct;
				product=response.data.product;
				$scope.rootproduct=product;
				category['Category']=response.data.Category_Id;
				$scope.category=category;
				//alert(category['Category']);
				//alert(response.data.product['Product_Id']);
				$scope.show=true;
            	};

var geterrorcallback = function(reason){
				alert("Server Problem");
				$log.info(reason);
				};
	//$scope.Option=option1;
	//$scope.category=category;
	//$scope.rootproduct=product;
	//$scope.product=Apartments;
	var a=category.Category;
	$scope.checkApartments=function()
	{
		if(category.Category==1)
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
		if(category.Category==2)
		{
			return true;
		}
		else
		{
			return false;
		}
	};
	$scope.checkBooks = function()
	{
		if(category.Category==3)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	$scope.checkLaundry=function()
	{
		if(category.Category==4)
		{
			return true;
		}
		else
		{
			return false;
		}
	};
	$scope.titltext = function()
	{
		if(a==2)
		{
			return "Destionation";
		}
		else
		{
			return "Title";
		}
	};
	
	$scope.onMouseLeave_Sharers_Result ="";
	$scope.onMouseLeave_Title=function($event)
	{
		if(product['Title']=="")
    	{
    	$scope.onMouseLeave_Title_Result = "Title is required";
    	}
	    else
	    {
	    	$scope.onMouseLeave_Title_Result = "";
	    }
	}
	$scope.onMouseLeave_Price=function($event)
	{
		if(product['Price']=="")
    	{
    	$scope.onMouseLeave_Price_Result = "Price is required";
    	}
    	else if(!(isNumber(product['Price'])))
	    {
	    	
			$scope.onMouseLeave_Price_Result = "Price is should be digit";
	    }
	    else
	    {
	    	$scope.onMouseLeave_Price_Result = "";
	    }
	}
	$scope.onMouseLeave_CityName=function($event)
	{
		if(product['Location']=="")
    	{
    		$scope.onMouseLeave_CityName_Result = "Location is required";
    	}
	    else
	    {
	    	$scope.onMouseLeave_CityName_Result = "";
	    }
	}
	$scope.onMouseLeave_Sharers=function($event)
	{
		 if(product['Sharers']=="")
	    {
	    	$scope.onMouseLeave_Sharers_Result = "Sharers are required";
	    	
	    }
	    else if(!(isNumber(product['Sharers'])))
	    {
	    	$scope.onMouseLeave_Sharers_Result = "Sharers should be integer";
	    }
	    else
	    {
	    	$scope.onMouseLeave_Sharers_Result ="";
	    }
	}
	$scope.onMouseLeave_Address=function($event)
	{
		if($scope.product['Address']=="")
		{
			$scope.onMouseLeave_Address_Result="Address is required";
		}
		else
		{
			$scope.onMouseLeave_Address_Result="";
		}
	}
	$scope.onMouseLeave_Start_Date=function($event)
	{
		if($scope.product['Start_Date']=="")
		{
			$scope.onMouseLeave_Start_Date_Result="Start Date is required";
			
		}
		else
		{
			$scope.onMouseLeave_Start_Date_Result="";
		}
	}
	$scope.onMouseLeave_End_Date=function($event)
	{
		if($scope.product['End_Date']=="")
		{
			$scope.onMouseLeave_End_Date_Result="End Date is required";
		}
		else
		{
			$scope.onMouseLeave_End_Date_Result="";
		}
	}
	$scope.onMouseLeave_Weights=function($event)
	{
		if($scope.product['Weights']=="")
		{
			$scope.onMouseLeave_Weights_Result="Weights are required";
		}
		else
		{
			$scope.onMouseLeave_Weights_Result="";
		}
	}
	$scope.onMouseLeave_Profile=function($event)
	{
			if(!$('input[type="file"]').val()) {
		}
		else
		{
			var files = document.getElementById("image").files;
			var file_name=files[0].name;
		    var split=file_name.split(".");
		    var extenstion = split[split.length-1];
		    if(!(extenstion=="gif" || extenstion=="png" || extenstion=="jpg" || extenstion=="jpeg"))
		    {
		    	$scope.onMouseLeave_Profile_Result="It's not an image";
		    	
		    }
		    else
		    {
		    	$scope.onMouseLeave_Profile_Result="";	
		    }
		}
	}
$scope.onMouseLeave_Submit=function($event)
{
	var b=0;
	 if(!$('input[type="file"]').val()) {
	}
	else
	{
		var files = document.getElementById("image").files;
		var file_name=files[0].name;
	    var split=file_name.split(".");
	    var extenstion = split[split.length-1];
	    if(!(extenstion=="gif" || extenstion=="png" || extenstion=="jpg" || extenstion=="jpeg"))
	    {
	    	$scope.onMouseLeave_Profile_Result="It's not an image";
	    	b=1;	
	    }
	    else
	    {
	    	$scope.onMouseLeave_Profile_Result="";	
	    }
	}
	if(category['Category']=="")
    {
    	$scope.onMouseLeave_Category_Result = "Category is required";
    	b=1;
    }
    else
    {
    	$scope.onMouseLeave_Category_Result = "";
    }
    if(product['Title']=="")
    {
    	$scope.onMouseLeave_Title_Result = "Title is required";
    	b=1;
    	
    }
    else
    {
    	$scope.onMouseLeave_Title_Result = "";
    }
    if(product['Price']=="")
    {
    	$scope.onMouseLeave_Price_Result = "Price is required";
    	b=1;
    	
    }
    else if(!(isNumber(product['Price'])))
    {
		$scope.onMouseLeave_Price_Result = "Price is should be digit";
		b=1;
    }
    else
    {
    	$scope.onMouseLeave_Price_Result="";	
    }
    if(product['Sharers']=="")
    {
    	$scope.onMouseLeave_Sharers_Result = "Sharers are required";
    	b=1;
    	
    }
    else if(!(isNumber(product['Sharers'])))
    {
    	$scope.onMouseLeave_Sharers_Result = "Sharers should be integer";
    	b=1;
    }
    else
    {
    	$scope.onMouseLeave_Sharers_Result ="";
    }
    if($scope.product['Location']=="")
    	{
    		$scope.onMouseLeave_CityName_Result="City Name is required";
    		b=1;
    	}
    else
    	{
    		$scope.onMouseLeave_CityName_Result="";
    	}
	if($scope.product['Address']=="")
	{
		$scope.onMouseLeave_Address_Result="Address is required";
		b=1;
	}
	else
	{
		$scope.onMouseLeave_Address_Result="";
	}
	
	if($scope.product['Start_Date']=="")
	{
		$scope.onMouseLeave_Start_Date_Result="Start Date is required";
		b=1;
		
	}
	else
	{
		$scope.onMouseLeave_Start_Date_Result="";
	}
	if($scope.product['End_Date']=="")
	{
		$scope.onMouseLeave_End_Date_Result="End Date is required";
		b=1;
	}
	else
	{
		$scope.onMouseLeave_End_Date_Result="";
	}
	if($scope.product['Weights']=="")
	{
		$scope.onMouseLeave_Weights_Result="Weights are required";
		b=1;
	}
	else
	{
		$scope.onMouseLeave_Weights_Result="";
	}
    if(b==0)
    {
    var Details={
                    Email: $cookies.get('Email'),
                    Category_Id: category.Category,
                    product: $scope.rootproduct,
                    subproduct: $scope.product,
                    options:$scope.Option,
                    Product_Id:$cookies.get('editproduct'),
                   };
        // alert(Details['subproduct']['IN_Time_Value']);
		 $http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/editdata',
		  data:JSON.stringify(Details),
		 })
            .then(successcallback,errorcallback);
    
     }
};
	var successcallback = function (response) {
				$log.info(response);
            	};
	var errorcallback = function(reason){
				alert("Server Problem");
				$log.info(reason);
				};
	
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
});