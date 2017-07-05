var app = angular.module('myApp', []);
app.controller('customCtrl', function ($scope, $http) {
    $http.get("https://www.promaster.rs:8083/web/WebSvc.GetResultFeed?rev=0").then(function (response) {
        $scope.myData = response.data.events;
        $scope.sports = []
        $scope.events = []
        $scope.ready = false;
        $scope.rev = 0;
        $scope.activeSport = 1;
        $scope.activeSportId = 1;

        $scope.getSportName = function (sportId) {
            if (sportId == 1) {
                return "Fudbal";
            }
            else if (sportId == 2) {
                return "Kosarka";
            }
            else if (sportId == 4) {
                return "Tenis";
            }
            else if (sportId == 8) {
                return "Odbojka";
            }
            else if (sportId == 19) {
                return "Bejzbol";
            }
            else if (sportId == 11) {
                return "Rukomet";
            }
            else if (sportId == 20) {
                return "Strelac";
            }
            else {
                return sportId;
            }
        }

        $scope.getClass = function (sportId) {
            if (sportId == $scope.activeSportId) {
                return true
            } else {
                return false;
            }
        }

        $scope.isActiveSport = function (sportId) {
            return (sportId == $scope.activeSportId);
        }
        $scope.getActiveSport = function () {
            return $scope.activeSportId;
        }

        $scope.getSportClass = function (sportId) {
            return "sport" + sportId;
        }

        $scope.setActiveSport = function (sportId) {
            if ($scope.activeSportId != sportId) {

                $scope.activeSport = sportId;
                $scope.activeSportId = sportId;
            }
        }


        $scope.myData.forEach(function (event) {


            //  console.log(event.sport);
            // console.log($scope.sports);

            if ($scope.sports.length == 0) {
                $scope.sports.push(event.sportId);
                //ako je niz prazan dodamo sport, a ne ceo event
            }
            else if ($scope.sports.indexOf(event.sportId) == -1) {
                $scope.sports.push(event.sportId);
                // console.log(event.sportId);
            }

        });
        //console.log(event.sportId);

        //   console.log($scope.sports);

        //console.log(event.sport);    



    });
});