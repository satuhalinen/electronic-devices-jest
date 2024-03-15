# Test cases for get_extras

## **get_extras(searchKey)**

searches the product matching the searchKey and if match is found returns the extras object otherwise null is returned

> Parameters:
>
> > searchKey is the id of the product

> Returns:
>
> > returns the extras object of the product matching the searchKey. If no product matching the given searchKey is found or searchKey is missing, null will be returned

> Throws:
>
> >

## Test 1. matching searchKey found

testdata is default data

```js
get_extras(1);
```

returns

```json
{
  "model": "gold",
  "comments": "high quality",
  "energyclass": "A++"
}
```

## Test 2. matching searchKey is not found

testdata is default data

test with searchKey 6

returns null

## Test 3. searchKey is missing

testdata is default data

```js
get_extras();
```

returns null
