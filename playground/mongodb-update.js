const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }
        console.log('Connected to mongodb server');
        const db = client.db('TodoApp');

        // db.collection('Todos').findOneAndUpdate(
        //     {
        //         _id : new ObjectID('5b1bf28274403daf8540ba94')
        //     },
        //     {
        //         $set: {
        //             completed : true
        //         }
        //     },{
        //         returnOriginal : false
        //     }).then((result) => {
        //         console.log(result);
        //     });

            db.collection('Users').findOneAndUpdate(
                {
                    _id : new ObjectID("5b1bf1b774403daf8540ba64")
                },
                {
                    $set: {
                        name : 'Jen'
                    },
                    $inc:{
                        age: 1
                    }
                },
                {
                    returnOriginal : false
                }).then((result) => {
                    console.log(result);
                });

    //client.close();
});

