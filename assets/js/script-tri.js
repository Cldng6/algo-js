let nombres = [5, 1, 8, 3, 2];
let resultat = triABulles(nombres);
console.log("Tableau trié :", resultat); // [1, 2, 3, 5, 8]



function triABulles(nombres) {
    for (let i = 0; i < nombres.length; i++) {
        for (let j = 0; j < nombres.length - 1 - i; j++) {
            if (nombres[j] > nombres[j + 1]) {
                // echange des valeurs
                let temp = nombres[j];
                nombres[j] = nombres[j + 1] = nombres[j] = nombres[j + 1], temp[j];
                nombres[j + 1] = temp;
            }
        }
    }
    return nombres; // retourne le tableau trié à la fin
}

