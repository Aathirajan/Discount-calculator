product= prompt('how much was the product price')
discount=prompt('Discount Percentage?')/100;
yousave= product*discount;
discountedprice= product-yousave;
console.log(discountedprice);
console.log('yousave')