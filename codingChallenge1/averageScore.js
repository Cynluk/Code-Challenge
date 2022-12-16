let n = "1" + 1; // 11
n = n - 1; // 10

// 5 falsy values: 0, "", undefined, null, NaN

// Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team,using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Include a requirement for a minimum score of 100.With this rule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimum score also a pplies to a draw!So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const aveDolphins = (97 + 112 + 101) / 3;
const aveKoalas = (109 + 95 + 123) / 3;

// if (aveDolphins === aveKoalas) {
//   console.log("It's a draw");
// } else if (aveDolphins > aveKoalas) {
//   console.log("Dolphins won!");
// } else {
//   console.log("Koalos won!");
// }

// Bonus 1 & 2
console.log("Hi");
if (aveDolphins > aveKoalas && aveDolphins >= 100) {
  console.log("Dolphins won!");
} else if (aveDolphins < aveKoalas && aveKoalas >= 100) {
  console.log("Koalos won!");
} else if (
  aveDolphins === aveKoalas &&
  aveDolphins >= 100 &&
  aveKoalas >= 100
) {
  console.log("It's a draw");
} else {
  console.log("No one won");
}
