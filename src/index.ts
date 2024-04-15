import { Model } from 'objection';
import { app } from './app';
import Knex from 'knex';
import knexConfig from './knexfile';


const start = async () => {
    try {

      // Initialize knex.
        const connectionDb = Knex(knexConfig.development)

        // Bind all Models to a knex instance. If you only have one database in
        // your server this is all you have to do. For multi database systems, see
        // the Model.bindKnex() method.
        Model.knex(connectionDb)

        // Inicia el servidor
        app.listen(8060, () => {
          console.log('Listening on port 8060!!');
        });
      } catch (error) {
        console.error('Error connecting to database:', error);
      }
};

start();
