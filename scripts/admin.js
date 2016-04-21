var post = {};
var myapp = angular.module("myModule", ['ngCookies']);

myapp.controller("Main", function($scope, $cookies, $http, $log , $window) {
    $scope.show = false;
    $scope.init = function() {
        //$cookies.put('Email', "devarshsheth13@gmail.com");
        //$cookies.put('username', "Admin");
        //$cookies.put('otheruserid',2);
        if ($cookies.get('Email') == null) {
            window.location.replace("homepage.html");
        } else if ($cookies.get('admin') == null) {
            window.location.replace("homepage.html");
        } else {
            $http({
                    method: 'POST',
                    url: 'https://splitnsave.pythonanywhere.com/api/admin',
                })
                .then(adminsuccesscallback, adminerrorcallback);
        }


    };
   
    var adminsuccesscallback = function(response) {
        $log.info(response);
        $scope.show = true;
        $scope.Users = response.data.Users;
        $scope.Posts = response.data.Products;
    };

    var adminerrorcallback = function(reason) {
        alert("Try Again");
        $log.info(reason);
    };
    //$scope.Users=input;
    //$scope.Posts=post;
    $scope.searchuser = function(user) {
        if ($scope.searchUser == undefined) {
            return true;
        } else {
            if (user.First_Name.toLowerCase()
                .indexOf($scope.searchUser.toLowerCase()) != -1 || user.Last_Name.toLowerCase()
                .indexOf($scope.searchUser.toLowerCase()) != -1) {
                return true;
            }
        }
        return false;
    };
    $scope.searchpost = function(post) {
        if ($scope.searchPost == undefined) {
            return true;
        } else {
            if (post.Title.toLowerCase()
                .indexOf($scope.searchPost.toLowerCase()) != -1) {
                return true;
            }
        }
        return false;
    };
    $scope.showuser = function(user) {
        if (user.First_Name == 'admin') {
            return false;
        } else {
            return true;
        }
    };
    $scope.removeuser = function(user) {
        if ($window.confirm("Are you sure you want to delete this user? If yes then press Ok otherwise press Cancel")) {
            var index = $scope.Users.indexOf(user);
            $scope.Users.splice(index, 1);
            post['User_Id']=user.User_Id;
            //alert(post['User_Id']);
            $http({
                    method: 'POST',
                    url: 'https://splitnsave.pythonanywhere.com/api/deleteuser',
                    data: JSON.stringify(post),
                })
                .then(usersuccesscallback, usererrorcallback);
                    
                } else {
                   
                }
    };
    var usersuccesscallback = function(response) {
        $log.info(response);
    };
    var usererrorcallback = function(reason) {
        alert("Reload Again");
        $log.info(reason);
    };
    $scope.removepost = function(post) {
        if ($window.confirm("Are you sure you want to delete this post? If yes then press Ok otherwise press Cancel")) {
            var index = $scope.Posts.indexOf(post);
            $scope.Posts.splice(index, 1);
            post['Product_Id']=post.Product_Id;
            //alert(post['Product_Id']);
                $http({
                    method: 'POST',
                    url: 'https://splitnsave.pythonanywhere.com/api/deleteproduct',
                    data: JSON.stringify(post),
                })
                .then(postsuccesscallback, posterrorcallback);
                
                    
            } else {
                   
                }
        
    };
   
    $scope.gotoproduct = function(productid)
    {
        $cookies.put('productid',productid);
        window.location.href="product_detail.html";
    }
    $scope.gotoprofile = function(userid)
    {
        $cookies.put('otheruserid',userid);
        window.location.href="userprofile.html";
    }
    var postsuccesscallback = function(response) {
        $log.info(response);
    };
    var posterrorcallback = function(reason) {
        alert("Reload Again");
        $log.info(reason);
    };

});

