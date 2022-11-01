// Comparison of two JSON which have the same properties without order

var object1 = {
  name: 'Person 1',
  age: 5
};
    
const object2 = {
  age: 5,
  name: 'Person 1'
};

//Json stringify() used to convert the JS object into JSON string. And compares it only if the data are in sequence.
console.log(JSON.stringify(object1) === JSON.stringify(object2));
// false


// So trying with Lodash isEqual method to compare the properties which will not check the order of the properties.
console.log(_.isEqual(object1, object2));
// true

