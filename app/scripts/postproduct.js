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
	       Option_Name:"Smoking",
	       Option_Value:0
			},
			{
	       Option_Name:"Kids",
	       Option_Value:0
			},
			{
	       Option_Name:"Luggage",
	       Option_Value:0
			},
			{
		   Option_Name:"Pets",
	       Option_Value:0
			},
			{
	       Option_Name:"Music",
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
	Title:"",
	Description:"",
	Price:"",
	Image_Link:"",
	Sharers:"",
	Gender:"",
};
var category={
	Category:""
};
var Apartments={
	Rooms:"",
	Bed_Rooms:"",
	Bath_Rooms:"",
	BathRoom_Type:"",
	IN_Time_Value:"",
	IN_Time_Type:"1",
	Out_Time_Type:"2",
	Out_Time_Value:"",
	Location:""
};
var Cabs={
	Location:"",
	Start_Date:"",
	Start_Time:"",
	End_Date:"",
	End_Time:"",
	CarService:"",
	CarType:"",
	CarName:""
};
var Books={
	Author_First_Name:"",
	Author_Last_Name:"",
	Start_Date:"",
	End_Date:"",
	Sharing_Type="",
	Location:"",
	College:"",
	Tag1:"",
	Tag2:"",
	Tag3:""
};
var Laundry={
	Start_Date:"",
	Start_Time:"",
	End_Date:"",
	End_Time:"",
	Weights:""
};
var myapp = angular.module("myModule",[]);
myapp.controller("Main",function($scope){
	$scope.Option=[];
	$scope.category=category;
	$scope.product=product;
	var a=0;
	$scope.onSelectcategory = function($event)
	{
		a=category.Category;
		if(category.Category==1)
		{
			$scope.Option=option1;
			$scope.product=Apartments;
		}
		else if(category.Category==2)
		{
			$scope.product=Cabs;
			$scope.Option=option2;
		}
		else if(category.Category==3)
		{
			$scope.product=Books;
			$scope.Option=[];
		}
		else if(category.Category==4)
		{
			$scope.product=Laundry;
			$scope.Option=option4;
		}
		else
		{
			$scope.product=product;
			$scope.Option=[];
		}
	};
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
	$scope.onMouseLeave_Category_Result="";
$scope.onMouseLeave_Submit=function($event)
{
	if(!$('input[type="file"]').val()) {
   // No file is uploaded, do not submit.
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
	if(product['Category']=="")
    {
    	$scope.onMouseLeave_Category_Result = "Category is required";
    	
    }
    if(product['Title']=="")
    {
    	$scope.onMouseLeave_Title_Result = "Title is required";
    	
    }
    if(product['Location']=="")
    {
    	$scope.onMouseLeave_Location_Result = "Location is required";
    	
    }
    if(product['Description']=="")
    {
    	$scope.onMouseLeave_Description_Result = "Description is required";
    	
    }
    if(product['Price']=="")
    {
    	$scope.onMouseLeave_Price_Result = "Price is required";
    	
    }
    if(product['Sharers']=="")
    {
    	$scope.onMouseLeave_Sharers_Result = "Sharars are required";
    	
    }
    

};
	});