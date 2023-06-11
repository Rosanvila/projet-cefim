export default function changeName() {
    const nameSelector = document.querySelectorAll('#modifTitle')
    for (let i = 0; i < nameSelector.length ; i++) {
        nameSelector[i].addEventListener('click',()=>{
            const textSelector = nameSelector[i].parentNode.children[0]
            const newName = window.prompt('Saisissez le nouveau titre')
            textSelector.innerHTML = newName
        })

    }
}