console.log("funziono");

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del  passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let kmDaPercorrere, etaUtente, minorenne, vecchio, prezzoPerKm;
minorenne = 18;
vecchio = 65;
prezzoPerKm = 0.21;



kmDaPercorrere = parseInt(prompt("Inserisci quanti km devi fare"));

if(isNaN(kmDaPercorrere)){
    alert("Perfavore inserire solo numeri");
    kmDaPercorrere = parseInt(prompt("inserisca nuovamente i km da percorrere con solo numeri interi!"));
    if(isNaN(kmDaPercorrere)){
        alert("Ci dispiace ma deve riprovare ricaricando la pagina");
        document.getElementById("pagina").innerHTML = 
        `<h1 class="text-center">Ci dispiace ma non siamo riusci a fare un calcolo per dati sbagliati, ricarichare la pagina per una seconda prova</h1>`;
    }
}
if(kmDaPercorrere){
    etaUtente = parseInt(prompt("Inserisca la sua età in numeri"));

    if(isNaN(etaUtente)){
        alert('I dati inseriti non erano numerici. Per non perdere i dati inseriti prima, ha ancora "1" possibilità. Inserisca solo numeri!');
        etaUtente = parseInt(prompt("Inserisca la sua età"))
    
    }

}


let prezzoTotGenerale = kmDaPercorrere * prezzoPerKm;

console.log(prezzoTotGenerale);

let prezzoFinale = prezzoTotGenerale;
//perndere oggetto data
const orario = new Date();
console.log(orario);

let ora = orario.getHours();
console.log(ora);

let oraRimanente = ora + 1;

console.log("ora rimanente1",oraRimanente);

let minuti = orario.getMinutes();
console.log(minuti);

let secondi = orario.getSeconds();
console.log(secondi);

if(ora < 10){
ora = "0"+ora;
}
if(minuti<10){
    minuti = "0"+minuti;

}
if(secondi<10){
    secondi = "0"+secondi;

}


