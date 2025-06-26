import express from 'express';

const app = express();

app.get('/espacos_disponiveis_coworking', (_req, res) => {
  const espacos = [
    {
      id_espaco: "CW_SALA_REUNIAO_A",
      nome_espaco: "Sala de Reunião 'Inspira'",
      tipo_espaco: "Sala de Reunião Privativa",
      capacidade_pessoas: 8,
      preco_hora: 75.00,
      disponibilidade_atual: true,
      recursos_inclusos: [
        "Projetor",
        "Quadro Branco",
        "Wi-Fi Alta Velocidade",
        "Café e Água"
      ]
    },
    {
      id_espaco: "CW_MESA_COMP_05",
      nome_espaco: "Mesa Compartilhada #05",
      tipo_espaco: "Mesa em Ambiente Compartilhado",
      capacidade_pessoas: 1,
      preco_hora: 20.00,
      disponibilidade_atual: false,
      recursos_inclusos: [
        "Wi-Fi Alta Velocidade",
        "Acesso a Copa"
      ]
    }
  ];

  res.json(espacos);
});

export default app;
