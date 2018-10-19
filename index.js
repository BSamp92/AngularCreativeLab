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
        '<button>Change Character Look</button>' +
        '<button style="color: pink;">Female</button>' +
        '<button style="color: blue;">Male</button>' +
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