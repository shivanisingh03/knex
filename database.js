var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shivi@123",
  database:"nav"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// con.query("CREATE DATABASE nav", function (err, result) {
//     if (err){
//     console.log("Database not created");
//     }else{
//     console.log("Database created")
//     }
// });


// var sql = "CREATE TABLE nav1 (name VARCHAR(255), class VARCHAR(255))";
// con.query(sql, function (err, result) {
//   if (err){
//   console.log("Table not created");
//   }else{
//     console.log("Table created");

//   }
// });





// var sql = "INSERT INTO nav1 (name, class) VALUES ('shivani singh', 'second year (B.A)')";
//     con.query(sql, function (err, result) {
//       if (err){
//       console.log("not done");
//       }else{
//         console.log("done");
//       }
//     });
  





