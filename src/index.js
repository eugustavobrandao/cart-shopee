import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";
const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!\n");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels Lamborghuini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, 1)

await cartService.displayCart(myCart);

// deletei os itens do carrinho:
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);
