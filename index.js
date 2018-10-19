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
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h4>{{user.name}}</h4>' +
        '<button class"changeLook" style="outline: none; margin: 10px;">Change Look</button>' +
        '<button class="femaleBtn" onclick="link" style="background-color: pink; outline: none; margin: 10px;">Female</button>' +
        '<button class="maleBtn" onclick="link" style="background-color: lightblue; outline: none margin: 10px;">Male</button>' +
      '</div>'
    ), /* [3] */
    link: link
  };
  
  function link (scope) { /* [4] */
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
      scope.user.avatarUrl = 'https://avatars.dicebear.com/v2/female/:' + text + '.svg';
  }
}

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var randomize = document.getElementsByClassName("changeLook");
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

randomize.onclick = function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));


    document.write(text);
  return text;
}