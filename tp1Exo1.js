
const correctAnswers = {
  q1: 'Hyper Text Markup Language',
  q2: 'Crée un lien',
  q3: ['html','css'], 
  q4: ['rabat','fes'], 
  q5: ['android','linux'] 
};
const quizForm = document.getElementById('quiz');
const resultDiv = document.getElementById('result');

quizForm.addEventListener('submit', function(e){
  e.preventDefault(); 

  let score = 0;
  let total = 5;
  let details = '';

  const q1 = quizForm.q1.value;
  if(q1 === correctAnswers.q1){
    score++;
    details += 'Q1: ✅ Correct <br>';
  } else {
    details += 'Q1: ❌ Incorrect (bonne réponse: Hyper Text Markup Language) <br>';
  }

  const q2 = quizForm.q2.value;
  if(q2 === correctAnswers.q2){
    score++;
    details += 'Q2: ✅ Correct<br>';
  } else {
    details += 'Q2: ❌ Incorrect (bonne réponse: Crée un lien)<br>';
  }

  const q3Checked = Array.from(quizForm.q3)
                        .filter(input => input.checked)
                        .map(input => input.value);
  const q3Correct = correctAnswers.q3.sort().toString();
  if(q3Checked.sort().toString() === q3Correct){
    score++;
    details += 'Q3: ✅ Correct<br>';
  } else {
    details += 'Q3: ❌ Incorrect (bonne réponse: HTML et CSS)<br>';
  }

  const q4Checked = Array.from(quizForm.q4)
                        .filter(input => input.checked)
                        .map(input => input.value);
  const q4Correct = correctAnswers.q4.sort().toString();
  if(q4Checked.sort().toString() === q4Correct){
    score++;
    details += 'Q4: ✅ Correct<br>';
  } else {
    details += 'Q4: ❌ Incorrect (bonne réponse: Rabat et Fès)<br>';
  }


  const q5Checked = Array.from(quizForm.q5)
                        .filter(input => input.checked)
                        .map(input => input.value);
  const q5Correct = correctAnswers.q5.sort().toString();
  if(q5Checked.sort().toString() === q5Correct){
    score++;
    details += 'Q5: ✅ Correct<br>';
  } else {
    details += 'Q5: ❌ Incorrect (bonne réponse: Android et Linux)<br>';
  }

  
   let myWindow = window.open("", "ResultatQuiz", "width=400,height=500");
myWindow.document.write(`<h2>Score: ${score} / ${total}</h2>${details}`);
myWindow.document.close();
});
document.getElementById("btnSolution").addEventListener("click", function () {
  let win = window.open("", "Corrigé", "width=600,height=500");

  win.document.write(`
    <html>
      <head>
        <title>Corrigé du QCM</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
          }
          h2 {
            color: #28a745;
            text-align: center;
          }
          
        </style>
      </head>
      <body>
        <h2>Corrigé du QCM</h2>
        <p><strong>1)</strong> La bonne réponse est : >Hyper Text Markup Language</span></p>
        <p><strong>2)</strong> La bonne réponse est : >Crée un lien</span></p>
        <p><strong>3)</strong> Les bonnes réponses sont :
          <span >HTML</span> et 
          <span >CSS</span>
        </p>
        <p><strong>4)</strong> Les bonnes réponses sont :
          <span >Rabat</span> et 
          <span >Fès</span>
        </p>
        <p><strong>5)</strong> Les bonnes réponses sont :
          <span >Android</span> et 
          <span >Linux</span>
        </p>
      </body>
    </html>
  `);
});