# Test cases for has_extras(searchKey)

## **has_extras(searchKey)**

Method checks based on id if the product has `extras` or not.

> Parameters:
>
> > searchKey is the id to be searched

> Returns:
>
> > Returns true if the product matching the searchKey has `extras` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

> Throws:
>
> >

## Tests

### 1. product matching the searchKey has `extras` object and it is not an empty object

Testing

```js
has_extras(1);
```

with with default data returns true.

### 2. product matching the searchKey has `extras` object but it is an empty object

Testing

```js
searchKey(1);
```

with testdata

```json
[
  {
    "id": 1,
    "type": "tv",
    "price": 25,
    "manufacturer": "Electric devices",
    "colors": ["orange", "blue", "green"],
    "extras": {}
  }
]
```

returns false.

### 3. searchKey is missing

Testing

```js
has_extras();
```

with default data returns false.

### 4. extras is missing

Testing

```js
has_extras(5);
```

with default data returns false.
