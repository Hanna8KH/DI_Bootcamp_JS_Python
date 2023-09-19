const form =document.forms[0]
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')

form.addEventListener('submit', function(event){
    event.preventDefault();

    const data = new FormData(event.target)
    const value = Object.fromEntries(data.entries())

    const element = document.createElement('p');
    const valueToString = JSON.stringify(value)
    element.innerText = valueToString;
    document.body.appendChild(element)
})