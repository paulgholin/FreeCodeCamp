////
function sumAll(arr) {
  if (arr[arr.length-1] < arr[0]) {
    arr = [arr[arr.length-1], arr[0]]
  }
  let [i, total] = [arr[0], 0];
  
  while(i <= arr[arr.length-1]) {
    total+= i;
    i++;
  }
  return total;
}

sumAll([10, 5]);

////
function diffArray(arr1, arr2) {
  let newArr = [...arr1.filter(el=>arr2.indexOf(el)<0),
                ...arr2.filter(el=>arr1.indexOf(el)<0)];
  return newArr
}


diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

////
function destroyer(arr) {
  let [list, args]  = [arguments[0], [...arguments].slice(1)];
  let newarr = list.filter(el=> args.indexOf(el) < 0);
  return newarr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

////
function whatIsInAName(collection, source) {
  var arr = [];
  let keys = Object.keys(source);
  let values = Object.values(source);
  collection.forEach(el=>{
    let pass = 0;
    for(let i = 0; i<keys.length; i++) {
      if (el.hasOwnProperty(keys[i]) && el[keys[i]] == source[keys[i]]) {
        pass++;
      }
      if (pass===keys.length) {
        arr.push(el);
      }
    }
  })
  return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

////
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}
spinalCase('This Is Spinal Tap');

////
function myReplace(str, before, after) {
  
  if (before.charAt(0)===before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase().concat(after.substring(1)); 
  }
  else {
    after = after.charAt(0).toLowerCase().concat(after.substring(1)); 
  }
  let arr = str.split(/\s/)  
  // str = arr.splice(arr.indexOf(before),1, after).join(" "); // Wrong!!!
  arr.splice(arr.indexOf(before),1, after);
  str = arr.join(" ");
  return str
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


////
function palindrome(str) {
  str = str.toLowerCase().replace(/\W|_/g, '');
  for(var i = 0, len = str.length - 1; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}

////
function convertToRoman(num) {
  var romans = [
    ["I", "V"], // 10^0
    ["X", "L"], // 10^1
    ["C", "D"], // 10^2
    ["M"]       // 10^3
  ],
      digits = num.toString()
        .split('')
        .reverse()
        .map(function(item, index) {
          return parseInt(item);
        }),
      numeral = "";

  for (var i=0; i<digits.length; i++) {
    numeral = romans[i][0].repeat(digits[i]) + numeral;
    if (romans[i][1]) {
      numeral = numeral
        .replace(romans[i][0].repeat(5), romans[i][1])
        .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0])
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
    }
  }
  
  return numeral;
}

convertToRoman(36);

////
function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/ ;
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}
rot13("SERR PBQR PNZC");

////
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");

////
function checkCashRegister(price, cash, cid) {
  cid = cid.reverse()
  let [result, values_left] = [[], []];
  let balance = cash - price;
  let values = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]
  var status;
  for(let i = 0; i<cid.length; i++) {
    if (balance >= cid[i][1]) {
      result.push([cid[i][0], cid[i][1]]);
      balance-=cid[i][1];
      values_left.push(0);
    }
    else {
      let deduct = Math.floor(balance/values[i])*values[i];
      if(deduct===0) {continue}
      result.push([cid[i][0], deduct]);
      balance-=deduct;
      balance = Math.round(balance*100)/100;
      values_left.push(cid[i][1] - deduct);
    }
  }

  if (balance!=0) {
    status = 'INSUFFICIENT_FUNDS';
    result = [];
  }
  else if (values_left.every(el=>el==0)) {
    status = 'CLOSED';
    result = result.reverse();
  }
  else {status = 'OPEN';}
  
  return {"status": status, "change": result};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);