const identity = function (value) {
  return value
};
const first = function (array, n) {
  if (n === undefined) {
  return array[i];
  } else {
    return array.slice(0, n) //slice grabs from starting index to the # of n
  }
};

const last = function (array, n) {
  if (n === undefined) {
    return array[array.length -1]; //grabs the last element
  } else {
    return array.slice(Math.max(0, array.length -n)); //Math.max is a method for slicing through Math
  }
  // one liner could be: 
};

const each = function (collection, callback) {
  if (collection instanceof Array) {
    for(let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection); // collection = animal collection
    }
  } else {
    for (let prop in collection) {
      callback(collection[prop], prop, collection)
    }
  }
};

//one way to solve this problem: A
// const indexOf = function (array, target) {
//   for(let i = 0; i < array.length; i++) {
//     console.log(collection[i], i, collection); //collection = array
//     if(array[i] === target){
//       return i; // loop solution: if the index of 3 = 40, return the index of 3 - stop the loop
//     }
//   }
//   return -1;
// };

// another way to solve this problem: B
// const indexOf = function (array, target) {
  // let result = -1;

  // each (array, function (item, index) {
  //   if (item === target && result = -1) {
  //     result = index;
  //   }
  // });
  // return result;

// var numbers = [10,20,30,40,50];
//indexOf(numbers, 40) target = 40
//if (10 === 40 && -1 === -1) {the loop will continue to run bc it is FALSE}
//if (40 === 40 && -1 === -1) {the loop will stop at return -1 *result* bc they're both TRUE}
//however, if you run only one if statement for ex: 40 === 40 which is true, the loop will go through bc the item = target

const each = function (collection, callback) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      console.log('FROM LINE 14')
      console.log(collection[i], i, collection);
      callback(collection[i], i, collection);
      return;
      // callback(10, 0, [10, 20, 30, 40, 50];);
    }
  } else {
    for (let prop in collection) {
      callback(collection[prop], prop, collection);
    }
  }
};
const indexOf = function (array, target) {
  let result = -1;
  each(array, function (item, index, array) {
    console.log('FROM LINE 31')
    console.log(item, index, array)
  });
};


const map = function (collection, callback) { 
  let result = [];
  // collection = array of nums [1,2,3]
  // callback is assigned to calling the function (items)
  each(collection, function (item) {
    result.push(callback(item));
  });
  return result;
};





module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};