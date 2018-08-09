const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

//delete many

  db.collection('Todos').findOneAndDelete({ _id : new ObjectID("5b62492ec7e27c5f54f63f85")}).then((result) => {
    console.log(result);
  });

//delete one


//find one and delete


//client.close();
});
