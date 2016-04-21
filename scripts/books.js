'use strict';
var product = {};
var filteroption=[{
           Option_Name:"Education",
           Option_Value:0
            },
            {
           Option_Name:"Philosophy",
           Option_Value:0
            },
            {
           Option_Name:"Business",
           Option_Value:0
            },
            {
           Option_Name:"Fiction",
           Option_Value:0
            },
            {
           Option_Name:"Biology",
           Option_Value:0
            },
            {
           Option_Name:"Chemistry",
           Option_Value:0
            },
            {
           Option_Name:"Maths",
           Option_Value:0
            },
            {
           Option_Name:"Physic",
           Option_Value:0
            },
            {
           Option_Name:"Engineering",
           Option_Value:0
            },
            {
           Option_Name:"Medical",
           Option_Value:0
            },
            {
           Option_Name:"Fashion",
           Option_Value:0
            },
            {
           Option_Name:"Comic",
           Option_Value:0
            }];
var user = {
    Email: "",
    Password: ""
};
var Category={

};
var myapp = angular.module("myModule",['ngCookies']);
myapp.controller("Main",function($scope,$cookies,$http,$log){
    $scope.show=false;

    $scope.init = function() {
       // $cookies.put('Email', "devarshsheth13@gmail.com");
        //$cookies.put('username', "Devarsh");
            Category.Category_Id='3';
        // $cookies.remove('Email');
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
    $scope.gotoproduct = function(productid)
    {
      $cookies.put('productid',productid);
      //alert(productid);
      window.location.href='product_detail.html';
    }
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
        //$scope.options=filteroption;
        //$scope.products = Apartments;
        $scope.collegeoption=0;
        $scope.search = function(item) {
            if ($scope.searchText == undefined) {
                return true;
            } else {
                if (item.product.Title.toLowerCase()
                    .indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.product.Author_First_Name.toLowerCase()
                    .indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.product.Author_Last_Name.toLowerCase()
                    .indexOf($scope.searchText.toLowerCase()) != -1 ||
                    (item.product.Author_First_Name.toLowerCase().concat(" ",item.product.Author_Last_Name.toLowerCase()))
                    .indexOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        };
        $scope.college = function(item) {
            if ($scope.collegeoption == 0) {
                return true;
            } else 
            {
                if ($scope.collegeoption=="Not") 
                {
                    if(item.product.College!="DA-IICT")
                    {
                      return true;
                    }
                    else
                    {
                      return false;
                    }
                }
                else
                {
                  if(item.product.College=="DA-IICT")
                    {
                      return true;
                    }
                    else
                    {
                      return false;
                    }
                }
            }
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
        $scope.tags = function(item)
        {
           // alert(filteroption[0].Option_Value);
            var len=filteroption.length;
            var ans=1;
            var i=0;
           for(i=0;i<len;i++)
            {
                if(filteroption[i].Option_Value==1)
                {
                  if(item.product.Tag1==filteroption[i].Option_Name || item.product.Tag2==filteroption[i].Option_Name || item.product.Tag3==filteroption[i].Option_Name)
                  {
                    return true;
                    break;
                  }
                  ans=0;
                }
            }
            if(ans==1)
            {
            return true;
            }
            else
            {
              return false;
            }

        }
 $scope.signup = function()
{
     $cookies.put('otherpage','books.html');
     window.location.href="signup.html";
};
        
        
    });


