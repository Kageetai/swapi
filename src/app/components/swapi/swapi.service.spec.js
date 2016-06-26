describe('service Swapi', () => {
  beforeEach(angular.mock.module('swapi'));

  it('should be registered', inject(Swapi => {
    expect(Swapi).not.toEqual(null);
  }));

  describe('getPeople function', () => {
    it('should exist', inject(Swapi => {
      expect(Swapi.getPeople).not.toBeNull();
    }));

    it('should return array of object', inject(Swapi => {
      const data = Swapi.getPeople();
      expect(data).toEqual(jasmine.any(Array));
      expect(data[0]).toEqual(jasmine.any(Object));
      expect(data.length > 1).toBeTruthy();
    }));
  });
});
