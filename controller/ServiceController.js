var app=angular.module("AngularService.controllers",[]);
app.controller("ServiceController",function($scope,services,API_URL,$http){
    var userIndex;
    var etudiant = {};
    $scope.etudiants = [{id:1,nom:"guy",prenom:"nzie",Age:"8",sexe:""},
                        {id:4,nom:"lionel",prenom:"evina",Age:"06",sexe:""},
                        {id:5,nom:"willy",prenom:"mani",Age:"59",sexe:""}];
    $scope.etudiant = {
        "nom" :null,
        "prenom" :null,
        "Age" :null,
        "sexe" :null,

    };
    $scope.ajout = function(){
        $scope.etudiants.push($scope.etudiant);
        $scope.etudiant= {};
    };
    function load(){

        $http.get(API_URL +'/api/etudiants').success(function(data){
            $scope.etudiants = data;
        }).error(function(reason){
            console.log(reason);
        });

    };


    load();
    $scope.ajoutEtudiant =function(){
        $http.post(API_URL + '/api/etudiants',$scope.etudiant).success(function(data){
            console.log("création réussie...");
        }).error(function(reason){
            console.log(reason);
        });
        load();

    }
    $scope.radioF = true;
    $scope.radioM = false;
    $scope.cocheRadio = function(n){
        if(n==1){
            $scope.radioF = true;
            $scope.radioM = false;
            $scope.etudiant.sexe = "Féminin" ;
        } else if(n==0)
        {
            $scope.radioF = false;
            $scope.radioM = true;
            $scope.etudiant.sexe = "Masculin" ;
        }


    }
});


app.controller("appController",function($scope){
    var userIndex;
    $scope.etudiant = {};
    $scope.etudiant = [
        {id:1,nom:"guy",prenom:"nzie",Age:"8",sexe:""},
        {id:2,nom:"patrick",prenom:"bela",Age:"56",sexe:""},
        {id:3,nom:"audrey",prenom:"ayissi",Age:"98",sexe:""},
        {id:4,nom:"lionel",prenom:"evina",Age:"06",sexe:""},
        {id:5,nom:"willy",prenom:"mani",Age:"59",sexe:""}
    ];

    $scope.ajout = function(){
        $scope.etudiant.push($scope.etudiant);
        $scope.etudiant = {};
    }
    $scope.delete = function(index){
        $scope.etudiant.splice(index,1);
    }
    $scope.modif = function(){
        $scope.btnAjout =true;
        $scope.btnModif = false;

        $scope.etudiant[userIndex].nom = $scope.etudiant.nom;
        $scope.etudiant[userIndex].prenom = $scope.etudiant.prenom;
        $scope.etudiant[userIndex].Age = $scope.etudiant.Age;
        $scope.etudiant[userIndex].sexe = $scope.etudiant.sexe;
        $scope.etudiant = {};
    }
    $scope.btnAjout =true;
    $scope.btnModif = false;

    $scope.edit = function(index){
        $scope.btnModif = true;
        $scope.btnAjout = false;

        $scope.etudiant.nom = $scope.etudiant[index].nom;
        $scope.etudiant.prenom = $scope.etudiant[index].prenom;
        $scope.etudiant.Age = $scope.etudiant[index].Age;
        $scope.etudiant.sexe = $scope.etudiant[index].sexe;
        userIndex = index;
    }


});
