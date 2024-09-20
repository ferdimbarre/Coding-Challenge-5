// task 1: create inventory array
const inventory = [
    { name: 'Espresso', price: 3, quantity: 10 },
    { name: 'Latte', price: 4, quantity: 5 },
    { name: 'Cappuccino', price: 4, quantity: 6 },
    { name: 'Mocha', price: 5, quantity: 4 }
];

// create empty ordrs array
const orders = []; // this just creates an empty array in which I will use push to isnert order details 
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
); // 2 example orders to initialize the array

//place order function
function placeOrder (customerName, itemOrdered) {
    let productInventory = inventory.find(product => product.name === itemOrdered.itemName) //looks to see if ordered product is part of offered products 
    if (productInventory && productInventory.quantity >=itemOrdered.itemQuantity) { // 1st condition is to make sure product exists, second is to check if it is in stock
        console.log(productInventory.quantity -= itemOrdered.itemQuantity); // updates inventory
        
        orders.push ({ customerName : customerName , //inserts order within order array
            items: {itemName: itemOrdered.itemName,
                itemQuantity: itemOrdered.itemQuantity },
            status: "Pending"
        });
    } else {
        console.log("Order could not be placed, insufficient stock"); //error message to show up if not in stock or if product is not found (does not exist within menu)
    } }; 
    // place order;
    placeOrder('Isabella Keeble', { itemName: 'Latte', itemQuantity: 1 }); // example order. Expected output is the updated inventory with one less inventory for Lattes and the order details with status pending

// Create a Function to Calculate Total for an Order

function calculateOrderTotal(itemOrdered) {
    return itemOrdered.reduce((total, currentItem) => {
        let productInventory = inventory.find(product => product.name === currentItem.itemName); //find the product 
        if (productInventory) {
            return total + (currentItem.itemQuantity * productInventory.price); //if found, calculate total price
        }
        return total;
    }, 0); 
}

// Create a Function to Mark an Order as Completed

function completeOrder (customerName, orders) {
let customerOrder = orders.find(order => order.customerName === customerName) // find the order of the customer
if (customerOrder) {
    customerOrder.status = "Complete" //if order found
} else {console.log("Error: order not found") //if order not found
}
return completeOrder
};  
