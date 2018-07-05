////
function convertToF(celsius) {
    let fahrenheit = celsius*9/5 + 32;
    return fahrenheit;
  }
  
  convertToF(30);

  ////
  function reverseString(str) {
    let arr = Array.from(str).reverse();
    arr = arr.join('');
    return arr;
  }
  
  reverseString("hello");

  ////
  function factorialize(num) {
    let product = 1;
    if (num==0) {return 1}
    for (let i=1; i <= num; i++) {
      product = product * i;
    }
    console.log(product)
    return product;
  }
factorialize(5);

////
// str.split
// str.length
// arr.length
function findLongestWordLength(str) {
  let arr = str.split(" ");
  let max_len = 0;
  for (let i=0; i<arr.length; i++) {
    let len = arr[i].length;
    if (len > max_len) {
      max_len = len;
    }
  }
  return max_len;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

////
function largestOfFour(arr) {
  let max = [];
  const new_arr = JSON.parse(JSON.stringify(arr));
  for (let i=0; i < new_arr.length; i++) {
    let val = new_arr[i].sort(function(a, b) {return b - a})[0];
    max.push(val);
  }
  return max
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//// extra 
// deep copy object in array: new_arr = JSON.parse(JSON.stringify(arr));
// sort array: arr[i].sort(function(a, b) {return b - a})[0];
// aNumber.toString()
// Number(aString)

function largestOfFour(arr) {
  let max = 0;
  let dic = {};
  let new_arr = JSON.parse(JSON.stringify(arr));
  
  for (let i=0; i < new_arr.length; i++) {
    let val = new_arr[i].sort(function(a, b) {return b - a})[0];
    dic[i.toString()] = val;
    if (val > max) {max=val;}
  }
  
  let index = 0;
  for (let key in dic) {
    if (dic[key] == max) {
      index = Number(key);
    }
  }
  
  console.log(arr[index]);
  return arr[index]
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])

////
function confirmEnding(str, target) {
  let len = target.length; // type: Number
  let astr = str.slice(-len, );
  
  // return str.endsWith(target)
  return astr==target;
}

confirmEnding("Bastian", "a");

////
function repeatStringNumTimes(str, num) {
  let astr = "";
  for (let i=0; i <num; i++) {
    astr = astr.concat(str);
  }
  // return str.repeat(num);
  return astr;
}

repeatStringNumTimes("abc", 3);

////
function truncateString(str, num) {
  if (str.length > num) {
    // let str = str.slice(0, num); // wrong!!!
    str = str.slice(0, num);
  	str = str.concat("...");
  	return str
  }
  return str
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);

////
/*
There is no way to stop or break a forEach() loop other than by throwing an exception. 
arr.orEach() can't return value
Use arr.every or arr.some to get a boolean.
*/

function findElement(arr, func) {
  for (let i=0; i < arr.length; i++) {
    if (func(arr[i])) {return arr[i]} 
  }
  return undefined
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

////
function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true
  }
  return false;
}

booWho(null);


////
function titleCase(str) {
  str = str.toLowerCase();
  let cap_index = [0];
  var space_index;
  while ((space_index = str.indexOf(' ', space_index + 1)) > 0) {
    cap_index.push(space_index + 1);  
  }
  String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);};
  
  cap_index.forEach(el => str = str.replaceAt(el, str[el].toUpperCase()))

  return str
}

titleCase("I'm a little tea pot");

////
// slice creates a new array; splice doesn't.
function frankenSplice(arr1, arr2, n) {
  let new_arr1 = arr1.slice(0, arr1.length);
  let new_arr2 = arr2.slice(0, arr2.length);
  for (let i=0; i < arr1.length; i++) {
    new_arr2.splice(n+i, 0, arr1[i]);
  }  
  return new_arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

////
function bouncer(arr) {
  let new_arr = [];
  arr.forEach(el=> {
    if (Boolean(el)) {
      new_arr.push(el);
    }
  })
  return new_arr;
}

bouncer([false, null, 0, NaN, undefined, ""]);

////
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a - b})
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);

////
function mutation(arr) {
    
  const all = arr[0].toLowerCase().split("");
  const check = arr[1].toLowerCase().split("");
  for (let i=0; i < check.length; i++) {
    if (!all.includes(check[i])) {
      return false
    }    
    if (i === check.length-1) {
      return true
    }
  }
}

mutation(["hello", "Hey"]);


////
function chunkArrayInGroups(arr, size) {
  let [out_arr, sub_arr] = [[], []];
  for (let i =0; i <arr.length; i++) {
    if (sub_arr.length < size) {
      sub_arr.push(arr[i]);
    }
    if (sub_arr.length === size ||(i=== arr.length-1)) {
      out_arr.push(sub_arr);
      sub_arr = [];
      }    
    }
  return out_arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
  
