// // declaração de variáveis
// const question = document.querySelector('#question');
// const answerBox = document.querySelector('#answers-box');
// const quizzContainer = document.querySelector('#quizz-container');
// const scoreContainer = document.querySelector('#score-container');
// const letters = ['a', 'b', 'c', 'd', 'e'];
// let points = 0;
// let actualQuestion = 0;

// // perguntas
// const questions = [
//   {
//     question: `Em que ano o Corinthians foi campeão brasileiro com um primeiro turno invicto?`,
//     answers: [
//       {
//         answer: `2012`,
//         correct: false,
//       },
//       {
//         answer: `2015`,
//         correct: false,
//       },
//       {
//         answer: `2017`,
//         correct: true,
//       },
//       {
//         answer: `2018`,
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: `Quem fez o gol do título paulista em 1977, tirando o Corinthias de um jejum histórico?`,
//     answers: [
//       {
//         answer: `"Craque" Neto`,
//         correct: false,
//       },
//       {
//         answer: `Basílio`,
//         correct: true,
//       },
//       {
//         answer: `Marcelinho Carioca`,
//         correct: false,
//       },
//       {
//         answer: `Edílson "Capetinha"`,
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: `Na partida contra o Vasco da Gama pelas Quartas de Final da Libertadores 2012, Cássio fez uma de suas maiores defesas no Corinthians. Quem chutou para a defesa do Gigante?`,
//     answers: [
//       {
//         answer: `Luis Fabiano`,
//         correct: false,
//       },
//       {
//         answer: `Neymar`,
//         correct: false,
//       },
//       {
//         answer: `Diego Souza`,
//         correct: true,
//       },
//       {
//         answer: `Guerrero`,
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: `No Mundial de Clubes de 2000, o Corinthians garantiu sua vaga na final diante do Real Madrid. Neste jogo o Corinthians marcos dois gols. De quem foram esses gols?`,
//     answers: [
//       {
//         answer: `Marcelinho Carioca`,
//         correct: false,
//       },
//       {
//         answer: `Vampeta`,
//         correct: false,
//       },
//       {
//         answer: `Freddy Rincon`,
//         correct: false,
//       },
//       {
//         answer: `Edilson "Capetinha"`,
//         correct: true,
//       },
//     ],
//   },
//   {
//     question: `Como a torcida do Corinthians é carinhosamente chamada?`,
//     answers: [
//       {
//         answer: `Gaviões da Fiel`,
//         correct: false,
//       },
//       {
//         answer: `O Bando de Loucos`,
//         correct: true,
//       },
//       {
//         answer: `Trikas`,
//         correct: false,
//       },
//       {
//         answer: `Porco`,
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: `Em que ano o Corinthians conquitou seu primeiro título do brasileirão?`,
//     answers: [
//       {
//         answer: `1990`,
//         correct: true,
//       },
//       {
//         answer: `1977`,
//         correct: false,
//       },
//       {
//         answer: `2002`,
//         correct: false,
//       },
//       {
//         answer: `1998`,
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: `Durante a participação do Corinthians no Mundial de Clubes FIFA 2012, um jogador do time se destacou marcando dois gols de cabeça, quem é ele?`,
//     answers: [
//       {
//         answer: `Romarinho`,
//         correct: false,
//       },
//       {
//         answer: `Paolo Guerrero`,
//         correct: true,
//       },
//       {
//         answer: `Romero`,
//         correct: false,
//       },
//       {
//         answer: `Emerson Sheik`,
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: `Durante a época do Regime Militar no Brasil, um movimento corinthiano a favor da Democracia mudou os rumos do país, trata-se do(a)`,
//     answers: [
//       {
//         answer: `Autistas Alvinegros`,
//         correct: false,
//       },
//       {
//         answer: `Fiel Democracia`,
//         correct: false,
//       },
//       {
//         answer: `Loucos por Democracia`,
//         correct: false,
//       },
//       {
//         answer: `Democracia Corinthiana`,
//         correct: true,
//       },
//     ],
//   },
//   {
//     question: `Durante o pior ano da história do Corinthians, o time teve de jogar a série B do Campeonato Brasileiro. Mas o time se reacendeu com a chegada de um técnico. Quem é ele?`,
//     answers: [
//       {
//         answer: `Adenor Tite`,
//         correct: false,
//       },
//       {
//         answer: `Vanderlei Luxemburgo`,
//         correct: false,
//       },
//       {
//         answer: `Mano Menezes`,
//         correct: true,
//       },
//       {
//         answer: `Andrés Sanchez`,
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: `Durante a Copa Libertadores da América de 2012, pela primeira vez na história da competição, o Corinthians conseguiu ser campeão com uma campanha invicta. Qual era o quarteto defensivo da equipe?`,
//     answers: [
//       {
//         answer: `Alessandro, Ralf, Chicão, Fagner`,
//         correct: false,
//       },
//       {
//         answer: `Jorge Henrique, Paulo André, Chicão e Fagner`,
//         correct: false,
//       },
//       {
//         answer: `Fábio Santos, Ralf, Chicão, Fagner`,
//         correct: false,
//       },
//       {
//         answer: `Fábio Santos, Leandro Castán, Chicão e Alessandro`,
//         correct: true,
//       },
//     ],
//   },
//   {
//     question: `Em que ano o Clube foi fundado?`,
//     answers: [
//       {
//         answer: `1913`,
//         correct: false,
//       },
//       {
//         answer: `1910`,
//         correct: true,
//       },
//       {
//         answer: `1951`,
//         correct: false,
//       },
//       {
//         answer: `1932`,
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: `Durante o segundo jogo da final do Campeonato Paulista de 1999, o Corinthians empatou com o Palmeiras, sagrando-se campeão da competição. Neste jogo o destaque vai para um jogador, por fazer o gol nos últimos minutos e dar a famosa embaixadinha. Qual é este jogador?`,
//     answers: [
//       {
//         answer: `"Craque" Neto`,
//         correct: false,
//       },
//       {
//         answer: `Vampeta`,
//         correct: false,
//       },
//       {
//         answer: `Marcelinho Carioca`,
//         correct: false,
//       },
//       {
//         answer: `Edílson "Capetinha"`,
//         correct: true,
//       },
//     ],
//   },
//   {
//     question: `Quem foi eleito o melhor jogador da final do Mundial de Clubes FIFA 2012?`,
//     answers: [
//       {
//         answer: `Cássio`,
//         correct: true,
//       },
//       {
//         answer: `Paolo Guerrero`,
//         correct: false,
//       },
//       {
//         answer: `Romarinho`,
//         correct: false,
//       },
//       {
//         answer: `Chicão`,
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: `Quem fez o gol de cavadinha no primeiro jogo na final da Libertadores 2012`,
//     answers: [
//       {
//         answer: `Jádson`,
//         correct: false,
//       },
//       {
//         answer: `Romarinho`,
//         correct: true,
//       },
//       {
//         answer: `Roger Guedes`,
//         correct: false,
//       },
//       {
//         answer: `Guerrero`,
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: `Durante a incrível campanha de 2015, o Corinthians se tornou o time com mais pontos na história do Brasileirão de pontos corridos. Quantos pontos?`,
//     answers: [
//       {
//         answer: `90 pontos`,
//         correct: false,
//       },
//       {
//         answer: `77 pontos`,
//         correct: false,
//       },
//       {
//         answer: `80 pontos`,
//         correct: false,
//       },
//       {
//         answer: `81 pontos`,
//         correct: true,
//       },
//     ],
//   },
// ];

