/////
function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Vegetable{
    constructor(name) {
        this.name=name;
    }
    }
    /* Alter code above this line */
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

/////
function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Thermostat{
      constructor(f){
        this._c = 5/9 * (f - 32);
      }
      get temperature() {
        return this._c;
      }
  
      set temperature(updateC){
        this._c = updateC;
      }
    }
    /* Alter code above this line */
    return Thermostat;
  }
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C

/////
import {capitalizeString} from "string_functions"
"use strict";
capitalizeString("hello!");

/////
"use strict";
export const foo = "bar";
export const bar = "foo"

/////
import * as myfle from "capitalize_strings";
"use strict";

/////
"use strict";
export default function subtract(x,y) {return x - y;}

/////
"use strict";
import subtract from "math_functions";
subtract(7,4);