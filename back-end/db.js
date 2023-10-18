const axios = require('axios');
const knex = require('knex');
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
  //URLS
// const imageUrl1 = 'https://vignette.wikia.nocookie.net/starwars/images/4/49/Lukeportrait.jpg/revision/latest?cb=20151221055502&path-prefix=ro';
const imageUrl2 = 'https://wallpapercave.com/wp/wp5825056.jpg';


//INSERT
axios.get(imageUrl2, { responseType: 'arraybuffer' })
  .then(response => {
    // Convert binary image data to hexadecimal
    const binaryImageData2 = Buffer.from(response.data).toString('hex');
    // Insert the image data into the database
    db("characters")
      .insert({
        username: "Darth Vader",
        image_column: binaryImageData2
      })
      .then(data => {
        console.log("Image data inserted successfully");
      })
      .catch(err => {
        console.error("Error inserting image data:", err);
      });
  })
  .catch(error => {
    console.error('Error:', error);
  });

// //select
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
// // db.raw("select * from products where id = 1").then((data) =>{
// //     console.log("rows=>", data.rows);
// // })
// ////select two items
// // db.raw("select * from products where id >= ?",[2]).then((data) =>{
// //     console.log("rows=>", data.rows);
// // })
// ////delete
// // db("products")
// // .where({id:3})
// // .del()
// // .returning(["id","price","name"])
// // .then((data) =>{
// //     console.log(data);
// // })
// // .catch((err) =>{
// //     console.log(err);
// // });
// //insert
// db("characters ")
// .insert([
//     {username:"Luke Skywalker",},
//     {image_column:"binaryImageData1", }
// ])
// .then((data) =>{
//     console.log(data);
// })
// .catch((err) =>{
//     console.log(err);
// });
// ///updata
// // db("products")
// // .update({ price:444})
// // .where({id:3})
// // .then((data) =>{
// //     console.log(data);
// // })
// // .catch((err) =>{
// //     console.log(err);
// // });