const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilização de páginas web",
        "Uma linguagem de programação para desenvolvimento de aplicativos móveis",
        "Uma linguagem de programação para tornar páginas web dinâmicas",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 5;",
        "variável myVar = 5;",
        "let myVar = 5;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas: [
        "5",
        "32",
        "6",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita (valor e tipo)",
        "Atribuição",
        "Comparação solta (apenas valor)",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é chamada no início do código",
        "Uma função que é passada como argumento para outra função e executada posteriormente",
        "Uma função que retorna outro valor além de undefined",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de selecionar um elemento HTML com o id 'myElement' em JavaScript?",
      respostas: [
        "document.getElementByClass('myElement')",
        "document.getElement('myElement')",
        "document.getElementById('myElement')",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Order Model - Modelo de ordem de documento",
        "Data Object Model - Modelo de objeto de dados",
        "Document Object Model - Modelo de objeto de documento",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário de linha única",
        "/* Este é um comentário de linha única */",
        "# Este é um comentário de linha única",
      ],
      correta: 0
    },
    {
      pergunta: "Como se chama o método que é chamado automaticamente quando um objeto é criado em JavaScript?",
      respostas: [
        "start()",
        "create()",
        "constructor()",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o conceito de escopo em JavaScript?",
      respostas: [
        "O número total de linhas de código em um arquivo JavaScript",
        "A área de código onde uma variável pode ser acessada",
        "O tempo de execução de um programa JavaScript",
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
 