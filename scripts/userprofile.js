var myapp = angular.module("myModule",['ngCookies']);

myapp.controller("Main",function($scope,$cookies,$http,$log){
$scope.show=false;
	var input={
        First_Name:"Riddhesh",
        Last_Name:"Markandeya",
        Birthdate:"24-07-1996",
        Gender:"Male",
        Institute_Name:"DA-IICT",
        Profession_Name:"Student",
        Rating:"4.7",
        Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
        Status_Confirm:'1',
        Status_Report:'1'
		
	};
	  $scope.init = function() {
		//$cookies.put('Email', "devarshsheth13@gmail.com");
		//$cookies.put('username', "Devarsh");
		//$cookies.put('otheruserid',2);
        //alert($cookies.get('otheruserid'));
		if($cookies.get('Email') == null || $cookies.get('otheruserid') == null) {
 		window.location.replace("homepage.html");
		}
		else
		{	
		
		var Userid={
                    User_Id: $cookies.get('otheruserid'),
                    Email:$cookies.get('Email'),
                   };
        // $cookies.remove('Email');
		 $http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/userprofile',
		  data:JSON.stringify(Userid),
		 })
            .then(successcallback,errorcallback);
         }

  
};
//$scope.user=input;
//$scope.show=true;
var successcallback = function (response) {
               	$log.info(response);
               	input=response.data.details;
				$scope.user=input;
				$scope.show=true;
            	};
	var errorcallback = function(reason){
				alert("Reload Again");
				$log.info(reason);
				};
	$scope.expression = function(id)
	{
		if(id==Math.round(input['Rating']))
		{
			return true;
		}
		else
		{
			return false;
		}
	};
    $scope.reportbutton = function(Status)
    {
    	if(Status==0)
    	{
    		return false;
    	}
        else if($cookies.get("admin")!=null)
        {
            return false;
        }
    	else
    	{
    		return true;
    	}
    }
    $scope.chatbutton = function(Status)
    {
    	if(Status==0)
    	{
    		return false;
    	}
        else if($scope.cookies("admin")!=null)
        {
            return false;
        }
    	else
    	{
    		return true;
    	}
    }
    $scope.reportstatus = function(Status)
    {
    	if(Status==0)
    	{
    		return 'Report user';
    	}
    	else
    	{
    		return 'Already reported';
    	}
    }
    $scope.report = function()
    {
    	$scope.user['Status_Report']=1;
    	var Userid={
                    User_Id: $cookies.get('otheruserid'),
                    Email:$cookies.get('Email'),
                   };
		 $http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/reportuser',
		  data:JSON.stringify(Userid),
		 })
            .then(reportsuccesscallback,reporterrorcallback);
    
         
    };
    $scope.findage = function(dateString)
    {
        var temp=dateString.split("-");
        today_date = new Date();
        today_year = today_date.getFullYear();
        today_month = today_date.getMonth();
        today_day = today_date.getDate();
        age = today_year - temp[2];

        if ( today_month < (temp[1] - 1))
        {
            age--;
        }
        if (((temp[1] - 1) == today_month) && (temp[0] < birth_day))
        {
            age--;
        }
        return age;
    }
    $scope.goto = function()
    {
        $cookies.put("usermsg",$cookies.get('otheruserid'));
        window.location.href="inboxtemp.html";
    }
    var reportsuccesscallback = function (response) {
               	$log.info(response);
            	};
	var reporterrorcallback = function(reason){
				alert("Reload Again");
				$log.info(reason);
				};
});

