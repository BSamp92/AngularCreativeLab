var app = angular.module('myApp', []);
app.controller('myCtrl', 
  function($scope, $http) {
  $scope.cities = [];
  $scope.onup = function(form) { 
   console.log(form);
   var url = "https://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q="+form; 
    $http.get(url).then(function (response) {
      console.log(response);
      $scope.cities = response.data; 
    });
    console.log("in onup"); 
    url = "https://api.github.com/users/mjcleme";
    $http.get(url.then(function(response){
        console.log(response);
        
    }
 };
});