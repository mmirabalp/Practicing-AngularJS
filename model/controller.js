var app = angular.module("myApp",[]);

app.controller("indexController", function($scope){

    $scope.name = "Mawel";
    $scope.newComment = {};
    $scope.comments = [
        {
            comment : "Good Place",
            userName : "Jhon"
        },
        {
            comment : "Bad Place",
            userName : "Rudy"
        },


    ];
    $scope.addComments = function(){
        $scope.comments.push($scope.newComment);
        $scope.newComment = {};
        
    }

});