// // substituição do quizz para a primeira pergunta
// function init() {
//   // criar primeira pergunta
//   createQuestion(0);
// }

// // cria uma pergunta
// function createQuestion(i) {
//   // limpar questão anterior
//   const oldButtons = answerBox.querySelectorAll('button');
//   oldButtons.forEach((btn) => {
//     btn.remove();
//   });

//   // alterar texto da pergunta
//   const questionText = question.querySelector('#question-text');
//   const questionNumber = question.querySelector('#question-number');

//   questionText.textContent = questions[i].question;
//   questionNumber.textContent = i + 1;

//   // inserir alternativas
//   questions[i].answers.forEach((answer, i) => {
//     // cria template botão quizz
//     const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

//     const letterBtn = answerTemplate.querySelector('.btn-letter');
//     const answerText = answerTemplate.querySelector('.question-answer');

//     letterBtn.textContent = letters[i];
//     answerText.textContent = answer['answer'];

//     answerTemplate.setAttribute('correct-answer', answer['correct']);

//     // remover hide e template class
//     answerTemplate.classList.remove('hide');
//     answerTemplate.classList.remove('answer-template');

//     // inserir alternativa na tela
//     answerBox.appendChild(answerTemplate);

//     // inserir evento click no botão
//     answerTemplate.addEventListener('click', function () {
//       checkAnswer(this);
//     });
//   });

//   // incrementar o número da questão
//   actualQuestion++;
// }

// // verificar resposta do usuário
// function checkAnswer(btn) {
//   // seleciona todos os botões
//   const buttons = answerBox.querySelectorAll('button');

//   // verifica se resposta correta e add classe
//   buttons.forEach((button) => {
//     if (button.getAttribute('correct-answer') == 'true') {
//       button.classList.add('correct-answer');

//       // checa se usuário acertou a pergunta
//       if (btn === button) {
//         // incremento dos pontos
//         points++;
//       }
//     } else {
//       button.classList.add('wrong-answer');
//     }
//   });

//   // exibir próxima pergunta
//   nextQuestion();
// }

// // exibe a pŕoxima pergunta no quizz
// function nextQuestion() {
//   // timer para usuário ver as respostas
//   setTimeout(function () {
//     // verifica se ainda há perguntas
//     if (actualQuestion >= questions.length) {
//       // apresenta mensagem de sucesso
//       showSuccessMessage();
//       return;
//     }

//     createQuestion(actualQuestion);
//   }, 1200);
// }

// // exibe a tela final
// function showSuccessMessage() {
//   hideOrShowQuizz();

//   // trocar dados tela de sucesso
//   // calcular score
//   const score = ((points / questions.length) * 100).toFixed(2);

//   const displayScore = document.querySelector('#display-score span');
//   displayScore.textContent = score.toString();

//   //alterar o número de perguntas corretas
//   const correctAnswers = document.querySelector('#correct-answers');
//   correctAnswers.textContent = points;

//   // alterar o total de perguntas
//   const totalQuestions = document.querySelector('#questions-qty');
//   totalQuestions.textContent = questions.length;
// }

// // mostra ou esonde o score
// function hideOrShowQuizz() {
//   quizzContainer.classList.toggle('hide');
//   scoreContainer.classList.toggle('hide');
// }

// // reiniciar quizz
// const restartBtn = document.querySelector('#restart');
// restartBtn.addEventListener('click', function () {
//   //zerar jogo
//   actualQuestion = 0;
//   points = 0;
//   hideOrShowQuizz();
//   init();
// });

// // inicialização do quizz
// init();
