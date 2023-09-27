const productList = require('./products.js')

function productSearch(productName){
    const p = productList.find((product) => product.name === productName);
    if (p) {
        console.log(`The ${p.name} is in '${p.category}' category and costs ${p.price} shekels.`);
    }else{
        console.log(`${productName} is not found.`);
    }
}

productSearch('apple')
productSearch('peach')
productSearch('almound milk')
productSearch('milk')
