import initialiseSelector from "../js/panier-init.js";
import addProduct from "../js/addproduct.js";
import changeName from "../js/changeName.js";

/**
 * Fonction qui met en place les evenements sur les différents boutons des produits du panier
 * et gere le total
 */
initialiseSelector();
changeName();

const addNewProduct = document.getElementById("addproduct");

addNewProduct.addEventListener("click", () => {
  //on selectionne l'endroit ou va apparaitre un formulaire de creation de produit
  const popContainer = document.querySelector("#add-product-container");

  //on crée la div qui va contenir le formulaire
  const backgroundDiv = document.createElement("div");
  backgroundDiv.id = "panier-popup";
  backgroundDiv.style.background = "#ffffff";
  backgroundDiv.style.position = "absolute";
  backgroundDiv.style.width = "50%";
  backgroundDiv.style.height = "200px";
  backgroundDiv.style.borderRadius = "15px";
  backgroundDiv.style.border="1px solid black"

  //on crée le formulaire dans la div crée et une option pour la supprimer
  backgroundDiv.innerHTML = `
    <div class="closeDiv" id="closeDiv">X</div>
    <form class="addProductForm" id="add-product-create">
    <div>
      <label for="add-product-titre">Titre:</label>
      <input type="text" id="add-product-titre" name="add-product-titre" required>
    </div>
    <div>
      <label for="add-product-imgLink">Lien de l'image :</label>
      <input type="text" id="add-product-imgLink" name="add-product-imgLink" value="../images/Boss.jpg" required>
    </div>
    <div>
      <label for="add-product-price">Prix (€) :</label>
      <input type="number" id="add-product-price" name="add-product-price" required>
    </div>
    <div>
      <label for="add-product-quantite">Quantité:</label>
      <input type="number" id="add-product-quantite" name="add-product-quantite" required>
    </div>
    <button  class="btn panier-additem-send">Ajouter</button>
  </form>
  `;
  //on ajoute le formulaire au dessus du bouton
  popContainer.appendChild(backgroundDiv);

  //on peut cliquer sur la croix pour sortir du formulaire d'ajout
  document.getElementById("closeDiv").addEventListener("click", () => {
    const selectPopUp = document.getElementById("panier-popup");
    selectPopUp.remove();
  });

  document
    .getElementById("add-product-create")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const newProductTitle =
        document.getElementById("add-product-titre").value;
        const newProductImgLink =
            document.getElementById("add-product-imgLink").value;
      const newProductPrice =
        document.getElementById("add-product-price").value;
      const newProductQuantity = document.getElementById(
        "add-product-quantite"
      ).value;

      //addproduct prend en parametre sous forme de chaine caractere et dans l'ordre :
      //le titre, le prix, la quantité
      addProduct(newProductTitle,newProductImgLink, newProductPrice, newProductQuantity);
      initialiseSelector();
      changeName()
        const selectPopUp = document.getElementById("panier-popup");
        selectPopUp.remove();
      const empty = document.getElementById('emptyCart')
        if (empty !== undefined) {
            empty.remove()
        }
    });
});
