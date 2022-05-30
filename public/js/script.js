let boxLogin = document.querySelector('.login');
let boxConnexion = document.querySelector('.connexion');

boxLogin.addEventListener('mouseover', () => {
    boxConnexion.classList.add('afficheConnexion');
})

boxLogin.addEventListener('mouseout', () => {
    boxConnexion.classList.remove('afficheConnexion');
})

boxConnexion.addEventListener('mouseover', () => {
    boxConnexion.classList.add('afficheConnexion');
})
boxConnexion.addEventListener('mouseout', () => {
    boxConnexion.classList.remove('afficheConnexion');
})



// ----------





// Add quantite panier

let btnAddPanier = document.querySelector('.add-panier');
let btnSoustracPanier = document.querySelector('.souatract-panier');
let resultQtePanier = document.querySelector('.result-qte-panier');
let nombreArticle = document.querySelector('.nombre-article');
let prixLivraison = document.querySelector('.prix-livraison');
let totalPanier = document.querySelector('.total-panier');
let prxArticle = document.querySelector('.prix-article');
let totalPan

totalPanier.textContent = ((+prxArticle.textContent) * (+nombreArticle.textContent)) + parseInt(prixLivraison.textContent)



btnAddPanier.addEventListener('click', () =>{
    resultQtePanier.value = (+resultQtePanier.value) + 1;
    nombreArticle.textContent = resultQtePanier.value;
    totalPan = ((+prxArticle.textContent) * (+nombreArticle.textContent)) + parseInt(prixLivraison.textContent)
    totalPanier.textContent = totalPan;
})
btnSoustracPanier.addEventListener('click', () =>{
    if (resultQtePanier.value > 1) {
        resultQtePanier.value = (+resultQtePanier.value) - 1;
        nombreArticle.textContent = resultQtePanier.value;
        totalPan = ((+prxArticle.textContent) * (+nombreArticle.textContent)) + parseInt(prixLivraison.textContent)
        totalPanier.textContent = totalPan;
    }
})


