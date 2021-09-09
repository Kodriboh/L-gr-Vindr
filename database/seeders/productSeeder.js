const Product = include('/models/product.js');

function seed() {
    const grapefruit = new Product({
        name: 'Ruby Graphefruit',
        price: 1.99,
        category: 'fruit'
    });
    
    grapefruit.save()
        .then(p => {
            console.log(grapefruit);
        })
        .catch(err => console.log(err));
}

module.exports = seed;