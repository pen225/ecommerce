// Partie formulaire
let btnConnecter = document.querySelector('.connecter');
let btnInscrire = document.getElementById('inscrire');
let connexionForm = document.querySelector('.connexion');
let inscriptionForm = document.querySelector('.inscription');



btnInscrire.addEventListener('click', (e) => {
    e.preventDefault()
    inscriptionForm.classList.remove('cacheForme');
    inscriptionForm.classList.add('affichForm');
    connexionForm.classList.add('cacheForme');
})

btnConnecter.addEventListener('click', (e) => {
    e.preventDefault()
    inscriptionForm.classList.add('cacheForme');
    connexionForm.classList.remove('cacheForme');
    connexionForm.classList.add('affichForm');
})