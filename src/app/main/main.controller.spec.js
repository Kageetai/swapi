describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('swapi'));

  beforeEach(inject(($controller, people) => {
    spyOn(people, 'loadMorePeople').and.returnValue([{}, {}, {}, {}, {}]);

    vm = $controller('MainController');
  }));

  it('should have a timestamp creation date', () => {
    expect(vm.creationDate).toEqual(jasmine.any(Number));
  });

  it('should define more than 5 people', () => {
    expect(angular.isArray(vm.people)).toBeTruthy();
    expect(vm.people.length === 5).toBeTruthy();
  });
});
