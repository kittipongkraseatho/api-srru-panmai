module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '103.13.229.230'),
        port: env.int('DATABASE_PORT', 1340),
        database: env('DATABASE_NAME', 'admin_panmai'),
        username: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', 'wandeevps'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
