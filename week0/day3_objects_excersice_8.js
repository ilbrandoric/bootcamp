const product = {
  brand: 'Apple',
  model: 'MacBook Air',
  available: false,
  price: 1200,
  tags: ['apple', 'laptop', 'mac']
};

//Create a new property year and set its value to 2019.

product.year = 2019;

//Did it create the product year?
console.log(`Product year is ${product.year}`);

//Update the property available to be true.

product.available = true;

//Delete the property tags

delete product.tags

console.log(product);

// Create a conditional that will check if the product's price is higher than 1000. 
// In case it is, add a new property called discountPercentage with a value of 10.

if (product.price > 1000) {
    product.discountPercentage = 10;
};

console.log(product.discountPrice);

//Using the price and discountPercentage properties update the price property to be the discounted! Price minus 10% discount

product.discountPrice = product.price - (product.price * (product.discountPercentage / 100));
console.log(`The discounted price is: $${product.discountPrice}`);

//Create a conditional that, using the in operator, will check of the discountPercentage property exists in the object and, if so, 
// create a console.log() that uses the three property values to look something like this: 
// "We got a MacBook Air on sale for just $1080. That's 10% off!"

if ("discountPercentage" in product);

if ("discountPercentage" in product === true) {
    console.log(`We got a MacBook Air on sale for just $${product.discountPrice}. That's ${product.discountPercentage}% off!`);
};