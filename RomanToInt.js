const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const subtractionCases = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

var s = "DCXXI";

var romanToInt = function (s) {
  integerValues = [];
  s = Array.from(s);
  for (i = 0; i < s.length; i++) {
    if (subtractionCases[s[i] + s[i + 1]]) {
      console.log(subtractionCases[s[i] + s[i + 1]]);
      integerValues.push(subtractionCases[s[i] + s[i + 1]]);
      s[i] = null;
      s[i + 1] = null;
    }
  }

  v = s.filter((value) => value !== null);
  for (x = 0; x < s.length; x++) {
    console.log(romanNumerals[v[x]]);
    integerValues.push(romanNumerals[v[x]]);
  }
  console.log(integerValues);
  return integerValues.reduceRight((accumulator, currentValue) => {
    accumulator += currentValue;
    return accumulator;
  });
};

console.log(romanToInt(s));

var intToRoman = function (x) {};
