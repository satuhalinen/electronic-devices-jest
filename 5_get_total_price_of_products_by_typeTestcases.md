# Test cases for get_total_price_of_products_by_type

### **get_total_price_of_products_by_type(searchValue)**

returns the total price of all products that have the same type than the given searchValue

> Parameters:
>
> > searchValue is the type of the product to be searched

> Returns:
>
> > total cumulative price of products matching the searchValue

> Throws:
>
> > if no product with the given searchValue is found throws an exeption `'nothing found with given searchValue'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### Test 1. test tv

testdata is default data

testing with searchValue tv returns 25

### Test 2. test phone

testdata is default data

testing with searchValue phone returns 168

### Test 3. no product with the given searchValue is found

testing default data with searchValue car:

throws an exception `'nothing found with given searchValue'`

### Test 4. parameter searchValue is missing

get_total_price_of_products_by_type()

throws an exception `'missing parameter'`
