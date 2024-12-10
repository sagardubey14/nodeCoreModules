const events = require('node:events');

// console.log(events.EventEmitter);


class PizzaShop extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
    placeOrder(customerName, pizzaType){
        console.log(`${customerName} has placed an order for a ${pizzaType}.`);
        this.emit('orderPlaced', customerName, pizzaType);
    }
    prepareOrder(customerName, pizzaType){
        console.log(`Preparing the ${pizzaType} pizza.`);
        this.emit('pizzaPrepared', customerName, pizzaType);
    }
    deliverPizza(customerName, pizzaType){
        console.log(`${pizzaType} pizza is being delivered to ${customerName}.`);
        this.emit('pizzaDelivered', customerName, pizzaType);
    }
}

module.exports = PizzaShop;