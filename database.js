// const { default: cli } = require('@angular/cli');
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
// const connect = db.connect()
const client = new MongoClient(url);


async function main() {
    await client.connect();
    console.log("mongodb connection is established");
    const db = client.db('nodejsPractice');
    const collection = db.collection('TableOne');
    //insert the data in the collection
    await collection.insertOne({

        "firstName": "abc",
        'lastName': "ubs",
        "city": "Mumbai",
        "phoneNumber": 9078563412
    });


    //get data form the same collection
    const data = await collection.find({}).toArray()
    console.log(data)
    return 'done.'
}

main().then(console.log).catch(console.log).finally(() => client.close());




// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/myDatabase')
//     .then(() => console.log("Connected to MongoDB"))
//     .catch(err => console.error("Connection error:", err)
//     );
