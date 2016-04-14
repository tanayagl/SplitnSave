var Users =[
  {
    First_Name:"Chaitanya",
    Last_Name:"Shah",
    Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
    User_Id:"1",
    Date:"30/3/2016",
    messages:[
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
    ]
  },
  {
    First_Name:"Zarna",
    Last_Name:"Parekh",
    Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
    User_Id:"2",
    Date:"30/03/2016",
    messages:[
     {
        'username': 'Zarna',
        'content': 'Hei!'
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
        'username': 'Zarna',
        'content': 'Looksskssns Great!'
      }
    ]
  },
  {
    First_Name:"Devarsh",
    Last_Name:"Shah",
    Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
    User_Id:"3",
    Date:"30/03/2016",
    messages:[
     {
        'username': 'Chaitanysa',
        'content': 'Hssssi!'
      },
      {
        'username': 'Elsssisa',
        'content': 'Whaccmkts up?'
      },
      {
        'username': 'Chaisksmtanya',
        'content': 'I foslsund this nice AngularJS Directive'
      },
      {
        'username': 'Elisa',
        'content': 'Looks Great!'
      }
    ]
  },
  {
    First_Name:"Henil",
    Last_Name:"Shah",
    Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
    User_Id:"4",
    Date:"30/03/2016",
    messages:[
     {
        'username': 'Shivam',
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
    ]
  },
  {
    First_Name:"Riddhesh",
    Last_Name:"Markandeya",
    Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
    User_Id:"5",
    Date:"30/03/2016",
    messages:[
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
    ]
  }
  ];
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
  angular.module('app', ['irontec.simpleChat','ngCookies']);
  var input={
  };
  var send={

  };

  angular.module('app').controller('Shell',function($scope,$http,$log,$cookies,$http) {
    $scope.show=false;
      var vm = this;
    //vm.messages=messages;
    //vm.username='Chaitanya';
    //$scope.messages=messages;
    $scope.init = function()
    {
      //$cookies.put('Email','shahchaitu4@gmail.com');
     // $cookies.put('username','Chaitanya');
      $cookies.put('usermsg',2)
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
           input['User_Id']=$cookies.get('usermsg');
           $http({
        method:'POST',
        url:'https://splitnsave.pythonanywhere.com/api/getchats',
        data:JSON.stringify(input),
       })
              .then(chatsuccesscallback,chaterrorcallback);
        }
    };
    var chatsuccesscallback = function (response) {
              $log.info(response);
              $scope.Users=response.data.Users;
              messages=response.data.Chats;
              $scope.username=$cookies.get['username'];
              $scope.messages=messages;
            };
    
    var chaterrorcallback = function(reason){
            alert("Try Again");
            $log.info(reason);
            };
      //vm.messages=messages;
    $scope.postad = function()
    {
    alert($cookies.get('Email'));
    window.location.href="../../post_product.html";
    };
    $scope.username=$cookies.get('username');
    $scope.if_logged_in= function()
    {
        if($cookies.get('Email')!=null)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    $scope.signout = function()
    {
    $cookies.remove('Email');
    $cookies.remove('username');
    $cookies.remove('otheruserid');
    location.reload();
    };
    //$scope.Users=Users;
    var date = new Date();
    
    $scope.displayDay=function(past_day)
    {
      var temp=(past_day).split("/");
      var second=new Date(date.getFullYear(),date.getMonth(),date.getDay()+26);
      var first= new Date(temp[2],temp[1]-1,temp[0]);
      var diff = Math.round((first-second)/(1000*60*60*24));
     // alert(diff);
      if(diff==0)
      {
        return "Today";
      }
      else if(diff==1)
      {
        return "Yesterday";
      }
      else
      {
        return past_day;
      }

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
    $("#chat-container").show();
    $(window).resize(function(){
    if(window.innerWidth<768)
    {
      $('#contact-list').css('width', '100%');
      $("#chat-container").hide();
      $('.list-group-item').attr('data-target','#myModal');
    }
    else
    {
      $('#contact-list').css('width', '40%');
      $("#chat-container").show();
      $('.list-group-item').attr('data-target','');
    }
});

  
    vm.sendMessage = function(message, username) {
      if(message && message !== '' && username) {
        vm.messages.push({
          'username': username,
          'content': message
        });
      }
      send['Email']=$cookies['Email'];
      send['User_Id']=$cookies.get('usermsg');
      send['Chats']=vm.messages;
       $http({
        method:'POST',
        url:'https://splitnsave.pythonanywhere.com/api/getchats',
        data:JSON.stringify(input),
       })
              .then(sendsuccesscallback,senderrorcallback);
    };

    vm.visible = true;
    vm.expandOnNew = true;
    
  });

