const sum = require('./index');

describe('sum', () => {
  it('should calculate normally with good props', () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum(2, 2)).toBe(4);
    expect(sum(25, -50)).toBe(-25);
    expect(sum(10, 10)).toBe(20);
  });

  it('should return 0 without props', () => {
    expect(sum()).toBe(0);
  });

  it('should return value when passed only 1 prop', () => {
    expect(sum(5)).toBe(5);
    expect(sum(-5)).toBe(-5);
  });

  it('should return text', () => {
    expect(sum('hello', 'world')).toBe('helloworld');
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(null).toBeNull();
  });
});
