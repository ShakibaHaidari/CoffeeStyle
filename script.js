const cartButtons = document.querySelectorAll(".btn-cart");
const totalCostElement = document.querySelector("h3.text-2xl");
let totalCost = 0;
cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productPrice = parseFloat(
      button.parentNode.querySelector(".product-price").dataset.price
    );
    totalCost += productPrice;
      totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`; // Update the total cost
      alert('thank you for your shopping!')
  });
});
