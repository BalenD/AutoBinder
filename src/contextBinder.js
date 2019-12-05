/**
 * returns all keys and properties of an object in a 2 dimensional array
 * @param {object} obj object to get all the properties and keys of
 */
function getAllpropertiesOf(obj) {
  const ObjAndKeys = [];
  while (obj !== Object.prototype) {
    ObjAndKeys.push([obj, Reflect.ownKeys(obj.constructor.prototype)]);
    obj = Reflect.getPrototypeOf(obj);
  }
  return ObjAndKeys;
}

/**
 * filter out properties from the array of properties
 * @param {array} props array of properties
 * @param {array} exclude array of names to exclude
 */
function filterProperties(props, exclude) {
  if (exclude.length > 0) {
    exclude.forEach((exclusion) => {
      if (props.includes(exclusion)) {
        props.splice(props.indexOf(exclusion), 1);
      }
    });
  }
  return props;
}

/**
 * binds 'this' to every function/property outside of the constructor
 * @param {object} obj object to bind 'this' to all properties
 * @param {object} exclude array of properties to exclude from the 'this' binding
 */
function bindContext(obj, exclude = []) {
  const props = getAllpropertiesOf(obj);
  props.forEach((val) => {
    const filteredProps = filterProperties(val[1], exclude);
    filteredProps.forEach((prop) => {
      const desc = Reflect.getOwnPropertyDescriptor(val[0], prop);
      if (desc && typeof desc.value === 'function') {
        obj[prop] = obj[prop].bind(obj);
      }
    });
  });
  return obj;
}

module.exports = {
  getAllpropertiesOf,
  filterProperties,
  bindContext,
};
