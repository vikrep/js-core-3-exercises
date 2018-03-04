function equals(got, expected) {
  if (got === expected) {
    console.log("✔︎ Passed");
    console.log();
  } else {
    console.log("𝙭 Failed");
    console.log("    Expected: " + expected);
    console.log("    But got:  " + got);
    console.log();
  }
}

var haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus'];
var haystack2 = ['glass', 'needle',]

/*
Instructions:

Turn the below "find needle" code into a function
that returns the index of "needle" in the given haystack
*/
//////////////////////////////////////////////////////////////

// function findNeedle(myArr) {
//   for (var i = 0; i < myArr.length; i++) {
//     if (myArr[i] === "needle") {
//       return i;
//     };
//   };
// };
///////////////////////////////////////////////////////////////

//Using .map()

// function findNeedle(myArr) {
//   i = 0;
//   var needle = myArr.map(function (item, index) {
//     if (item === 'needle') {
//       i = index;
//     };
//   });
//   return i;
// };

//////////////////////////////////////////////////////////////

//Using .filter()

function findNeedle(myArr) {
  i = 0;
  var needle = myArr.filter(function (item, index) {
    if (item === 'needle') {
      i = index;
    };
  });
  return i;
};

equals(findNeedle(haystack1), 3);
equals(findNeedle(haystack2), 1);
equals(findNeedle(haystack1), 5);

