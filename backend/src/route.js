
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.post('/incidents',IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);



module.exports = routes; // para exportar as variaveis

// Primeira fase

// const express = require('express');
// const crypto =require('crypto');
// const connection = require('./database/connection'); // importa o ficheiro da conexão com a base de dados
// const routes = express.Router();

// routes.get('/ongs',async (request,response)=>{
//     const ongs = await connection('ongs').select('*');


//     return response.json(ongs);
// })
// routes.post('/ongs',async(request,response)=>{
//     const {name, email, whatsapp, city,uf} = request.body;

//     const id = crypto.randomBytes(4).toString('HEX');

//     try{
//     await connection('ongs').insert ({
//         id,
//         name,
//         email,
//         whatsapp,
//         city,
//         uf,
//     })
//     }
//     catch (err)
//     {
//         console.log(err);
//     }
  


//     return response.json({id});

// });

// module.exports = routes; // para exportar as variaveis