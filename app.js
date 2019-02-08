// // Arrow Functions
// console.log("Arrow Functions");
// const addNumbers = function(number1: number, number2: number): number {
//   return number1 + number2;
// };
// console.log(addNumbers(10, 3));
// const multiplyNumbers = (number1: number, number2: number): number =>
//   number1 * number2;
// console.log(multiplyNumbers(10, 3));
// const greet = () => {
//   console.log("Hello");
// };
// greet();
// const greetFriend = (friend: string) => console.log(friend);
// greetFriend("Manu");
// // Default Parameters
// console.log("DEFAULT PARAMETERS");
// const countdown = (start: number = 10): void => {
//   console.log(start);
//   while (start > 0) {
//     start--;
//   }
//   console.log("Done!", start);
// };
// countdown();
// // REST & SPREAD
// console.log("REST & SPREAD");
// const numbers = [1, 10, 99, -5];
// console.log(Math.max(33, 99, 10, -3));
// console.log(Math.max(...numbers));
// function makeArray(...args: number[]) {
//   return args;
// }
// console.log(makeArray(1, 2, 6));
// // Destructuring
// console.log("DESTRUCTURING");
// const myHobbies = ["Cooking", "Sports"];
// const [hobby1, hobby2] = myHobbies;
// console.log(hobby1, hobby2);
// const userData = { userName: "Lillo", age: 33 };
// const { userName: myName, age: myAge } = userData;
// console.log(myName, myAge);
