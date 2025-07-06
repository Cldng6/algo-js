// verifier si le chiffre et entre 0 à 10
// si c'est n'est pas le cas 
// afficher au console "Erreur"
// si le chiffre et entre 0 à 10 
// afficher tout le chiffre qui est en dessous

// let inNumber = a(prompt("Entrer le chiffre Ex: '01234567890'"))
//     if (inNumber > 10 || inNumber < 0){

//         console.log("Le nombre n'est pas entre 0 et 10");
        
//     }else{
//         while (inNumber>= 0) {
//             console.log(inNumber);
//             inNumber--
            
//         }
        
//     }

// demande a l'utilisateur entre un nombre jusqu'il trouve la bonne reponse
let guess = 8
let imaginer
while (imaginer !== guess) {
    
    imaginer = prompt('Entre votre nombre') * 1
    if (imaginer < guess){
        console.log('Plus');
        
    }else if(imaginer > guess){
        console.log('Moins');
        

    };
    console.log('Nice Congratulation');
}