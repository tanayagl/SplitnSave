myapp.controller("Header",function($scope,$cookies,$http,$log){
	var user = {
    Email: "",
    Password: ""
};
var Email={

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
            else if((user['Password'].length < 6))
            {
                 $scope.onMouseLeave_Password_Result = "Password length must be at least 6.";
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
                    if(user['Email']=='admin@gmail.com')
                    {
                        $cookies.put('admin','admin');
                        $cookies.put('username', 'admin');
                        $scope.username=$cookies.get('username');
                        window.location.replace("admin.html");
                          
                    }
                    else
                    {
                    $cookies.put('username', response.data.First_Name);
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
$scope.admin= function()
{
    if($cookies.get("admin")!=null)
    {
        return false;
    }
    else
    {
        return true;
    }
}
var e = jQuery.Event("keypress");
e.which = 13; //choose the one you want
e.keyCode = 13;
$(".submit").trigger(e);
$scope.pressforget = function(event)
{
     $('.bs-example-modal-sm').modal('hide');
     $(".bs-example1-modal-sm").modal('show');
}
$scope.signout = function()
{
    //alert("Hey");
    if($cookies.get('admin')!=null)
    {
        $cookies.remove('admin');
    }
    $cookies.remove('Email');
    $cookies.remove('username');
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
    }
};

$scope.forget_check = function(event)
{
        Email['Email']=user['Email'];
        $http({
          method:'POST',
          url:'https://splitnsave.pythonanywhere.com/api/signupcheck',
          data:JSON.stringify(Email),
         })
            .then(emailsuccesscallback,emailerrorcallback);
};
var emailsuccesscallback = function (response) {
                var a = response.data.status;
                
                $log.info(response);
                    if(a==0)
                    {
                        $scope.onMouseLeave_Email_Result="Email Id does not exist";
                    }
                    else
                    {
                        $scope.onMouseLeave_Email_Result="";
                        $http({
                          method:'POST',
                          url:'https://splitnsave.pythonanywhere.com/api/forgotpassword',
                          data:JSON.stringify(Email),
                         })
                        .then(verifysuccesscallback,verifyerrorcallback);

                    }
                    
                };
var verifysuccesscallback = function (response) {
        $log.info(response);
        window.location.href="account_settings.html"
        //$(".bs-example2-modal-sm").modal('show');
        //window.location.replace("dashboard.html");
        };
var verifyerrorcallback = function(reason){
    alert("Try Again");
    $log.info(reason);
    };
var emailerrorcallback = function(reason){
                alert("Server Problem");
                $log.info(reason);
                };


function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

});