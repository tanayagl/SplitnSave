'use strict';
var Apartments = [{
    'Title':"Abcdh ebe",
    'Description':"knjdn beudhe judbeudh ud;weuhd edhuwedhedh dueud",
    'Price':"250",
    'Image_Link':"http://ciaobambino.wpengine.netdna-cdn.com/wp-content/uploads/2013/08/westin-kaanapali-villa-ocean-view-living-room.jpg",
    'Sharers':"2",
    'Gender':"Male",
    "Start_Date":"2016-03-12",
    "Start_Time":"3 AM",
    "End_Date":"2016-03-19",
    "End_Time":"5 PM",
    "Weights":"6",
    'Location':"Ahmedabad",
    'Hosted':"Chaitanya",
    'Rating':3,
    'Options':[{
         Option_Name:"White Clothes",
         Option_Value:1
      },
      {
         Option_Name:"Light Clothes",
         Option_Value:1
      },
      {
         Option_Name:"Cotton Clothes",
         Option_Value:1
      },
      {
       Option_Name:"Silk Clothes",
         Option_Value:0
      },
      {
         Option_Name:"DryCleaning",
         Option_Value:0
      },
      {
         Option_Name:"SteamPress",
         Option_Value:0
      },
      {
         Option_Name:"Fabric Softner",
         Option_Value:0
      }]
}, {
    'Title':"Alske EHbe",
    'Description':"jnnejn uebduedb uedhdheudh",
    'Price':"350",
    'Image_Link':"http://ciaobambino.wpengine.netdna-cdn.com/wp-content/uploads/2013/08/westin-kaanapali-villa-ocean-view-living-room.jpg",
    'Sharers':"1",
    'Gender':"Female",
    "Start_Date":"2016-03-11",
    "Start_Time":"3 AM",
    "End_Date":"2016-03-19",
    "End_Time":"5 PM",
    "Weights":"9",
    'Location':"Vadodara",
    'Hosted':"Chaitanya",
    'Rating':2.8,
    'Options':[{
         Option_Name:"White Clothes",
         Option_Value:0
      },
      {
         Option_Name:"Light Clothes",
         Option_Value:1
      },
      {
         Option_Name:"Cotton Clothes",
         Option_Value:0
      },
      {
       Option_Name:"Silk Clothes",
         Option_Value:1
      },
      {
         Option_Name:"DryCleaning",
         Option_Value:0
      },
      {
         Option_Name:"SteamPress",
         Option_Value:0
      },
      {
         Option_Name:"Fabric Softner",
         Option_Value:1
      }]
}, {
    'Title':"jbwbwh ueduh",
    'Description':"jendjnjed eudbedh ulegdey uqwhduwqh uihduedh weudgeudg ",
    'Price':"650",
    'Image_Link':"http://ciaobambino.wpengine.netdna-cdn.com/wp-content/uploads/2013/08/westin-kaanapali-villa-ocean-view-living-room.jpg",
    'Sharers':"1",
    'Gender':"Male",
    "Start_Date":"2016-03-11",
    "Start_Time":"3 AM",
    "End_Date":"2016-03-19",
    "End_Time":"5 PM",
    "Weights":"3",
    'Location':"Gandhinagar",
    'Hosted':"Chaitanya",
    'Rating':0,
    'Options':[{
         Option_Name:"White Clothes",
         Option_Value:1
      },
      {
         Option_Name:"Light Clothes",
         Option_Value:0
      },
      {
         Option_Name:"Cotton Clothes",
         Option_Value:0
      },
      {
       Option_Name:"Silk Clothes",
         Option_Value:0
      },
      {
         Option_Name:"DryCleaning",
         Option_Value:0
      },
      {
         Option_Name:"SteamPress",
         Option_Value:0
      },
      {
         Option_Name:"Fabric Softner",
         Option_Value:1
      }]
}, {
    'Title':"jnjsn widh",
    'Description':"sniowdj uhdwudhw udbwydhw",
    'Price':"610",
    'Image_Link':"http://ciaobambino.wpengine.netdna-cdn.com/wp-content/uploads/2013/08/westin-kaanapali-villa-ocean-view-living-room.jpg",
    'Sharers':"2",
    'Gender':"Male",
    "Start_Date":"2016-03-01",
    "Start_Time":"3 AM",
    "End_Date":"2016-03-19",
    "End_Time":"5 PM",
    "Weights":"12",
    'Location':"Rajkot",
    'Hosted':"Chaitanya",
    'Date':"2016-03-17",
     'Rating':1,
     'Options':[{
         Option_Name:"White Clothes",
         Option_Value:0
      },
      {
         Option_Name:"Light Clothes",
         Option_Value:0
      },
      {
         Option_Name:"Cotton Clothes",
         Option_Value:0
      },
      {
       Option_Name:"Silk Clothes",
         Option_Value:0
      },
      {
         Option_Name:"DryCleaning",
         Option_Value:1
      },
      {
         Option_Name:"SteamPress",
         Option_Value:1
      },
      {
         Option_Name:"Fabric Softner",
         Option_Value:0
      }]
}];
var filteroption=[{
         Option_Name:"White Clothes",
         Option_Value:0
      },
      {
         Option_Name:"Light Clothes",
         Option_Value:0
      },
      {
         Option_Name:"Cotton Clothes",
         Option_Value:0
      },
      {
       Option_Name:"Silk Clothes",
         Option_Value:0
      },
      {
         Option_Name:"DryCleaning",
         Option_Value:0
      },
      {
         Option_Name:"SteamPress",
         Option_Value:0
      },
      {
         Option_Name:"Fabric Softner",
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
            Category.Category_Id='4';
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
    }
        //$scope.options=filteroption;
        //$scope.products = Apartments;
        $scope.genderoption=0;
        $scope.search = function(item) {
            if ($scope.searchText == undefined) {
                return true;
            } else {
                if (item.product.Location.toLowerCase()
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
       $scope.sharer = function(item) {
            if ($scope.optionsharer==null){
                return true;
            } else {
                if ($scope.optionsharer<=item.product.Weights) {
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
             $cookies.put('otherpage','laundry.html');
             window.location.href="signup.html";
        };
    });
