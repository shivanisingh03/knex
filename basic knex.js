// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Shivi@123",
// });


// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// // create databases;

// con.query("CREATE DATABASE k_n", function (err, result) {
//     if (err){
//         console.log("Database created");
//     }
//     else{
//         console.log("Database already created");
//     }
//   });



// const knex=require("knex")({

//   client: 'mysql',
//   connection: {
//       host: '127.0.0.1',
//       user: 'root',
//       password: 'Shivi@123',
//       database: 'k_n'
//   }
// })

// // CREATE TABLES

// knex.schema.createTable('knex_user', function (table) {
//   table.increments('id');
//   table.string('name');
//   table.string("password");
// }).then(()=>{
//   console.log("table created")
// })
// .catch((err)=>{
//   console.log(err)
// })




// // INSERT DATA

// const data = [
//   { name: 'Audi', password: 52642 },
//   { name: 'Mercedes', password: 57127 },
//   { name: 'Skoda', password: 9000 },
//   { name: 'Volvo', password: 29000 },
//   { name: 'Bentley', password: 350000 },
//   { name: 'Citroen', password: 21000 },
//   { name: 'Hummer', password: 41400 },
//   { name: 'Volkswagen', password: 21600 },
// ]

// knex('knex_user').insert(data).then(() => console.log("data inserted"))
//   .catch((err) => { console.log(err); throw err })



// // DROP TABLE

// // function drop_table() {
//   knex.schema.hasTable("knex_user").then(function (exists) {
//     if (exists) {
//       console.log({ Success: `users table deleted successfully.` });
//       return knex.schema.dropTable("knex_user");
//     } else {
//       console.log({ Sorry: `users table not found.` });
//     }
//   });
// // }
