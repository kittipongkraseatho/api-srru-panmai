module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      // settings: {
      //   client: 'mysql',
      //   host: env('DATABASE_HOST', '127.0.0.1'),
      //   port: env.int('DATABASE_PORT', 3306),
      //   database: env('DATABASE_NAME', 'srru-panmai'),
      //   username: env('DATABASE_USERNAME', 'root'),
      //   password: env('DATABASE_PASSWORD', ''),
      //   ssl: env.bool('DATABASE_SSL', false),
      // },
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-3-218-47-9.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'dbr36g6rs5rhto'),
        username: env('DATABASE_USERNAME', 'wurvrvirjnqwls'),
        password: env('DATABASE_PASSWORD', '72b8e21d4727777a00c3a583fc057421cfd1338b6f9c84ff86481fbd15aab292'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {}
    },
  },
});
