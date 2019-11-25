module.exports = function autoBind(obj, exclude) {
  const ObjAndKeys = [];
  while (obj !== Object.prototype) {
    ObjAndKeys.push([Reflect.getPrototypeOf(obj), Reflect.ownKeys(obj.constructor.prototype)]);
    obj = Reflect.getPrototypeOf(obj);
  }
  ObjAndKeys.forEach((val) => {
    val[1].forEach((prop) => {
      // TODO: add  excludes
      const desc = Reflect.getOwnPropertyDescriptor(val[1], prop);
      if (desc && typeof desc.value === 'function') {
        obj[prop] = obj[prop].bind(obj);
      }
    });
  });
};
