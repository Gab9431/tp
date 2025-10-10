function calcule_moyenne(){
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if(moyenne < 10){
        document.write("Redoublant ");
    }
    else if(moyenne < 12){
        document.write("Admis – Passable");
    }
    else if(moyenne < 14){
        document.write("Admis – Bien");
    }
    else{
        document.write("Admis – Très bien");
    }
}

function temperature(){
    var temps = prompt("Donner la température en °C :");

    document.write("Voici la température rensiegnez : " + temps + " °C" + "<br>");
    
    if(temps < 10){
        document.write("Froid");
    }
    else if(temps < 25){
        document.write("Normale");
    }
    else{
        document.write("Chaud");
    }
}

function comparer(){
    var num1 = prompt("Donner un premier nombre :");
    var num2 = prompt("Donner un deuxiéme nombre :");

    document.write("Voici les deux nombre rensiegnez : " + num1 + " et " + num2 + "<br>");
    
    if(Number(num1) < Number(num2)){
        document.write(num2 + " est plus grand que " + num1);
    }
    else{
        document.write(num1 + " est plus grand que " + num2);
    }
}