function calcule_moyenne(){
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if(moyenne < 10){
        document.write("Vous n'êtes pas admis");
    }
    else{
        document.write("Vous êtes admis");
    }
}

function nom_prenom(){
    let name = prompt("Donner votre nom");
    let prenom = prompt("Donner votre prénom");

    document.write('<div style="margin:auto; whidth:300px; border:2px solid blue;">');
    document.write("Bonjour " + prenom + " " + name);
    document.write('</div>');
}

function test_age(){
    var age = prompt("Entrez votre age");

    if(age < 18){
        document.write("Vous êtes mineur")
        document.body.style.background = "red";
    }
    else{
        document.write("Vous êtes majeur")
        document.body.style.background = "green";
    }
}

function couleur() {
    var couleur = prompt("Choisissez une couleur");

    if (couleur === "rouge" || couleur === "red") {
        document.body.style.background = "darkred";
    }
    else if (couleur === "vert" || couleur === "green") {
        document.body.style.background = "green";
    }
    else if (couleur === "bleu" || couleur === "blue") {
        document.body.style.background = "blue";
    }
    else if (couleur === "rose" || couleur === "pink") {
        document.body.style.background = "pink";
    }
    else {
        alert("Couleur non reconnue");
    }
}

