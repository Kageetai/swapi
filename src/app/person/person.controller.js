export class PersonController {
  constructor ($log, $q, $stateParams, Swapi, GoogleSearch) {
    'ngInject';

    this.log = $log.log;
    this.$q = $q;
    this.swapi = Swapi;
    this.googleSearch = GoogleSearch;
    this.neighbors = [];

    Swapi.getPerson($stateParams.id)
      .then((data) => {
        this.person = data;
        this.log(data);
        return data;
      })
      .then((person) => {
        this.googleSearch.getFaces(person.name)
          .then((items) => {
            this.photo = items[0];
          });
        return person;
      })
      .then((person) => {
        if (person.planet.residents.length == 1) {
          return person;
        }

        var promises = person.planet.residents.filter((e) => {
          return e !== person.url;
        }).map((e) => {
          var array = e.split("/");
          var person = {};
          person.id = array[array.length-2];

          return Swapi.getPerson(person.id)
            .then((response) => {
              Object.assign(person, response);
              this.neighbors.push(person);
            });
        });

        return this.$q.all(promises).then(() => person );
      });
  }
}
