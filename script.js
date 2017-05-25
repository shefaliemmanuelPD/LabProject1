/// <reference path="angular.min.js"/>

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope){
    var labInfo = {
        department: "Computer Science",
        facultyMember:"Dr. Jim Bowring",
        labTitle: "Cyber Infrastructure Research & Development Lab for the Earth Sciences",
        description: "CIRDLES is an undergraduate computer science software engineering initiative at the The College of Charleston , Charleston, SC. We specialize in the collaborative development of free open source software to support science domains. This material is based upon work supported by the National Science Foundation under Grant Numbers 0930223 and 1443037."
    };

    $scope.labInfo = labInfo;
});
