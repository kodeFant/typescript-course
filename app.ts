// string
let myName: string = "Max";
// myName = 28;

// numbers
let myAge: number = 27.5;
// myAge: "Max";

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = "27";

// array
let hobbies: any[] = ["Cooking", "Sports"]
hobbies = [100]
// hobbies = 100;

// tuples
let address: [string, number] = ["Superstreet", 99]

// enum
enum Color {
    Gray,   // 0
    Green = 100,  // 1
    Blue    // 2
}

let myColor: Color = Color.Blue;
console.log(myColor)

// any
let car: any = "BMW";
console.log(car)
car = { brand: "BMW", series: "3" }
console.log(car)