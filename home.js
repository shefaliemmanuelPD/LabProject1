
var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope, $http) {
    var labInfo = {
        department: "Computer Science",
        facultyMember: "Dr. Jim Bowring",
        labTitle: "Cyber Infrastructure Research & Development Lab for the Earth Sciences",
        description: "CIRDLES is an undergraduate computer science software engineering initiative at the The College of Charleston , Charleston, SC. We specialize in the collaborative development of free open source software to support science domains. This material is based upon work supported by the National Science Foundation under Grant Numbers 0930223 and 1443037."
    };

    var output= document.getElementById('output');
    $http.get('localStorage.json').then(function(res){
        $scope.labInfo = res.data.localStorage;
    }, function(err, res){
        alert('didn\'t work');
    });
});
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var localStorage = response.localStorage;

        var output = '';
        for ( var i = 0; i < localStorage.length; i++){
            output += '<li>'+localStorage[i]'</li>'
                }
        document.getElementById('localStorage').innerHTML = output;
            }
        };
    xhttp.open("GET", "localStorage.json", true);
    xhttp.send();

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>