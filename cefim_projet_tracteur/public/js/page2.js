// Fonction pour la modification des articles

function changeTexte(){
  const text = document.querySelectorAll(".text")
  const buttons = document.querySelectorAll(".modifyBtn")
  
  for (let i = 0; i < text.length; i++) {
      buttons[i].addEventListener("click", ()=>{
          const newtext = window.prompt("Saissisez le nouveau texte");
          if(newtext != 0 && newtext != null) {
              text[i].innerText = newtext;
          }
      });
  }
}

changeTexte()

// Fonction des buttons pour le photo de profil
function imgFarmerChange(){
  const menbutton = document.querySelectorAll('#menBtn');
  const womenbutton = document.querySelectorAll('#womenBtn');
  
  for (let i = 0; i < menbutton.length; i++) {
    menbutton[i].onclick = function (){
      const selector = menbutton[i].parentNode.parentNode.children[1].children[0]
         selector.src= "../images/3099391_farmer_man_icon.svg"   
    }
    
  }
  
  for (let i = 0; i < womenbutton.length; i++) {
    womenbutton[i].onclick = function (){
      const selector = womenbutton[i].parentNode.parentNode.children[1].children[0]
         selector.src= "../images/3099393_woman_farmer_icon.svg"
    }
    
  }
}

imgFarmerChange()


// Fonction de la copie contenue

let idNum = 0; // idNum 변수를 전역 변수로 선언합니다.
let i = 0;
function repeat() {
  const equipecontent = document.querySelector('.equipeContent');
  const newNode = equipecontent.cloneNode(true);
  const btn = newNode.childNodes[1].childNodes[1];
  const womenbtn = newNode.childNodes[1].childNodes[3];
  const img = newNode.childNodes[3].childNodes[0];
  console.dir(womenbtn);
 
  console.dir(newNode);
  if (i < 10) {
      idNum++;
      newNode.id = 'copyNode' + idNum;
      btn.setAttribute("data-src", `profil-${idNum}`)
      img.setAttribute("id", `profil-${idNum}`)
      womenbtn.setAttribute("data-src", `profil-${idNum}`)
      equipecontent.after(newNode);
      i++;
  }
  changeTexte()
  imgFarmerChange()
}
document.getElementById('plus').addEventListener("click", repeat);

