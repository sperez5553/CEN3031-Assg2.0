angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.newObj = undefined;
    $scope.detailedInfo = undefined;/*{code: undefined, 
      name: undefined, 
      latitude: undefined, 
      longitude: undefined,
      address: undefined
    };*/

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push($scope.newObj);
      $scope.newObj = undefined;
    };
    $scope.deleteListing = function(name) {
      var i=0;
      var array = eval($scope.listings);
      for(var j=0; j<array.length; j++){
        if(array[j].name === name){
          i = j;
          break;
        }
      }

      $scope.listings.splice(i,1);
    };
    $scope.showDetails = function(listing) {
      var i=0;
      var array = eval($scope.listings);
      for(var j=0; j<array.length; j++){
        if(array[j].name === listing.name){
          i = j;
          break;
        }
      }
      $scope.detailedInfo = $scope.listings[i];//.code = $scope.listings[i].code;
      /*$scope.detailedInfo.name = $scope.listings[i].name;
      $scope.detailedInfo.latitude = $scope.listings[i].coordinates.latitude;
      $scope.detailedInfo.longitude = $scope.listings[i].coordinates.longitude;
      $scope.detailedInfo.address = $scope.listings[i].address;*/
    };
  }
]);