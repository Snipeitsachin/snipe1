app.controller('signupController', function($scope, Restangular) {
    $scope.data1 = {
        
        'username':'',
        'email':'',
        'password':'',
        'passwordagain':'',
        'firstname':'',
        'lastname':'',
        'contactno':''
        
    }
    
    console.log($scope.data1);
    
    $scope.register = function() {
        Restangular.all('signup').post($scope.data1).then(function(response) {
//        Restangular.all('DocRegistration').post($scope.data1).then(function(response) {
            $scope.result = response.data;
            if($scope.result = response.data){
                alert("successfully registered...");
            }
            else{
                alert("failed to register...");
            }
        });
    }
});