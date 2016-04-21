var myapp = angular.module("myModule",['ngCookies']);
var user={
		//Old_Password:"123456",
		//New_Password:"",
	  };
myapp.controller("Main",function($scope,$cookies,$http,$log,$window){
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
		  url:'https://splitnsave.pythonanywhere.com/api/settings',
		  data:JSON.stringify(Email),
		 })
            .then(successcallback,errorcallback);
         }

  
};
//$scope.user=user
var successcallback = function (response) {
               	$log.info(response);
               	user=response.data;
               	user['New_Password']="";
               	user['Type_Password']="";
				user['Confirm_Password']="";
				user['Delete_Type_Password']=="";
				$scope.user=user;
               	$scope.show=true;
            	};
var errorcallback = function(reason){
				alert("Server Problem");
				$log.info(reason);
				};
	$scope.onMouseLeave_Type_Password_Result="";
	$scope.onMouseLeave_Password_Result="";
	$scope.onMouseLeave_New_Password_Result="";
	$scope.onMouseLeave_Confirm_Password_Result="";
	$scope.onMouseLeave_Type_Password = function ($event) {
	if(user['Type_Password']=="")
	{
	$scope.onMouseLeave_Type_Password_Result="Old password is required";
	}
	else if(user['Type_Password']!=user['Old_Password'])
	{
	$scope.onMouseLeave_Type_Password_Result="Old password entered is incorrect";
	}
	else
	{
		$scope.onMouseLeave_Type_Password_Result="";
	}
    };
  	$scope.onMouseChange_Type_Password = function ($event) {
	if(user['Type_Password']=="")
	{
	$scope.onMouseLeave_Type_Password_Result="Old password is required";
	}
	else
	{
		$scope.onMouseLeave_Type_Password_Result="";
	}
    };
    $scope.onMouseLeave_New_Password = function ($event) {
	if(user['New_Password']=="")
	{
	$scope.onMouseLeave_New_Password_Result="New password is required";
	}
	else if((user['New_Password'].length)<6)
	{
	$scope.onMouseLeave_New_Password_Result="Password length must be atleast 6";
	}
	else
	{
		$scope.onMouseLeave_New_Password_Result="";
	}
    };
    $scope.onMouseChange_New_Password = function ($event) {
	if(user['New_Password']=="")
	{
	$scope.onMouseLeave_New_Password_Result="New password is required";
	}
	else
	{
		$scope.onMouseLeave_New_Password_Result="";
	}
    };
    $scope.onMouseLeave_Confirm_Password = function ($event) {
	if(user['Confirm_Password']=="")
	{
	$scope.onMouseLeave_Confirm_Password_Result="Confirm password is required";
	}
	else if(user['New_Password']!=user['Confirm_Password'])
	{
	$scope.onMouseLeave_Confirm_Password_Result="Confirm password must match new password";
	}
	else
	{
		$scope.onMouseLeave_Confirm_Password_Result="";
	}
    };
    $scope.onMouseChange_Confirm_Password = function ($event) {
	if(user['Confirm_Password']=="")
	{
	$scope.onMouseLeave_Confirm_Password_Result="Confirm password is required";
	}
	else
	{
		$scope.onMouseLeave_Confirm_Password_Result="";
	}
    };

	$scope.onMouseChange_Type_Delete_Password = function($event)
	{
		if(user['Delete_Type_Password']=="")
		{
			$scope.onMouseLeave_Password_Result="Password is required";
		}
		else
		{
			$scope.onMouseLeave_Password_Result=""
		}
	};
	$scope.onMouseClick_Delete = function($event)
	{
		if(user['Delete_Type_Password']==undefined)
		{

			$scope.onMouseLeave_Password_Result="Password is required";
		}
		else if(user['Delete_Type_Password']!=user['Old_Password'])
		{
			$scope.onMouseLeave_Password_Result="Password is not matched";
		}
		else
		{
			if ($window.confirm("Are you sure you want to delete your account? If yes then press Ok otherwise press Cancel")) {

    	 		var input={
                    Email: $cookies.get('Email'),
                   };
				 $http({
						  method:'POST',
						  url:'https://splitnsave.pythonanywhere.com/api/deleteaccount',
						  data:JSON.stringify(input),
						 })
		            .then(deletesuccesscallback,deleteerrorcallback);
				
                    
                } else {
                   
                }
			
		}
	};
	$scope.onMouseClick_Changes = function ($event) {
	var v=[1,1,1];
	if(user['Type_Password']=="")
	{
	$scope.onMouseLeave_Type_Password_Result="Old password is required";
	}
	else if(user['Type_Password']!=user['Old_Password'])
	{
	$scope.onMouseLeave_Type_Password_Result="Old password entered is incorrect";
	}
	else
	{
		$scope.onMouseLeave_Old_Password_Result="";
		v[0]=0;
	}
	if(user['New_Password']=="")
	{
	$scope.onMouseLeave_New_Password_Result="New password is required";
	}
	else if((user['New_Password'].length)<6)
	{
	$scope.onMouseLeave_New_Password_Result="Password length must be atleast 6";
	}
	else
	{
		$scope.onMouseLeave_New_Password_Result="";
		v[1]=0;
	}	
	if(user['Confirm_Password']=="")
	{
	$scope.onMouseLeave_Confirm_Password_Result="Confirm password is required";
	}
	else if(user['New_Password']!=user['Confirm_Password'])
	{
	$scope.onMouseLeave_Confirm_Password_Result="Confirm password must match new password’";
	}
	else
	{
		$scope.onMouseLeave_Confirm_Password_Result="";
		v[2]=0;
	}
	if(v[1]==0 && v[2]==0 && v[0]==0)	
	{
		var input={
                    Email: $cookies.get('Email'),
                    New_Password:user.New_Password,
                   };
		 $http({
			  method:'POST',
			  url:'https://splitnsave.pythonanywhere.com/api/changepassword',
			  data:JSON.stringify(input),
			 })
            .then(updatesuccesscallback,updateerrorcallback);
	}
	
	};
	var updatesuccesscallback = function (response) {
               	$log.info(response);
               	location.reload();
            	};
	var updateerrorcallback = function(reason){
				alert("Server Problem");
				$log.info(reason);
				};
	var deletesuccesscallback = function (response) {
				$cookies.remove('Email');
               	$log.info(response);
               	location.reload();
            	};
	var deleteerrorcallback = function(reason){
				alert("Server Problem");
				$log.info(reason);
				};
});
