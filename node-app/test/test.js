// test.js

function sum(a, b) {
    return a + b;
  }
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test('adds 5 + 7 to equal 12', () => {
    expect(sum(5, 7)).toBe(12);
  });
  