//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
//
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db) => {
if (err)
{
return console.log('Unable to connect to Mongo DB Server');
}
console.log('Connected to Mongo DB Server');



// db.collection('Todos').find().count().then((count)=>{
//   console.log(`Todos Count ${count}`);
//   console.log(JSON.stringify(count, undefined, 2));
// },(err)=> {
//   console.log('Unable to fetch Todos',err);
//
// });
//

db.collection('Users').find({
  location: 'London'
}).toArray().then((docs)=>{
  console.log('Printing all people in London');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err)=> {
  console.log('Unable to fetch data from the DB');
});

//db.close();
});
