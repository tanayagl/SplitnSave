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
	Location:"",
	optionname: "Suitable Clothes and Service",
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
				$scope.Product_Id=response.data.Product_Id;
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
	$scope.checkBooks=function()
	{
		if(category.Category==3)
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
		if(category.Category==2)
		{
			return "Destionation";
		}
		else
		{
			return "Title";
		}
	};
	
	$scope.onMouseLeave_Sharers_Result ="";

	$scope.onMouseLeave_Category=function($event)
	{
		if(category.Category==1)
		{
			$scope.Option=option1;
			$scope.product=Apartments;
			$scope.onMouseLeave_Category_Result="";
		}
		else if(category.Category==2)
		{
			$scope.product=Cabs;
			$scope.Option=option2;
			$scope.onMouseLeave_Category_Result="";
		}
		else if(category.Category==3)
		{
			$scope.product=Books;
			$scope.Option=[];
			$scope.onMouseLeave_Category_Result="";
		}
		else if(category.Category==4)
		{
			$scope.product=Laundry;
			$scope.Option=option4;
			$scope.onMouseLeave_Category_Result="";
		}
		else
		{
			$scope.product=product;
			$scope.Option=[];
			$scope.onMouseLeave_Category_Result="Category required";
		}
	}
	$scope.onMouseLeave_Title=function($event)
	{
		if($scope.rootproduct['Title']=="")
    	{
    	$scope.onMouseLeave_Title_Result = "Title required";
    	}
	    else
	    {
	    	$scope.onMouseLeave_Title_Result = "";
	    }
	}
	$scope.onMouseLeave_Price=function($event)
	{
		if($scope.rootproduct['Price']=="")
    	{
    	$scope.onMouseLeave_Price_Result = "Price required";
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
	/*$scope.onMouseLeave_CityName=function($event)
	{
		if(product['Location']=="")
    	{
    		$scope.onMouseLeave_CityName_Result = "Location required";
    	}
	    else
	    {
	    	$scope.onMouseLeave_CityName_Result = "";
	    }
	}*/
	$scope.onMouseLeave_Sharers=function($event)
	{
		 if($scope.rootproduct['Sharers']=="")
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
				$scope.onMouseLeave_AAddress_Result="Address required";
			}
			else
			{
				$scope.onMouseLeave_AAddress_Result="";
			}
	};
	$scope.onMouseLeave_Start_Date=function($event)
	{
			if($scope.product['Start_Date']=="")
			{
				$scope.onMouseLeave_AStart_Date_Result="Start Date required";
				$scope.onMouseLeave_BStart_Date_Result="Start Date required";
				$scope.onMouseLeave_CStart_Date_Result="Start Date required";
			}
			else if ((birthdayvalidation($scope.product['Start_Date'])))
			{
				$scope.onMouseLeave_AStart_Date_Result="Invalid Start Date";
				$scope.onMouseLeave_BStart_Date_Result="Invalid Start Date";
				$scope.onMouseLeave_CStart_Date_Result="Invalid Start Date";
				$scope.onMouseLeave_DStart_Date_Result="Invalid Start Date";
			}
			else if ((compare($scope.product['Start_Date'])))
			{
				$scope.onMouseLeave_AStart_Date_Result="Invalid Start Date";
				$scope.onMouseLeave_BStart_Date_Result="Invalid Start Date";
				$scope.onMouseLeave_CStart_Date_Result="Invalid Start Date";
				$scope.onMouseLeave_DStart_Date_Result="Invalid Start Date";
			}
			else
			{
				$scope.onMouseLeave_AStart_Date_Result="";
				$scope.onMouseLeave_BStart_Date_Result="";
				$scope.onMouseLeave_CStart_Date_Result="";
				$scope.onMouseLeave_DStart_Date_Result="";
			}
	}
	$scope.onMouseLeave_CityName=function($event)
	{
		if($scope.rootproduct['Location']=="")
	    	{
	    		$scope.onMouseLeave_ACityName_Result = "Location required";
	    		$scope.onMouseLeave_BCityName_Result = "Location required";	
	    		$scope.onMouseLeave_DCityName_Result = "Location required";	
	    	}
		    else
		    {
		    	$scope.onMouseLeave_ACityName_Result = "";
		    	$scope.onMouseLeave_BCityName_Result = "";
		    	$scope.onMouseLeave_DCityName_Result = "";
		    }
	}
	$scope.onMouseLeave_Weights = function($event)
		{
			if($scope.product['Weights']=="")
			{
				$scope.onMouseLeave_DWeights_Result= "Weights required"
			}
			else if(!(isNumber($scope.product['Weights'])))
			{
				$scope.onMouseLeave_DWeights_Result= "Weights should be integer"
			}
			else 
			{
				$scope.onMouseLeave_DWeights_Result= "";
			}
		};
$scope.onMouseLeave_Submit=function($event)
{
	b=0;
    if($scope.rootproduct['Title']=="")
    {
    	$scope.onMouseLeave_Title_Result = "Title required";
    	b=1;	
    }
    else
    {
    	$scope.onMouseLeave_Title_Result = "";
    }
    if($scope.rootproduct['Price']=="")
    {
    	$scope.onMouseLeave_Price_Result = "Price required";
    	b=1;
    	
    }
    else if(!(isNumber($scope.rootproduct['Price'])))
    {
		$scope.onMouseLeave_Price_Result = "Price is should be digit";
		b=1;
    }
    else
    {
    	$scope.onMouseLeave_Price_Result="";	
    }
    if($scope.rootproduct['Sharers']=="")
    {
    	$scope.onMouseLeave_Sharers_Result = "Sharers are required";
    	b=1;
    	
    }
    else if(!(isNumber($scope.rootproduct['Sharers'])))
    {
    	$scope.onMouseLeave_Sharers_Result = "Sharers should be integer";
    	b=1;
    }
    else
    {
    	$scope.onMouseLeave_Sharers_Result ="";
    }
    if(category.Category==1)
    {
	    if($scope.rootproduct['Location']=="")
	    	{
	    		$scope.onMouseLeave_ACityName_Result="City Name required";
	    		b=1;
	    	}
	    else
	    	{
	    		$scope.onMouseLeave_CityName_Result="";
	    	}
		if($scope.product['Address']=="")
		{
			$scope.onMouseLeave_AAddress_Result="Address required";
			b=1;
		}
		else
		{
			$scope.onMouseLeave_AAddress_Result="";
		}
		
		if($scope.product['Start_Date']=="")
		{
			$scope.onMouseLeave_AStart_Date_Result="Start Date required";
			b=1;
			
		}
		else
		{
			$scope.onMouseLeave_AStart_Date_Result="";
		}
	}
	if(category.Category==2)
	{
			if($scope.rootproduct['Location']=="")
	    	{
	    		$scope.onMouseLeave_BCityName_Result = "Location required";
	    		b=1;
	    	}
		    else
		    {
		    	$scope.onMouseLeave_BCityName_Result = "";
		    }
		
			if($scope.product['Start_Date']=="")
			{
				$scope.onMouseLeave_BStart_Date_Result="Start Date required";
				b=1;
				
			}
			else
			{
				$scope.onMouseLeave_BStart_Date_Result="";
			}
	}
	if(category.Category==3)
	{
			if($scope.product['Start_Date']=="")
			{
				$scope.onMouseLeave_CStart_Date_Result="Start Date required";
				b=1;
			}
			else
			{
				$scope.onMouseLeave_CStart_Date_Result="";
			}
	}
	if(category.Category==4)
	{
		if($scope.product['Weights']=="")
			{
				$scope.onMouseLeave_DWeights_Result= "Weights required"
				b=1;
			}
			else
			{
				$scope.onMouseLeave_DWeights_Result= "";
			}
		if($scope.rootproduct['Location']=="")
	    	{
	    		$scope.onMouseLeave_DCityName_Result = "Location required";
	    		b=1;
	    	}
		    else
		    {
		    	$scope.onMouseLeave_DCityName_Result = "";
		    }
	}
	/*if($scope.product['End_Date']=="")
	{
		$scope.onMouseLeave_End_Date_Result="End Date required";
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
	alert(b);*/
    if(b==0)
   	{
   	if(category.Category==1)
   	{
   		$scope.rootproduct['Image_Link']="https://s22.postimg.org/4a6fip2jl/unnamed.jpg";
   	}
   	else if(category.Category==2)
   	{
   		$scope.rootproduct['Image_Link']="https://tctechcrunch2011.files.wordpress.com/2015/01/olacabs-picture.jpg";
   	}
   	else if(category.Category==3)
   	{
   		$scope.rootproduct['Image_Link']="http://mediad.publicbroadcasting.net/p/shared/npr/styles/medium/nprshared/201412/371673336.jpg";
   	}
   	else
   	{
   		$scope.rootproduct['Image_Link']="https://s23.postimg.org/eqn1rzsfv/laundry.jpg";
   	}
    var Details={
                    Email: $cookies.get('Email'),
                    Category_Id: category.Category,
                    product: $scope.rootproduct,
                    subproduct: $scope.product,
                    options:$scope.Option,
                    Product_Id:$scope.Product_Id
                   };
                   //alert(Details.product.End_Time);
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
				alert("Edit Posted Successfully");
				location.reload();
            	};
	var errorcallback = function(reason){
				alert("Server Problem");
				$log.info(reason);
				};
	});
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function birthdayvalidation(Birthdate)
{
	 var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
	 if (!pattern.test(Birthdate)) {
        return true;
    }
    else {
        return false;
    }
}
function  compare(birthdate)
{
	dob = birthdate.split("-");
	var d = new Date();
	var curr_date = d.getDate();
	var curr_month = d.getMonth();
	var curr_year = d.getFullYear();
	if(curr_year>dob[2])
	{
		return true;
	}
	else if(curr_year==dob[2] && curr_month>dob[1])
	{
		return true;
	}
	else if(curr_month==dob[1] && curr_date>dob[0])
	{
		return true;
	}
	else
	{
		return false;
	}
}