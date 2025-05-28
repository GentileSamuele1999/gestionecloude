const prodotto= (num1,num2) =>{
    let cont=1;
    let risultato= 0;
    while(cont<= Math.abs (num2)){
        risultato += num1;
        cont++;
    }
    return num2 < 0 ? -risultato : risultato;
}

export {prodotto};
