const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
require('dotenv').config();

//Require Cors
const cors = require('cors');
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

const uri = `mongodb+srv://abstract:${process.env.DB_PASSWORD}@abstract-cluster.vok37.mongodb.net/?retryWrites=true&w=majority&appName=abstract-cluster`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


const dbConnect = () => {
    const cardsCollection = client.db('abstract').collection('cards');

    //Get the cards from the database
    app.get('/cards', async (req, res) => {
        const query = {};
        const cards = await cardsCollection.find(query).toArray();
        res.send(cards);
    });
    //Save new cards from the database
    app.post('/cards', async (req, res) => {
        const newCard = req.body;
        const existingCard = await cardsCollection.findOne({ title: newCard.title });
        // Dont Save duplicate data
        if (existingCard) {
            return res.status(400).send({ message: "This card is already exists." });
        }
        const result = await cardsCollection.insertOne(newCard);
        res.send(result);
    });
    //Get single cards by title
    app.get('/cards/:title', async (req, res) => {
        const title = req.params.title;
        const query = {
            title: title
        };
        const card = await cardsCollection.find(query).toArray();
        if (card.length === 0) {
            return res.status(404).send({ message: "Card not found." });
        }
        res.send(card[0]);
    });
};

dbConnect();
//Default Route for test
app.get('/ping', (req, res) => {
    res.send('Abstract Server is Running....');
});

//Add a Listener to the app
app.listen(port, () => {
    console.log('Server Running on Port:', port);
});