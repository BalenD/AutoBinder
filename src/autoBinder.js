
function getAllpropertiesOf(obj) {
  const ObjAndKeys = [];
  while (obj !== Object.prototype) {
    ObjAndKeys.push([obj, Reflect.ownKeys(obj.constructor.prototype)]);
    obj = Reflect.getPrototypeOf(obj);
  }
  return ObjAndKeys;
}

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

function autoBind(obj, exclude = []) {
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
  autoBind,
};
