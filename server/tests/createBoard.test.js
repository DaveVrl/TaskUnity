const request = require('supertest');
const app = require('../src/app'); // Asegúrate de importar tu aplicación Express correctamente
const { Boards } = require('../src/db');

describe('POST /board/:id', () => {
  it('debería crear un nuevo tablero y asignar el ID del usuario', async () => {
    const fakeUserId = 123; // ID simulado del usuario
    const newBoardData = {
      title: 'Nuevo Tablero',
      description: 'Descripción del nuevo tablero',
      logo: 'url_del_logo.png'
    };

    // Simular la solicitud HTTP POST a la ruta /board/:id con los datos del nuevo tablero
    const response = await request(app)
      .post(`/TaskUnity/board/${fakeUserId}`) // Agrega el ID simulado del usuario a la ruta
      .send(newBoardData);

    // Verificar si la solicitud fue exitosa (código de estado 200)
    expect(response.status).toBe(200);
    
    // Verificar si el nuevo tablero fue creado correctamente en la base de datos
    const createdBoard = await Boards.findByPk(response.body.id);
    expect(createdBoard).toBeDefined();
    expect(createdBoard.created_by).toBe(fakeUserId);

    //Visualizo que se asignó fakeID en created_by
    console.log(createdBoard.created_by);
  });
});