const productsArray = [
    {
        id: "1",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "2",
        title: "Sunglesses",
        price: 9.99
    },
    {
        id: "3",
        title: "Camera",
        price: 43.99
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)
    
    if (productData == undefined) {
        console.log("No id")
        return undefined
    }

    return productData;
}

export {productsArray, getProductData};