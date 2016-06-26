export class PersonController {
  constructor ($log, Swapi, $stateParams) {
    'ngInject';

    this.log = $log.log;
    this.swapi = Swapi;
    
    Swapi.getPerson($stateParams.id)
      .then((data) => {
        this.person = data;
      });
  }
}
