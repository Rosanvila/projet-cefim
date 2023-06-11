/**
 * Fonction qui met en place les evenements sur les différents boutons des produits du panier
 * et gere le total
 */
export default function initialiseSelector() {
  const totalPrice = document.getElementById("total"); //Selectionne le total
  let count = 0; // sera incrémenté par le nombre d'article est leurs prix

  const btnMoins = document.querySelectorAll("*[id*=moins-product]"); //Selectionne les boutons moins du panier
  const btnPlus = document.querySelectorAll("*[id*=plus-product]"); //Selectionne les boutons plus du panier
  const productquantity = document.querySelectorAll("*[id*=quantity-product]"); //Selectionne les quantités de chaques produits
  const productdelete = document.querySelectorAll("*[id*=delete-product]"); //Selectionne les boutons de suppression
  const allPrices = document.querySelectorAll(".product-price"); // recupere tout les prix sur la page

  for (let i = 0; i < allPrices.length; i++) {
    const itemPrice = Number(allPrices[i].innerHTML);
    const itemQuantity = Number(productquantity[i].value);
    count += itemPrice * itemQuantity;
  }

  totalPrice.innerHTML = count;

  //au chargement de la page si le nombre d'exemplaire commandé est inférieur a 10 on met un "0" devant le nombre
  productquantity.forEach((el) => {
    if (el.value < 10 && el.value.length < 2) el.value = `0${el.value}`;
  });

  //Si on click sur le bouton moins d'un des produits on selectionne le nombre d'exemplaire en fonction
  //Si le nombre d'exemplaire attein "0" il es supprimer du panier
  btnMoins.forEach((el) =>
    el.addEventListener("click", () => {
      const quantityId = el.id.replace("moins", "quantity");
      const containerId = el.id.replace("moins", "container");
      const priceId = el.id.replace("moins", "price");
      const quantitySelector = document.querySelector(`#${quantityId}`);
      const containerSelector = document.querySelector(`#${containerId}`);
      const priceSelector = document.querySelector(`#${priceId}`);

      if (quantitySelector.value > 0) {
        quantitySelector.value--;
        count -= Number(priceSelector.innerHTML);
        totalPrice.innerHTML = count;
        if (count === 0) {
          const cart = document.getElementById("container-products");
          cart.innerHTML = "<h2 class='emptyCart' id='emptyCart'>Votre panier est vide</h2>";
        }
        if (quantitySelector.value < 10)
          quantitySelector.value = `0${quantitySelector.value}`;
      }
      if (quantitySelector.value === "00") {
        containerSelector.remove();
      }
    })
  );

  //Si on click sur le bouton plus d'un des produits on selectionne le nombre d'exemplaire en fonction
  //Si le nombre d'exemplaire attein "99" il n'augmente plus
  btnPlus.forEach((el) =>
    el.addEventListener("click", () => {
      const quantityId = el.id.replace("plus", "quantity");
      const quantitySelector = document.querySelector(`#${quantityId}`);
      const priceId = el.id.replace("plus", "price");
      const priceSelector = document.querySelector(`#${priceId}`);

      if (quantitySelector.value < 99) {
        quantitySelector.value++;
        count += Number(priceSelector.innerHTML);
        totalPrice.innerHTML = count;
        if (quantitySelector.value < 10)
          quantitySelector.value = `0${quantitySelector.value}`;
      }
    })
  );
  //Si on click sur le bouton supprimer on retire l'article
  productdelete.forEach((el) =>
    el.addEventListener("click", () => {
      const containerId = el.id.replace("delete", "container");
      const quantityId = el.id.replace("delete", "quantity");
      const quantitySelector = document.querySelector(`#${quantityId}`);
      const priceId = el.id.replace("delete", "price");
      const priceSelector = document.querySelector(`#${priceId}`);

      const itemPrice = Number(priceSelector.innerHTML);
      const itemQuantity = Number(quantitySelector.value);

      count -= itemPrice * itemQuantity;
      totalPrice.innerHTML = count;

      if (count === 0) {
        const test = document.getElementById("container-products");
        test.innerHTML = "<h2 class='emptyCart' id='emptyCart'>Votre panier est vide</h2>";
      }

      const containerSelector = document.querySelector(`#${containerId}`);
      containerSelector.remove();
    })
  );
}
