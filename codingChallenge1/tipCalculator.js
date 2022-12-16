const day = "monday";

// switch
switch (day) {
  case "monday":
    console.log("Monday");
    break;
  case "tuesday":
    console.log("Tuesday");
    break;
  case "wednesday":
  case "thursday":
    console.log("Hello");
    break;
  default:
    console.log("Anyday");
}

// if/else
if (day === "monday") {
  console.log("Monday");
} else if (day === tuesday) {
  console.log("Tuesday");
} else if (day === wednesday || day === thursday) {
  console.log("Hello");
} else {
  console.log("Anyday");
}

//conditional(ternary)
const age = 23;
age >= 18 ? console.log("I'm over 18") : console.log("I'm under 18");

// Coding Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
//In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculatethetip,depending on the bill value.Createavariablecalled'tip'for this.
//It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement,
//and then try to convert it to a ternary operator!)
// 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip).
//Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
