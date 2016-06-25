export class SwapiApi {
  constructor($resource) {
    'ngInject';

    this.people = $resource('http://swapi.co/api/people/:id/', {id: '@id'}, {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          return angular.fromJson(data).results;
        }
      }
    });

    this.planets = $resource('http://swapi.co/api/planets/:id/', {id: '@id'}, {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          return angular.fromJson(data).results;
        }
      }
    });
  }
}
