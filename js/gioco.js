console.log("funziono");
// 1 = carta 
// 2 = sasso 
// 3 = frobice

let player = parseInt(prompt("scegli! !!1 = carta!!  !!2 = sasso!!  !!3 = forbice!! Inserisci il numero scelto"));
console.log(player, "player");

let pc = Math.ceil(Math.random()*3);
console.log(pc, "pc");

if(player < 1 || player > 3 || isNaN(player)){
    player = parseInt(prompt("ATTENZIONE ULTIMA POSSIBILITA !!1 = carta!!  !!2 = sasso!!  !!3 = forbice!! Inserisci SOLO NUMERO SCELTO FRA 1 E 3"));
}

if(player){

    if(pc === 1 && player === 1){
        document.getElementById("pagina").innerHTML = 
        `
        <h1 class="pt-5 pb-5">HAI PAREGGIATO</h1>
                <div class="container text-center ">
                    <div class="row m-auto">
                        <div class="col-6">
                            <h3>La tua scelta è carta</h3>
                            <i class="fa-solid fa-hand"></i>
                        </div>
                        <div class="col-6">
                            <h3>La scelta del programma è carta</h3>
                            <i class="fa-solid fa-hand"></i>
                        </div>
                        <a href="gioco.html" class="btn btn-dark mt-5" >Gioca ancora</a>
                        <a href="index.html" class="btn btn-dark mt-5" >Torna a comprare il biglietto del treno</a>
                    </div>
                </div>
        `;
        }else if(pc === 1 && player === 2){
            console.log("Hai perso");
            document.getElementById("pagina").innerHTML = 
        `
        <h1 class="pt-5 pb-5">HAI PERSO</h1>
                <div class="container text-center ">
                    <div class="row m-auto">
                        <div class="col-6">
                            <h3>La tua scelta è sasso</h3>
                            <i class="fa-solid fa-hand-back-fist"></i>
                        </div>
                        <div class="col-6">
                            <h3>La scelta del programma è carta</h3>
                            <i class="fa-solid fa-hand"></i>
                        </div>
                        <a href="gioco.html" class="btn btn-dark mt-5" >Gioca ancora</a>
                        <a href="index.html" class="btn btn-dark mt-5" >Torna a comprare il biglietto del treno</a>
                    </div>
                </div>
        `;
        }else if(pc === 1 && player === 3){
            console.log("Hai vinto");
            document.getElementById("pagina").innerHTML = 
            `
        <h1 class="pt-5 pb-5">HAI VINTO</h1>
                <div class="container text-center ">
                    <div class="row m-auto">
                        <div class="col-6">
                            <h3>La tua scelta è forbice</h3>
                            <i class="fa-solid fa-hand-scissors"></i>
                        </div>
                        <div class="col-6">
                            <h3>La scelta del programma è carta</h3>
                            <i class="fa-solid fa-hand"></i>
                        </div>
                        <a href="gioco.html" class="btn btn-dark mt-5" >Gioca ancora</a>
                        <a href="index.html" class="btn btn-dark mt-5" >Torna a comprare il biglietto del treno</a>
                    </div>
                </div>
        `;
        }else if(pc === 2 && player === 1){
            console.log("Hai hai vinto");
            document.getElementById("pagina").innerHTML = 
        `
        <h1 class="pt-5 pb-5">HAI VINTO</h1>
                <div class="container text-center ">
                    <div class="row m-auto">
                        <div class="col-6">
                            <h3>La tua scelta è carta</h3>
                            <i class="fa-solid fa-hand"></i>
                        </div>
                        <div class="col-6">
                            <h3>La scelta del programma è sasso</h3>
                            <i class="fa-solid fa-hand-back-fist"></i>
                        </div>
                        <a href="gioco.html" class="btn btn-dark mt-5" >Gioca ancora</a>
                        <a href="index.html" class="btn btn-dark mt-5" >Torna a comprare il biglietto del treno</a>
                    </div>
                </div>
        `;
            
        }else if(pc === 2 && player === 2){
            console.log("Hai pareggiato");
            document.getElementById("pagina").innerHTML = 
        `
        <h1 class="pt-5 pb-5">HAI PAREGGIATO</h1>
                <div class="container text-center ">
                    <div class="row m-auto">
                        <div class="col-6">
                            <h3>La tua scelta è sasso</h3>
                            <i class="fa-solid fa-hand-back-fist"></i>
                        </div>
                        <div class="col-6">
                            <h3>La scelta del programma è sasso</h3>
                            <i class="fa-solid fa-hand-back-fist"></i>
                        </div>
                        <a href="gioco.html" class="btn btn-dark mt-5" >Gioca ancora</a>
                        <a href="index.html" class="btn btn-dark mt-5" >Torna a comprare il biglietto del treno</a>
                    </div>
                </div>
        `;
        }else if(pc === 2 && player === 3){
                console.log("Hai perso");
                document.getElementById("pagina").innerHTML = 
            `
        <h1 class="pt-5 pb-5">HAI PERSO</h1>
                <div class="container text-center ">
                    <div class="row m-auto">
                        <div class="col-6">
                            <h3>La tua scelta è forbice</h3>
                            <i class="fa-solid fa-hand-scissors"></i>
                        </div>
                        <div class="col-6">
                            <h3>La scelta del programma è sasso</h3>
                            <i class="fa-solid fa-hand-back-fist"></i>
                        </div>
                        <a href="gioco.html" class="btn btn-dark mt-5" >Gioca ancora</a>
                        <a href="index.html" class="btn btn-dark mt-5" >Torna a comprare il biglietto del treno</a>
                    </div>
                </div>
        `;
        }else if(pc === 3 && player === 1){
            console.log("Hai hai perso");
            document.getElementById("pagina").innerHTML = 
            `
            <h1 class="pt-5 pb-5">HAI PERSO</h1>
                    <div class="container text-center ">
                        <div class="row m-auto">
                            <div class="col-6">
                                <h3>La tua scelta è carta</h3>
                                <i class="fa-solid fa-hand"></i>
                            </div>
                            <div class="col-6">
                                <h3>La scelta del programma è forbice</h3>
                            <i class="fa-solid fa-hand-scissors"></i>
                            </div>
                            <a href="gioco.html" class="btn btn-dark mt-5" >Gioca ancora</a>
                            <a href="index.html" class="btn btn-dark mt-5" >Torna a comprare il biglietto del treno</a>
                        </div>
                    </div>
            `;
        }else if(pc === 3 && player === 2){
            console.log("Hai vinto");
            document.getElementById("pagina").innerHTML = 
            `
            <h1 class="pt-5 pb-5">HAI VINTO</h1>
                    <div class="container text-center ">
                        <div class="row m-auto">
                            <div class="col-6">
                                <h3>La tua scelta è sasso</h3>
                                <i class="fa-solid fa-hand-back-fist"></i>
                            </div>
                            <div class="col-6">
                                <h3>La scelta del programma è forbice</h3>
                            <i class="fa-solid fa-hand-scissors"></i>
                            </div>
                            <a href="gioco.html" class="btn btn-dark mt-5" >Gioca ancora</a>
                            <a href="index.html" class="btn btn-dark mt-5" >Torna a comprare il biglietto del treno</a>
                        </div>
                    </div>
            `;
        }else if(pc === 3 && player === 3){
            console.log("Hai pareggiato");
            document.getElementById("pagina").innerHTML = 
            `
        <h1 class="pt-5 pb-5">HAI PAREGGIATO</h1>
                <div class="container text-center ">
                    <div class="row m-auto">
                        <div class="col-6">
                            <h3>La tua scelta è forbice</h3>
                            <i class="fa-solid fa-hand-scissors"></i>
                        </div>
                        <div class="col-6">
                                <h3>La scelta del programma è forbice</h3>
                            <i class="fa-solid fa-hand-scissors"></i>
                        </div>
                        <a href="gioco.html" class="btn btn-dark mt-5" >Gioca ancora</a>
                        <a href="index.html" class="btn btn-dark mt-5" >Torna a comprare il biglietto del treno</a>
                    </div>
                </div>
        `;
        } else{
            document.getElementById("pagina").innerHTML = 
            `
                    <h1 class="pt-5 pb-5">ERRORE RICARICA LA PAGINA</h1>
                    
                    <p>Fai attenzione a mettere solo numeri da 1 a 3</p>
               
                        <a href="gioco.html" class="btn btn-dark mt-5" >Gioca ancora</a>
                        <a href="index.html" class="btn btn-dark mt-5" >Torna a comprare il biglietto del treno</a>
                        <img src="https://68.media.tumblr.com/4c54244af420c6b6a9a4fab56d9daf28/tumblr_mip98fqHYX1s64c5co1_500.gif" alt="" style="display: block; width: 700px; background-color: red; margin: 100px auto; ">
        
        `;
            
        }
        
        

}


switch (!(player === 2)) {
    case pc === 2:
        console.log("test stiwch funziona")
        break;

    default:
        break;
}