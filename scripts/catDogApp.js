(function (){
var app = angular.module("catDogApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/dog", {
    templateUrl:"views/dog.html"
  });
  $routeProvider.when("/cat", {
    templateUrl: "views/cat.html"
  });
  $routeProvider.when("/dogbounty", {
    templateUrl:"views/dogbounty.html"
  });
  $routeProvider.otherwise({
    template:"404 - Please choose a link!"
  });

});

})();
