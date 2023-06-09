export default {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database: "dnd",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
