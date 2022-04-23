var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shivi@123",
  // database:"n_k"
});

con.connect(function(err) {
  if (err);
  console.log("Connected!");
});


    con.query("DROP DATABASE sys", function (err, result) {
      if (err){
      console.log("Database not created");
      }else{
          console.log("Database created")
      }
});





// const knex=require("knex")({

//     client: 'mysql',
//     connection: {
//         host: '127.0.0.1',
//         user: 'root',
//         password: 'Shivi@123',
//         database: 'n_k'
//     }
  
//   })
//   // CREATE TABLES
//   knex.schema.createTable('knex_user', function (table) {
//     table.increments("id");
//     table.string('name');
//     table.string("password");
//   }).then(()=>{
//     console.log("table created")
//   })
//   .catch((err)=>{
//     console.log(err)
//   })