angular.module('responsiveList', [])
    .controller('responsiveListController', ['$scope', '$http',

        function ($scope, $http) {
            $scope.deviceList = [];

            $scope.textSearch = '';

            $scope.loadData = function total() {
                $http({method: 'GET', url: './data/DeviceData.json'}).
                   success(function(data, status, headers, config) {
                        $scope.deviceList = data;
                   }).
                   error(function(data, status, headers, config) {
                        alert('Sorry, the device list could not be loaded');
                   });
            };

            $scope.loadData();
        }]
    );
