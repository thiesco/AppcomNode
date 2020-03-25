const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;
        
        const [count] = await connection('incidents').count();//[count] toma o valor da primeira posição da areia
        
        // console.log(count);

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page -1) * 5)
        .select('incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf');

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents)
    },

    async create(request, response)
    {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization; //dados sobre o idioma localização, autenticação
   try{

            const [id] = await connection('incidents').insert(
                {
                    title,
                    description,
                    value,
                    ong_id,
                });
            return response.json({id});
        }
        catch (err)
        {
            console.log(err);
        }
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id',id)
        .select('ong_id')
        .first();
        
            if(incident.ong_id != ong_id)
            {
                return  response.status(401).json({ error: 'Operation not permited'});
            }

            await connection('incidents').where('id',id).delete();

            return response.status(204).send();
            
        }
    };