'use strict';
var Apartments = [{
    'Title':"Goa Journey",
    'Description':"knjdn beudhe judbeudh ud;weuhd edhuwedhedh dueud",
    'Price':"250",
    'Image_Link':"http://ciaobambino.wpengine.netdna-cdn.com/wp-content/uploads/2013/08/westin-kaanapali-villa-ocean-view-living-room.jpg",
    'Sharers':"2",
    'Gender':"Male",
    "Location":"Ahmedabad",
    "Start_Date":"2016-04-12",
    "Start_Time":"",
    "End_Date":"2016-05-20",
    "End_Time":"",
    "CarService":"Ola",
    "CarType":"Small",
    "CarName":"",
    'Hosted':"Chaitanya",
    'Rating':3,
    'Options':[{
         Option_Name:"Smoking",
         Option_Value:1
      },
      {
         Option_Name:"Kids",
         Option_Value:0
      },
      {
         Option_Name:"Luggage",
         Option_Value:0
      },
      {
       Option_Name:"Pets",
         Option_Value:0
      },
      {
         Option_Name:"Music",
         Option_Value:0
      },
      {
         Option_Name:"Non Stop Journey",
         Option_Value:0
      }]
}, {
    'Title':"Udaipur",
    'Description':"jnnejn uebduedb uedhdheudh",
    'Price':"350",
    'Image_Link':"http://ciaobambino.wpengine.netdna-cdn.com/wp-content/uploads/2013/08/westin-kaanapali-villa-ocean-view-living-room.jpg",
    'Sharers':"1",
    'Gender':"Female",
   "Location":"Ahmedabad",
    "Start_Date":"2016-04-12",
    "Start_Time":"",
    "End_Date":"2016-05-2",
    "End_Time":"",
    "CarService":"Uber",
    "CarType":"Large",
    "CarName":"",
    'Hosted':"Chaitanya",
      'Rating':2.8,
      'Options':[{
         Option_Name:"Smoking",
         Option_Value:1
      },
      {
         Option_Name:"Kids",
         Option_Value:1
      },
      {
         Option_Name:"Luggage",
         Option_Value:1
      },
      {
       Option_Name:"Pets",
         Option_Value:0
      },
      {
         Option_Name:"Music",
         Option_Value:0
      },
      {
         Option_Name:"Non Stop Journey",
         Option_Value:0
      }]
}, {
    'Title':"Simla",
    'Description':"jendjnjed eudbedh ulegdey uqwhduwqh uihduedh weudgeudg ",
    'Price':"650",
    'Image_Link':"http://ciaobambino.wpengine.netdna-cdn.com/wp-content/uploads/2013/08/westin-kaanapali-villa-ocean-view-living-room.jpg",
    'Sharers':"1",
    'Gender':"Male",
    "Location":"Rajkot",
    "Start_Date":"2016-04-23",
    "Start_Time":"",
    "End_Date":"2016-05-2",
    "End_Time":"",
    "CarService":"Ola",
    "CarType":"Large",
    "CarName":"",
    'Hosted':"Chaitanya",
    'Rating':0,
    'Options':[{
         Option_Name:"Smoking",
         Option_Value:0
      },
      {
         Option_Name:"Kids",
         Option_Value:0
      },
      {
         Option_Name:"Luggage",
         Option_Value:0
      },
      {
       Option_Name:"Pets",
         Option_Value:0
      },
      {
         Option_Name:"Music",
         Option_Value:0
      },
      {
         Option_Name:"Non Stop Journey",
         Option_Value:0
      }]
}, {
    'Title':"Panchmadhi",
    'Description':"sniowdj uhdwudhw udbwydhw",
    'Price':"610",
    'Image_Link':"http://ciaobambino.wpengine.netdna-cdn.com/wp-content/uploads/2013/08/westin-kaanapali-villa-ocean-view-living-room.jpg",
    'Sharers':"2",
    'Gender':"Male",
     "Location":"Ahmedabad",
    "Start_Date":"2016-03-12",
    "Start_Time":"",
    "End_Date":"2016-05-2",
    "End_Time":"",
    "CarService":"Uber",
    "CarType":"Medium",
    "CarName":"",
    'Hosted':"Chaitanya",
     'Rating':1,
     'Options':[{
         Option_Name:"Smoking",
         Option_Value:0
      },
      {
         Option_Name:"Kids",
         Option_Value:0
      },
      {
         Option_Name:"Luggage",
         Option_Value:0
      },
      {
       Option_Name:"Pets",
         Option_Value:0
      },
      {
         Option_Name:"Music",
         Option_Value:0
      },
      {
         Option_Name:"Non Stop Journey",
         Option_Value:0
      }]
}];
var filteroption=[{
         Option_Name:"No Smoking",
         Option_Value:0
      },
      {
         Option_Name:"No Kids",
         Option_Value:0
      },
      {
         Option_Name:"No Luggage",
         Option_Value:0
      },
      {
       Option_Name:"No Pets",
         Option_Value:0
      },
      {
         Option_Name:"No Music",
         Option_Value:0
      },
      {
         Option_Name:"Non Stop Journey",
         Option_Value:0
      }];
