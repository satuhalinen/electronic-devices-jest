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
}

module.exports = ProductStorage;
