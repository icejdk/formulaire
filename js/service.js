/**
 * Created by icejdk on 1/5/18.
 */
var module = angular.module("AngularService.services",[]);
module.service("services",function($http,API_URL,$q){
    var service = {};
    service.getAllEtudiants = function(){
        var deferred = $q.defer();
        $http.get(API_URL +'/api/etudiants').success(function(data){
            deferred.resolve(data);
            return data;
        }).error(deferred.reject);
        deferred.promise;
    };
    return service;

});