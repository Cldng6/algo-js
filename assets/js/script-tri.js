let nombres = [5, 1, 8, 3, 2];
let resultat = triABulles(nombres);
console.log("Tableau trié :", resultat); // [1, 2, 3, 5, 8]


function triABulles(nombres) {
    // varible index = 0; si i est superier à nombres de boucle dont length et long
    // boucle continue
    for (let index = 0; index < nombres.length; index++) {
        // Variable temps = faux
        let temps = false;
        // varible j = 0; si j est superier à nombres de boucle dont length est eleve
        // remplace l'index----
        for (let j = 0; j < nombres.length - 1 - index; j++) {
            if (nombres[j] > nombres[j + 1]) {
                // echange des valeurs
                [nombres[j] = nombres[j + 1] = nombres[j + 1], nombres[j]];
                temps = true
                console.log(temps);
            }
        }

    }
    return nombres; // retourne le tableau trié à la fin
}

