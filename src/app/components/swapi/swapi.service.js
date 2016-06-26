export class Swapi {
  constructor($log, $http, $q) {
    'ngInject';

    this.$http = $http;
    this.$q = $q;
    this.apiHost = 'http://swapi.co/api';
    this.perPage = 10;

    this.handleError = function (error) {
      $log.error('XHR Failed\n' + angular.toJson(error.data, true));
    }
  }

  getPeople(page = 1) {
    if (!this.countPeople || this.perPage * (page + 1) <= this.countPeople) {
      return this.$http.get(this.apiHost + '/people/?page=' + page)
        .then((response) => {
          this.countPeople = response.data.count;
          return response.data.results;
        })
        .catch(this.handleError);
    } else {
      return this.$q.reject();
    }
  }

  getPerson(id = 1) {
    return this.$http.get(this.apiHost + '/people/' + id + '/')
      .then((response) => {
        return response.data;
      })
      .catch(this.handleError);
  }

  getPlanets(page = 1) {
    if (!this.countPlanets || this.perPage * (page + 1) <= this.countPlanets) {
      return this.$http.get(this.apiHost + '/planets/?page=' + page)
        .then((response) => {
          this.countPlanets = response.data.count;
          return response.data.results;
        })
        .catch(this.handleError);
    } else {
      return this.$q.reject();
    }
  }

  getPlanet(id = 1) {
    return this.$http.get(this.apiHost + '/planets/' + id + '/')
      .then((response) => {
        return response.data;
      })
      .catch(this.handleError);
  }
}
