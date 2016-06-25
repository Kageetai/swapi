describe('service SwapiApi', () => {
  beforeEach(angular.mock.module('swapi'));

  it('should be registered', inject(SwapiApi => {
    expect(SwapiApi).not.toEqual(null);
  }));

  describe('getTec function', () => {
    it('should exist', inject(SwapiApi => {
      expect(SwapiApi.getTec).not.toBeNull();
    }));

    it('should return array of object', inject(SwapiApi => {
      const data = SwapiApi.getTec();
      expect(data).toEqual(jasmine.any(Array));
      expect(data[0]).toEqual(jasmine.any(Object));
      expect(data.length > 5).toBeTruthy();
    }));
  });
});
