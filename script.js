// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.





//selezione del bottone invio dati

const sendButton = document.getElementById("send");

sendButton.addEventListener("click",

    function(){

        //input nome utente

        const inputnome = document.getElementById("nomeuser");
        console.log("nome utente:", inputnome.value);


// 
        //input quantita km da percorrere

        const inputkm = parseFloat(document.getElementById("userkm").value);
        console.log("quantita km da percorrere:", inputkm.value);



        //input eta utente

        const inputeta = parseFloat(document.getElementById("userage").value);
        console.log("eta utente:", inputeta.value);
      
        //calcolo il prezzo del bigletto 

        const prezzokm = parseFloat(inputkm * 0.21).toFixed(2);
        console.log("costo del biglietto al km:", prezzokm);

        if (inputeta < 18) {
            let prezzounder18 = parseFloat(prezzokm * 0.8).toFixed(2);
            console.log("costo biglietto under18", prezzounder18);
            document.getElementById('prezzo').innerHTML= `Ciao ${inputnome.value} il costo del tuo biglietto è di: ${prezzounder18} $`;

        } else if (inputeta > 65) {
            let prezzover65 = parseFloat(prezzokm * 0.6).toFixed(2);
            console.log("costo biglietto over65", prezzover65);
            document.getElementById('prezzo').innerHTML= `Ciao ${inputnome.value} il costo del tuo biglietto è di: ${prezzover65} $`;

        } else{
            console.log("costo biglietto intero",prezzokm);
            document.getElementById('prezzo').innerHTML=`Ciao ${inputnome.value} il costo del tuo biglietto è di: ${prezzokm} $`;
        }

    }

)

