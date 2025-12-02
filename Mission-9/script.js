const bonnes_reponses = {
    q1: ['a'],
    q2: ['b'],
    q3: ['c'],
    q4: ['b'],
    q5: ['a', 'c'],
    q6: ['c'],
    q7: ['b'],
    q8: ['b'],
    q9: ['a'],
    q10: ['a', 'b'],
};
const NB_QUESTIONS = Object.keys(bonnes_reponses).length;

function testqcm() {
    let score = 0;
    const form = document.getElementById('qcmFormulaire');
    
    for (const qKey in bonnes_reponses) {
        const repCochees = form.querySelectorAll(`input[name="${qKey}"]:checked`);
        const valeursCochees = Array.from(repCochees).map(input => input.value);
        
        const bonnesRep = bonnes_reponses[qKey];

        const estCorrect = (valeursCochees.length === bonnesRep.length) && 
                          valeursCochees.every(val => bonnesRep.includes(val));
        
        if (estCorrect) {
            score++;
        }
    }

    const resultatDiv = document.getElementById('resultat');
    resultatDiv.innerHTML = `Votre score est de <strong>${score} / ${NB_QUESTIONS}</strong>.`;
    resultatDiv.style.display = 'block';

    alert(`Correction: Votre score est de ${score} / ${NB_QUESTIONS}`);
}

function effacerReponses() {
    const cases = document.querySelectorAll('input[type="checkbox"]');
    cases.forEach(coche => {
        coche.checked = false;
    });

    document.getElementById('resultat').style.display = 'none';
}

function afficherCorrige() {
    const corrigeContent = `
        <h2>Réponses QCM</h2>
        
        <div class="question-corrige">
            <p><strong>1. Quel est le nom de la ville principale où se déroule l'action de GTA V ?</strong></p>
            <p style="color: green;">Réponse : Los Santos</p>
        </div>

        <div class="question-corrige">
            <p><strong>2. Combien de personnages principaux jouables y a-t-il dans le mode Histoire de GTA V ?</strong></p>
            <p style="color: green;">Réponses : 3</p>
        </div>

        <div class="question-corrige">
            <p><strong>3. Quel est le nom du chien de Franklin Clinton ?</strong></p>
            <p style="color: green;">Réponse : Chop</p>
        </div>

        <div class="question-corrige">
            <p><strong>4. Quel personnage est passionné par le yoga et est marié à Amanda ?</strong></p>
            <p style="color: green;">Réponse : Michael De Santa</p>
        </div>

        <div class="question-corrige">
            <p><strong>5. Quelles sont les entreprises fictives de médias sociaux ou de technologie présentes dans le jeu ? (Réponse multiple)</strong></p>
            <p style="color: green;">Réponse : LifeInvader et Bleeter</p>
        </div>

        <div class="question-corrige">
            <p><strong>6. Quelle est la capacité spéciale de Trevor Phillips ?</strong></p>
            <p style="color: green;">Réponse : Entrer en mode "Rage"</p>
        </div>

        <div class="question-corrige">
            <p><strong>7. Dans quelle zone Trevor Philips possède-t-il sa base principale au début du jeu ?</strong></p>
            <p style="color: green;">Réponse : Sandy Shores</p>
        </div>

        <div class="question-corrige">
            <p><strong>8. Quel est le nom du meilleur ami de Franklin qui lui donne souvent des conseils non sollicités ?</strong></p>
            <p style="color: green;">Réponse : Lamar Davis</p>
        </div>

        <div class="question-corrige">
            <p><strong>9. Quel est l'équivalent dans le jeu de la ville de Los Santos ?</strong></p>
            <p style="color: green;">Réponse : Los Angeles</p>
        </div>

        <div class="question-corrige">
            <p><strong>10. Quelles activités un joueur peut-il faire en monde ouvert (hors missions principales) ?</strong></p>
            <p style="color: green;">Réponse : Plongée sous-marine et Golf</p>
        </div>

        <button onclick="window.close()">Fermer la fenêtre</button>
        `;

    const corrigeWindow = window.open("", "Corrigé du QCM", "width=600,height=500,scrollbars=yes");

    corrigeWindow.document.write(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <title>Corrigé du QCM</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .question-corrige { margin-bottom: 15px; }
                button { padding: 10px; background-color: #dc3545; color: white; border: none; cursor: pointer; }
            </style>
        </head>
        <body>
            ${corrigeContent}
        </body>
        </html>
    `);
    
    corrigeWindow.document.close();
}