var convert = (min) => {
  return min * 60;
};

console.log(convert(5));

var divideEvenly = (first, second) => {
  if (first > second) {
    if (Number.isInteger(first / second)) return true;
    else return false;
  } else console.log("worng input");
};

console.log(divideEvenly(28, 7));

var charCount = (ch, str) => {
  var count = 0;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == ch) {
      count++;
    } else continue;
  }
  return count;
};
console.log(charCount("a", "Aman"));

var addUpto = (name) => {
  var sum = 0;
  for (var j = 1; j <= name; j++) sum = sum + j;
  return sum;
};
console.log(addUpto(13));

var replaceVowel = (s) => {
  //   let vowel = ["a", "i", "e", "o", "u"];
  let arr = [];

  for (i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (c == "a") {
      arr.push("9");
    } else if (c == "e") {
      arr.push("9");
    } else if (c == "i") {
      arr.push("9");
    } else if (c == "o") {
      arr.push("9");
    } else if (c == "u") {
      arr.push("9");
    } else arr.push(c);
  }
  return arr;
};
console.log(replaceVowel("milee"));

var specialReverse = (str1) => {
  var splitStringArray = str1.split(" ");
  for (i = 0; i < splitStringArray.length; i++) {
    var chara = splitStringArray[i];
    if (true) {
      splitStringArray[i] = splitStringArray[i].split(" ").reverse().join("");
    }
  }
  var joinString = splitStringArray.join(" ");
  return joinString;
};
console.log(specialReverse("hey milee sinha"));

var str1 = "hello milee";
var splitStringArray = str1.split(" ");
//console.log(splitStringArray);
for (i = 0; i < splitStringArray.length; i++) {
  // var chara = str1.charAt(i);
  //   console.log(chara);
  var splitStringArray1 = splitStringArray[i];
  if (splitStringArray1.charAt(1) == "m") console.log(splitStringArray1);
}

const testJackpot = (ar) => ar.every((val) => val == ar[0]);
console.log(testJackpot(["ss", "s", "s", "s"]));

function uniq(a) {
  return Array.from(new Set(a));
}
console.log(uniq(["Aman", "milee", "aman"]));

var realType = (a) => {
  if (Array.isArray(a)) return console.log("array");
  else if (a == null) return null;
  else return typeof a;
};
console.log(realType(null));

var milee = "10mil";
var h = milee.split(" ");
console.log(h);
