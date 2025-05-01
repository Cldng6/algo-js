let nombres = [5, 1, 8, 3, 2];
const resultat = triABulles(nombres);


function triABulles(nombres) {
    // varible index = 0; si index est superier à nombres de boucle dont length et long
    // boucle continue

    for (let index = 0; index < nombres.length; index++) {
        // varible j = 0; si j est superier à nombres de boucle dont length est eleve
        // remplace l'index----

        for (let j = 0; j < nombres.length - 1 - index; j++) {
            if (nombres[j] > nombres[j + 1]) {
                // echange des valeurs
                const temps = nombres[j];
                nombres[j] = nombres[j + 1];
                nombres[j + 1] = temps;
            };
            
        };
        
    };
    return nombres;
};

console.log("Tableau trié :", nombres); // [1, 2, 3, 5, 8]
