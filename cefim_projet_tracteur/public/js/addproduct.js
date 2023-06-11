let id = 3;

/**
 * Fonction qui insere un nouveau produit
 * @param {string} title
 * @param {string} imgLink
 * @param {string} price
 * @param {string} quantity
 */
export default function addProduct(title,imgLink, price, quantity) {
  const productsContainer = document.getElementById("container-products");
  const div = document.createElement("div");
  div.classList.add("flex", "gap50", "product-container");
  div.id = `container-product${id}`;

  div.innerHTML = `
  
  <img src="${imgLink}" alt="photo du produit" />
  <div class="flex column gap20">
    <div class="flex verticalCenter gap50">
       <h2>${title}</h2>
       <img  class="img-pencil" id="modifTitle" src="../images/free-icon-pencil-6591016.png" alt="logo modif">
    </div>
    <div>
      <p>
        Prix :
        <span class="product-price" id="price-product${id}">${price}</span>€ /
        unité
      </p>
    </div>
    <div class="flex gap20 verticalCenter">
      <p>Quantité :</p>
      <button class="btn btn-delete" id="delete-product${id}">
        Supprimer
      </button>
      <button class="btn-quantity-moins" id="moins-product${id}">-</button>
      <input
        type="number"
        name=""
        id="quantity-product${id}"
        class="product-quantity"
        value="${quantity}"
      />

      <button class="btn-quantity-plus" id="plus-product${id}">+</button>
    </div>
  </div>
  `;
  productsContainer.appendChild(div);
  id++;
}
