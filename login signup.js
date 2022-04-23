// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Shivi@123",

// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
  
// con.query("CREATE DATABASE login_singup", function (err, result) {
//     if (err){
//     console.log(" notDatabase created");
//     }else{
//         console.log("database creted")
//     }
// }); 

// const knex=require("knex")({

//   client: 'mysql',
//   connection: {
//       host: '127.0.0.1',
//       user: 'root',
//       password: 'Shivi@123',
//       database: 'login_singup'
//   }
// })



const knex = require('knex')({
  client: 'mysql',
  connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'Shivi@123',
      database: 'login_singup'
  }
})




  // knex.schema.createTable('login_tables', (table) => {
  //   table.increments("id")  
  //   table.string('username')
  //     table.string('password')
  //     table.string("email")
  //   }).then(() => console.log("table created"))
  //     .catch((err) => { console.log("already created")})


const request=require("readline-sync")
var user=request.question("enter a signup or login : ")
if (user=="signup"){
var Username = request.question("enter the username :");
var Password = request.question("enter the password :");
var Email= request.question("enter your email :");
const cars = [
  { username:Username,password:Password ,email:Email},
]

knex('login_tables').insert(cars)
.then(() => console.log("signup successfully ","data inserted"))
  .catch((err) => { console.log("already inserted") })
}




else{
  if(user == "login"){
  var Password = request.question("enter your password :");
  var Email= request.question("enter a your email :");

  knex.from('login_tables').select("*")
  .then((results) => {
    var found=results.find(function(user){   
      if (user.password==Password && user.email==Email ){
          return user
      }
    })
      if (found){

        console.log("login successfully")
        }else{
            console.log('User not found')
        }
})
  .catch((err)=>{
    console.log(err)
  
})
}           
}

