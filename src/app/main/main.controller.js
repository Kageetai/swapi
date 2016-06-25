export class MainController {
  constructor ($timeout, SwapiApi, toastr) {
    'ngInject';

    this.people = [];
    this.classAnimation = '';
    this.creationDate = 1466857363217;
    this.toastr = toastr;

    this.activate($timeout, SwapiApi);
  }

  activate($timeout, SwapiApi) {
    this.getPeople(SwapiApi);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getPeople(SwapiApi) {
    this.people = SwapiApi.people.query();
    //
    // angular.forEach(this.people, (awesomeThing) => {
    //   awesomeThing.rank = Math.random();
    // });
  }
}
