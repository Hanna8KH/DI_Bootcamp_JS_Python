// 🌟 Exercise 1 : Scope

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
    // console.log(a); => a = 3
}


// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
in this case we will get an error when run a function funcOne(), 
because with const we cant reassign the variable (unlike the variable let)

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() => alert will be equal 'inside the funcThree function 0'
funcTwo() => var a is reassigned to 5 => let a = 5
funcThree() => alert will be equal 'inside the funcThree function 0'
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
we wil get an error as we cant reassign const 

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

=> alert will be equal 'inside the funcFive function hello'

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix()
=> alert will be equal 'inside the funcSix function test'

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
=> nothing will happen as we are not reassigning the variables, 
we declare a new variable a inside of a function 

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
=> first alert will be equal 'in the if block 5'

=> second alert will be equal 'outside of the if block 5'

// #5.2 What will happen if the variable is declared 
// with const instead of let ?

=> nothing will happen as we are not reassigning the variables, 
we declare a new variable a inside of a function 


// 🌟 Exercise 2 : Ternary Operator

const winBattle = () => true;
let experiencePoints;
experiencePoints = winBattle() ? 10 : 1;
console.log(`you won! your points: ${experiencePoints}`);

//🌟 Exercise 3 : Is It A String ?

const isString = (x) => (typeof x === 'string' ? true : false);

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false


🌟 Exercise 4 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach(displayColors)

//1 
function displayColors(color, i){
        console.log(`${i+1}# choice is ${color}`);
        if (color === "Violet") {
            console.log("Yeah")} else {
                console.log("No...")
        }
    };

//2
colors.forEach(function (color, i){
    const displayColor = `${i+1}# choice is ${color}`;
    const isViolet = color.includes('Violet') ? "Yeah" : "No..."
    console.log(displayColor);
    console.log(isViolet)
});
    


// 🌟 Exercise 5 : Colors #2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
//1
colors.forEach(function(color, i){
    let ordinalEnding 
    switch (i + 1) {
        case 1:
            ordinalEnding = ordinal[1]
            break;
        case 2:
            ordinalEnding = ordinal[2]
            break;
        case 3:
            ordinalEnding = ordinal[3]
            break;    
        default:
            ordinalEnding = ordinal[0]
            break;
    };
    const displayColor = `${i + 1}${ordinalEnding} choice is ${color}`
    console.log(displayColor);
})

//2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, i) => {
    const index = i + 1;
    function ordinalEnds () {
        return index === 1 || index === 2 || index === 3 ? ordinal[index] : ordinal[0]
    }
    const displayColor = `${index}${ordinalEnds()} choice is ${color}`;
    console.log(displayColor);
})


// Exercise 6 : Bank Details

const bankAmount = 5000
const VATindex = 1.17
const expenses = ["+200", "-100", "+146", "+167", "-2900"];

function sumOfExpenses () {
    return expenses.reduce((total, num) => {
        total = total + (Number(num) * VATindex)
        return total
    }, bankAmount)
}

console.log(`Current bank amount is ${sumOfExpenses()}`);