var Category={

};
var myapp = angular.module("myModule",['ngCookies']);
myapp.controller("Main",function($scope,$cookies,$http,$log){
        $scope.show=false;

    $scope.init = function() {
       // $cookies.put('Email', "devarshsheth13@gmail.com");
       // $cookies.put('username', "Devarsh");
            Category.Category_Id='2';
        // $cookies.remove('Email')2
         $http({
          method:'POST',
          url:'https://splitnsave.pythonanywhere.com/api/productresults',
          data:JSON.stringify(Category),
         })
            .then(successcallback,errorcallback);
    
          if($cookies.get('searchpage')==null)
        {
        }
        else
        {
        $scope.searchText=$cookies.get('searchpage');
      
        $cookies.remove('searchpage');
        }
   
     $scope.show=true;
  
    };
    var successcallback = function (response) {
                $scope.show=true;
                $log.info(response);
                $scope.options=filteroption;
                $scope.products=response.data.products;
              };
    var errorcallback = function(reason){
        alert("Reload Again");
        $log.info(reason);
        };
    $scope.gotoproduct = function(productid)
    {
      $cookies.put('productid',productid);
     // alert(productid);
      window.location.href='product_detail.html';
    };
        //$scope.searchText="Raj";
       // $scope.options=filteroption;
       // $scope.products = Apartments;
        $scope.genderoption=0;
        $scope.serviceoption=0;
        $scope.typeoption=0;
        $scope.search = function(item) {
            if ($scope.searchText == undefined) {
                return true;
            } else {
                if (item.product.Title.toLowerCase()
                    .indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.product.Location.toLowerCase()
                    .indexOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        };
        $scope.gender = function(item) {
            if ($scope.genderoption == 0) {
                return true;
            } else {
                if ($scope.genderoption==item.product.Gender) {
                    return true;
                }
            }
            return false;
        };
        $scope.service = function(item) {
            if ($scope.serviceoption == 0) {
                return true;
            } else {
                if ($scope.serviceoption==item.product.CarService) {
                    return true;
                }
            }
            return false;
        };
          $scope.type = function(item) {
            if ($scope.typeoption == 0) {
                return true;
            } else {
                if ($scope.typeoption==item.product.CarType) {
                    return true;
                }
            }
            return false;
        };
       $scope.sharer = function(item) {
            if ($scope.optionsharer==null){
                return true;
            } else {
                if ($scope.optionsharer==item.product.Sharers) {
                    return true;
                }
            }
            return false;
        };
        $scope.sorting = function(order)
        {
            $scope.sortconstant = order;
        };
      //  alert(filteroption.length)
        $scope.animity = function(item)
        {
           // alert(filteroption[0].Option_Value);
            var len=filteroption.length;
            var ans=1;
            var i=0;
           for(i=0;i<len;i++)
            {
                if(filteroption[i].Option_Value=="0")
                {
                    ans=0;
                }
                else
                {
                    if(filteroption[i].Option_Value==item.product.Options[i].Option_Value)
                    {
                        ans = 0;
                    }
                    else
                    {
                        ans = 1;
                        break;
                    }
                }
            }
            if(i==len)
            {
                return true;
            }
            else
            {
                return false;
            }
            return true;
        }

        $scope.signup = function()
      {
     $cookies.put('otherpage','cabs.html');
     window.location.href="signup.html";
      };
        
    });

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
