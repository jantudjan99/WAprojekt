import express from 'express';
import connect from './db.js';
import cors from 'cors';
import mongo from 'mongodb';

const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

app.get('/', async (req,res) => {
    res.send("lol")
})

app.post ('/dogadaji', async (req , res) => {
    let db = await connect();

    let dogadaji = req.body;
    console.log(dogadaji);

    delete dogadaji._id;

    let result = await db.collection('dogadaji').insertOne(dogadaji);
    if (result.insertedCount == 1) {
        res.send({
            status: 'success',
            id: result.insertedId,
        });
    } 
    else {
        res.send({
            status: 'fail',
        });
    }
    
    console.log(result);
});

app.post("/dogadaji/delete/:imeIgre", async (req, res) => {
	let ime = req.params.imeIgre;
	console.log(ime);

	let db = await connect();
	let result = await db.collection("dogadaji").deleteOne({ imeIgre: ime });

	if (result && result.deletedCount == 1) {
		res.json(result);
	} else {
		res.json({
			status: "fail",
		});
	}
});

app.get ('/dogadaji', async (req , res) => {
    let db = await connect();

    let cursor = await db.collection('dogadaji').find({});
    let results = await cursor.toArray();
    
    res.json(results);
});

app.get ('/dogadaji/:id', async (req , res) => {
    let id = req.params.id;
    let db = await connect();
    
    console.log(req.params);
    let doc = await db.collection("dogadaji").findOne({_id: mongo.ObjectId(id)});
    console.log(doc)
    res.json(doc)
});

   
app.listen(port, () => console.log(`Slušam na portu ${port}!`))