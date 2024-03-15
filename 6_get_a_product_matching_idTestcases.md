# Test cases for get_a_product_matching_id(searchKey)

## **get_a_product_matching_id(searchKey)**

Method searches the datastorage for an object with given searchKey. Key is unique.

> Parameters:
>
> > searchKey is the primary key id of the product

> Returns:
>
> > returns the product object matching the id or null if there is no match

> Throws:
>
> > if parameter searchKey is missing, throws an exception `'missing parameter'`

## Tests

Testdata is default data.

### Test 1. searchKey is found

Testing with searchKey 1 returns

```json
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
```

### Test 2. searchKey is not found

Testing with searchKey 7 returns null.

### Test 3. searchKey is missing

get_a_product_matching_id() throws an exception `'missing parameter'`.
