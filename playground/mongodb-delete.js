const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }
        console.log('Connected to mongodb server');
        const db = client.db('TodoApp');

        //delete Many
        db.collection('Todos').deleteMany({text:'something to do'}).then(((result)=>{
            console.log(result);
        }));
    
        db.collection('Users').deleteMany({name:'XYZ'}).then(((result)=>{
            console.log(result);
        }));

        //delete One
        db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
            console.log(result);
        });

        //find one and delete
        db.collection('Todos').findOneAndDelete({text:'Eat lunch'}).then((result)=>{
            console.log(result);
        });
    //client.close();
});