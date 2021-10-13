 module.exports = {
    apps: [
      {
        name: 'api-panmai',
        script: 'server.js',
        args: 'start',
        exec_mode: 'cluster',
        instances: '1', // Or a number of instances
     
      },
    ],
  };