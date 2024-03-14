"use strict";

class ProductStorage {
  #storage;
  constructor(jsondata) {
    if (!jsondata) throw new Error("data storage missing");
    this.#storage = jsondata;
  }
  has_extras(searchKey) {
    if (!searchKey) {
      return false;
    }
    const product = this.#storage.find((item) => item.id === searchKey);
    return product && product.extras && Object.keys(product.extras).length > 0
      ? true
      : false;
  }
  get_All_products_By_type(searchValue) {
    if (arguments.length < 1) {
      throw new Error("missing parameter");
    }
    const objectsFound = [];
    for (const product of this.#storage) {
      if (product.type === searchValue) {
        objectsFound.push(product);
      }
    }
    return objectsFound;
  }
}

module.exports = ProductStorage;
