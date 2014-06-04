'use strict';

angular.module('pongrankAppModalInstance', [])
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, $http, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.win = function () {
    $http.post('/api/recordWin/?name=' + $scope.currentUser.name)
    .success(function(user) {

    })
    $modalInstance.close($scope.selected.item);
  };

$scope.loss = function () {
    $http.post('/api/recordLoss/?name=' + $scope.currentUser.name)
    .success(function(user) {

    })
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