let orarioCompleto = `${ora}:${minuti}:${secondi}`;
console.log(orarioCompleto)
let orarioRimanenteValido = `${oraRimanente}:${minuti}:${secondi}`;
console.log(orarioRimanenteValido);
if(kmDaPercorrere && etaUtente){

    if(etaUtente > vecchio && etaUtente < 100){
        prezzoFinale = Math.round(prezzoTotGenerale - (prezzoTotGenerale / 100) *40 ).toFixed(2);
        document.getElementById("pagina").innerHTML = 
    
    `
    <h1 class="text-center pb-5 pt-5">Costo stimato per il biglietto</h1>
    
    <ul class="text-center pb-5 pt-5">
        <li class="text-center"> <h3>In base ai dati seguenti da lei inseriti</h3> </li>
        <li class="text-center"><span>Km da percorrere: ${kmDaPercorrere}</span></li>
        <li class="text-center"><span>La sua età: ${etaUtente} anni</span></li>
    </ul>
    
    <ul class="text-center  pb-5">
        <li class="text-center"> <h3>Il prezzo del biglietto è</h3> </li>
        <li class="text-center"><span>${prezzoFinale}€</span></li>
        <li class="text-center"><span>Ha avuto uno sconto del 40% perchè over 65</span></li>
    </ul>

    <ul class="text-center pb-5 ">
        <li class="text-center"> <h3>Validità del biglietto</h3> </li>
        <li class="text-center"><span>Il biglietto con il prezzo stabile è valido solo per un ora</span></li>
        <li class="text-center"><span>Questo prezzo è stato calcolato alle ${orarioCompleto}</span></li>
        <li class="text-center"><span>Questo prezzo è valido fino alle ${orarioRimanenteValido}</span></li>

        
    </ul>
    <div class="container-fluid text-center">
        <div class="row">
            <div class="col">
                <a href="#" class="btn btn-primary">Aquista</a>
                <a href="index.html" class="btn btn-warning">Ricaricare pagina</a>
                <a href="gioco.html" class="btn btn-dark">Giocare a carta/forbice/sasso? &#128521;</a>
            </div>
        </div>
    </div>
    `;
    }else if(etaUtente > 100){
        alert("La preghiamo di fare compilare questo modulo a un suo accompagnatore")
        prezzoFinale = Math.round(prezzoTotGenerale - (prezzoTotGenerale / 100) *40 ).toFixed(2);
        document.getElementById("pagina").innerHTML = 
    
        `
        <h1 class="text-center pb-5 pt-5">La preghiamo di fare compilare questo modulo a un suo accompagnatore <br> Cordiali saluti la compagnia dei treni</h1>
        
        `
    }else if(etaUtente < minorenne){
        prezzoFinale = Math.round(prezzoTotGenerale - (prezzoTotGenerale / 100) *20 ).toFixed(2);
        document.getElementById("pagina").innerHTML = 
    
        `
        <h1 class="text-center pb-5 pt-5">Costo stimato per il biglietto</h1>
        
        <ul class="text-center pb-5 pt-5">
            <li class="text-center"> <h3>In base ai dati seguenti da lei inseriti</h3> </li>
            <li class="text-center"><span>Km da percorrere: ${kmDaPercorrere}</span></li>
            <li class="text-center"><span>La sua età: ${etaUtente} anni</span></li>
        </ul>
        
        <ul class="text-center pb-5 ">
            <li class="text-center"> <h3>Il prezzo del biglietto è</h3> </li>
            <li class="text-center"><span>${prezzoFinale}€</span></li>
            <li class="text-center"><span>Ha avuto uno sconto del 20% perchè minorenne</span></li>
        </ul>
        
        <ul class="text-center pb-5 ">
            <li class="text-center"> <h3>Validità del biglietto</h3> </li>
            <li class="text-center"><span>Il biglietto con il prezzo stabile è valido solo per un ora</span></li>
            <li class="text-center"><span>Questo prezzo è stato calcolato alle ${orarioCompleto}</span></li>
            <li class="text-center"><span>Questo prezzo è valido fino alle ${orarioRimanenteValido}</span></li>
        </ul>

        <div class="container-fluid text-center">
            <div class="row">
                <div class="col">
                    <a href="#" class="btn btn-primary">Aquista</a>
                    <a href="index.html" class="btn btn-warning">Ricaricare pagina</a>
                    <a href="gioco.html" class="btn btn-dark">Giocare a carta/forbice/sasso? &#128521;</a>
                </div>
            </div>
        </div>
        `;
    }else{
        document.getElementById("pagina").innerHTML = 
    
        `
        <h1 class="text-center pb-5 pt-5">Costo stimato per il biglietto</h1>
        
        <ul class="text-center pb-5 pt-5">
            <li class="text-center"> <h3>In base ai dati seguenti da lei inseriti</h3> </li>
            <li class="text-center"><span>Km da percorrere: ${kmDaPercorrere}</span></li>
            <li class="text-center"><span>La sua età: ${etaUtente} anni</span></li>
        </ul>
        
        <ul class="text-center pb-5 ">
            <li class="text-center"> <h3>Il prezzo del biglietto è</h3> </li>
            <li class="text-center"><span>${prezzoFinale.toFixed(2)}€</span></li>
        </ul>
        
        <ul class="text-center pb-5 ">
            <li class="text-center"> <h3>Validità del biglietto</h3> </li>
            <li class="text-center"><span>Il biglietto con il prezzo stabile è valido solo per un ora</span></li>
            <li class="text-center"><span>Questo prezzo è stato calcolato alle ${orarioCompleto}</span></li>
            <li class="text-center"><span>Questo prezzo è valido fino alle ${orarioRimanenteValido}</span></li>
        </ul>
        <div class="container-fluid text-center">
            <div class="row">
                <div class="col">
                    <a href="#" class="btn btn-primary">Aquista</a>
                    <a href="index.html" class="btn btn-warning">Ricaricare pagina</a>
                    <a href="gioco.html" class="btn btn-dark">Giocare a carta/forbice/sasso? &#128521;</a>
                </div>
            </div>
        </div>
        `;
    }

}else{
    document.getElementById("pagina").innerHTML = 
    
        `
        <h1 class="text-center pb-5 pt-5">Ci dispiace ma qualcosa è andato storto ricarichi la pagina</h1>
        <img src="https://68.media.tumblr.com/4c54244af420c6b6a9a4fab56d9daf28/tumblr_mip98fqHYX1s64c5co1_500.gif" alt="" style="width: 700px; background-color: red;">
        
        
        `;
}




