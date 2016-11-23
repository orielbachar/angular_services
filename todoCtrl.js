app.controller('todoCtrl', function($scope, todoService){
  $scope.item = todoService;

  $scope.addItem = function(){
    todoService.push({text:$scope.userItem, status:"new"});
  }

  $scope.toRemove = function(index){
    todoService.splice(index, 1);
  }

  $scope.toggleDone = function(index){
    todoService[index].status = "done";
  }

});
