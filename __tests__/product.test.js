"use strict";

const ProductStorage = require("../product.js");
const datastorage = require("../datastorage.json");

describe("Test cases for the constructor", () => {
  test("missing parameter throws an exception", () => {
    expect(() => new ProductStorage()).toThrow("data storage missing");
  });
});
