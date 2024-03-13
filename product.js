"use strict";

class ProductStorage {
  #storage;
  constructor(jsondata) {
    if (!jsondata) throw new Error("data storage missing");
    this.#storage = jsondata;
  }
}

module.exports = ProductStorage;
