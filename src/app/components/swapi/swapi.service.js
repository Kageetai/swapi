export class Swapi {
  constructor($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.apiHost = 'http://swapi.co/api';

    this.handleError = function (error) {
      this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
    }
  }

  getPeople(page = 1) {
    return this.$http.get(this.apiHost + '/people/?page=' + page)
      .then((response) => {
        return response.data.results;
      })
      .catch(this.handleError);
  }

  getPerson(id = 1) {
    return this.$http.get(this.apiHost + '/people/' + id + '/')
      .then((response) => {
        return response.data;
      })
      .catch(this.handleError);
  }

  getPlanets(page = 1) {
    return this.$http.get(this.apiHost + '/planets/?page=' + page)
      .then((response) => {
        return response.data.results;
      })
      .catch(this.handleError);
  }

  getPlanet(id = 1) {
    return this.$http.get(this.apiHost + '/planets/' + id + '/')
      .then((response) => {
        return response.data;
      })
      .catch(this.handleError);
  }
}
