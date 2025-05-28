import {prodotto} from "./funzioni.js";

console.log("script loaded...")
const n1= document.querySelector("#n1");
const n2= document.querySelector("#n2");

const btn= document.querySelector("button");
const result= document.querySelector("#result");
const form = document.querySelector("form");

const onBtnClick= (e) => {
    e.preventDefault();
    if (form.checkValidity() === false) {
        form.reportValidity();
        return;
    }
    console.log ("click")
    const risultato = prodotto(parseInt(n1.value),
        parseInt(n2.value));
    result.textContent= risultato;
}

btn.addEventListener("click", onBtnClick);

