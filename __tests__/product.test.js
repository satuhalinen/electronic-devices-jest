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

describe("Test cases for get_All_products_By_type", () => {
  const storage = new ProductStorage(datastorage);
  test("type phone", () => {
    const result = [
      {
        id: 2,
        type: "phone",
        price: 15,
        manufacturer: "Penquin appliances",
        colors: ["white", "blue", "black"],
        extras: {
          model: "GT",
          comments: "-",
          energyclass: "E",
        },
      },
      {
        id: 3,
        type: "phone",
        price: 15,
        manufacturer: "Penquin appliances",
        colors: ["blue", "yellow", "orange"],
        extras: {
          model: "chrome",
          comments: "no comments",
          energyclass: "A",
        },
      },
      {
        id: 4,
        type: "phone",
        price: 15,
        manufacturer: "Leila Hökki & co",
        colors: ["orange", "black", "yellow"],
        extras: {
          model: "gold",
          comments: "no comments",
          energyclass: "D",
        },
      },
      {
        id: 5,
        type: "phone",
        price: 123,
        manufacturer: "Electric devices",
        colors: ["orange", "red", "white"],
      },
    ];

    expect(storage.get_All_products_By_type("phone")).toEqual(result);
  });
  test("type tv", () => {
    const result = [
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

    expect(storage.get_All_products_By_type("tv")).toEqual(result);
  });
  test("type x", () => {
    const result = [];
    expect(storage.get_All_products_By_type("x")).toEqual(result);
  });
  test("missing parameter", () => {
    expect(() => storage.get_All_products_By_type()).toThrow(
      "missing parameter"
    );
  });
});
