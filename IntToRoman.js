const num = 2000;

var intToRoman = function (num) {
  var string = "";
  function conversionAlgorithm(num) {
    if (num >= 1000) {
      if (num >= 3000) {
        string = string + "MMM";
        if (num % 1000 !== 0) {
          x = num % 1000;
          conversionAlgorithm(x);
        }
      } else if (num >= 2000) {
        string = string + "MM";
        if (num % 1000 !== 0) {
          x = num % 1000;
          conversionAlgorithm(x);
        }
      } else {
        string = string + "M";
        if (num % 1000 !== 0) {
          x = num % 1000;
          conversionAlgorithm(x);
        }
      }
    } else if (num >= 900) {
      string = string + "CM";
      if (num % 900 !== 0) {
        x = num % 900;
        conversionAlgorithm(x);
      }
    } else if (num >= 500) {
      string = string + "D";
      if (num % 500 !== 0) {
        x = num % 500;
        conversionAlgorithm(x);
      }
    } else if (num >= 400) {
      string = string + "CD";
      if (num % 400 !== 0) {
        x = num % 400;
        conversionAlgorithm(x);
      }
    } else if (num >= 100) {
      if (num >= 300) {
        string = string + "CCC";
        if (num % 100 !== 0) {
          x = num % 100;
          conversionAlgorithm(x);
        }
      } else if (num >= 200) {
        string = string + "CC";
        if (num % 100 !== 0) {
          x = num % 100;
          conversionAlgorithm(x);
        }
      } else {
        string = string + "C";
        if (num % 100 !== 0) {
          x = num % 100;
          conversionAlgorithm(x);
        }
      }
    } else if (num >= 90) {
      string = string + "XC";
      if (num % 90 !== 0) {
        x = num % 90;
        conversionAlgorithm(x);
      }
    } else if (num >= 50) {
      string = string + "L";
      if (num % 50 !== 0) {
        x = num % 50;
        conversionAlgorithm(x);
      }
    } else if (num >= 40) {
      string = string + "XL";
      if (num % 40 !== 0) {
        x = num % 40;
        conversionAlgorithm(x);
      }
    } else if (num >= 10) {
      if (num >= 30) {
        string = string + "XXX";
        if (num % 10 !== 0) {
          x = num % 10;
          conversionAlgorithm(x);
        }
      } else if (num >= 20) {
        string = string + "XX";
        if (num % 10 !== 0) {
          x = num % 10;
          conversionAlgorithm(x);
        }
      } else {
        string = string + "X";
        if (num % 10 !== 0) {
          x = num % 10;
          conversionAlgorithm(x);
        }
      }
    } else if (num >= 9) {
      string = string + "IX";
      if (num % 9 !== 0) {
        x = num % 9;
        conversionAlgorithm(x);
      }
    } else if (num >= 5) {
      string = string + "V";
      if (num % 5 !== 0) {
        x = num % 5;
        conversionAlgorithm(x);
      }
    } else if (num >= 4) {
      string = string + "IV";
      if (num % 4 !== 0) {
        x = num % 4;
        conversionAlgorithm(x);
      }
    } else if (num >= 1) {
      if (num === 3) {
        string = string + "III";
      } else if (num === 2) {
        string = string + "II";
      } else {
        string = string + "I";
      }
    }
  }
  conversionAlgorithm(num);

  console.log(string);
  return string;
};
intToRoman(num);
