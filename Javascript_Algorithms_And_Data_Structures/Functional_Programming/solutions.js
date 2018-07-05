////
/*
1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.
*/

////
/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
  const teaCups = [];
  
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4TeamFCC = getTea(40); // :(

// Add your code above this line

console.log(tea4TeamFCC);

////
/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :(
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :(

// Add your code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

////
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
    this.tabs = tabs; // we keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function (index) {
    var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
    var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together 
    return this;
   };
  
  // Let's create three browser windows
  var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  var finalTabs = socialWindow
                      .tabOpen() // Open a new tab for cat memes
                      .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                      .join(workWindow.tabClose(1).tabOpen());
  
  alert(finalTabs.tabs);

  ////
  // the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  return fixedValue + 1
  
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

////
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (inc) {
  return fixedValue + inc
}

var newValue = incrementer(1); // Should equal 5
console.log(fixedValue); // Should print 4


////
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (abookList, bookName) {
  let newList = [...abookList];
  newList.push(bookName);
  return newList
}

function remove (abookList, bookName) {
  let newList = [...abookList];
  if (newList.indexOf(bookName) >= 0) {
    newList.splice(newList.indexOf(bookName), 1)
    console.log(newList);
    return newList;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

////
var rating = [];
watchList.map(el=> {
  rating.push({title: el["Title"],  rating: el["imdbRating"]});
})
console.log(rating); 

////
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  this.forEach(el=>{
    let val = callback(el);
    newArray.push(val);
  })
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});


////
let filteredList = watchList.filter(el=> Number(el.imdbRating) >= 8.0).map(el=>{return {"title": el.Title, "rating": el.imdbRating}})
console.log(filteredList);

////
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  this.forEach(el => {
    if (callback(el)) {
      newArray.push(el);
    };
  })
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

////
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice)  
  }
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

////
function nonMutatingSplice(cities) {
    let new_cities = cities.slice(0,3);
    console.log(new_cities);
    return new_cities;  
  }
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

////
function nonMutatingConcat(original, attach) {
    return first.concat(second)
  }
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

////
function nonMutatingPush(original, newItem) {
    return original.concat(newItem);  // return a new array, no side effect.
  }
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

////
function alphabeticalOrder(arr) {
    return arr.sort(function(a, b) {
      return a > b;
    })  
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

////
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let new_arr = [].concat(globalArray);
  new_arr.sort((a,b)=> a>b);
  console.log(new_arr);
  return new_arr;
}
nonMutatingSort(globalArray);

////
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    title = title.toLowerCase();
    let new_str = "";
    for (let i=0; i < title.length; i++) {
        if (title[i] === " ") {
            new_str = new_str.concat("-");
            continue;
        }
        new_str = new_str.concat(title[i]);
    }
    console.log(new_str);
    return new_str
  
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

////
function checkPositive(arr) {
  return arr.every(el => el > 0)  
}
checkPositive([1, 2, 3, -4, 5]);

////
function checkPositive(arr) {
  let bool = arr.some(el=> el >0);
  return bool
}
checkPositive([1, 2, 3, -4, 5]);


//////
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

// Curried function: function that returns a function carried another argument
function curried(x) {
  return function(y) {
    return x + y;
  }
}
curried(1)(2) // Returns 3

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}

// partial function: function with partial arguments provided.
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13

////
function add(x) {
  return function(y) {
    return function(z) {
      return x+y+z
    }
  }  
}
add(10)(20)(30);
