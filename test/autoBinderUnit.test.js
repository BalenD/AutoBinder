const expect = require('chai').expect;
const { filterProperties, autoBind, getAllpropertiesOf} = require('./../src/autoBinder');

describe('AutoBinder', () =>{
  describe('GetAllPropertiesOf', () => {
    const obj = { a: 'hello', b: 'test', c: 'propA' }
    const result = getAllpropertiesOf(obj);
    it('should return an array', () => {
      expect(result).to.be.an('array');
    });
    it('the array should be two dimensional', () => {
      expect(result[0]).to.be.an('array');
    });
    it('first item in 2nd dimension should be an object', () => {
      expect(result[0][0]).to.be.an('object');
    });
    it('second item in 2nd dimension should be an array', () => {
      expect(result[0][1]).to.be.an('array');
    });
    it('second item in 2nd dimension should contain properties of object', () => {
      expect(result[0][1][1]).to.equal('a');
    });
  });
});
