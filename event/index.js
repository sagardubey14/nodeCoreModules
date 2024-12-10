const PizzaShop = require('./PizzaShop');

const Dominos = new PizzaShop('Dominos');

let takeOrder = ()=>{
    //assume data is coming from frontend
    let customerName = 'Sagar';
    let pSize = 'Medium';
    let toppings = ['Mushroom', 'Jalapeno', 'Pepperoni'];
    let xtraCheese = true;

    let top = '';
    toppings.forEach(element => {
        top = top + (top == ''?'':', ') +element;
    })
    const pizzaType = pSize +' sized pizza toppings '+ top +(xtraCheese?' with Extra Cheese':'')

    // console.log(pizzaType);
    
    Dominos.placeOrder(customerName,pizzaType);
}

Dominos.on('orderPlaced',(customerName, pizzaType)=>{
    Dominos.prepareOrder(customerName, pizzaType);
})

Dominos.on('pizzaPrepared',(customerName, pizzaType)=>{
    Dominos.deliverPizza(customerName, pizzaType);
})

Dominos.on('pizzaDelivered',()=>{
    console.log('Give us the feedback!!');
    
})

takeOrder();