var myapp = angular.module("splitnSaveApp");
var Users=[{
		First_Name:"Chaitanya",
		Last_Name:"Shah",
		User_Id:"1",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Zarana",
		Last_Name:"Parekh",
		User_Id:"2",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Chaitanya",
		Last_Name:"Shah",
		User_Id:"1",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Zarana",
		Last_Name:"Parekh",
		User_Id:"2",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Chaitanya",
		Last_Name:"Shah",
		User_Id:"1",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Zarana",
		Last_Name:"Parekh",
		User_Id:"2",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Chaitanya",
		Last_Name:"Shah",
		User_Id:"1",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Zarana",
		Last_Name:"Parekh",
		User_Id:"2",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  }];
var Notifications=[{
		Message:"New messages from Chaitanya",
		Type:"1"
	  },
	  {
		Message:"Chaitanya is interested to share products with you",
		Type:"3"
	  },
	  {
		Message:"Hey! Sealed the deal with Chaitanya confirm it here to rate him/her later.",
		Type:"2"
	  },
	  {
		Message:"New messages from Chaitanya",
		Type:"1"
	  },
	  {
		Message:"Chaitanya is interested to share products with you",
		Type:"3"
	  },
	  {
		Message:"Hey! Sealed the deal with Chaitanya confirm it here to rate him/her later.",
		Type:"2"
	  },
	  {
		Message:"Chaitanya is interested to share products with you",
		Type:"3"
	  },
	  {
		Message:"Hey! Sealed the deal with Chaitanya confirm it here to rate him/her later.",
		Type:"2"
	  }];
var input={
	First_Name:"Riddhesh",
	Last_Name:"Markandeya",
	User_Id:'3',
	Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
};
myapp.controller("DashbsoardCtrl",function($scope){
$scope.Users = Users;
$scope.input=input;
$scope.Notifications= Notifications;
$scope.changeColor = function(person, bool) {
    if(bool === true) {
        $scope.personColour = {background: 'red'};
    } else if (bool === false) {
        $scope.personColour = {background: 'white'}; //or, whatever the original color is
    }
};
$scope.changeGlyphicon = function(Type){
	if(Type=='1')
	{
		return "glyphicon glyphicon-envelope";
	}
	else if(Type=="2")
	{
		return "glyphicon glyphicon-shopping-cart";
	}
	else
	{
		return "glyphicon glyphicon-user";
	}
};
$scope.deleteNotifications = function(notification)
{
	var index = $scope.Notifications.indexOf(notification);
  	$scope.Notifications.splice(index, 1);     
};
$scope.moveProfile = function(userid)
{
	alert("Move to userid " + userid+ " page");
}
});