app.controller('loginController', function($scope, Restangular) {
    $scope.data1={
        'email':'',
        'password':''
    }
    
    console.log($scope.data1);
    
    $scope.submit = function() {
        Restangular.all('login').post($scope.data1).then(function(response) {
            $scope.data1 = response.result;
            
            if($scope.data1==response.data){
                alert("successfully logged in");
            }
            else {
                alert("login failed");
            }

        });
    }

});