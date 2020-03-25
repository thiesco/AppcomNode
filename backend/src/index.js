const express = require('express');
const cors = require('cors');
const routes = require('./route');


const app = express();

app.use(cors());//app.use(cors(origin: 'http//meuapp.com')); para caso de ambiente de produção
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Rota /Recurso
 */

 /**
  * Get: Buscar/Listar uma informação do back-end
  * Post: Criar uma informação no back-end
  * Put: Alterar uma informação no back-end
  * Delete: Deletar uma informação no back-end
  *  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros,Paginação)
   * Route Params: Parâmetros utilizados para indentificar recusros
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */


   /**
    * Sql: MySql, SQLite, PostgreSQL, Orocle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB,etc
    */


    /**
     * Driver: SELECT * FROM users
     * Query Builder: table(users').select('*').where  (Query em javascript)
     */


