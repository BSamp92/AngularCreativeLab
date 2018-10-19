import Avatars from '@dicebear/avatars';
import SpriteCollection from '@dicebear/avatars-female-sprites';
 
let avatars = new Avatars(SpriteCollection);
let svg = avatars.create('custom-seed');

// var app = angular.module('myApp', []);
// app.controller('myCtrl', 
//   function($scope, $http) {
//   $scope.cities = [];
//   $scope.onup = function(form) { 
//   console.log(form);
//   var url = "https://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q="+form; 
//     $http.get(url).then(function (response) {
//       console.log(response);
//       $scope.cities = response.data; 
//     });
//     console.log("in onup"); 
//     url = "https://api.github.com/users/mjcleme";
//     $http.get(url.then(function(response){
//         console.log(response);
        
//     }
 
// });

angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('avatar', avatarDirective);

function mainCtrl ($scope) {

  $scope.users = [];

  $scope.addNew = function (user) {
    $scope.users.push({ 
      name: user.name,
      url: user.url
    }); /* [1] */
    
    user.name = ''; /* [2] */
    user.url = '';
  };
}

function avatarDirective () {
  return {
    scope: {
      user: '=' /* [1] */
    },
    restrict: 'E', /* [2] */
    replace: 'true',
    template: (
      '<div class="Avatar">' +
        '<img ng-src="{{https://avatars.dicebear.com/v2/female/:seed.svg}}" />' +
        '<h4>{{user.name}}</h4>' +
      '</div>'
    ), /* [3] */
    link: link
  };
  
  function link (scope) { /* [4] */
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'https://avatars.dicebear.com/v2/female/:seed.svg';
    }
  }

}

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}