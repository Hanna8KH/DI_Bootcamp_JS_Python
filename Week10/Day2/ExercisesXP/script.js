🌟 Exercise 1 : Comparison

function compareToTen(num) {
    const result = new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve('Number is less than or equal to 10.')
        } else {
            reject('Number is greater than 10.')
        }
    });
    return result
}

compareToTen()
  .then(result => console.log(result))
  .catch(error => console.log(error))


🌟 Exercise 2 : Promises

const promise = new Promise((resolve, reject) => {
    setTimeout((resolve) => resolve('success'), 4000)
});
promise.then(console.log).catch(console.error)

🌟 Exercise 3 : Resolve & Reject

const promise1 = Promise.resolve(2)
promise1.then((res) => console.log(res)).catch((err) => console.error(err));

const promise2 = Promise.reject(“Boo!”)
promise1.then((res) => console.log(res)).catch((err) => console.error(err));

