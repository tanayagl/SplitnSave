var myapp = angular.module("myModule",['ngCookies']);
var input={
		First_Name:"Chaitanya",
		Last_Name:"Shah",
		Email:"shahchaitu4@gmail.com",
		ContactNumber:"9601559462",
		CityName:"Ahmedabad",
		Birthdate:"1995-09-12",
		Gender:"Male",
		Institute_Name:"DA-IICT",
		Profession_Name:"Student",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.svg"
	};
myapp.controller("Main",function($scope,$cookies,$http,$log){
$scope.show=false;
	$scope.init = function() {
		//$cookies.put('Email', "devarshsheth13@gmail.com");
		//$cookies.put('username', input['First_Name']);
		if($cookies.get('Email') == null) {
 		window.location.replace("homepage.html");
		}
		else
		{	
		
		var Email={
                    Email: $cookies.get('Email'),
                   };
        //$cookies.remove('Email');
		 $http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/editprofiledata',
		  data:JSON.stringify(Email),
		 })
            .then(successcallback,errorcallback);
    	
         }

  
};
				//$scope.user=input;
                //$scope.show=true;
var successcallback = function (response) {
               	$log.info(response);
               	input=response.data.details;
				$scope.user=input;
                $scope.show=true;
            	};
	var errorcallback = function(reason){
				alert("Reload Again");
				$log.info(reason);
				};
	$scope.onMouseLeave_First_Name_Result = "";
	$scope.onMouseLeave_Last_Name_Result = "";
	$scope.onMouseLeave_Email_Result = "";
	$scope.onMouseLeave_ContactNumber_Result = "";
	$scope.onMouseLeave_First_Name = function ($event) {
	if(input['First_Name']=="")
	{
	$scope.onMouseLeave_First_Name_Result = "First Name is required";
	}
	else
	{
	$scope.onMouseLeave_First_Name_Result="";
	}
    };
	$scope.onMouseLeave_Last_Name = function ($event) {
	if(input['Last_Name']=="")
	{
	$scope.onMouseLeave_Last_Name_Result = "Last Name is required";
	}
	else
	{
	$scope.onMouseLeave_Last_Name_Result="";
	}
    };
    $scope.onMouseChange_DOB = function ($event) {
	if(input['Birthdate']=="")
	{
	$scope.onMouseLeave_DOB_Result = "Birthdate is required";
	}
	else if((birthdayvalidation(input['Birthdate'])) ||  compare(input['Birthdate']))
	{
	$scope.onMouseLeave_DOB_Result="Invalid Birthdate";
	}
	else
	{
	$scope.onMouseLeave_DOB_Result="";
	}
	};
	$scope.onMouseLeave_ContactNumber = function ($event) {
	if(input['ContactNumber']=="")
	{
	$scope.onMouseLeave_ContactNumber_Result = "Contact Number is required";
	}
	else if(!(isNumber(input['ContactNumber'])))
	{
	$scope.onMouseLeave_ContactNumber_Result = "Invalid Contact Number";
	}
	else if((input['ContactNumber']).length!=10)
	{
	$scope.onMouseLeave_ContactNumber_Result = "Contact Number should be of 10 digits";
	}
	else
	{
	$scope.onMouseLeave_ContactNumber_Result="";
	}
    };
	
	
	$('.location .dropdown-menu a').on('click', function(){    
		$(".Location").val($(this).html()); 
		input["CityName"]=$(this).html();
		});
	$('.gender .dropdown-menu a').on('click', function(){    
		$(".Gender").val($(this).html()); 
		input["Gender"]=$(this).html();
		});
	$('.profession .dropdown-menu a').on('click', function(){  
		$(".Profession").val($(this).html());  
		//$('.profession .dropdown-toggle').html($(this).html() + '<span class="caret"></span>'); 
		input["Profession_Name"]=$(this).html();
		});
	$('.institute .dropdown-menu a').on('click', function(){
		$(".Institute").val($(this).html());     
		//$('.institute .dropdown-toggle').html($(this).html() + '<span class="caret"></span>'); 
		input["Institute_Name"]=$(this).html();
		});
	$scope.onMouseClick_Changes = function ($event) {
		if($scope.onMouseLeave_First_Name_Result=="" && $scope.onMouseLeave_Last_Name_Result=="" && $scope.onMouseLeave_Email_Result=="" && $scope.onMouseLeave_ContactNumber_Result=="")
			{
			$http({
		  	method:'POST',
		  	url:'https://splitnsave.pythonanywhere.com/api/editprofile',
		  	data:JSON.stringify(input),
			 })
            .then(inputsuccesscallback,inputerrorcallback);
			}
		};
		 $scope.if_logged_in= function()
		 {
		 	return true;
		 };
	var inputsuccesscallback = function (response) {
			alert("Edit Profile Successfully");
			$log.info(response);
            };
	var inputerrorcallback = function(reason){
		alert("Try Again");
		$log.info(reason);
		};
});
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function  compare(birthdate)
{
	//alert("Hey");
	dob = birthdate.split("-");
	var d = new Date();
	var curr_date = d.getDate();
	var curr_month = d.getMonth();
	var curr_year = d.getFullYear();
	if(dob[2]>curr_year)
	{
		return true;
	}
	else if(curr_year==dob[2] && dob[1]>curr_month)
	{
		return true;
	}
	else if(curr_month==dob[1] && dob[0]>curr_date)
	{
		return true;
	}
	else
	{
		return false;
	}
}
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