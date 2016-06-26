export class MainController {
  constructor (Swapi, toastr) {
    'ngInject';

    this.creationDate = 1466857363217;
    this.toastr = toastr;

    Swapi.getPeople()
      .then((data) => {
        this.people = data;
      });
  }
}
