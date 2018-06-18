// var name = "Jack";
// var age = 23;
// var shootingScore = 45.6;
//
// var message = "Hi my name is " + name + " and I am " + age + " years old!";

// var firtstName = "John";
// var lastName = "JacobJingleHeimerSmith";
// var dataOfBirth = "10-09-82";
// var age = 23;
// var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";
//
// var loginWelcomeMessage = "Welcome, " + firtstName + ". Happy " + age + "rd birthday";
//
// console.log(loginWelcomeMessage);

// var sum = 10 + 15;
// var sub = 15 - 10;
// var mul = 10 * 3;
// var div = 10 / 3;
// var mod = 10 % 3;
//
// var msg = "10 / 3 = 3 with remainder of " + mod;
// var result = 10 * ((5 + 3) - 4);
// console.log(result);
// var myAccountBalance = 300;
// var nikeSBShoes = 799.23;
// var coupon = 500;
//
// if (nikeSBShoes <= myAccountBalance) {
//     myAccountBalance -= nikeSBShoes;
//     console.log("We just bought some dope shoes");
//     console.log("Account Balance: " + myAccountBalance);
// } else if(nikeSBShoes - coupon <= myAccountBalance){
//     console.log("We just bought some dope shoes with a coupon");
//     myAccountBalance -= nikeSBShoes -coupon;
//     console.log("Account Balance: " + myAccountBalance);
//
// } else {
//     console.log("You to broke for shoes bra!");
// }

// var val1 = 23;
// var val2 = "23";
// if (val1 == val2){
//     console.log("These are the same!")
// }else{
//     console.log("One is not like the other!")
// }
//
// var cat1 = 5;
// var cat2 = 10;
// var cat3 = 1;
// var cat3disabledHandicap = true;
//
// if (cat1 > cat2 && cat1 > cat3 && !cat3disabledHandicap) {
//     console.log("Cat 1 is the cutest! ")
// } else if (cat2 > cat1 && cat2 > cat3 && !cat3disabledHandicap) {
//     console.log("Cat 2 is the cutest!")
// } else if (cat3 > cat1 && cat3 > cat2 || cat3disabledHandicap ) {
//     console.log("Cat 3 is the cutest")
// }

//
// var students = ["Timmy", "Janessa", "Arun"];
//
// var naughtyList = [];
// naughtyList.push(students[0])
//
// var index = naughtyList.indexOf("Timmy");
// var index2 = students.indexOf("Arun");
// console.log(naughtyList)
// if (index> -1 ){
//     naughtyList.splice(index, 1);
// }
//
// console.log(naughtyList);

// var total = 10;
// for (var x = 0; x < total; x++){
//     console.log(x);
// }

var students = [];

function student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting =  function () {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    }

}


// var s1 = new student("Jenny", "Laga", 5);
// console.log(s1);
// console.log(s1.greeting());

students.push(new student("Jenny", "Laga" , 5));
students.push(new student("Timmy", "Turner" , 8));
students.push(new student("Carl", "Jr" , 4));

var student = students[0];

for (var key in student) {
    console.log(student[key]);
}


//
// var student0 = {
//     firstName: "Jayne",
//     lastName: "Looo",
//     age: 8
//
// };
//
// console.log(student0.greeting());

// Creates new empty object
// var student1 = new Object();
//
// student1.firstName = "John";
// student1.lastName = "Parker";
// student1.age = 7;
//
//
// var student2 = {};
// student2.firstName = "Zack";
// student2.lastName = "Bobo";
// student2.age = 5;






// students.push(student0);
// students.push(student1);
// students.push(student2);


//
// for (var index = 0; index < students.length; index ++){
//     var student = students[index];
//     console.log(student.greeting());
// }

// console.log(student.firstName);
// console.log(student.lastName);
//
// console.log(student["firstName"]);
// console.log(student["lastName"]);

//
// var length1 = 15;
// var witdth1 = 10;
// var area1 = length1 * witdth1;
//
// var length2 = 12;
// var width2 = 14;
// var area2 = length2 * width2;
//
//
// console.log(area1);
// console.log(area2);
//
// function area(length, width) {
//     return length * width;
// }
//
//
//
// var area1 = area(10,15);
// console.log(area1);
// var rectangleAreas = [];
// rectangleAreas.push(area(10,15));
// rectangleAreas.push(area(14,2));
// rectangleAreas.push(area(4,5));
// console.log(rectangleAreas);
//
// var banckBalance = 500;
//
// function makeTransaction(priceOfSale) {
//
// }
//
// console.log(banckBalance);
// makeTransaction(79.00);
// console.log(banckBalance);
// makeTransaction(2.32);
// console.log(banckBalance);
// makeTransaction(10.45);
// console.log(banckBalance);
// makeTransaction(450.00);
//
// var transaction = function (priceOfSale) {
//     if (priceOfSale <= banckBalance){
//         banckBalance -= priceOfSale;
//         console.log("Purchase Successful ");
//     }else {
//         console.log("Insufficient Funds");
//     }
//
// };

//
// transaction(10);










































