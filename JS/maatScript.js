document.querySelector("#maatButton").addEventListener("click", maatButtonfuctie);
var errorBericht = document.querySelector("#error-bericht");


function maatButtonfuctie(){

    console.log("parameter werkt");
    maatCheck(document.querySelector("#maatSchoen").value);

}


function maatCheck(maatSchoen) {

    //als de maat groter is dan 35 en kleiner is dan 45 opent schoen.html
    if ( maatSchoen > 35 && maatSchoen < 45) {
        window.open( "schoen.html"); 
        errorBericht.style.display = "none";

    //als de maat kleiner is dan 35 en groter is dan 45 komt er een error bericht in beeld
    } else {
        errorBericht.style.display = "block";
        errorBericht.innerHTML = "Maat niet beschikbaar";
    }
  }


  // BRONNEN:
  //https://stackoverflow.com/questions/36647055/using-input-field-in-if-else-statement-javascript
  //https://www.w3schools.com/jsref/met_win_open.asp

//   aparte functie maatButton
//   > func maatCheck uitvoeren
//   >> maatCheck paranmeter geven (maatSchoen)

//   boven maatCheck

//   deadline 5 april 23:59