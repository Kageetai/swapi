describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('swapi'));

  beforeEach(inject(($controller, webDevTec, toastr) => {
    spyOn(webDevTec, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
    spyOn(toastr, 'info').and.callThrough();

    vm = $controller('MainController');
  }));

  it('should have a timestamp creation date', () => {
    expect(vm.creationDate).toEqual(jasmine.any(Number));
  });

  it('should define animate class after delaying timeout', inject($timeout => {
    $timeout.flush();
    expect(vm.classAnimation).toEqual('rubberBand');
  }));

  it('should define more than 5 awesome things', () => {
    expect(angular.isArray(vm.people)).toBeTruthy();
    expect(vm.people.length === 5).toBeTruthy();
  });
});
