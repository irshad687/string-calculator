const StringCalculator = require('./string-calculator.js');


describe('Test StringCalculator functionality', () => {

  let calc;


  beforeEach(() => {

    calc = new StringCalculator();

  });


  // Basic Tests


  test('should return 0 for an empty string', () => {

    expect(calc.add('')).toBe(0);

  });


  test('should return the number itself when only one number is passed', () => {

    expect(calc.add('5')).toBe(5);

  });


  test('should return the sum of numbers separated by commas and newlines', () => {

    expect(calc.add('1\n2,3')).toBe(6);

  });


  test('should return the sum of multiple numbers with mixed delimiters (comma and newline)', () => {

    expect(calc.add('1\n2,3\n4,5')).toBe(15);

  });


  // Custom Delimiters


  test('should handle custom delimiter of length 1', () => {

    expect(calc.add('//;\n1;2')).toBe(3);

  });


  test('should handle custom delimiter with multiple numbers', () => {

    expect(calc.add('//;\n1;2;3')).toBe(6);

  });


  test('should handle multiple numbers with custom delimiter (semicolon)', () => {

    expect(calc.add('//;\n1;2;3;4')).toBe(10);

  });


  // Negative Numbers Handling


  test('should throw error for negative numbers', () => {

    expect(() => calc.add('1,-2,3')).toThrow('negatives not allowed: -2');

  });


  test('should throw error for multiple negative numbers', () => {

    expect(() => calc.add('1,-2,-3')).toThrow('negatives not allowed: -2, -3');

  });


  test('should throw error for multiple negative numbers with custom delimiter', () => {

    expect(() => calc.add('//;\n1;-2;-3')).toThrow('negatives not allowed: -2, -3');

  });


  test('should allow only positive numbers and zero', () => {

    expect(calc.add('1,0,3')).toBe(4);

  });


  // Edge Cases


  test('should handle larger numbers correctly', () => {

    expect(calc.add('1000,2000,3000')).toBe(6000);

  });


  test('should handle a large number of numbers', () => {

    const numbers = '1,'.repeat(1000) + '1';  // 1001 numbers, all 1

    expect(calc.add(numbers)).toBe(1001);

  });


  test('should handle a large custom delimiter case', () => {

    const numbers = '//;\n' + '1;'.repeat(1000) + '1';

    expect(calc.add(numbers)).toBe(1001);

  });

});