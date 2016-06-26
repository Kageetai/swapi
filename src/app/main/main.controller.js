export class MainController {
  constructor ($log, Swapi) {
    'ngInject';

    this.log = $log.log;
    this.swapi = Swapi;
    this.creationDate = 1466857363217;
    this.people = [];
    this.page = 0;
    this.allLoaded = false;
  }

  loadMorePeople() {
    this.swapi.getPeople(++this.page)
      .then((data) => {
        this.people = this.people.concat(data);
      })
      .catch(() => {
        this.allLoaded = true;
      });
  }
}
