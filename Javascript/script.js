var age = 20;
var age = 30;

console.log(age);

let name = "John";
console.log(name);
const pi = 3.14;
console.log(pi);
let username = "John";
let password = "password123";
if (username === "John" && password === "password123") {
    console.log("Login successful");
} else {
    console.log("Login failed");
}
function student(name, com, clg = "SECE") {
    console.log("Hello", name, "studied in college", clg, "working in", com);
}
student("Ram", "TCS");
student("SHAM", "Infosys");
student("Priya", "Google");
student("Sagar", "Microsoft");

let data = function () {
    return "Hello JavaScript";
};

console.log(data());

let mul = () => {
    return "Hello Arrow Function";
};
console.log(mul());
function sece(callback) {
    console.log("Hello SECE");
    callback();
}
function stud() {
    console.log("Display student information");
}
sece(stud);

//promise 
//resolve, reject fulfilled pending
let fetch_api = new Promise((resolve, reject) => {
    let api = false;
    if (api) {
        resolve("Fetched Api data");
    } else {
        setTimeout(() => {
            reject("Failed to fetch api data");
        }, 2000);
    }
});

fetch_api
    .then(data => console.log(data))
    .catch(err => console.log(err));

