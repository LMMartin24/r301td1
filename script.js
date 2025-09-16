/*let c = 30;
let f = convert(c);


function convert (c){
    return c*9/5 +32;
}

console.log( "temp en celsuis = " + c);
console.log( "temp en f = " + f);


let l = 30;
let L = 20;


function aire (L,l){
    return l*L;
}

console.log( "aire = ", aire(L,l));



// Ex3 similaire à l"affichage du 1
*/
let choisi_joueur;
let choisi_bot;
let victoires = 0; 
let defaites =0 ;
let egalite=0 ;
const btnList = ["Pierre", "Feuille", "Ciseaux"]

const boutons = document.querySelectorAll(".btnj");
const resultat = document.getElementById("resultat");
const nb_vict = document.getElementById("victoire");
const nb_defa = document.getElementById("defaite");
const nb_egal = document.getElementById("egalite");
const res_bot = document.getElementById("bot");
const reload = document.querySelector(".btnr");

boutons.forEach(bouton => {
  bouton.addEventListener("click", () => {
    choisi_joueur = bouton.textContent;
    choisi_bot = btnList[Math.floor(Math.random() * 3)];

    res_bot.textContent = "Le bot joue " + choisi_bot

    if (choisi_bot == choisi_joueur) {
      resultat.textContent = "Égalité !";
      egalite++;
      nb_egal.textContent = "Egalite = " + egalite;
    }
    else if ((choisi_joueur == "Pierre" && choisi_bot == "Ciseaux") ||
      (choisi_joueur == "Ciseaux" && choisi_bot == "Feuille") ||
      (choisi_joueur == "Feuille" && choisi_bot == "Pierre")) {
      resultat.textContent = "Vous avez gagné !";
      victoires++;
      nb_vict.textContent = "Victoire = " + victoires;

    } else {
      resultat.textContent = "Vous avez perdu !";
      defaites++;
      nb_defa.textContent = "Defaites = " + defaites;
    }


  });

});

reload.addEventListener('click', () =>{ 
    document.location.reload();
});

