export default defineEventHandler((_event) => {
    return [
        { id: 1, name: 'Espresso', price: 2.50, inStock: true, description: 'Classic strong espresso made from freshly ground beans.' },
        { id: 2, name: 'Americano', price: 3.00, inStock: true, description: 'Smooth black coffee with rich aroma and balanced taste.' },
        { id: 3, name: 'Cappuccino', price: 3.80, inStock: true, description: 'Espresso with steamed milk and soft milk foam on top.' },
        { id: 4, name: 'Latte', price: 4.20, inStock: true, description: 'Milky coffee with a gentle, creamy flavor.' },
        { id: 5, name: 'Flat White', price: 4.50, inStock: false, description: 'Velvety espresso-based drink with microfoam.' },
        { id: 6, name: 'Mocha', price: 4.80, inStock: true, description: 'Chocolate-flavored coffee with milk and espresso.' },
        { id: 7, name: 'Iced Latte', price: 4.00, inStock: true, description: 'Cold refreshing latte with ice and smooth taste.' },
        { id: 8, name: 'Caramel Macchiato', price: 5.20, inStock: true, description: 'Sweet caramel coffee with silky milk foam.' },
        { id: 9, name: 'Cold Brew', price: 4.60, inStock: true, description: 'Slow-brewed cold coffee with rich flavor and low acidity.' },
        { id: 10, name: 'Espresso Machine', price: 9.00, inStock: true, description: 'Compact home espresso machine for perfect daily coffee.' }
    ]
})
