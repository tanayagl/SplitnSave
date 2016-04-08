var myapp = angular.module("myModule",[]);

myapp.controller("Main",function($scope){
	var input={
		First_Name:"Riddhesh",
		Last_Name:"Markandeya",
		Email:"riddhesh2307@gmail.com",
		ContactNumber:"8401405853",
		CityName:"Ahmedabad",
		Birthdate:"24/7/1996",
		Gender:"Male",
		Institute_Name:"DA-IICT",
		Profession_Name:"Student",
		Rating:"4.7",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  };
	$scope.user=input;
	$scope.expression = function(id)
	{
		if(id==Math.round(input['Rating']))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
});

