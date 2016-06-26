describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('swapi'));

  beforeEach(inject(($controller, person) => {
    spyOn(person, 'Swapi.gerPerson').and.returnValue({ name: "name"});

    vm = $controller('MainController');
  }));

  it('should get a person with at least a name', () => {
    expect(angular.isString(vm.people.name)).toBeTruthy();
  });
});
