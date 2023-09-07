Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them.
// What will be the outputs ?
------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
output will be = ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

------2------
const country = "USA";
console.log([...country]);
output will be = ['U', 'S', 'A']

------Bonus------
let newArray = [...[,,]];
console.log(newArray);
i dont get it why the output is [undefined, undefined]


🌟 Exercise 2 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1
const welcomeStudents = users.map((user) => 'Hello ' + user.firstName)
console.log(welcomeStudents);

// 2
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident')
console.log(fullStackResidents);

// 3 
const lastNames = fullStackResidents.map((user) => user.lastName )
console.log(lastNames);


🌟 Exercise 3 : Star Wars
// Instructions
// Using this array 
// Use the reduce() method to combine all of these into a single string.

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const sentence = epic.reduce((acc, val) => acc + ' ' + val)

🌟 Exercise 4 : Employees #2
// Instructions
// Using this object:
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name 
// (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passedTheCourse = students.filter((student) => student.isPassed === true);
let greatings = []
passedTheCourse.forEach((student) => greatings.push(`Good job ${student.name}, you passed the course in ${student.course}`))
console.log(greatings);
console.log(passedTheCourse);