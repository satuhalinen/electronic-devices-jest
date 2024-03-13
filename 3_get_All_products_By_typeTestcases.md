# Test cases for get_All_products_By_type

## **get_All_products_By_type(searchValue)**

searches products with given type

> Parameters:
>
> > searchValue is the type of the product to be searched

> Returns:
>
> > Returns an array of product objects of given type. If no product of given type is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### Examples

`type` phone returns

```json
{
  "id": 2,
  "type": "phone",
  "price": 15,
  "manufacturer": "Penquin appliances",
  "colors": ["white", "blue", "black"],
  "extras": {
    "model": "GT",
    "comments": "-",
    "energyclass": "E"
  }
}
```

`type` tv returns

```json
[
  {
    "id": 1,
    "type": "tv",
    "price": 25,
    "manufacturer": "Electric devices",
    "colors": ["orange", "blue", "green"],
    "extras": {
      "model": "gold",
      "comments": "high quality",
      "energyclass": "A++"
    }
  }
]
```

## Tests

All tests use default data

### Test 1. type phone

returns

```json
[
  {
    "id": 2,
    "type": "phone",
    "price": 15,
    "manufacturer": "Penquin appliances",
    "colors": ["white", "blue", "black"],
    "extras": {
      "model": "GT",
      "comments": "-",
      "energyclass": "E"
    }
  },
  {
    "id": 3,
    "type": "phone",
    "price": 15,
    "manufacturer": "Penquin appliances",
    "colors": ["blue", "yellow", "orange"],
    "extras": {
      "model": "chrome",
      "comments": "no comments",
      "energyclass": "A"
    }
  },
  {
    "id": 4,
    "type": "phone",
    "price": 15,
    "manufacturer": "Leila Hökki & co",
    "colors": ["orange", "black", "yellow"],
    "extras": {
      "model": "gold",
      "comments": "no comments",
      "energyclass": "D"
    }
  },
  {
    "id": 5,
    "type": "phone",
    "price": 123,
    "manufacturer": "Electric devices",
    "colors": ["orange", "red", "white"]
  }
]
```

### Test 2. type tv

returns

```json
[
  {
    "id": 1,
    "type": "tv",
    "price": 25,
    "manufacturer": "Electric devices",
    "colors": ["orange", "blue", "green"],
    "extras": {
      "model": "gold",
      "comments": "high quality",
      "energyclass": "A++"
    }
  }
]
```

### Test 3. type x

returns []

### Test 4. missing parameter

If a parameter searchValue is missing, an exception `'missing parameter'` is thrown.
