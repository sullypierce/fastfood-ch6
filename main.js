const restaurant = {
    name: "Bob's Burgers",
    //this function takes an order and puts it inside the orders array!
    placeOrder: function (meal) {
this.orders.push(meal);
    },
    //this array holds all the orders that have been given!
    orders: [],
    //this function returns the orders array
    getOrders: function() {
        return this.orders
    }
}

const chickenComboMeal = {
sandwichType: "chicken",
fries: true,
drinkSize: "medium"
}

// Place an order
restaurant.placeOrder(chickenComboMeal);


// Invoke the function to return the list of all orders
const listOfOrders = restaurant.getOrders();
// Output all orders to the console using console.table()
console.table(listOfOrders);
