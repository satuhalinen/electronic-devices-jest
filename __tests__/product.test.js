"use strict";

const ProductStorage = require("../product.js");
const datastorage = require("../datastorage.json");

describe("Test cases for the constructor", () => {
  test("missing parameter", () => {
    expect(() => new ProductStorage()).toThrow("data storage missing");
  });
});

describe("Test cases for has_extras", () => {
  const storage = new ProductStorage(datastorage);
  test("product matching the searchKey has `extras` object and it is not an empty object", () => {
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
    const storage = new ProductStorage(datastorage);
    expect(storage.has_extras()).toEqual(false);
  });
  test("extras is missing", () => {
    const storage = new ProductStorage(datastorage);
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

describe("Test cases for get_extras", () => {
  const storage = new ProductStorage(datastorage);
  test("matching searchKey found", () => {
    const result = {
      model: "gold",
      comments: "high quality",
      energyclass: "A++",
    };
    expect(storage.get_extras(1)).toEqual(result);
  });
  test("matching searchKey is not found", () => {
    const result = null;
    expect(storage.get_extras(6)).toEqual(result);
  });
  test("searchKey is missing", () => {
    const result = null;
    expect(storage.get_extras()).toEqual(result);
  });
});

describe("Test cases for get_total_price_of_products_by_type", () => {
  const storage = new ProductStorage(datastorage);
  test("test tv", () => {
    const result = 25;
    expect(storage.get_total_price_of_products_by_type("tv")).toEqual(result);
  });
  test("test phone", () => {
    const result = 168;
    expect(storage.get_total_price_of_products_by_type("phone")).toEqual(
      result
    );
  });
  test("no product with the given searchValue is not found", () => {
    expect(() => storage.get_total_price_of_products_by_type("car")).toThrow(
      "nothing found with given searchValue"
    );
  });
  test("parameter searchValue is missing", () => {
    expect(() => storage.get_total_price_of_products_by_type()).toThrow(
      "missing parameter"
    );
  });
});

describe("Test cases for get_a_product_matching_id", () => {
  const storage = new ProductStorage(datastorage);
  test("searchKey is found", () => {
    const result = {
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
    };
    expect(storage.get_a_product_matching_id(1)).toEqual(result);
  });
  test("searchKey is not found", () => {
    const result = null;
    expect(storage.get_a_product_matching_id(7)).toEqual(result);
  });
  test("searchKey is missing", () => {
    expect(() => storage.get_a_product_matching_id()).toThrow(
      "missing parameter"
    );
  });
});
