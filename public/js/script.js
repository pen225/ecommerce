let boxLogin = document.querySelector('.box-login');
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

