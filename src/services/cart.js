// quais ações o meu carrinho pode fazer?

// CASOS DE USO:
// add item ✅
async function addItem(userCart, item) {
  userCart.push(item);
}

// deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name == name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// calcular total
async function calculateTotal(userCart) {
  console.log("\nShopee Cart total is:");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁 Total: ${result}`);
}

// remover um item
async function removeItem(userCart, index) {
  const deleteIndex = index - 1;

  // é maior do que zero e se é menor que o tamanho do carrinho
  if (index >= 0 && index < userCart.length) {
    // transforma o indice visual do usuário para o indice backend
    userCart.splice(deleteIndex, 1);
  }
}

async function displayCart(userCart) {
  console.log("Shopee cart list: ");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal: R$ ${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
