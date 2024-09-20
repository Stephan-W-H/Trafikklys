let timeout; //denne er erklært men har ingen verdi enda
var red = document.getElementById('rred')//finner HTML elementet med id rred og lagret den i variabelen
var yellow = document.getElementById('yyellow')//Dette gjør akkurat det samme bare med id yyellow
var green = document.getElementById('ggreen')//Samme med denne bare med id ggreen

//dette er funksjonene som styrer trafikk lysene på hvilken farge og bredde osv de skal ha
function redLight(color,width,height){
    red.innerHTML = `<div style="background-color:${color}; width: ${width}px; height: ${height}px;"></div>`;

}


function yellowLight(color,width,height){
    yellow.innerHTML = `<div style="background-color:${color}; width: ${width}px; height: ${height}px;"></div>`;
    
}

function greenLight(color,width,height,){
    green.innerHTML = `<div style="background-color:${color}; width: ${width}px; height: ${height}px;"></div>`;

}


//vil prøve meg på setTimeout når jeg får tid til det :D

