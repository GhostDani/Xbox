const perguntas = [
  {
    pergunta: "Qual foi o ano de lançamento do primeiro console Xbox?",
    respostas: [
      "2000",
      "2001",
      "2002"
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o fabricante do console Xbox?",
    respostas: [
      "Nintendo",
      "Microsoft",
      "Sony"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do serviço de assinatura da Microsoft que inclui acesso a jogos do Xbox?",
    respostas: [
      "Xbox Gold",
      "Xbox Live",
      "Xbox Game Pass"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do primeiro console da série Xbox?",
    respostas: [
      "Xbox 360",
      "Xbox One",
      "Xbox"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do sensor de movimento lançado pela Microsoft para o Xbox 360?",
    respostas: [
      "Xbox Kinect",
      "Xbox Move",
      "Xbox Vision"
    ],
    correta: 0
  },
  {
    pergunta: "Qual jogo é um dos principais títulos da franquia 'Halo', exclusiva do Xbox?",
    respostas: [
      "Uncharted",
      "Gears of War",
      "Halo"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do serviço de jogos em nuvem da Microsoft, disponível para Xbox?",
    respostas: [
      "Xbox Cloud",
      "Xbox Cloud Gaming",
      "Xbox Stream"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do controle padrão do Xbox One?",
    respostas: [
      "Xbox Controller",
      "Xbox Elite Controller",
      "Xbox One Controller"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do serviço de streaming de vídeo da Microsoft disponível para Xbox?",
    respostas: [
      "Xbox Prime Video",
      "Xbox Netflix",
      "Xbox Media Center"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome da mais recente geração de consoles Xbox lançada pela Microsoft?",
    respostas: [
      "Xbox Series X",
      "Xbox One X",
      "Xbox Series S"
    ],
    correta: 0
  }
];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  
// loop ou laço de repetição
  for(const item of perguntas){
  

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
            if(estaCorreta){
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
  