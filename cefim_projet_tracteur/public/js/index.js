const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');
const produitTotal = document.querySelector('#produitTotal');

let total = 0;

plusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentNode.parentNode;
    const price = parent.querySelector('.price');
    const quantite = button.parentNode.querySelector('.quantite');


    if (Number(quantite.value) < 99) {
      // si la quantité est inférieure à 1, on ajoute 1 à la quantité
      quantite.value = Number(quantite.value)+1

      // on ajoute le prix du produit au produitTotal
      total+= Number(price.innerHTML);
      produitTotal.value = total;
    }


  });
});

minusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentNode.parentNode;
    const price = parent.querySelector('.price');
    const quantite = button.parentNode.querySelector('.quantite');

    if (Number(quantite.value) > 0) {

      // si la quantité est supérieure 0, on retire 1 à la quantité
      quantite.value = Number(quantite.value)-1

      // on retire le prix du produit au produitTotal
      total -= Number(price.innerHTML);
      produitTotal.value = total;
    };

});
})

