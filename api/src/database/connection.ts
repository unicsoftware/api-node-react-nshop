const knex = require('knex')({
    client: 'mysql',
    connection: {
      port : 3306,
      host: 'usiehml.mysql.dbaas.com.br',
      user: 'usiehml',
      password: 'q1aw2se3dr4f',
      database: 'usiehml'  
    }
  });
module.exports = knex