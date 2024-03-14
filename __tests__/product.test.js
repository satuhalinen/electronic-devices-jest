"use strict";

const ProductStorage = require("../product.js");
const datastorage = require("../datastorage.json");

describe("Test cases for the constructor", () => {
  test("missing parameter throws an exception", () => {
    expect(() => new ProductStorage()).toThrow("data storage missing");
  });
});

describe("Test cases for has_extras", () => {
  test("product matching the searchKey has `extras` object and it is not an empty object", () => {
    const testData = [
      {
        id: 1,
        type: "tv",
        price: 25,
        manufacturer: "Electric devices",
        colors: ["orange", "blue", "green"],
        extras: {
          model: "gold",
          comments: "high quality",
          energyclass: "A++",
        },
      },
    ];
    const storage = new ProductStorage(testData);
    expect(storage.has_extras(1)).toEqual(true);
  });
  test("product matching the searchKey has `extras` object but it is an empty object", () => {
    const testData = [
      {
        id: 1,
        type: "tv",
        price: 25,
        manufacturer: "Electric devices",
        colors: ["orange", "blue", "green"],
        extras: {},
      },
    ];
    const storage = new ProductStorage(testData);
    expect(storage.has_extras(1)).toEqual(false);
  });
  test("searchKey is missing", () => {
    const testData = [
      {
        id: 1,
        type: "tv",
        price: 25,
        manufacturer: "Electric devices",
        colors: ["orange", "blue", "green"],
        extras: {},
      },
    ];
    const storage = new ProductStorage(testData);
    expect(storage.has_extras()).toEqual(false);
  });
  test("extras is missing", () => {
    const testData = [
      {
        id: 5,
        type: "phone",
        price: 123,
        manufacturer: "Electric devices",
        colors: ["orange", "red", "white"],
      },
    ];
    const storage = new ProductStorage(testData);
    expect(storage.has_extras(5)).toEqual(false);
  });
});
