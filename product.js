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
    const products = this.#storage.filter((item) => item.type === searchValue);
    return products;
  }
  get_extras(searchKey) {
    const product = this.#storage.find((item) => item.id === searchKey);
    return product ? product.extras : null;
  }
  get_total_price_of_products_by_type(searchValue) {
    let sum = 0;
    if (arguments.length < 1) {
      throw new Error("missing parameter");
    }
    const products = this.#storage.filter((item) => item.type === searchValue);
    if (products.length === 0) {
      throw new Error("nothing found with given searchValue");
    }
    for (const product of products) {
      sum = sum + product.price;
    }
    return sum;
  }
  get_a_product_matching_id(searchValue) {
    if (arguments.length < 1) {
      throw new Error("missing parameter");
    }
    const product = this.#storage.find((item) => item.id === searchValue);
    return product ? product : null;
  }
}

module.exports = ProductStorage;
