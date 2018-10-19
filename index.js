// import Avatars from '@dicebear/avatars';
// import SpriteCollection from '@dicebear/avatars-female-sprites';
 
// let avatars = new Avatars(SpriteCollection);
// let svg = avatars.create('custom-seed');

angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('avatar', avatarDirective);

function mainCtrl ($scope) {

  $scope.users = [];

  $scope.addNew = function (user) {
    $scope.users = [];
    $scope.users.push({ 
      name: user.name,
      url: user.url
    });
    
    user.name = '';
    user.url = '';
  };
  
  $scope.toMale = function () {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
      $scope.users[0].avatarUrl = 'https://avatars.dicebear.com/v2/male/:' + text + '.svg';
  }
  
  $scope.toFemale = function () {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
      $scope.users[0].avatarUrl = 'https://avatars.dicebear.com/v2/female/:' + text + '.svg';
  }
  
  $scope.changeCharacter = function () {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
      $scope.users[0].avatarUrl = $scope.users[0].avatarUrl.substring(0, 39) + text + '.svg';
  }
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
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h4>{{user.name}}</h4>' +
      '</div>'
    ), /* [3] */
    link: link,
    toGirl: toGirl,
    toBoy: toBoy
  };
  
  function link (scope) { /* [4] */
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
      scope.user.avatarUrl = 'https://avatars.dicebear.com/v2/female/:' + text + '.svg';
  }
  
  function toGirl(scope) {
    var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
      scope.user.avatarUrl = 'https://avatars.dicebear.com/v2/female/:' + text + '.svg';
  }
  
  function toBoy(scope) {
    var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
      scope.user.avatarUrl = 'https://avatars.dicebear.com/v2/male/:' + text + '.svg';
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