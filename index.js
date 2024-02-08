const perguntas = [
    {
      pergunta: "Quem foi o líder da Alemanha durante a Segunda Guerra Mundial?",
      respostas: [
        "a) Winston Churchill",
        "b) Joseph Stalin",
        "c) Adolf Hitler",
      ],
      correta: 2
    },
    {
      pergunta: "Qual evento marcou o início da Segunda Guerra Mundial na Europa?",
      respostas: [
        "a) Ataque japonês a Pearl Harbor",
        "b) Invasão da Polônia pela Alemanha",
        "c) Bombardeio de Londres",
      ],
      correta: 1
    },
    {
      pergunta: "Qual país foi o primeiro a usar bombas nucleares durante a Segunda Guerra Mundial?",
      respostas: [
        "a) Alemanha",
        "b) União Soviética",
        "c) Estados Unidos",
      ],
      correta: 2
    },
    {
      pergunta: "Qual foi a estratégia de invasão alemã conhecida como 'guerra relâmpago'?",
      respostas: [
        "a) Guerra Total",
        "b) Blitzkrieg",
        "c) Operação Barbarossa",
      ],
      correta: 1
    },
    {
      pergunta: "Qual foi a data do Dia D?",
      respostas: [
        "a) 6 de junho de 1944",
        "b) 7 de dezembro de 1941",
        "c) 1º de setembro de 1939",
      ],
      correta: 0
    },
    {
      pergunta: "Quem era o líder dos Estados Unidos durante a maior parte da Segunda Guerra Mundial?",
      respostas: [
        "a) Franklin D. Roosevelt",
        "b) Harry S. Truman",
        "c) Dwight D. Eisenhower",
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi o último país a se render, efetivamente encerrando a Segunda Guerra Mundial?",
      respostas: [
        "a) Alemanha",
        "b) Itália",
        "c) Japão",
      ],
      correta: 2
    },
    {
      pergunta: "Qual batalha foi um ponto de virada na Frente Oriental, onde os soviéticos infligiram uma derrota decisiva aos alemães?",
      respostas: [
        "a) Batalha de Stalingrado",
        "b) Batalha de Midway",
        "c) Batalha do Atlântico",
      ],
      correta: 0
    },
    {
      pergunta: "Qual país não foi invadido pela Alemanha durante a Segunda Guerra Mundial?",
      respostas: [
        "a) França",
        "b) Reino Unido",
        "c) Suíça",
      ],
      correta: 2
    },
    {
      pergunta: "O que foi o Holocausto?",
      respostas: [
        "a) Uma aliança militar entre Alemanha e Japão",
        "b) O genocídio de seis milhões de judeus",
        "c) Uma batalha decisiva entre EUA e Japão",
      ],
      correta: 1
    },
 ];
 
 const quiz = document.querySelector('#quiz')
 const template = document.querySelector('template')
    
 const corretas = new Set()
 const totalDePerguntas = perguntas.length
 const mostrarTotal = document.querySelector('#acertos span')
 mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
 
 
 // loop ou laço de repetição 
 for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
   
   for(let resposta of item.respostas){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
 
       corretas.delete(item)
       if (estaCorreta) {
         corretas.add(item)
       }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     } 
     
     
 
     quizItem.querySelector('dl').appendChild(dt)
   }
   
   quizItem.querySelector('dl dt').remove()
   
   // coloca a pergunta na tela 
   quiz.appendChild(quizItem)
 
 }
 