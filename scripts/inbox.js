  var input={
  };
  var send={

  };
var myapp = angular.module("myModule",['ngCookies']);
myapp.controller("Main",function($scope,$cookies,$http,$log){

  $scope.show=false;
    $scope.init = function()
    {
      //$cookies.put('usermsg',2)
      //alert($cookies.get('Email'));
     // $cookies.remove('Email');
      if($cookies.get('Email') == null) 
      {
        window.location.replace("../../homepage.html");
      }
      else
      {
           $scope.show=true;
           input['Email']=$cookies.get('Email');
           $http({
        method:'POST',
        url:'https://splitnsave.pythonanywhere.com/api/dashboard',
        data:JSON.stringify(input),
       })
              .then(chat,error);
        }

    };
    var i;
    $scope.chatname="Split 'n' Save";
    var chat = function (response) {
              $log.info(response);
              $scope.Users=response.data.users;
              //messages=response.data.Chats;
            };
    
    var error = function(reason){
            alert("Try Again");
            $log.info(reason);
            };

          
$scope.cambiaridioma=function(userid)
{
  input['Email']=$cookies.get('Email');
  input['User_Id']=userid;
  $cookies.put('usermsg',userid);
      
  $http({
        method:'POST',
        url:'https://splitnsave.pythonanywhere.com/api/getchats',
        data:JSON.stringify(input),
       })
              .then(chatsuccesscallback,chaterrorcallback);

  var elem = document.getElementById('data');
  elem.scrollTop = elem.scrollHeight+10;
}
   var chatsuccesscallback = function (response) {
              $log.info(response);
              //$scope.Users=response.data.Users;
              //messages=response.data.Chats;
              $scope.messages=response.data.Chats;
              for(i=0;i<$scope.Users.length;i++)
              {
                if($scope.Users[i].User_Id==$cookies.get('usermsg'))
                {
                   $scope.chatname=$scope.Users[i].First_Name;
                   break;
                }
              }
              
            };
    
    var chaterrorcallback = function(reason){
           // alert("Try Again");
            $log.info(reason);
            };
//$scope.messages=messages;
//$scope.Users=Users;
$scope.chatposition = function(username)
{
  if(username==$cookies.get('username'))
  {
    return 'col-md-7 pull-right'
  }
  else
  {
    return 'col-md-7 pull-left'
  }
}
var e = jQuery.Event("keypress");
e.which = 13; //choose the one you want
e.keyCode = 13;
$("#theInputToTest").trigger(e);
window.setInterval(function() {
  if($cookies.get('usermsg')!=null)
        {
  input['Email']=$cookies.get('Email');
  input['User_Id']=$cookies.get('usermsg');
  $http({
        method:'POST',
        url:'https://splitnsave.pythonanywhere.com/api/getchats',
        data:JSON.stringify(input),
       })
              .then(chatsuccesscallback,chaterrorcallback);
          }
}, 5000);
$scope.send = function()
{
  if($scope.sendmessage!=null)
  {
  $scope.messages.push({
    'username':   "Chaitu",
    'content': $scope.sendmessage
  });
  send['Email']=$cookies.get('Email');
  send['User_Id']=$cookies.get('usermsg');
  send['Message']=$scope.sendmessage;
  //alert($cookies.get('Email'));
   $http({
        method:'POST',
        url:'https://splitnsave.pythonanywhere.com/api/addchat',
        data:JSON.stringify(send),
       })
              .then(sendsuccesscallback,senderrorcallback);
              var elem = document.getElementById('data');
  elem.scrollTop = elem.scrollHeight+10;
  }
  $scope.sendmessage="";
 
}
var sendsuccesscallback = function (response) {
              $log.info(response);
            };
    
var senderrorcallback = function(reason){
            alert("Try Again");
            $log.info(reason);
            };

var i = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
  input['Email']=$cookies.get('Email');
  input['User_Id']=$cookies.get('usermsg');
  $http({
        method:'POST',
        url:'https://splitnsave.pythonanywhere.com/api/getchats',
        data:JSON.stringify(input),
       })
              .then(chatsuccesscallback,chaterrorcallback);          //  your code here
      i++;                     //  increment the counter
      if (i < 10) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, 5000)
}
$scope.search = function (item) {
                if ($scope.searchText == undefined) {
                    return true;
                }
                else {
                    if (item.First_Name.toLowerCase()
                                 .indexOf($scope.searchText.toLowerCase()) != -1 ||
                        item.Last_Name.toLowerCase()
                                 .indexOf($scope.searchText.toLowerCase()) != -1) {
                        return true;
                    }
                }

                return false;
            };
});

