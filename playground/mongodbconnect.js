//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db) => {
if (err)
{
return console.log('Unable to connect to Mongo DB Server');
}
console.log('Connected to Mongo DB Server');

// db.collection('Todos').insertOne({
//   text: 'Coding on late night',
//   completed: false
// }, (err, result) =>{
// if (err) {
//   return console.log('Unable to insert To do', err);
//
// }
//
// console.log(JSON.stringify(result.ops, undefined, 2));
// })

// db.collection('Users').insertOne({
// name: 'Hamza Naveed',
// age:27,
// location: 'London'
//
// }, (err, result)=>{
//   if(err){return console.log('Couldnt add into users collection', err);}
//   console.log(result.ops[0]._id.getTimestamp());
//
// });


db.close();
});
