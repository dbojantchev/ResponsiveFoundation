angular.module('responsiveDetail', ['ngRoute'])
    .controller('responsiveDetailController', ['$scope', '$http', '$routeParams',

        function ($scope, $http, $routeParams) {
            $scope.deviceList = [];
            $scope.model = {};
            $scope.model2 = {'label': 'XGSFH-2637-X67',
                             'vin' : '1M8GDM9AXKP042788',
                             'fleet' : 'General Electric (GE)',
                             'brand' : 'Iveco',
                             'vehicleModel' : 'XTR-640',
                             'updateRate' : '120',
                             'updateDate' : '04-02-2014',
                             'location' : '1234 La Jolla Village Dr.',
                             'contract' : true
            };

            $scope.textSearch = '';

            $scope.findDevice = function (){
                 for(var i=0; i<$scope.deviceList.length; i++){
                    var device = $scope.deviceList[i];
                  //if(device.serialNumber === $routeParams.id){
                    if(device.serialNumber == location.search.substring(4)){
                        $scope.model = device;
                        $scope.model = $.extend( $scope.model, $scope.model2 );
                    }
                }
            };

            $scope.loadData = function total() {
                $http({method: 'GET', url: './data/DeviceData.json'}).
                   success(function(data, status, headers, config) {
                        $scope.deviceList = data;
                        $scope.findDevice();
                   }).
                   error(function(data, status, headers, config) {
                        alert('Sorry, the device list could not be loaded');
                   });
            };

            $scope.loadData();
        }]
    );
