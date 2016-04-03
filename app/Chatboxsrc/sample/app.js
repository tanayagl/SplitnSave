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
  
  angular.module('app', ['irontec.simpleChat']);

  angular.module('app').controller('Shell',function($scope,$http,$log) {
    $scope.bool=false;
    $scope.Users=Users;
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

    var vm = this;
    $scope.userid=0;
    vm.messages=Users[$scope.userid].messages;
    vm.username=Users[$scope.userid].First_Name;
    vm.sendMessage = function(message, username) {
      if(message && message !== '' && username) {
        vm.messages.push({
          'username': username,
          'content': message
        });
      }
    };
    vm.visible = true;
    vm.expandOnNew = true;
    
  });


