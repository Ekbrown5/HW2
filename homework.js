//  Q. Rank your comfot with the following material on a scale of 0-5
//  A. 4 - I feel pretty good but some extra review would help.

////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let number =0; number <= 200; number +=2) {
    console.log(number);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 0; i <= 100; i++)  {
let output = "";

if (i % 3 === 0) {
    output += "fizz";
}

if (i % 5 === 0) {
    output += "Buzz";
}

console.log(output || i);
}
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "Plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2]++;

wolfy[3] = "Gotham City";

dart.push("Hawkins");

wolfy[0] = "Gameboy"

console.log(wolfy);
console.log(sharky);
console.log(plantee);
console.log(porgee);
console.log(dart);


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const turtle of ninjaTurtles) {
    const upperCaseName = turtle.toUpperCase();
    console.log(upperCaseName);
}
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'));

favMovies.sort();
// It permanently alters the array by sorting it alphabetically.

favMovies.pop();

favMovies.push("Guardians of the Galaxy");

favMovies.reverse();

favMovies.shift();

const unshiftResult = favMovies.unshift('Avatar');
// The unshift method returns the new length of the array after adding the element.

const indexDjangoUnchained = favMovies.indexOf('Django Unchained');
favMovies.splice(indexDjangoUnchained, 1, 'Avatar');
// It permanently alters the array.

let middleIndex = Math.floor(favMovies.length / 2);
const slicedMovies = favMovies.slice(middleIndex);
// It does not permanently alter the array.

console.log(slicedMovies);
// It is a new array containing the last half of the original array.

console.log(favMovies);

console.log(favMovies.indexOf('Fast and Furious'));
// The value will be -1 since it was removed from the array.


////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]]
];

const indexEggbert = whereIsWaldo.indexOf("Eggbert");
if (indexEggbert !== -1) {
  whereIsWaldo.splice(indexEggbert, 1);
}

const neffIndex = whereIsWaldo[2].indexOf("Neff");
if (neffIndex !== -1) {
  whereIsWaldo[2][neffIndex] = "No One";
}

console.log(whereIsWaldo);
const waldo = whereIsWaldo[2][1][1];
console.log(waldo);


////////////////////////////////
//  Excited Kitten
////////////////////////////////
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {

    const randomMessage = Math.floor(Math.random() * 3);
    switch (randomMessage) {
      case 0:
        console.log("...human...why you taking pictures of me?...");
        break;
      case 1:
        console.log("...the catnip made me do it...");
        break;
      case 2:
        console.log("...why does the red dot always get away...");
        break;
    }
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

nums.sort((a, b) => a - b);

middleIndex = Math.floor(nums.length / 2);

let median;
if (nums.length % 2 === 1) {
median = nums[middleIndex];
} else {
median = (nums[middleIndex - 1] + nums[middleIndex]) / 2;
}
console.log(`=> ${median}`);


