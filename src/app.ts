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
    },
    {
      id_espaco: "CW_SALA_PRIVATIVA_B",
      nome_espaco: "Sala Privativa 'Foco'",
      tipo_espaco: "Sala Privativa",
      capacidade_pessoas: 4,
      preco_hora: 50.00,
      disponibilidade_atual: true,
      recursos_inclusos: [
        "Ar-condicionado",
        "Cadeira Ergonômica",
        "Wi-Fi Alta Velocidade"
      ]
    },
    {
      id_espaco: "CW_MESA_COMP_06",
      nome_espaco: "Mesa Compartilhada #06",
      tipo_espaco: "Mesa em Ambiente Compartilhado",
      capacidade_pessoas: 1,
      preco_hora: 18.00,
      disponibilidade_atual: true,
      recursos_inclusos: [
        "Wi-Fi Alta Velocidade",
        "Tomada Individual"
      ]
    },
    {
      id_espaco: "CW_SALA_REUNIAO_C",
      nome_espaco: "Sala de Reunião 'Conecta'",
      tipo_espaco: "Sala de Reunião",
      capacidade_pessoas: 6,
      preco_hora: 65.00,
      disponibilidade_atual: false,
      recursos_inclusos: [
        "Monitor HDMI",
        "Wi-Fi Alta Velocidade",
        "Café e Água"
      ]
    },
    {
      id_espaco: "CW_MESA_COMP_07",
      nome_espaco: "Mesa Compartilhada #07",
      tipo_espaco: "Mesa em Ambiente Compartilhado",
      capacidade_pessoas: 1,
      preco_hora: 20.00,
      disponibilidade_atual: true,
      recursos_inclusos: [
        "Wi-Fi Alta Velocidade",
        "Luminária de Mesa"
      ]
    },
    {
      id_espaco: "CW_SALA_PRIVATIVA_D",
      nome_espaco: "Sala Privativa 'Concentra'",
      tipo_espaco: "Sala Privativa",
      capacidade_pessoas: 2,
      preco_hora: 45.00,
      disponibilidade_atual: true,
      recursos_inclusos: [
        "Cadeira Ergonômica",
        "Escrivaninha",
        "Wi-Fi Alta Velocidade"
      ]
    },
    {
      id_espaco: "CW_SALA_REUNIAO_E",
      nome_espaco: "Sala de Reunião 'Colabora'",
      tipo_espaco: "Sala de Reunião",
      capacidade_pessoas: 10,
      preco_hora: 90.00,
      disponibilidade_atual: true,
      recursos_inclusos: [
        "TV Smart 50''",
        "Conferência Online",
        "Café e Água"
      ]
    },
    {
      id_espaco: "CW_ESCRITORIO_VIRTUAL",
      nome_espaco: "Escritório Virtual",
      tipo_espaco: "Serviço Virtual",
      capacidade_pessoas: 0,
      preco_hora: 10.00,
      disponibilidade_atual: true,
      recursos_inclusos: [
        "Recebimento de Correspondência",
        "Endereço Comercial",
        "Atendimento Telefônico"
      ]
    },
    {
      id_espaco: "CW_MESA_COMP_08",
      nome_espaco: "Mesa Compartilhada #08",
      tipo_espaco: "Mesa em Ambiente Compartilhado",
      capacidade_pessoas: 1,
      preco_hora: 19.50,
      disponibilidade_atual: false,
      recursos_inclusos: [
        "Wi-Fi Alta Velocidade",
        "Acesso à Impressora"
      ]
    }
  ];

  res.json(espacos);
});


export default app;
