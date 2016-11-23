app.controller('peopleCtrl', function($scope, peopleService){
  $scope.people = peopleService.people;
});
  
