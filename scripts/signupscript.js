var myapp = angular.module("myModule",['ngCookies']);
var input={
		First_Name:"",
		Last_Name:"",
		Email:"",
		ContactNumber:"",
		Password:"",
		Re_Password:"",
		City_Name:"",
		Birthdate:"",
		Gender:"",
		Institute_Name:"",
		Profession_Name:"",
		Image_Link:"",
	  };	
var Email={

};
var otp;
myapp.controller("Main",function($scope,$http,$log,$cookies,$location){
	$scope.show=false;
	$scope.Varification="";
	$scope.init = function() {
		//$cookies.put('Email', "devarshsheth13@gmail.com");
		//$cookies.put('username', "Devarsh");
		if($cookies.get('Email') != null) {
 		window.location.replace("homepage.html");
		}
		else
		{	
        $scope.show=true;
    	}
  };
	//};	
	$scope.user=input;
	$scope.onMouseLeave_First_Name_Result = "";
	$scope.onMouseLeave_Last_Name_Result = "";
	$scope.onMouseLeave_Email_Result = "";
	$scope.onMouseLeave_ContactNumber_Result = "";
	$scope.onMouseLeave_Password_Result = "";
	$scope.onMouseLeave_Re_Password_Result = "";
	$scope.onMouseLeave_DOB_Result = "";
	$scope.onMouseLeave_Profession_Name_Result = "";
	$scope.onMouseLeave_Institute_Name_Result = "";
	$scope.onMouseLeave_Image_Link_Result = "";
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
	$scope.onMouseChange_Email = function ($event) {
	if(input['Email']=="")
	{
	$scope.onMouseLeave_Email_Result = "Email is required";
	}
	else if(!(validateEmail(input['Email'])))
	{
	$scope.onMouseLeave_Email_Result = "Email is not in valid format"
	}
	else      //Send Email to backend to check email id is already exist or not
	{
	$scope.onMouseLeave_Email_Result="";
	}
	};
	$scope.onMouseLeave_Email = function ($event) {
	if(input['Email']=="")
	{
	$scope.onMouseLeave_Email_Result = "Email is required";
	}
	else if(!(validateEmail(input['Email'])))
	{
	$scope.onMouseLeave_Email_Result = "Invalid Email";
	}
	else      //Send Email to backend to check email id is already exist or not
	{
		var Email={
                    Email: input['Email'],
                   };
		 $http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/signupcheck',
		  data:JSON.stringify(Email),
		 })
            .then(emailsuccesscallback,emailerrorcallback);
	
	}
	};
	var emailsuccesscallback = function (response) {
               	var a = response.data.status;
               	
				$log.info(response);
					if(a!=0)
					{
						$scope.onMouseLeave_Email_Result="Email is already in use"	;
					}
					else
					{
						$scope.onMouseLeave_Email_Result="";
					}
					
            	};
	var emailerrorcallback = function(reason){
				alert("Server Problem");
				$log.info(reason);
				};
	$scope.onMouseLeave_ContactNumber = function ($event) {
	if(input['ContactNumber']=="")
	{
	$scope.onMouseLeave_ContactNumber_Result = "Contact Number is required";
	}
	else if(!(isNumber(input['ContactNumber'])))
	{
	$scope.onMouseLeave_ContactNumber_Result = "Invalid Number";
	}
	else if((input['ContactNumber'].length!=10))
	{
	$scope.onMouseLeave_ContactNumber_Result = "Contact number should be of 10 digits";
	}
	else
	{
	$scope.onMouseLeave_ContactNumber_Result="";
	}
	};
	$scope.onMouseLeave_Password = function ($event) {
	if(input['Password']=="")
	{
	$scope.onMouseLeave_Password_Result = "Password is required";
	}
	else if((input['Password'].length<6))
	{
	$scope.onMouseLeave_Password_Result = "Password length must be at least 6.";
	}
	else if(!(hasLowerCase(input['Password']) && hasUperCase(input['Password']) && hasNumberCase(input['Password'])))
	{
		$scope.onMouseLeave_Password_Result = "The password should contain at least one numeral, one lowercase letter and one uppercase letter";
	}
	else
	{
	$scope.onMouseLeave_Password_Result="";
	}
    };
    $scope.onMouseChange_Password = function ($event) {
	if(input['Password']=="")
	{
	}
	else
	{
	$scope.onMouseLeave_Password_Result="";
	}
    };
    $scope.onMouseLeave_Re_Password = function ($event) {
	if(input['Re_Password']=="")
	{
	$scope.onMouseLeave_Re_Password_Result = "Confirm Password is required";
	}
	else if((input['Password']!=input['Re_Password']))
	{
	$scope.onMouseLeave_Re_Password_Result = "Confirm Password does not match";
	}
	else
	{
	$scope.onMouseLeave_Re_Password_Result="";
	}
    };
     $scope.onMouseChange_Re_Password = function ($event) {
	if(input['Re_Password']=="")
	{
	$scope.onMouseLeave_Re_Password_Result = "Confirm Password is required";
	}
	else
	{
	$scope.onMouseLeave_Re_Password_Result="";
	}
    };
    $scope.onMouseLeave_CityName = function ($event) {
	if(input['City_Name']=="")
	{
	$scope.onMouseLeave_CityName_Result = "Location is required";
	}
	else
	{
	$scope.onMouseLeave_CityName_Result="";
	}
    };
    $scope.onMouseLeave_Gender = function ($event) {
	if(input['Gender']=="")
	{
	$scope.onMouseLeave_Gender_Result = "Gender is required";
	}
	else
	{
	$scope.onMouseLeave_Gender_Result="";
	}
    };
    $scope.onMouseLeave_Profession_Name = function ($event) {
	if(input['Profession_Name']=="")
	{
	$scope.onMouseLeave_Profession_Name_Result = "Profession is required";
	}
	else
	{
	$scope.onMouseLeave_Profession_Name_Result="";
	}
    };

    $scope.onMouseLeave_Institute_Name = function ($event) {
	if(input['Institute_Name']=="")
	{
	$scope.onMouseLeave_Institute_Name_Result = "Institute is required";
	}
	else
	{
	$scope.onMouseLeave_Institute_Name_Result="";
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
	$scope.onMouseLeave_OTP = function($event)
	{
		$scope.onMouseLeave_Varification_Result="";
	}
   $scope.onMouseLeave_Submit = function ($event) {
   	var success=1;
    if(input['First_Name']=="")
    {
    	$scope.onMouseLeave_First_Name_Result = "First Name is required";
    	success=0;
    }
    if(input['Last_Name']=="")
    {
    	$scope.onMouseLeave_Last_Name_Result = "Last Name is required";
    	success=0;
    }
    if(input['Email']=="")
    {
    	$scope.onMouseLeave_Email_Result = "Email is required";
    	success=0;
    }
    else if($scope.onMouseLeave_Email_Result=="")    //Send Email to backend to check email id is already exist or not
	{
		var Email={
                    Email: input['Email'],
                   };
		$http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/signupcheck',
		  data:JSON.stringify(Email),
		 })
            .then(emailsuccesscallback,emailerrorcallback);
	
	}
    if(input['Password']=="")
    {
    	$scope.onMouseLeave_Password_Result = "Password is required";
    	success=0;
    }
    else if((input['Password'].length<6))
	{
	$scope.onMouseLeave_Password_Result = "Password length must be at least 6.";
	}
    if(input['Re_Password']=="")
    {
    	$scope.onMouseLeave_Re_Password_Result = "Confirm Password is required";
    	success=0;
    }
    if(input['ContactNumber']=="")
    {
    	$scope.onMouseLeave_ContactNumber_Result = "Contact Number is required";
    	success=0;
    }
    if(input['City_Name']=="")
    {
    	$scope.onMouseLeave_CityName_Result = "Location is required";
    	success=0;
    }
    if(input['Gender']=="")
    {
    	$scope.onMouseLeave_Gender_Result = "Gender is required";
    	success=0;
    }
     if(input['Birthdate']=="")
    {
    	$scope.onMouseLeave_DOB_Result = "Birthdate is required";
    	success=0;
    }
  	
    if(input['Profession_Name']=="")
    {
    	$scope.onMouseLeave_Profession_Name_Result = "Profession is required";
    	success=0;
    }
    if(input['Institute_Name']=="")
    {
    	$scope.onMouseLeave_Institute_Name_Result = "Institute is required";
    	success=0;
    }
    if($scope.onMouseLeave_Institute_Name_Result=="" && $scope.onMouseLeave_Profession_Name_Result=="" &&  $scope.onMouseLeave_Gender_Result=="" && $scope.onMouseLeave_CityName_Result=="" && $scope.onMouseLeave_ContactNumber_Result=="" && $scope.onMouseLeave_Password_Result=="" && $scope.onMouseLeave_Re_Password_Result=="" && $scope.onMouseLeave_Email_Result=="" && $scope.onMouseLeave_First_Name_Result=="" && $scope.onMouseLeave_Last_Name_Result=="" && $scope.onMouseLeave_DOB_Result=="")
    {
    	 Email['Email']=input['Email'];
    	$http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/verify',
		  data:JSON.stringify(Email),
		 })
            .then(verifysuccesscallback,verifyerrorcallback);
           	
};
  	}
   	var verifysuccesscallback = function (response) {
			$log.info(response);
			$(".bs-example2-modal-sm").modal('show');
			otp=response.data.code;
            };
	var verifyerrorcallback = function(reason){
		alert("Try Again");
		$log.info(reason);
		};
	$scope.login_varied = function(event)
	{
		if($scope.Varification==otp)
		{
			if(input['Gender']=='Male')
			{
				input['Image_Link']='https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png';
			}
			else
			{
				input['Image_Link']="https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/girl-512.png";	
			}
			$http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/signup',
		  data:JSON.stringify(input),
		 })
            .then(inputsuccesscallback,inputerrorcallback);
		}
		else
		{
			$scope.onMouseLeave_Varification_Result="Wrong Code";
		}
	};
   
    
    $scope.onMouseLeave_Login = function(event)
    {
    	$(".bs-example-modal-sm").modal('show');
    }
    $scope.signup = function()
	{
		     $cookies.put('otherpage','signup.html');
		     window.location.href="signup.html";
	};
    var inputsuccesscallback = function (response) {
			$log.info(response);
			$cookies.put('Email', input['Email']);
			$cookies.put('username', input['First_Name']);
            window.location.replace("homepage.html");
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
function hasLowerCase(str) {
    return (/[a-z]/.test(str));
}
function hasUperCase(str) {
    return (/[A-Z]/.test(str));
}
function hasNumberCase(str) {
    return (/[0-9]/.test(str));
}