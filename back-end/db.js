// const axios = require('axios');
const knex = require('knex');

//CONNECTION WITH PG
const db = knex({
    client: 'pg',
    connection: {
      host : "arjuna.db.elephantsql.com",
      port : '5432',
      user:"uxmohmcw",
      password : 'pYIaSAvA2JFfhv2UkeKF2I4aWdfP51-1',
      database : 'uxmohmcw',
    },
  });
  module.exports = db;

//INSERTS
// axios.get(imageUrl2, { responseType: 'arraybuffer' })
//   .then(response => {
//     // Convert binary image data to hexadecimal
//     const binaryImageData2 = Buffer.from(response.data).toString('hex');

//     // Insert the image data into the database
//     db("selected_characters")
//       .insert({
//         username: "Darth Vader",
//         image_column: binaryImageData2
//       })
//       .then(data => {
//         console.log("Image data inserted successfully");
//       })
//       .catch(err => {
//         console.error("Error inserting image data:", err);
//       });
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

//SELECT
// db.raw("select *from characters")
// db.select("*")
// .from("characters")
// .then((rows) =>{
//     console.log("rows=>",rows)
// })
// .catch((e) =>{
//  console.log(e);
// });


//  ////select one item
// // db.raw("select * from characters where id = 1").then((data) =>{
// //     console.log("rows=>", data.rows);
// // })

// ////select two items
// // db.raw("select * from characters where id >= ?",[2]).then((data) =>{
// //     console.log("rows=>", data.rows);
// // })

//delete
// db("characters")
// .where({id:1})
// .del()
// .returning(["username","image_column"])
// .then((data) =>{
//     console.log(data);
// })
// .catch((err) =>{
//     console.log(err);
// });


// ///update
// // db("characters")
// // .update({ price:444})
// // .where({id:3})
// // .then((data) =>{
// //     console.log(data);
// // })
// // .catch((err) =>{
// //     console.log(err);
// // })