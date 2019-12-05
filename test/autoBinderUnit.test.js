const { expect } = require('chai');
const { filterProperties, autoBind, getAllpropertiesOf } = require('./../src/autoBinding');

class ClassToTest {
  foo(a) {
    this.a = a;
  }

  bar(b) {
    this.b = b;
  }

  returnClass() {
    return this;
  }
}

describe('AutoBinder', () => {
  const obj = new ClassToTest('hello', 'test', 'propA');
  const result = getAllpropertiesOf(obj);
  describe('getAllPropertiesOf', () => {
    it('expect to return an array', () => {
      expect(result).to.be.an('array');
    });
    it('expect returned array to be two dimensional', () => {
      expect(result[0]).to.be.an('array');
    });
    it('expect first item in 2nd dimension to be an object', () => {
      expect(result[0][0]).to.be.an('object');
    });
    it('expect second item in 2nd dimension to be an array', () => {
      expect(result[0][1]).to.be.an('array');
    });
    it('expect second item in 2nd dimension to contain properties of object', () => {
      expect(result[0][1]).to.include.members(['foo', 'bar']);
    });
  });

  describe('filterProperties', () => {
    it('expcet to return all props if no exclusion is given', () => {
      const filteredProps = filterProperties(result[0][1], []);
      expect(filteredProps).to.include.members(['foo', 'bar', 'constructor']);
    });
    it('expect to exclude an item from the array with the matching name', () => {
      const filteredProps = filterProperties(result[0][1], ['bar', 'constructor', 'hello']);
      expect(filteredProps).to.include.members(['foo']);
    });
  });

  describe('autoBind', () => {
    const obj = autoBind(new ClassToTest());
    const classReturnFunc = obj.returnClass;
    const objEnv = classReturnFunc();
    it('expect to return an object', () => {
      expect(objEnv).to.be.an('object');
    });
    it('expect object to have same properties', () => {
      expect(objEnv).to.have.property('foo');
      expect(objEnv).to.have.property('bar');
    });
    it('expect to exclude named props', () => {
      const objWithExclusion = autoBind(new ClassToTest(), ['bar', 'constructor']);
      expect(objWithExclusion).to.not.have.ownProperty('bar');
      expect(objWithExclusion).to.not.have.ownProperty('constructor');
    });
    it('expect instance to be the same', () => {
      expect(objEnv).to.be.instanceOf(obj.constructor);
    });
  });
});
