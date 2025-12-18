<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ricette</title>
    <link rel="stylesheet" href="style1.css">

</head>
<body>
    <label>cerca ricetta</label>
    <div id="ricerca">
    <input type="text" id="cercaTesto" placeholder="Cerca una ricetta...">
    <button id="btnCerca">Cerca</button>
    </div>


    <div id="output">
        <div id="testo"></div>
        <div id="immagini"></div>
    </div>


<script>
    
async function carica() {
    const risposta = await fetch('ricette.json');
    const dati = await risposta.json();
    const ricette = dati.ricette;
    
    

    let htmlOutput = "";
    let imgs = [];
    let immagini = "";
    let nuovo = [];

    

    for (let i = 0; i < ricette.length; i++) {
        htmlOutput += `
            <p><strong>titolo: ${ricette[i].titolo}</strong></p>
            <p>descrizione: ${ricette[i].descrizione}</p>
            <p>tempo: ${ricette[i].tempo_preparazione}</p>
            <p>porzioni: ${ricette[i].porzioni}</p>
            <p>ingredienti: ${ricette[i].ingredienti}</p>
            <p>preparazione: ${ricette[i].preparazione}</p>
            <hr>
        `;
        imgs[i] = ricette[i].immagine;
    }

    for(let i = 0; i < imgs.length; i++) {
        immagini += `
            <img src="${imgs[i]}">       
        `;
    }

    document.getElementById("immagini").innerHTML = immagini;
    document.getElementById("testo").innerHTML = htmlOutput;
}


   

 btnCerca.addEventListener("click", async () => {
    const risposta = await fetch('ricette.json');
    const dati = await risposta.json();
    const ricette = dati.ricette;
    let valore = document.getElementById("cercaTesto").value;
        for(let i = 0; i < ricette.length; i++) {
        if(ricette[i].titolo === valore){
            console.log(ricette[i]);
            window.location.href = "pag.html";
        }
    }
    });

carica();
btnCerca.addEventListener("click", carica);
</script>

</body>
</html>



