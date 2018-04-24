/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return a number multiplied by 10', () => {
      const num = 4;
      const multByTen = funcs.multiplyByTen;
      const product = multByTen(num);
      assert.equal(product, 40);
      assert.typeOf(product, 'number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number minus 5', () => {
      const num = 9;
      const subByFive = funcs.subtractFive;
      const sum = subByFive(num);
      assert.equal(sum, 5);
      assert.typeOf(sum, 'number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return strings of the same length', () => {
      const str1 = 'one';
      const str2 = 'two';
      const str3 = 'three';
      const same = funcs.areSameLength;
      const yes = same(str1, str2);
      const no = same(str1, str3);
      assert.isTrue(yes, true);
      assert.isNotTrue(no, false);
      assert.typeOf(yes, 'boolean');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return equality of numbers', () => {
      const num1 = 3;
      const num2 = 3;
      const num3 = 15;
      const areEqual = funcs.areEqual;
      const yay = areEqual(num1, num2);
      const nay = areEqual(num1, num3);
      assert.equal(yay, true);
      assert.equal(nay, false);
      assert.isBoolean(yay, 'true this is, hmmm');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a number less than 90', () => {
      const num1 = 75;
      const num2 = 99;
      const less90 = funcs.lessThanNinety;
      const yay = less90(num1);
      const nay = less90(num2);
      assert.isTrue(yay, '75 is less than 90');
      assert.isNotTrue(nay, '99 is more than 90');
      assert.isBoolean(yay, 'true this is, hmmm');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a number greater than 50', () => {
      const num1 = 155;
      const num2 = 5;
      const greater50 = funcs.greaterThanFifty;
      const yay = greater50(num1);
      const nay = greater50(num2);
      assert.isTrue(yay, '155 is greater than 50');
      assert.isNotTrue(nay, '5 is not greater than 50');
      assert.typeOf(yay, 'boolean');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add two numbers', () => {
      const num1 = 4;
      const num2 = 5;
      const sum = funcs.add;
      const total = sum(num1, num2);
      assert.equal(sum, 9);
      assert.equal(sum, 'nummber');
      assert.typeOf(sum, 'number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subtract two numbers', () => {
      const num1 = 21;
      const num2 = 18;
      const sub = funcs.subtract;
      const total = sub(num1, num2);
      assert.equal(total, 3);
      assert.typeOf(total, 'number');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return the quotient of two numbers', () => {
      const num1 = 16;
      const num2 = 4;
      const quo = funcs.divide;
      const solution = quo(num1, num2);
      assert.equal(solution, 4);
      assert.typeOf(solution, 'number');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return the product of two numbers', () => {
      const num1 = 8;
      const num2 = 16;
      const mul = funcs.multiply;
      const pro = mul(num1, num2);
      assert.equal(pro, 128);
      assert.typeOf(pro, 'number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the remainder of two numbers', () => {
      const num1 = 12;
      const num2 = 6;
      const mod = funcs.getRemainder;
      const quo = mod(num1, num2);
      assert.equal(quo, 0);
      assert.typeOf(quo, 'number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return an even number', () => {
      const num1 = 5;
      const num2 = 10;
      const even = funcs.isEven;
      const yay = even(num2);
      const nay = even(num1);
      assert.isTrue(yay, '10 is even');
      assert.isNotTrue(nay, '5 is not even');
      assert.isBoolean(nay, 'true this is, hmmm');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return an odd number', () => {
      const num1 = 7;
      const num2 = 18;
      const odd = funcs.isOdd;
      const yay = odd(num1);
      const nay = odd(num2);
      assert.isTrue(yay, '7 is odd');
      assert.isNotTrue(nay, '18 is not odd');
      assert.isBoolean(yay, 'true this is, hmmm');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return the square of a number', () => {
      const num = 3;
      const square = funcs.square;
      assert.equal(square(num), 9);
      assert.typeOf(square(num), 'number');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return the cube of a number', () => {
      const num = 4;
      const cube = funcs.cube;
      assert.equal(cube(num), 256);
      assert.typeOf(cube, 'number');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return the rounded number', () => {
      const num1 = 5.3;
      const num2 = 3.2;
      const up = funcs.roundUp;
      assert.equal(up(num1), 5);
      assert.equal(up(num2), 3);
      assert.typeOf(up(num1), 'number');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add an exclamation point to the end of a string', () => {
      const str = 'Hello, world';
      const addBang = funcs.addExclamationPoint;
      const invoke = addBang(str);
      assert.equal(invoke, 'Hello, world!');
      assert.typeOf(invoke, 'string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should combine names in a string', () => {
      const str1 = 'Jonathan';
      const str2 = 'Reeves';
      const combine = funcs.combineNames;
      const invoke = combine(str1, str2);
      assert.equal(invoke, 'Jonathan Reeves');
      assert.typeOf(invoke, 'string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should prepend "Hello", to a string, and append "!"', () => {
      const str = 'John Lynch';
      const greet = funcs.getGreeting;
      const invoke = greet(str);
      assert.equal(invoke, 'Hello John Lynch!');
      assert.typeOf(invoke, 'string');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return the area of a rectangle', () => {
      const num1 = 12;
      const num2 = 3;
      const area = funcs.getRectangleArea;
      const result = area(num1, num2);
      assert.equal(area, 36);
      assert.typeOf(area, 'number');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return the area of a triangle', () => {
      const base = 3;
      const height = 3;
      const triArea = funcs.getTriangleArea;
      const area = triArea(base, height);
      assert.equal(area, 9);
      assert.typeOf(area, 'number');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the area of a circle', () => {
      const radius = 15;
      const getCircArea = funcs.getCircleArea;
      const area = getCircArea(radius);
      assert.equal(area, 47.1);
      assert.typeOf(area, 'number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the volume of a rectangular prism', () => {
      const width = 2;
      const height = 1;
      const length = 3;
      const getPrismVol = funcs.getRectangularPrismVolume;
      const volume = getPrismVol(width, height, length);
      assert.equal(volume, 6);
      assert.typeOf(volume, 'number');
    });
  });
});
