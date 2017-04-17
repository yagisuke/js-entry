describe('MyAreaのテスト', function() {
  var area;

  beforeEach(function() {
    area = new MyArea(10, 5);
  });

  afterEach(function() {
  });

  it('getTriangleメソッドのテスト', function() {
    expect(area.getTriangle()).toEqual(25);
  });

  it('getSquareメソッドのテスト', function() {
    expect(area.getSquare() === 50).toBeTruthy();
  });
});
