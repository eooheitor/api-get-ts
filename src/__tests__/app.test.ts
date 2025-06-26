import request from 'supertest';
import app from '../app';

describe('GET /espacos_disponiveis_coworking', () => {
  it('deve retornar status 200 e uma lista de espaços', async () => {
    const response = await request(app).get('/espacos_disponiveis_coworking');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toHaveLength(2);
  });

  it('o segundo espaço deve estar indisponível (disponibilidade_atual: false)', async () => {
    const response = await request(app).get('/espacos_disponiveis_coworking');
    const segundoEspaco = response.body[1];

    expect(segundoEspaco.disponibilidade_atual).toBe(false);
    expect(segundoEspaco.nome_espaco).toBe("Mesa Compartilhada #05");
  });
});
