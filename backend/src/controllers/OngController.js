
const crypto =require('crypto');
const connection = require('../database/connection'); // importa o ficheiro da conexão com a base de dados

module.exports = {
    async create(request, response){
        const {name, email, whatsapp, city,uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        try{
            await connection('ongs').insert ({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            })
        }
        catch (err)
        {
            console.log(err);
        }
        return response.json({id});
    },
        async index (request,response){
        const ongs = await connection('ongs').select('*');
            
            
        return response.json(ongs);
    }
    

};