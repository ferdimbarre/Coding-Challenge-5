// task 1: create inventory array
const inventory = [
    { name: 'Espresso', price: 3, quantity: 10 },
    { name: 'Latte', price: 4, quantity: 5 },
    { name: 'Cappuccino', price: 4, quantity: 6 },
    { name: 'Mocha', price: 5, quantity: 4 }
];

// create empty ordrs array
const orders = []
// push items inside:
orders.push (
    {
        customerName: "Lisa Rhodes",
        items: { itemName : "Latte" ,
            itemQuantity : 2 },
            status: "Complete"
    }, 
    {
        customerName: "Max", 
        items: { itemName: "Espresso", quantity: 1
        }, status: "Pending"
    }
);





