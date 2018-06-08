const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }
        console.log('Connected to mongodb server');
        const db = client.db('TodoApp');
        db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
        },(err)=>{
            console.log('Unable to fetch ',err);
        });
    //client.close();
});