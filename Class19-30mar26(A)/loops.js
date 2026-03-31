let text ="";

for (let index = 1; index <=10 ; index++) {
    
    // text += `This text iteration no. ${index} <br> `;
    text += "2 x " +"="+ index * 2+  "<br>";
}
document.getElementById("iText").innerHTML = text;