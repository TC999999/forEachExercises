// Exercise 1: doubleValues
function doubleValues(arr) {
  let doubles = [];
  arr.forEach(function (val) {
    val *= 2;
    doubles.push(val);
  });
  return doubles;
}

//Exercise 2: onlyEvenValues
function onlyEvenValues(arr) {
  let evens = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      evens.push(val);
    }
  });
  return evens;
}

//Exercise 3: showFirstAndLast
function showFirstAndLast(arr) {
  let FLArr = [];
  arr.forEach(function (string) {
    let newString = string.split("");
    newString.splice(1, newString.length - 2);
    FLArr.push(newString.join(""));
  });
  return FLArr;
}

//Exercise 4: addKeyAndValue
function addKeyAndValue(objArr, key, value) {
  objArr.forEach(function (obj) {
    obj[key] = value;
  });
  return objArr;
}

//Exercise 5: vowelCount
function vowelCount(str) {
  str = str.toLowerCase();
  const vowels = {};
  const vowelStr = "aeiou";
  strArr = str.split("");
  strArr.forEach(function (letter) {
    let total = 0;
    if (vowels.hasOwnProperty(letter)) {
      total = vowels[letter];
    }
    if (vowelStr.indexOf(letter) !== -1) {
      total++;
    }
    if (total > 0) {
      vowels[letter] = total;
    }
  });
  return vowels;
}
