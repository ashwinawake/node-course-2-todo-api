// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

// Insert new doc into Users (name, age, location)

db.collection('Users').insertOne({
  name: 'Ashwin',
  age: 29,
  location: 'Denver, CO',
}, (err, result) => {
  if (err) {
    console.log('Unable to connect to database.');
  }

  console.log('Successfully connected to database.');
  console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
});
  client.close();
});
