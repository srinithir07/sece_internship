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

let emp = [
    {
        emp_id: 100,
        emp_name: "Sachin",
        salary: 50000,
        skills: ["python", "java", "html", "css"]
    },
    {
        emp_id: 101,
        emp_name: "Kohli",
        salary: 60000,
        company: {
            c1: "TCS",
            c2: "Infosys",
            c3: "Google",
            c4: "Microsoft",
            c5: "Amazon"
        }
    }
];

//console.log(emp[0].skills[1]);
//console.log(emp[1].company.c1);
let stringidy_data = JSON.stringify(emp);
console.log(stringidy_data);
let parse_data = JSON.parse(stringidy_data);
console.log(parse_data);

//let copied_data = emp;
//copied_data.salary = 80000;
//Shallow Copy(using spread operator)
//let copied_data = [...emp];
//copied_data[1].salary = 80000;
//copied_data.company.c1 ="Google"
//Deep Copy
let copied_data = JSON.parse(JSON.stringify(emp));
copied_data[1].company.c1 = "Google";
console.log(emp[1].company.c1);