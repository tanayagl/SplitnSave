var myapp = angular.module("myModule",[]);
var user={
		Old_Password:"123456",
		New_Password:"",
	  };
myapp.controller("Main",function($scope){
	user['Type_Password']="";
	user['Confirm_Password']="";
	$scope.user=user;
	$scope.onMouseLeave_Type_Password_Result="";
	$scope.onMouseLeave_New_Password_Result="";
	$scope.onMouseLeave_Confirm_Password_Result="";
	$scope.onMouseLeave_Type_Password = function ($event) {
	if(user['Type_Password']=="")
	{
	$scope.onMouseLeave_Type_Password_Result="Old password is required";
	}
	else if(user['Type_Password']!=user['Old_Password'])
	{
	$scope.onMouseLeave_Type_Password_Result="Old password is not matched";
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
	$scope.onMouseLeave_Confirm_Password_Result="Confirm Password is not matched";
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

	
	$scope.onMouseClick_Changes = function ($event) {
	var v=[1,1,1];
	if(user['Type_Password']=="")
	{
	$scope.onMouseLeave_Type_Password_Result="Old password is required";
	}
	else if(user['Type_Password']!=user['Old_Password'])
	{
	$scope.onMouseLeave_Type_Password_Result="Old password is not matched";
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
	$scope.onMouseLeave_Confirm_Password_Result="Confirm Password is not matched";
	}
	else
	{
		$scope.onMouseLeave_Confirm_Password_Result="";
		v[2]=0;
	}
	if(v[1]==0 && v[2]==0 && v[0]==0)	
	{
		alert("jeje");
	}
	};
});
