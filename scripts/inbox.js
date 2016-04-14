var  messages=[
     {
        'username': 'Chaitanya',
        'content': 'Hi!'
      },
      {
        'username': 'Elisa',
        'content': 'Whats up?'
      },
      {
        'username': 'Chaitanya',
        'content': 'I found this nice AngularJS Directive'
      },
      {
        'username': 'Elisa',
        'content': 'Looks Great!'
      }
    ];
var msg;
var myapp = angular.module("myModule",['ngCookies']);
myapp.controller("Main",function($scope,$cookies,$http,$log){
$scope.messages=messages;
$scope.chatposition = function(username)
{
	if(username=='Chaitanya')
	{
		return 'col-md-7 pull-right'
	}
	else
	{
		return 'col-md-7 pull-left'
	}
}
window.setInterval(function() {
  var elem = document.getElementById('data');
  elem.scrollTop = elem.scrollHeight+10;
}, 5000);
$scope.send = function()
{
	messages.push({
    'username':   "Chaitanya",
   	'content': $scope.sendmessage
	});
	$scope.sendmessage="";
}
});