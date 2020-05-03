export function loadLists() {
  return {
    project: {
      title: 'Tarefas pra fazer durante a semana',
      lists: [
        {
          title: 'Tarefas',
          description: 'Tarefas a serem feitas durante essa semana',
          creatable: true,
          cards: [
            {
              id: 1,
              content: 'Desenvolver bot para Telgram',
              description: null,
              labels: ['#7159c1'],
            },
            {
              id: 2,
              content:
                'Estudar sobre async/await no javascript no canal do dev pleno no youtube',
              description: 'Aprimorar conhecimentos',
              labels: ['#7159c1'],
            },
            {
              id: 3,
              content:
                'Fazer a semana omnistack 7.0 - Criando um clone do Instagram',
              description: 'Fazer hoje',
              labels: ['#7159c1'],
            },
            {
              id: 4,
              content:
                'Estudar mais sobre programação orientada a objeto com PHP e MySQL na Udemy',
              description: null,
              labels: ['#54e1f7'],
            },
            {
              id: 5,
              content: 'Realizar testes e deploy ReactJS',
              description: null,
              labels: ['#54e1f7'],
            },
          ],
        },
        {
          title: 'Fazendo',
          description: 'Tarefas que a equipe está trabalhando atualmente',
          creatable: false,
          cards: [
            {
              id: 6,
              content: 'Recriando clone do Pipefy',
              description: 'Novo projeto',
              labels: [],
            },
          ],
        },
        {
          title: 'Pausado',
          description: 'Aqui ficarão as tarefas paradas',
          creatable: false,
          cards: [
            {
              id: 7,
              content: 'Criar chat em tempo real com node.js e socket.io',
              description: 'Chat de sala privada',
              labels: ['#7159c1'],
            },
            {
              id: 8,
              content: 'Atualizar chatbot feito em python',
              description: 'Bug a ser corrigido',
              labels: ['#54e1f7'],
            },
            {
              id: 9,
              content: 'Ajustes na biblioteca unform',
              description: 'Ajustes e testes',
              labels: [],
            },
          ],
        },
        {
          title: 'Concluído',
          description: 'Tarefas concluídas com sucesso!',
          creatable: false,
          done: true,
          cards: [
            {
              id: 10,
              content: 'Gravar video aulas de React.js no youtube',
              description: 'Ensinar sobre props e components',
              labels: [],
            },
            {
              id: 12,
              content: 'Finalizar projeto de e-commerce',
              description: null,
              labels: ['#54e1f7'],
            },
            {
              id: 13,
              content:
                'Atualizar feature de carrinho e checkout do projeto de e-commerce',
              description: 'Bugs a serem corrigidos com urgência',
              labels: ['#7159c1'],
            },
          ],
        },
      ],
    },
  };
}
