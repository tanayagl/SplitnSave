angular.module('app').controller("Header",function($scope,$cookies,$http,$log){
	var user = {
    Email: "",
    Password: ""
};
        $scope.user = user;
        $scope.onMouseLeave_Email_Result = "";
        $scope.onMouseLeave_Password_Result = "";
        $scope.onMouseLeave_Email = function($event) {
            if (user['Email'] == "") {
                $scope.onMouseLeave_Email_Result = "Email is required";
            } else if (!(validateEmail(user['Email']))) {
                $scope.onMouseLeave_Email_Result = "Email is not in valid format";
            } else {
                $scope.onMouseLeave_Email_Result = "";
            }
        };
        $scope.onMouseLeave_Password = function($event) {
            if (user['Password'] == "") {
                $scope.onMouseLeave_Password_Result = "Password is required";
            } else if ((user['Password'].length < 6)) {
                $scope.onMouseLeave_Password_Result = "Password length must be at least 6.";
            } else {
                $scope.onMouseLeave_Password_Result = "";
            }
        };
        $scope.login_check = function($event) {
            if (user['Email'] == "") {
                $scope.onMouseLeave_Email_Result = "Email is required";
            }
            if (user['Password'] == "") {
                $scope.onMouseLeave_Password_Result = "Password is required";
            }
            if ($scope.onMouseLeave_Email_Result == "" && $scope.onMouseLeave_Password_Result == "") {
                $http({
                  method:'POST',
                  url:'https://splitnsave.pythonanywhere.com/api/login',
                  data:JSON.stringify(user),
                 })
            .then(successcallback,errorcallback);
        };
    }
    var successcallback = function (response) {
                $log.info(response);
                if(response.data.status==0)
                {
                    $('.bs-example-modal-sm').modal('hide');
                    $cookies.put('Email', user['Email']);
                    $cookies.put('username', "Devarsh");
                    $scope.username=$cookies.get('username');
                    if($cookies.get('page')!=null)
                    {
                         window.location.href=$cookies.get('page');
                         $cookies.remove('page');
                    }
                    else
                    {

                            location.reload();
                    }
                }
                else
                {
                 $scope.onMouseLeave_Password_Result="In-valid Username/Password"   
                }
                };
    var errorcallback = function(reason){
                alert("Reload Again");
                $log.info(reason);
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
$scope.pressforget = function(event)
{
     $('.bs-example-modal-sm').modal('hide');
     $(".bs-example1-modal-sm").modal('show');
}
$scope.signout = function()
{
    $cookies.remove('Email');
    $cookies.remove('username');
    $cookies.remove('otheruserid');
    location.reload();
};
$scope.postad = function()
{
    if($cookies.get('Email')!=null)
    {
        window.location.href="post_product.html";
    }
    else
    {
          $('.bs-example-modal-sm').modal('show');
          $cookies.put('page','post_product.html');
    }
};

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

});
