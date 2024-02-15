let invoice = {
    name: "Luis",
    age: 25,
    products: {
        0: ["Berimbau", 170.00],
        1: ["Pandeiro", 90.00],
        2: ["Atabaque", 450.90]
    
    }
}



generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("-------------")

    for(let index in invoice.products){
        let [productsName, productsPrice] = invoice.products[index]
        console.log(` - ${productsName}: R$ ${productsPrice}`)
    }

}