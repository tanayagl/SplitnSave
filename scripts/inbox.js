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
var Users =[
  {
    First_Name:"Chaitanya",
    Last_Name:"Shah",
    Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
    User_Id:"1",
    Date:"30/3/2016",
  },
  {
    First_Name:"Zarna",
    Last_Name:"Parekh",
    Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
    User_Id:"2",
    Date:"30/03/2016",
  },
  {
    First_Name:"Devarsh",
    Last_Name:"Shah",
    Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
    User_Id:"3",
    Date:"30/03/2016",
  },
  {
    First_Name:"Henil",
    Last_Name:"Shah",
    Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
    User_Id:"4",
    Date:"30/03/2016",
  },
  {
    First_Name:"Riddhesh",
    Last_Name:"Markandeya",
    Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
    User_Id:"5",
    Date:"30/03/2016",
  }
  ];
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
           if($cookies.get('usermsg')!=null)
           {

           input['User_Id']=$cookies.get('usermsg');
           $http({
        method:'POST',
        url:'https://splitnsave.pythonanywhere.com/api/getchats',
        data:JSON.stringify(input),
       })
              .then(chatsuccesscallback,chaterrorcallback);
          }
        }
        else
        {

        }
    };
   var chatsuccesscallback = function (response) {
              $log.info(response);
              $scope.Users=response.data.Users;
              //messages=response.data.Chats;
              $scope.messages=response.data.Chats;
            };
    
    var chaterrorcallback = function(reason){
            alert("Try Again");
            $log.info(reason);
            };
//$scope.messages=messages;
//$scope.Users=Users;
$scope.chatposition = function(username)
{
  if(username=='Chaitu')
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
  var elem = document.getElementById('data');
  elem.scrollTop = elem.scrollHeight+10;
}, 1000);
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
  alert($cookies.get('Email'));
   $http({
        method:'POST',
        url:'https://splitnsave.pythonanywhere.com/api/addchat',
        data:JSON.stringify(send),
       })
              .then(sendsuccesscallback,senderrorcallback);
  }
  $scope.sendmessage="";
}
$scope.cambiaridioma = function(User_Id)
{
  
}
var sendsuccesscallback = function (response) {
              $log.info(response);
            };
    
var senderrorcallback = function(reason){
            alert("Try Again");
            $log.info(reason);
            };
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