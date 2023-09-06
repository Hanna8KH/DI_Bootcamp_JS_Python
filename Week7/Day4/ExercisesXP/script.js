🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const calculate = (a, b) => a + b

🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

const KgToGrams = function(kg){
    return kg * 1000
}
const grams = KgToGrams(2)

// -> function declaration - functin has a name
// // -> function expression - function is anonymous
//Write in a one line comment, the difference between function declaration and function expression.
//Finally, use a one line arrow function and invoke it.
const KgToGramsArrowFunction = (kg) => kg * 100

🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function selfInvokedSentence(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`
    const domSentence = document.createElement('h2')
    domSentence.innerText = sentence
    document.body.appendChild(domSentence)
})(3, 'Andrea', 'Rome', 'designer')


🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

SEE scriptnavbar.js

🌟 Exercise 5 : Juice Bar

const isLastElement = (array, index) => index === array.length - 1
function makeJuice(size) {
    const sentence = `The client wants a ${size} juice, containing }.`
    const ingredients = []
    addIngredients('milk', 'coconut', 'pinaple')
    addIngredients('milk', 'coconut', 'pinaple')

    displayJuice(ingredients)

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3)        
    }

    function displayJuice(ingredients) {
        ingredients.forEach((ingredient, i) => {
            const comma = isLastElement(ingredients, i) ? '.' : ',';
            const word = `${ingredient}${comma}`;
            sentence += word;
        });
        const h2 = document.createElement(h2);
        h2.innerText = sentence
        document.body.appendChild(h2)
    
    }
} 
makeJuice('big')


{/* Part I:
The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


Part II:
In the makeJuice function, create an empty array named ingredients.

The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope. */}