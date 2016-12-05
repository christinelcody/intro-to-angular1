angular.module('myAppOne', []);

angular.module('myAppOne', [])
  .controller('myControllerOne', ['$scope', function($scope) {
    // Part I
    $scope.show = false;

    $scope.printMessage = function() {
      console.log("Hello World");
      $scope.show = !$scope.show;
      $scope.message = "GIMME THE BOURBON, MOTHERFUCKER!";
    };

    $scope.printUL = function() {
      $scope.show = !$scope.show;
      $scope.sites = [' Eagle Rare 17 Year Old Kentucky Straight Bourbon Whiskey', 'George T. Stagg 15 Year Old Kentucky Straight Bourbon Whiskey', 'William LaRue Weller 12 Year Old Kentucky Straight Bourbon Whiskey'];
    }


  }]);