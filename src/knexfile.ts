
const knexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5510,
      user: 'postgres',
      password: 'passwordDB',
      database: 'ts-objection-knex'
    },
    

    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },

    pool: {
      min: 2,
      max: 10,
    },
  }
}

export default knexConfig;
