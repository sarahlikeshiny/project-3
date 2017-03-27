angular
  .module('dateApp')
  .service('cinemas', Cinemas);

Cinemas.$inject = ['$http'];
function Cinemas($http) {
  this.getCinemas = function getCinemas() {
    return $http
            .get('/api/cinemas')
            .then((response) => {
              console.log(response.data);
              return response.data;
            });
  };
}