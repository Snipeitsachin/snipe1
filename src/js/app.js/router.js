

App.config(['RestangularProvider','$stateProvider','$urlRouterProvider',function(RestangularProvider,$stateProvider,$urlRouterProvider)
            {
RestangularProvider.setBaseUrl('http://localhost:9001/dhc/services/rest/api/v1/');
            $urlRouterProvider.otherwise("/ComnRegPage");
            
            $stateProvider
            .state("ComnRegPage",
            {
            url:"/business",
            templateUrl:"view/ComnRegPage.html"
            })
                 .state('ComnRegPage.registration', {//nested state [products is the nested state of business state]
                            url: "/registration",
                            templateUrl: "view/registration.html",
                            controller: "signupController"
                        })
                
                 .state('ComnRegPage.services', {//nested state [services is the nested state of business state]
                            url: "/services",
                            templateUrl: "view/services.html",
                            controller: function($scope){
                                $scope.services = ["Selling", "Support", "Delivery", "Reparation"];
                            }
                        })
                 .state('loginPage',{
                           url:"/loginPage",
                           templateUrl:"view/loginPage.html",
                           controller: "loginController"
            })
                .state("Onlogin",{
                  url:"/Onlogin",
                   templateUrl:"view/Onlogin.html"
            })
                .state("Onlogin.dashboard",{
                    url:"/dashboard",
                    templateUrl:"view/dashboard.html",
                    controller: "MainCtrl"
            })
                
 
//                        .state('loginPage', {//State demonstrating Multiple,named views
//                            url: "/loginPage",
//                            views: {
//                                ""  :    { templateUrl: "view/loginPage.html" },
//                                "view1@portfolio": { template: "Write whatever you want, it's your virtual company." },
//                                "view2@portfolio": { templateUrl: "view/clients.html" ,
//                                    controller: function($scope){
//                                            $scope.clients = ["HP", "IBM", "MicroSoft"];
//                                    }
//                                }
//                            }
//                        })
                
  }]);