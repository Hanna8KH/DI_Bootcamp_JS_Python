let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (items) => {
    const fruits = items.fruits
    fruits.forEach(fruit => console.log(fruit);)
}
displayGroceries(groceries);

const cloneGroceries = () => {
    let user = client;
    user = 'Betty';
    //  Will we also see this modification in the user variable ? Why ?
    // No, cuz this variable user is new variable that is in its scope inside a clone function
    const shopping = groceries


}


In the function, create a variable named shopping that is equal 
to the groceries variable.
Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

Invoke the cloneGroceries function.