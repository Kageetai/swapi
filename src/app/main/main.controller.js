export class MainController {
  constructor (SwapiApi, toastr) {
    'ngInject';

    this.creationDate = 1466857363217;
    this.toastr = toastr;

    this.people = SwapiApi.people.query();
  }
}
